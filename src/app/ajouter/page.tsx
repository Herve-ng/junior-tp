import type { Metadata } from 'next';
import FormulaireAjoutOffre from '@/components/FormulaireAjoutOffre';

export const metadata: Metadata = {
  title: 'Ajouter une offre - JobBoard CEIPI',
  description: 'Publiez une nouvelle offre de stage ou d&apos;emploi sur la plateforme JobBoard CEIPI.',
  keywords: 'publier offre, ajouter stage, emploi CEIPI, propriété intellectuelle',
};

export default function AjouterOffrePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Publier une nouvelle offre
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partagez votre opportunité de stage ou d&apos;emploi avec la communauté CEIPI. 
            Remplissez le formulaire ci-dessous pour publier votre offre.
          </p>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <FormulaireAjoutOffre />
        </div>

        {/* Informations supplémentaires */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            💡 Conseils pour une offre attractive
          </h3>
          <ul className="text-blue-800 space-y-2 text-sm">
            <li>• Rédigez une description claire et détaillée du poste</li>
            <li>• Listez précisément les compétences requises</li>
            <li>• Précisez la rémunération et les avantages</li>
            <li>• Incluez toutes les informations de contact nécessaires</li>
            <li>• Vérifiez l&apos;orthographe et la grammaire</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

