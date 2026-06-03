# Deployment der Website

Automatischer Deploy bei jedem Push auf `main`:
GitLab-CI baut den statischen Next.js-Export in einem `node:20`-Container und
spiegelt ihn per FTP nach `www-kidgonet` (live). Konfiguration: `.gitlab-ci.yml`.

Läuft komplett auf dem **Docker-Instance-Runner (#3)**. Auf keinem Server wird
etwas installiert : Node und lftp kommen als Container-Images. Auf den
FTP-Webserver selbst braucht man keinen Zugang, nur die FTP-Zugangsdaten.

## Ablauf

1. Push auf `main` → GitLab startet die Pipeline.
2. **deploy:website** (`node:20`-Container, ein einziger Job): `pnpm install && pnpm build`
   → erzeugt `out/`, dann `lftp mirror` direkt aus demselben Job auf den Webserver.

Build und Deploy laufen bewusst in **einem** Job: So muss das große `out/`
(>100 MB optimierte Bilder) nicht als Artifact über den GitLab-Server
transferiert werden (das schlug mit `413 Request Entity Too Large` fehl). lftp
wird per `apt` im node-Image nachinstalliert. pnpm-Store und die optimierten
Bilder werden gecacht, damit Folge-Deploys nicht erneut ~4 min optimieren.

## Einmalige Einrichtung (alles in der GitLab-Oberfläche)

### 1. Docker-Instance-Runner #3 aktivieren

Settings → CI/CD → Runners. Runner **#3 (Instance, Executor docker)** ist aktuell
**pausiert** → auf den **Play-Button (▶)** klicken, damit er Jobs annimmt.

Als Instance-Runner steht er automatisch allen Projekten zur Verfügung : für das
Website-Projekt muss nichts zusätzlich zugewiesen werden. Sicherstellen, dass im
Projekt unter Settings → CI/CD → Runners die **"Instance runners"** aktiviert
sind (Standard).

### 2. CI/CD-Variablen anlegen

Settings → CI/CD → Variables. Jeweils **Protected** setzen (nur der geschützte
`main`-Branch sieht sie), Passwort zusätzlich **Masked**:

| Variable         | Beispiel             | Hinweis                          |
|------------------|----------------------|----------------------------------|
| `FTP_HOST`       | `ftp.kidgonet.de`    | nur Host, ohne `ftp://`          |
| `FTP_USER`       | `kdg2023_...`        | FTP-Benutzer                     |
| `FTP_PASS`       | `********`           | Masked                           |
| `FTP_TARGET_DIR` | `/www-kidgonet`      | Zielordner laut FTP-Client       |

Optionale Build-Variablen (falls die Seite sie zur Build-Zeit braucht):
`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GADS_ID`, `BREVO_API_KEY`, `BREVO_LIST_ID`.

### 3. `main` als Protected Branch

Settings → Repository → Protected branches → `main` schützen, damit die
Protected-Variablen greifen.

### 4. Pushen

`.gitlab-ci.yml` committen und nach `main` pushen → Pipeline startet, baut,
deployt. Den Verlauf live unter Build → Pipelines beobachten.

## Wichtig: `--delete` und Fremd-Ordner

`mirror --delete` entfernt auf dem Server alles, was **nicht** im frischen Build
liegt. Das hält `www-kidgonet` sauber (alte `out.zip`, `entzip.php` etc. fliegen
raus). Der separate Unterordner `/medienfuehrerschein` ist deshalb in
`.gitlab-ci.yml` per `--exclude-glob` ausgenommen und bleibt unangetastet.

## Fallback ohne Docker-Runner

Falls #3 mal nicht verfügbar ist, kann der Shell-Runner #8 (stg-frontend, hat
Node + pnpm) bauen. Dann müsste dort einmalig `lftp` installiert und die
`image:`/`before_script: apk`-Zeilen aus `.gitlab-ci.yml` entfernt werden.

## Manuell deployen (Notfall)

```bash
pnpm install --frozen-lockfile && pnpm build
lftp -c "open -u USER,PASS ftp.kidgonet.de; mirror -R --delete --exclude-glob medienfuehrerschein/ out/ /www-kidgonet"
```

## Aufräumen

Die manuellen Helfer `entzip.php` und `out.zip` werden vom automatischen Deploy
nicht mehr gebraucht und sollten vom Server entfernt werden.
