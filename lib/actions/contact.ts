"use server";

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { resend, ADMIN_EMAIL } from "../resend";

export async function createContact(formData: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  try {
    // Send email via Resend
    await resend.emails.send({
      from: 'Kpandji Contact <onboarding@resend.dev>',
      to: [ADMIN_EMAIL],
      subject: `Nouveau Contact: ${formData.subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Téléphone:</strong> ${formData.phone || 'Non fourni'}</p>
        <p><strong>Sujet:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "",
        subject: formData.subject,
        message: formData.message,
        status: "pending"
      }
    });

    revalidatePath("/");
    return { success: true, data: contact };
  } catch (error) {
    console.error("Error creating contact:", error);
    return { success: false, error: "Failed to send message" };
  }
}
