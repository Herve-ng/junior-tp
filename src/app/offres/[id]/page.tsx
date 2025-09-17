import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getOffreById } from '@/lib/data';
import Link from 'next/link';

interface OffrePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: OffrePageProps): Promise<Metadata> {
  const offre = getOffreById(params.id);
  
  if (!offre) {
    return {
      title: 'Offre non trouvée - JobBoard CEIPI',
      description: 'L&apos;offre demandée n&apos;existe pas ou a été supprimée.',
    };
  }

  return {
    title: `${offre.titre} - ${offre.entreprise} | JobBoard CEIPI`,
    description: offre.description.slice(0, 160) + '...',
    keywords: [...offre.competences, offre.secteur, offre.typeContrat, 'CEIPI'].join(', '),
  };
}

export default function OffrePage({ params }: OffrePageProps) {
  const offre = getOffreById(params.id);

  if (!offre) {
    notFound();
  }

  const getTypeContratColor = (type: string) => {
    switch (type) {
      case 'Stage':
        return 'bg-green-100 text-green-800';
      case 'Alternance':
        return 'bg-blue-100 text-blue-800';
      case 'CDD':
        return 'bg-yellow-100 text-yellow-800';
      case 'CDI':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getNiveauColor = (niveau: string) => {
    switch (niveau) {
      case 'Bac':
        return 'bg-red-100 text-red-800';
      case 'Bac+2':
        return 'bg-orange-100 text-orange-800';
      case 'Bac+3':
        return 'bg-yellow-100 text-yellow-800';
      case 'Bac+4':
        return 'bg-blue-100 text-blue-800';
      case 'Bac+5':
        return 'bg-indigo-100 text-indigo-800';
      case 'Doctorat':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Offres
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-gray-900 font-medium">{offre.titre}</li>
          </ol>
        </nav>

        {/* En-tête de l'offre */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{offre.titre}</h1>
              <p className="text-xl font-semibold text-gray-700 mb-2">{offre.entreprise}</p>
              <p className="text-lg text-gray-600 mb-4">📍 {offre.lieu}</p>
            </div>
            
            <div className="flex flex-col items-end space-y-3 mt-4 lg:mt-0">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${getTypeContratColor(offre.typeContrat)}`}>
                {offre.typeContrat}
              </span>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${getNiveauColor(offre.niveau)}`}>
                {offre.niveau}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Informations clés</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Durée:</span>
                  <span className="font-medium">{offre.duree}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rémunération:</span>
                  <span className="font-medium">{offre.remuneration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date de début:</span>
                  <span className="font-medium">
                    {new Date(offre.dateDebut).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date de fin:</span>
                  <span className="font-medium">
                    {new Date(offre.dateFin).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Secteur:</span>
                  <span className="font-medium">{offre.secteur}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Compétences recherchées</h3>
              <div className="flex flex-wrap gap-2">
                {offre.competences.map((competence, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-blue-100 text-blue-800 text-sm rounded-md font-medium"
                  >
                    {competence}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Description du poste</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {offre.description}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="mb-4 sm:mb-0">
                <p className="text-sm text-gray-500">
                  Publié le {new Date(offre.datePublication).toLocaleDateString('fr-FR')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`mailto:${offre.contact.email}?subject=Candidature - ${offre.titre}`}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Postuler
                </Link>
                
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Retour aux offres
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Informations de contact */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact principal</h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Nom:</span> {offre.contact.nom}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span>{' '}
                  <a href={`mailto:${offre.contact.email}`} className="text-blue-600 hover:underline">
                    {offre.contact.email}
                  </a>
                </p>
                {offre.contact.telephone && (
                  <p className="text-gray-700">
                    <span className="font-medium">Téléphone:</span>{' '}
                    <a href={`tel:${offre.contact.telephone}`} className="text-blue-600 hover:underline">
                      {offre.contact.telephone}
                    </a>
                  </p>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">À propos de l&apos;entreprise</h3>
              <p className="text-gray-700">
                {offre.entreprise} est une entreprise spécialisée dans le secteur de la {offre.secteur.toLowerCase()}.
                Nous recherchons des candidats motivés et qualifiés pour rejoindre notre équipe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

