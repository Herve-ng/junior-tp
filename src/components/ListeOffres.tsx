import { getOffres } from '@/lib/data';
import OffreCard from './OffreCard';

export default async function ListeOffres() {
  const offres = getOffres();

  if (offres.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-4">
          Aucune offre disponible pour le moment
        </div>
        <p className="text-gray-400">
          Revenez bientôt pour découvrir de nouvelles opportunités !
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Offres de stages disponibles
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez les opportunités de stages et d&apos;emplois dans le domaine de la propriété intellectuelle
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {offres.map((offre) => (
          <OffreCard key={offre.id} offre={offre} />
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          {offres.length} offre{offres.length > 1 ? 's' : ''} disponible{offres.length > 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
}

