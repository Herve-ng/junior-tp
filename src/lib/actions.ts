'use server';

import { addOffre } from './data';
import { Offre } from '@/types/offre';
import { revalidatePath } from 'next/cache';

export async function ajouterOffre(formData: FormData): Promise<{ success: boolean; error?: string }> {
  try {
    // Validation des données
    const titre = formData.get('titre') as string;
    const entreprise = formData.get('entreprise') as string;
    const lieu = formData.get('lieu') as string;
    const description = formData.get('description') as string;
    const competences = formData.get('competences') as string;
    const duree = formData.get('duree') as string;
    const remuneration = formData.get('remuneration') as string;
    const dateDebut = formData.get('dateDebut') as string;
    const dateFin = formData.get('dateFin') as string;
    const typeContrat = formData.get('typeContrat') as Offre['typeContrat'];
    const niveau = formData.get('niveau') as Offre['niveau'];
    const secteur = formData.get('secteur') as string;
    const contactNom = formData.get('contactNom') as string;
    const contactEmail = formData.get('contactEmail') as string;
    const contactTelephone = formData.get('contactTelephone') as string;

    // Validation des champs requis
    if (!titre || !entreprise || !lieu || !description || !competences || 
        !duree || !remuneration || !dateDebut || !dateFin || 
        !typeContrat || !niveau || !secteur || !contactNom || !contactEmail) {
      return {
        success: false,
        error: 'Tous les champs obligatoires doivent être remplis.'
      };
    }

    // Validation des dates
    const debut = new Date(dateDebut);
    const fin = new Date(dateFin);
    const aujourdhui = new Date();

    if (debut < aujourdhui) {
      return {
        success: false,
        error: 'La date de début ne peut pas être dans le passé.'
      };
    }

    if (fin <= debut) {
      return {
        success: false,
        error: 'La date de fin doit être postérieure à la date de début.'
      };
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail)) {
      return {
        success: false,
        error: 'L\'adresse email n\'est pas valide.'
      };
    }

    // Préparation des données
    const offreData: Omit<Offre, 'id' | 'datePublication'> = {
      titre: titre.trim(),
      entreprise: entreprise.trim(),
      lieu: lieu.trim(),
      description: description.trim(),
      competences: competences.split(',').map(c => c.trim()).filter(c => c.length > 0),
      duree: duree.trim(),
      remuneration: remuneration.trim(),
      dateDebut,
      dateFin,
      typeContrat,
      niveau,
      secteur: secteur.trim(),
      contact: {
        nom: contactNom.trim(),
        email: contactEmail.trim(),
        telephone: contactTelephone ? contactTelephone.trim() : undefined
      }
    };

    // Ajout de l'offre
    addOffre(offreData);

    // Revalidation des pages
    revalidatePath('/');
    revalidatePath('/ajouter');

    return {
      success: true
    };

  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'offre:', error);
    return {
      success: false,
      error: 'Une erreur inattendue est survenue lors de la publication de l\'offre.'
    };
  }
}

