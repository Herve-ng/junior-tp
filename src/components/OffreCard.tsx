'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Offre } from '@/types/offre';

interface OffreCardProps {
  offre: Offre;
}

export default function OffreCard({ offre }: OffreCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

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
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
              <Link href={`/offres/${offre.id}`}>
                {offre.titre}
              </Link>
            </h3>
            <p className="text-lg font-medium text-gray-700 mb-1">{offre.entreprise}</p>
            <p className="text-gray-600 mb-3">📍 {offre.lieu}</p>
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeContratColor(offre.typeContrat)}`}>
              {offre.typeContrat}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getNiveauColor(offre.niveau)}`}>
              {offre.niveau}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 line-clamp-3">
            {isExpanded ? offre.description : offre.description.slice(0, 150) + '...'}
          </p>
          <button
            onClick={toggleExpanded}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 focus:outline-none"
          >
            {isExpanded ? 'Voir moins' : 'Voir plus'}
          </button>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {offre.competences.slice(0, 4).map((competence, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
              >
                {competence}
              </span>
            ))}
            {offre.competences.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                +{offre.competences.length - 4} autres
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-gray-500">Durée:</span>
            <span className="ml-2 font-medium text-gray-700">{offre.duree}</span>
          </div>
          <div>
            <span className="text-gray-500">Rémunération:</span>
            <span className="ml-2 font-medium text-gray-700">{offre.remuneration}</span>
          </div>
          <div>
            <span className="text-gray-500">Début:</span>
            <span className="ml-2 font-medium text-gray-700">
              {new Date(offre.dateDebut).toLocaleDateString('fr-FR')}
            </span>
          </div>
          <div>
            <span className="text-gray-500">Secteur:</span>
            <span className="ml-2 font-medium text-gray-700">{offre.secteur}</span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Publié le {new Date(offre.datePublication).toLocaleDateString('fr-FR')}
          </div>
          <Link
            href={`/offres/${offre.id}`}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Voir détails
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

