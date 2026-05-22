import { NextResponse } from "next/server";

type NewsletterPayload = {
  email?: unknown;
  vorname?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request): Promise<Response> {
  let body: NewsletterPayload;
  try {
    body = (await req.json()) as NewsletterPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Ungueltiger Request." },
      { status: 400 },
    );
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const vorname =
    typeof body.vorname === "string" ? body.vorname.trim() : undefined;

  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { ok: false, message: "Bitte gib eine gueltige E-Mail-Adresse an." },
      { status: 400 },
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listIdRaw = process.env.BREVO_LIST_ID;
  const listId = listIdRaw ? Number(listIdRaw) : undefined;

  if (!apiKey || !listId || Number.isNaN(listId)) {
    console.warn(
      "[newsletter] Brevo nicht konfiguriert (BREVO_API_KEY oder BREVO_LIST_ID fehlt).",
    );
    return NextResponse.json(
      {
        ok: false,
        message:
          "Newsletter-Service ist noch nicht konfiguriert. Bitte spaeter erneut versuchen.",
      },
      { status: 503 },
    );
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        attributes: vorname ? { VORNAME: vorname } : undefined,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (res.status === 204 || res.status === 201 || res.status === 200) {
      return NextResponse.json({ ok: true });
    }

    // 400 mit Code "duplicate_parameter" = bereits eingetragen
    const data = (await res
      .json()
      .catch(() => ({}))) as { code?: string; message?: string };

    if (data.code === "duplicate_parameter") {
      return NextResponse.json({
        ok: true,
        message: "Du bist bereits eingetragen.",
      });
    }

    console.error("[newsletter] Brevo Fehler:", res.status, data);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Anmeldung hat leider nicht geklappt. Bitte versuche es spaeter erneut.",
      },
      { status: 502 },
    );
  } catch (err) {
    console.error("[newsletter] Brevo Exception:", err);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Anmeldung hat leider nicht geklappt. Bitte versuche es spaeter erneut.",
      },
      { status: 502 },
    );
  }
}
