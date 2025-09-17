export interface Offre {
  id: string;
  titre: string;
  entreprise: string;
  lieu: string;
  description: string;
  competences: string[];
  duree: string;
  remuneration: string;
  dateDebut: string;
  dateFin: string;
  typeContrat: 'Stage' | 'Alternance' | 'CDD' | 'CDI';
  niveau: 'Bac' | 'Bac+2' | 'Bac+3' | 'Bac+4' | 'Bac+5' | 'Doctorat';
  secteur: string;
  datePublication: string;
  contact: {
    nom: string;
    email: string;
    telephone?: string;
  };
}

export interface CreateOffreData {
  titre: string;
  entreprise: string;
  lieu: string;
  description: string;
  competences: string;
  duree: string;
  remuneration: string;
  dateDebut: string;
  dateFin: string;
  typeContrat: Offre['typeContrat'];
  niveau: Offre['niveau'];
  secteur: string;
  contact: {
    nom: string;
    email: string;
    telephone?: string;
  };
}

