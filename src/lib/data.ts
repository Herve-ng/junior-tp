import { Offre } from '@/types/offre';

// Données simulées pour les offres
export const offres: Offre[] = [
  {
    id: '1',
    titre: 'Stage en Propriété Intellectuelle',
    entreprise: 'Cabinet d\'avocats Martin & Associés',
    lieu: 'Paris, France',
    description: 'Nous recherchons un stagiaire pour assister nos équipes dans la gestion des dossiers de propriété intellectuelle, incluant les brevets, marques et droits d\'auteur.',
    competences: ['Droit de la PI', 'Recherche juridique', 'Rédaction', 'Anglais'],
    duree: '6 mois',
    remuneration: '800€/mois',
    dateDebut: '2024-09-01',
    dateFin: '2025-02-28',
    typeContrat: 'Stage',
    niveau: 'Bac+5',
    secteur: 'Droit & Propriété Intellectuelle',
    datePublication: '2024-06-15',
    contact: {
      nom: 'Marie Dubois',
      email: 'm.dubois@martin-associes.fr',
      telephone: '01 42 86 12 34'
    }
  },
  {
    id: '2',
    titre: 'Alternance en Innovation Technologique',
    entreprise: 'TechInnov SAS',
    lieu: 'Lyon, France',
    description: 'Rejoignez notre équipe R&D pour développer des solutions innovantes en intelligence artificielle appliquée à la gestion de la propriété intellectuelle.',
    competences: ['IA/ML', 'Python', 'Droit de la PI', 'Innovation'],
    duree: '12 mois',
    remuneration: '1200€/mois',
    dateDebut: '2024-10-01',
    dateFin: '2025-09-30',
    typeContrat: 'Alternance',
    niveau: 'Bac+4',
    secteur: 'Technologie & Innovation',
    datePublication: '2024-06-10',
    contact: {
      nom: 'Thomas Moreau',
      email: 't.moreau@techinnov.fr',
      telephone: '04 72 34 56 78'
    }
  },
  {
    id: '3',
    titre: 'Stage en Marques et Design',
    entreprise: 'DesignStudio International',
    lieu: 'Strasbourg, France',
    description: 'Stage dans notre département juridique spécialisé dans la protection des marques et designs, avec une dimension internationale.',
    competences: ['Droit des marques', 'Design', 'International', 'Français/Anglais'],
    duree: '4 mois',
    remuneration: '600€/mois',
    dateDebut: '2024-11-01',
    dateFin: '2025-02-28',
    typeContrat: 'Stage',
    niveau: 'Bac+3',
    secteur: 'Design & Marques',
    datePublication: '2024-06-20',
    contact: {
      nom: 'Sophie Weber',
      email: 's.weber@designstudio.fr',
      telephone: '03 88 76 54 32'
    }
  },
  {
    id: '4',
    titre: 'CDD en Brevets Biotechnologiques',
    entreprise: 'BioTech Solutions',
    lieu: 'Toulouse, France',
    description: 'Contrat à durée déterminée pour assister notre équipe de spécialistes en brevets biotechnologiques et pharmaceutiques.',
    competences: ['Biotechnologie', 'Brevets', 'Recherche', 'Analyse'],
    duree: '18 mois',
    remuneration: '2500€/mois',
    dateDebut: '2024-12-01',
    dateFin: '2026-05-31',
    typeContrat: 'CDD',
    niveau: 'Bac+5',
    secteur: 'Biotechnologie & Santé',
    datePublication: '2024-06-25',
    contact: {
      nom: 'Dr. Jean Dupont',
      email: 'j.dupont@biotech-solutions.fr',
      telephone: '05 61 23 45 67'
    }
  }
];

// Fonction pour récupérer toutes les offres
export function getOffres(): Offre[] {
  return offres;
}

// Fonction pour récupérer une offre par ID
export function getOffreById(id: string): Offre | undefined {
  return offres.find(offre => offre.id === id);
}

// Fonction pour ajouter une nouvelle offre
export function addOffre(offreData: Omit<Offre, 'id' | 'datePublication'>): Offre {
  const nouvelleOffre: Offre = {
    ...offreData,
    id: (offres.length + 1).toString(),
    datePublication: new Date().toISOString().split('T')[0]
  };
  
  offres.push(nouvelleOffre);
  return nouvelleOffre;
}

