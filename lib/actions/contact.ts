"use server";

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { resend, ADMIN_EMAIL, SENDER_EMAIL } from "../resend";

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
      from: `Kpandji Contact <${SENDER_EMAIL}>`,
      to: [ADMIN_EMAIL],
      subject: `Nouveau Contact: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <h2 style="color: #f59e0b; border-bottom: 3px solid #f59e0b; padding-bottom: 10px;">Nouveau message de contact</h2>
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong style="color: #374151;">Nom:</strong> ${formData.name}</p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${formData.email}" style="color: #3b82f6;">${formData.email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Téléphone:</strong> <a href="tel:${formData.phone}" style="color: #3b82f6;">${formData.phone || 'Non fourni'}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Sujet:</strong> ${formData.subject}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-left: 4px solid #f59e0b; border-radius: 4px;">
              <p style="margin: 0; color: #374151;"><strong>Message:</strong></p>
              <p style="margin: 10px 0 0 0; color: #6b7280;">${formData.message}</p>
            </div>
          </div>
        </div>
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
