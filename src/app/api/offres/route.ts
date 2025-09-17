import { NextRequest, NextResponse } from 'next/server';
import { getOffres, getOffreById } from '@/lib/data';

// GET /api/offres - Récupérer toutes les offres
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const type = searchParams.get('type');
    const secteur = searchParams.get('secteur');
    const niveau = searchParams.get('niveau');

    let offres = getOffres();

    // Filtrage par ID si spécifié
    if (id) {
      const offre = getOffreById(id);
      if (!offre) {
        return NextResponse.json(
          { error: 'Offre non trouvée' },
          { status: 404 }
        );
      }
      return NextResponse.json(offre);
    }

    // Filtrage par type de contrat
    if (type) {
      offres = offres.filter(offre => offre.typeContrat === type);
    }

    // Filtrage par secteur
    if (secteur) {
      offres = offres.filter(offre => 
        offre.secteur.toLowerCase().includes(secteur.toLowerCase())
      );
    }

    // Filtrage par niveau
    if (niveau) {
      offres = offres.filter(offre => offre.niveau === niveau);
    }

    // Tri par date de publication (plus récent en premier)
    offres.sort((a, b) => 
      new Date(b.datePublication).getTime() - new Date(a.datePublication).getTime()
    );

    return NextResponse.json({
      count: offres.length,
      offres: offres,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Erreur API offres:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

// POST /api/offres - Ajouter une nouvelle offre (pour démonstration)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation basique
    if (!body.titre || !body.entreprise) {
      return NextResponse.json(
        { error: 'Titre et entreprise sont requis' },
        { status: 400 }
      );
    }

    // Note: En production, vous voudriez probablement rediriger vers la Server Action
    // plutôt que de dupliquer la logique ici
    return NextResponse.json(
      { 
        message: 'Utilisez le formulaire sur /ajouter pour ajouter une offre',
        redirect: '/ajouter'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur POST API offres:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

