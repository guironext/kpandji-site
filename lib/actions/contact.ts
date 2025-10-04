"use server";

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";

export async function createContact(formData: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  try {
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
