'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ajouterOffre } from '@/lib/actions';
import Button from './Button';

export default function FormulaireAjoutOffre() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setMessage(null);

    try {
      const result = await ajouterOffre(formData);
      
      if (result.success) {
        setMessage({ type: 'success', text: 'Offre publiée avec succès ! Redirection...' });
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        setMessage({ type: 'error', text: result.error || 'Une erreur est survenue lors de la publication.' });
      }
    } catch {
      setMessage({ type: 'error', text: 'Une erreur inattendue est survenue.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form action={handleSubmit} className="space-y-6">
      {message && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-100 text-green-800 border border-green-200' 
            : 'bg-red-100 text-red-800 border border-red-200'
        }`}>
          {message.text}
        </div>
      )}

      {/* Informations principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="titre" className="block text-sm font-medium text-gray-700 mb-2">
            Titre du poste *
          </label>
          <input
            type="text"
            id="titre"
            name="titre"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: Stage en Propriété Intellectuelle"
          />
        </div>

        <div>
          <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-2">
            Nom de l&apos;entreprise *
          </label>
          <input
            type="text"
            id="entreprise"
            name="entreprise"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: Cabinet d&apos;avocats Martin & Associés"
          />
        </div>

        <div>
          <label htmlFor="lieu" className="block text-sm font-medium text-gray-700 mb-2">
            Lieu *
          </label>
          <input
            type="text"
            id="lieu"
            name="lieu"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: Paris, France"
          />
        </div>

        <div>
          <label htmlFor="secteur" className="block text-sm font-medium text-gray-700 mb-2">
            Secteur d&apos;activité *
          </label>
          <input
            type="text"
            id="secteur"
            name="secteur"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: Droit & Propriété Intellectuelle"
          />
        </div>
      </div>

      {/* Type de contrat et niveau */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="typeContrat" className="block text-sm font-medium text-gray-700 mb-2">
            Type de contrat *
          </label>
          <select
            id="typeContrat"
            name="typeContrat"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Sélectionnez un type</option>
            <option value="Stage">Stage</option>
            <option value="Alternance">Alternance</option>
            <option value="CDD">CDD</option>
            <option value="CDI">CDI</option>
          </select>
        </div>

        <div>
          <label htmlFor="niveau" className="block text-sm font-medium text-gray-700 mb-2">
            Niveau requis *
          </label>
          <select
            id="niveau"
            name="niveau"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Sélectionnez un niveau</option>
            <option value="Bac">Bac</option>
            <option value="Bac+2">Bac+2</option>
            <option value="Bac+3">Bac+3</option>
            <option value="Bac+4">Bac+4</option>
            <option value="Bac+5">Bac+5</option>
            <option value="Doctorat">Doctorat</option>
          </select>
        </div>
      </div>

      {/* Durée et rémunération */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="duree" className="block text-sm font-medium text-gray-700 mb-2">
            Durée *
          </label>
          <input
            type="text"
            id="duree"
            name="duree"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: 6 mois"
          />
        </div>

        <div>
          <label htmlFor="remuneration" className="block text-sm font-medium text-gray-700 mb-2">
            Rémunération *
          </label>
          <input
            type="text"
            id="remuneration"
            name="remuneration"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: 800€/mois"
          />
        </div>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="dateDebut" className="block text-sm font-medium text-gray-700 mb-2">
            Date de début *
          </label>
          <input
            type="date"
            id="dateDebut"
            name="dateDebut"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="dateFin" className="block text-sm font-medium text-gray-700 mb-2">
            Date de fin *
          </label>
          <input
            type="date"
            id="dateFin"
            name="dateFin"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Description du poste *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Décrivez en détail le poste, les missions, les responsabilités..."
        />
      </div>

      {/* Compétences */}
      <div>
        <label htmlFor="competences" className="block text-sm font-medium text-gray-700 mb-2">
          Compétences requises *
        </label>
        <textarea
          id="competences"
          name="competences"
          required
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Listez les compétences requises, séparées par des virgules (Ex: Droit de la PI, Anglais, Recherche juridique)"
        />
        <p className="text-sm text-gray-500 mt-1">
          Séparez les compétences par des virgules
        </p>
      </div>

      {/* Informations de contact */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Informations de contact</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contactNom" className="block text-sm font-medium text-gray-700 mb-2">
              Nom du contact *
            </label>
            <input
              type="text"
              id="contactNom"
              name="contactNom"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Marie Dubois"
            />
          </div>

          <div>
            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
              Email de contact *
            </label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: m.dubois@entreprise.fr"
            />
          </div>

          <div>
            <label htmlFor="contactTelephone" className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone (optionnel)
            </label>
            <input
              type="tel"
              id="contactTelephone"
              name="contactTelephone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: 01 42 86 12 34"
            />
          </div>
        </div>
      </div>

      {/* Boutons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Publication en cours...
            </>
          ) : (
            <>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Publier l&apos;offre
            </>
          )}
        </Button>

        <Button
          type="button"
          onClick={() => router.push('/')}
          className="flex-1 bg-gray-300 text-gray-700 hover:bg-gray-400"
        >
          Annuler
        </Button>
      </div>
    </form>
  );
}

