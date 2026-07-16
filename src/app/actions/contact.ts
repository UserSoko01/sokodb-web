"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es obligatorio."),
  email: z.string().email("El correo electrónico no es válido."),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Selecciona un servicio de interés."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
  privacy: z.literal("on", {
    error: "Debes aceptar el aviso de privacidad.",
  }),
  website: z.string().optional(),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

const fallbackErrorMessage =
  "No pudimos enviar tu mensaje en este momento. Por favor intenta nuevamente o escríbenos directamente a contacto@sokodb.com.mx.";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
    privacy: formData.get("privacy"),
    website: String(formData.get("website") || ""),
  };

  const result = contactSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: "Revisa la información del formulario.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpSecure = process.env.SMTP_SECURE === "true";
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!smtpHost || !smtpUser || !smtpPass || !toEmail || !fromEmail) {
    return {
      success: false,
      message: fallbackErrorMessage,
    };
  }

  const data = result.data;
  if (data.website?.trim()) {
    return {
      success: true,
      message:
      "Gracias por contactarnos. Hemos recibido tu mensaje y nuestro equipo se comunicará contigo a la brevedad."
    };
  }

  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeCompany = escapeHtml(data.company || "No especificada");
  const safePhone = escapeHtml(data.phone || "No especificado");
  const safeService = escapeHtml(data.service);
  const safeMessage = escapeHtml(data.message).replaceAll("\n", "<br />");

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `Nuevo contacto SokoDB - ${data.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>Nuevo mensaje desde el sitio web de SokoDB</h2>

          <p><strong>Nombre:</strong> ${safeName}</p>
          <p><strong>Correo:</strong> ${safeEmail}</p>
          <p><strong>Empresa:</strong> ${safeCompany}</p>
          <p><strong>Teléfono:</strong> ${safePhone}</p>
          <p><strong>Servicio de interés:</strong> ${safeService}</p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />

          <p><strong>Mensaje:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
      text: `
Nuevo mensaje desde el sitio web de SokoDB

Nombre: ${data.name}
Correo: ${data.email}
Empresa: ${data.company || "No especificada"}
Teléfono: ${data.phone || "No especificado"}
Servicio de interés: ${data.service}

Mensaje:
${data.message}
      `,
    });

    return {
      success: true,
      message:
        "Gracias por contactarnos. Hemos recibido tu mensaje y nuestro equipo se comunicará contigo a la brevedad.",
    };
  } catch {
    return {
      success: false,
      message: fallbackErrorMessage,
    };
  }
}