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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <h2 style="color: #10b981; border-bottom: 3px solid #10b981; padding-bottom: 10px;">🎁 Nouvelle demande d'offre spéciale</h2>
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong style="color: #374151;">Nom:</strong> ${formData.name}</p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${formData.email}" style="color: #3b82f6;">${formData.email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Téléphone:</strong> <a href="tel:${formData.phone}" style="color: #3b82f6;">${formData.phone}</a></p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-left: 4px solid #10b981; border-radius: 4px;">
              <p style="margin: 0; color: #374151;"><strong>Message:</strong></p>
              <p style="margin: 10px 0 0 0; color: #6b7280;">${formData.message}</p>
            </div>
          </div>
        </div>
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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <h2 style="color: #ef4444; border-bottom: 3px solid #ef4444; padding-bottom: 10px;">⚡ Nouvelle demande d'offre exceptionnelle</h2>
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0; font-size: 18px; color: #f59e0b;"><strong>🚗 Véhicule:</strong> ${formData.vehicule}</p>
            <div style="background-color: #fef3c7; padding: 10px; border-radius: 4px; margin: 15px 0;">
              <p style="margin: 5px 0;"><strong style="color: #374151;">Prix Promotionnel:</strong> ${formData.prixPromotionnel}</p>
              <p style="margin: 5px 0;"><strong style="color: #374151;">Remise:</strong> ${formData.remise}</p>
            </div>
            <hr style="border: 1px solid #e5e7eb; margin: 15px 0;">
            <p style="margin: 10px 0;"><strong style="color: #374151;">Nom:</strong> ${formData.name}</p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${formData.email}" style="color: #3b82f6;">${formData.email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Téléphone:</strong> <a href="tel:${formData.phone}" style="color: #3b82f6;">${formData.phone}</a></p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-left: 4px solid #ef4444; border-radius: 4px;">
              <p style="margin: 0; color: #374151;"><strong>Message:</strong></p>
              <p style="margin: 10px 0 0 0; color: #6b7280;">${formData.message}</p>
            </div>
          </div>
        </div>
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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <h2 style="color: #f59e0b; border-bottom: 3px solid #f59e0b; padding-bottom: 10px;">Nouvelle demande de facture proforma</h2>
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0; font-size: 18px; color: #f59e0b;"><strong>🚗 Voiture:</strong> ${formData.carName}</p>
            <hr style="border: 1px solid #e5e7eb; margin: 15px 0;">
            <p style="margin: 10px 0;"><strong style="color: #374151;">Nom:</strong> ${formData.name}</p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${formData.email}" style="color: #3b82f6;">${formData.email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Téléphone:</strong> <a href="tel:${formData.phone}" style="color: #3b82f6;">${formData.phone}</a></p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-left: 4px solid #f59e0b; border-radius: 4px;">
              <p style="margin: 0; color: #374151;"><strong>Message:</strong></p>
              <p style="margin: 10px 0 0 0; color: #6b7280;">${formData.message}</p>
            </div>
          </div>
        </div>
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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <h2 style="color: #f59e0b; border-bottom: 3px solid #f59e0b; padding-bottom: 10px;">Nouvelle commande d'accessoire</h2>
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong style="color: #374151;">Prénom:</strong> ${formData.prenom}</p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Nom:</strong> ${formData.nom}</p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${formData.email}" style="color: #3b82f6;">${formData.email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Téléphone:</strong> <a href="tel:${formData.phone}" style="color: #3b82f6;">${formData.phone}</a></p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-left: 4px solid #f59e0b; border-radius: 4px;">
              <p style="margin: 0; color: #374151;"><strong>Message:</strong></p>
              <p style="margin: 10px 0 0 0; color: #6b7280;">${formData.message}</p>
            </div>
          </div>
        </div>
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