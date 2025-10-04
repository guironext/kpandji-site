"use server";

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";

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





