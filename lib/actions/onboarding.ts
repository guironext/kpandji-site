"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { prisma } from "../prisma";
import { UserRole } from "@/lib/generated/prisma";
import { resend, ADMIN_EMAIL } from "../resend";

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
    // Send email via Resend
    await resend.emails.send({
      from: 'Kpandji Offres <onboarding@resend.dev>',
      to: [ADMIN_EMAIL],
      subject: `Nouvelle Offre Spéciale`,
      html: `
        <h2>Nouvelle demande d'offre spéciale</h2>
        <p><strong>Nom:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Téléphone:</strong> ${formData.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    // Save to database
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
    // Send email via Resend
    await resend.emails.send({
      from: 'Kpandji Offres <onboarding@resend.dev>',
      to: [ADMIN_EMAIL],
      subject: `Nouvelle Offre Exceptionnelle - ${formData.vehicule}`,
      html: `
        <h2>Nouvelle demande d'offre exceptionnelle</h2>
        <p><strong>Véhicule:</strong> ${formData.vehicule}</p>
        <p><strong>Prix Promotionnel:</strong> ${formData.prixPromotionnel}</p>
        <p><strong>Remise:</strong> ${formData.remise}</p>
        <p><strong>Nom:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Téléphone:</strong> ${formData.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    // Save to database
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
    // Send email via Resend
    await resend.emails.send({
      from: 'Kpandji Factures <onboarding@resend.dev>',
      to: [ADMIN_EMAIL],
      subject: `Nouvelle Facture Proforma - ${formData.carName}`,
      html: `
        <h2>Nouvelle demande de facture proforma</h2>
        <p><strong>Voiture:</strong> ${formData.carName}</p>
        <p><strong>Nom:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Téléphone:</strong> ${formData.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    // Save to database
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
    // Send email via Resend
    await resend.emails.send({
      from: 'Kpandji Accessoires <onboarding@resend.dev>',
      to: [ADMIN_EMAIL],
      subject: `Nouvelle Commande Accessoire`,
      html: `
        <h2>Nouvelle commande d'accessoire</h2>
        <p><strong>Nom:</strong> ${formData.nom}</p>
        <p><strong>Prénom:</strong> ${formData.prenom}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Téléphone:</strong> ${formData.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    // Save to database
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