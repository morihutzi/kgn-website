"use server";

export type ContactFormState = {
  success: boolean;
  error?: string;
} | null;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return {
      success: false,
      error: "Bitte füllen Sie alle Pflichtfelder aus.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
    };
  }

  // TODO: E-Mail an info@kidgonet.de senden
  // z. B. via Resend, SendGrid oder SMTP:
  // await resend.emails.send({
  //   from: "Kidgonet Website <noreply@kidgonet.de>",
  //   to: "info@kidgonet.de",
  //   replyTo: email,
  //   subject: subject || `Presseanfrage von ${name}`,
  //   text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
  // });

  void subject; // wird nach TODO-Implementierung genutzt

  return { success: true };
}
