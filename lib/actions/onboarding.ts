"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { prisma } from "../prisma";
import { UserRole } from "@/lib/generated/prisma";

export async function createEmployee(
  department: string | undefined,
  clerkId: string,
  role: UserRole
) {
  try {
    const user = await (await clerkClient()).users.getUser(clerkId);

    if (!user || !user.firstName || !user.lastName) {
      throw new Error("User not found");
    }

    await (
      await clerkClient()
    ).users.updateUserMetadata(user.id, {
      publicMetadata: {
        onboardingCompleted: true,
        role: role,
      },
    });

    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        firstName: user.firstName,
        lastName: user.lastName,
        role: role,
        department: department,
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
}

export async function createOffreSpeciale(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    await prisma.offreSpeciale.create({
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error creating special offer:", error);
    return { success: false };
  }
}


// ... existing code ...

export async function createOffreExceptionnelle(formData: {
  vehicule: string;
  prixPromotionnel: string;
  remise: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    await prisma.offreExceptionelle.create({
      data: {
        vehicule: formData.vehicule,
        prixPromotionnel: formData.prixPromotionnel,
        remise: formData.remise,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error creating exceptional offer:", error);
    return { success: false };
  }
}

export async function createFactureProforma(formData: {
  carName: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    await prisma.factureProforma.create({
      data: {
        carName: formData.carName,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error creating facture proforma:", error);
    return { success: false };
  }
}

export async function createCommandeAccessoire(formData: {
  nom: string;
  prenom: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    await prisma.commandesAccessoires.create({
      data: {
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error creating accessory order:", error);
    return { success: false };
  }
}