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
        <h2>Nouvelle réservation de voiture</h2>
        <p><strong>Voiture:</strong> ${formData.voiture}</p>
        <p><strong>Nom:</strong> ${formData.name}</p>
        <p><strong>Prénoms:</strong> ${formData.prenoms}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Téléphone:</strong> ${formData.phone}</p>
        <p><strong>Date:</strong> ${formData.date}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message || 'Aucun message'}</p>
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





