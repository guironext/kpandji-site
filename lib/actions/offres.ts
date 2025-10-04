"use server";

import { prisma } from "../prisma";

// Offre Exceptionnelle
export async function getOffresExceptionnelles() {
  try {
    const offres = await prisma.offreExceptionelle.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return { success: true, data: offres };
  } catch (error) {
    console.error("Error fetching offres exceptionnelles:", error);
    return { success: false, error: "Failed to fetch data" };
  }
}

export async function updateOffreStatus(id: string, status: string) {
  try {
    await prisma.offreExceptionelle.update({
      where: { id },
      data: { status }
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating offre status:", error);
    return { success: false, error: "Failed to update status" };
  }
}

// Offre Speciale
export async function getOffresSpeciales() {
  try {
    const offres = await prisma.offreSpeciale.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return { success: true, data: offres };
  } catch (error) {
    console.error("Error fetching offres speciales:", error);
    return { success: false, error: "Failed to fetch data" };
  }
}

export async function updateOffreSpecialeStatus(id: string, status: string) {
  try {
    await prisma.offreSpeciale.update({
      where: { id },
      data: { status }
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating offre speciale status:", error);
    return { success: false, error: "Failed to update status" };
  }
}

// Reservations
export async function getReservations() {
  try {
    const reservations = await prisma.reservations.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return { success: true, data: reservations };
  } catch (error) {
    console.error("Error fetching reservations:", error);
    return { success: false, error: "Failed to fetch data" };
  }
}

export async function updateReservationStatus(id: string, status: string) {
  try {
    await prisma.reservations.update({
      where: { id },
      data: { status }
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating reservation status:", error);
    return { success: false, error: "Failed to update status" };
  }
}

// Facture Proforma
export async function getFacturesProforma() {
  try {
    const factures = await prisma.factureProforma.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return { success: true, data: factures };
  } catch (error) {
    console.error("Error fetching factures proforma:", error);
    return { success: false, error: "Failed to fetch data" };
  }
}

export async function updateFactureProformaStatus(id: string, status: string) {
  try {
    await prisma.factureProforma.update({
      where: { id },
      data: { status }
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating facture proforma status:", error);
    return { success: false, error: "Failed to update status" };
  }
}

// Commandes Accessoires
export async function getCommandesAccessoires() {
  try {
    const commandes = await prisma.commandesAccessoires.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return { success: true, data: commandes };
  } catch (error) {
    console.error("Error fetching commandes accessoires:", error);
    return { success: false, error: "Failed to fetch data" };
  }
}

export async function updateCommandeAccessoireStatus(id: string, status: string) {
  try {
    await prisma.commandesAccessoires.update({
      where: { id },
      data: { status }
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating commande accessoire status:", error);
    return { success: false, error: "Failed to update status" };
  }
}

// Contact
export async function getContacts() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return { success: true, data: contacts };
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return { success: false, error: "Failed to fetch data" };
  }
}

export async function updateContactStatus(id: string, status: string) {
  try {
    await prisma.contact.update({
      where: { id },
      data: { status }
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating contact status:", error);
    return { success: false, error: "Failed to update status" };
  }
}
