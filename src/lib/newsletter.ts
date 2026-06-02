// Client-seitige Newsletter-Anmeldung direkt an Brevos gehostetes Formular.
// Kein Server/API-Key nötig: Der sibforms-Endpoint ist öffentlich, Double-Opt-In
// regelt Brevo selbst. CORS wird per `mode: "no-cors"` umgangen; die Antwort ist
// dadurch opak (nicht auslesbar), der Erfolg wird optimistisch angenommen — die
// Brevo-Bestätigungsmail ist der eigentliche Check.
//
// Felder stammen aus dem Brevo-Form-Embed:
//   EMAIL                – Pflicht
//   OPT_IN=1             – Consent (per Klick + Datenschutz-Hinweis im Formular)
//   email_address_check  – Honeypot, muss leer bleiben
//   locale=de
const BREVO_FORM_ACTION =
  "https://7767271a.sibforms.com/serve/MUIFAJdIHYlmc6uGi6dZO4Y9zIUfDtuP1IgDlquSBtCqH5Lf2ntB-flBHIs8UgrMt81QTSOBIGL32jSP8xG4o8aUpgr77qLVWuUkIQSM8Fbk-UhkHl3Dssh3y6amiyE4jxVbCrs9QSuoUq6tUHPa7vvjxwPEvz_2g9VYn7IBol3hcLTJGzCULZmwZh6eWixFtskgByn7aPb4JdC1";

/**
 * Trägt die E-Mail in Brevo ein. Wirft nur bei echten Netzwerkfehlern; wegen
 * `no-cors` ist die Antwort opak, daher gilt „kein Fehler" als Erfolg.
 */
export async function subscribeToNewsletter(email: string): Promise<void> {
  const data = new URLSearchParams({
    EMAIL: email,
    OPT_IN: "1",
    email_address_check: "",
    locale: "de",
  });

  await fetch(BREVO_FORM_ACTION, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: data.toString(),
  });
}
