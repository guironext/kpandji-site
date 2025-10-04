"use server";

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { resend, ADMIN_EMAIL } from "../resend";

export async function createReservation(formData: {
  voiture: string;
  name: string;
  prenoms: string;
  email: string;
  phone: string;
  date: string;
  message?: string;
}) {
  try {
    // Send email via Resend
    await resend.emails.send({
      from: 'Kpandji Reservations <onboarding@resend.dev>',
      to: [ADMIN_EMAIL],
      subject: `Nouvelle Réservation: ${formData.voiture}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <h2 style="color: #f59e0b; border-bottom: 3px solid #f59e0b; padding-bottom: 10px;">Nouvelle réservation de voiture</h2>
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0; font-size: 18px; color: #f59e0b;"><strong>🚗 Voiture:</strong> ${formData.voiture}</p>
            <hr style="border: 1px solid #e5e7eb; margin: 15px 0;">
            <p style="margin: 10px 0;"><strong style="color: #374151;">Nom:</strong> ${formData.name}</p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Prénoms:</strong> ${formData.prenoms}</p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${formData.email}" style="color: #3b82f6;">${formData.email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Téléphone:</strong> <a href="tel:${formData.phone}" style="color: #3b82f6;">${formData.phone}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Date souhaitée:</strong> ${formData.date}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-left: 4px solid #f59e0b; border-radius: 4px;">
              <p style="margin: 0; color: #374151;"><strong>Message:</strong></p>
              <p style="margin: 10px 0 0 0; color: #6b7280;">${formData.message || 'Aucun message'}</p>
            </div>
          </div>
        </div>
      `,
    });

    // Save to database
    const reservation = await prisma.reservations.create({
      data: {
        voiture: formData.voiture,
        name: formData.name,
        prenoms: formData.prenoms,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        message: formData.message || "",
        status: "pending"
      }
    });

    revalidatePath("/");
    return { success: true, data: reservation };
  } catch (error) {
    console.error("Error creating reservation:", error);
    return { success: false, error: "Failed to create reservation" };
  }
}





