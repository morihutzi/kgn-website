/**
 * sftp-deploy.cjs — lädt out/ per SFTP (nativ, wie FileZilla) auf den Webserver.
 *
 * Nutzt ssh2-sftp-client (SSH-Bibliothek, kein externes ssh/sshpass/Terminal).
 * Passwort-Auth über Umgebungsvariablen.
 *
 * Env:
 *   FTP_HOST        z.B. dedi3215.your-server.de
 *   FTP_USER        z.B. kdg2023_1
 *   FTP_PASS        SFTP-Passwort
 *   FTP_TARGET_DIR  Zielordner, z.B. /www-kidgonet
 *   CHECK_ONLY=1    nur verbinden + Zielordner listen (kein Upload)
 *   MIRROR_DELETE=0 verwaiste Remote-Dateien NICHT löschen (Default: löschen)
 */

const path = require("path");
const fs = require("fs");
const Client = require("ssh2-sftp-client");

const HOST = process.env.FTP_HOST;
const USER = process.env.FTP_USER;
const PASS = process.env.FTP_PASS;
const TARGET = process.env.FTP_TARGET_DIR;
const PORT = Number(process.env.FTP_PORT || 22);
const LOCAL = path.resolve("out");
const CHECK_ONLY = process.env.CHECK_ONLY === "1";
const DO_DELETE = process.env.MIRROR_DELETE !== "0";

// Top-Level-Ordner, die NIE angefasst/gelöscht werden (separate Projekte).
const EXCLUDE_TOP = new Set(["medienfuehrerschein"]);

if (!HOST || !USER || !PASS || !TARGET) {
  console.error("Fehlende Env-Variablen: FTP_HOST/FTP_USER/FTP_PASS/FTP_TARGET_DIR");
  process.exit(1);
}

// Alle lokalen relativen Pfade (posix) unter out/ sammeln.
function walkLocal(dir, base = "") {
  const set = new Set();
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    set.add(rel);
    if (entry.isDirectory()) {
      for (const r of walkLocal(path.join(dir, entry.name), rel)) set.add(r);
    }
  }
  return set;
}

// Remote-Baum durchgehen und alles löschen, was lokal nicht (mehr) existiert.
async function pruneRemote(sftp, remoteDir, localSet, base = "") {
  let entries;
  try {
    entries = await sftp.list(remoteDir);
  } catch {
    return;
  }
  for (const e of entries) {
    if (base === "" && EXCLUDE_TOP.has(e.name)) continue;
    const rel = base ? `${base}/${e.name}` : e.name;
    const remotePath = `${remoteDir}/${e.name}`;
    if (e.type === "d") {
      if (!localSet.has(rel)) {
        console.log(`  - rmdir ${rel}`);
        await sftp.rmdir(remotePath, true);
      } else {
        await pruneRemote(sftp, remotePath, localSet, rel);
      }
    } else if (!localSet.has(rel)) {
      console.log(`  - del   ${rel}`);
      await sftp.delete(remotePath);
    }
  }
}

(async () => {
  const sftp = new Client();
  try {
    const connectConf = {
      host: HOST,
      port: PORT,
      username: USER,
      password: PASS,
      readyTimeout: 60000,
    };
    if (process.env.DEBUG_SFTP === "1") {
      connectConf.debug = (m) => console.log("[ssh2]", m);
    }
    await sftp.connect(connectConf);
    console.log(`Verbunden mit ${HOST}:${PORT} als ${USER}`);

    if (CHECK_ONLY) {
      const list = await sftp.list(TARGET);
      console.log(`Listing ${TARGET}: ${list.length} Einträge`);
      for (const e of list.slice(0, 25)) console.log(`  ${e.type} ${e.name}`);
      return;
    }

    if (!fs.existsSync(LOCAL)) {
      throw new Error(`Lokaler Ordner fehlt: ${LOCAL}`);
    }
    if (!(await sftp.exists(TARGET))) {
      await sftp.mkdir(TARGET, true);
    }

    console.log(`Upload ${LOCAL} -> ${TARGET} ...`);
    await sftp.uploadDir(LOCAL, TARGET);

    if (DO_DELETE) {
      console.log("Entferne verwaiste Remote-Dateien (medienfuehrerschein bleibt) ...");
      await pruneRemote(sftp, TARGET, walkLocal(LOCAL));
    }

    console.log("Deploy fertig.");
  } catch (err) {
    console.error("SFTP-Fehler:", err && err.message ? err.message : err);
    process.exitCode = 1;
  } finally {
    try {
      await sftp.end();
    } catch {
      /* ignore */
    }
  }
})();
