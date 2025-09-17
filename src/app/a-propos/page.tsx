import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos - JobBoard CEIPI | Cabinet d&apos;Études Informatique pour les Projets et Institutions',
  description: 'Découvrez le CEIPI, centre de référence dans la formation aux métiers de la propriété intellectuelle. Notre mission, nos programmes et notre réseau international.',
  keywords: 'CEIPI, propriété intellectuelle, formation, droit, brevets, marques, Brazzaville, international',
};

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            À propos du CEIPI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cabinet d&apos;Études Informatique pour les Projets et Institutions est un établissement 
            de référence dans la formation aux métiers de la propriété intellectuelle.
          </p>
        </div>

        {/* Mission et vision */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Formation d&apos;excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                Nous formons les futurs experts de la propriété intellectuelle en proposant des 
                programmes reconnus internationalement, dispensés par des enseignants experts 
                du domaine et des professionnels en exercice.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovation et recherche</h3>
              <p className="text-gray-700 leading-relaxed">
                Notre centre contribue activement à la recherche en propriété intellectuelle 
                et développe des outils innovants pour répondre aux défis actuels du secteur.
              </p>
            </div>
          </div>
        </div>

        {/* Histoire */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre histoire</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Fondé en 2018, le CEIPI est né de la vision d&apos;offrir une formation de qualité 
              dans le domaine de la propriété intellectuelle. Depuis plus de 7 ans, nous 
              formons des générations d&apos;experts qui contribuent au développement de l&apos;innovation 
              et de la créativité dans le monde entier.
            </p>
            <p>
              Situé au cœur de l&apos;Afrique centrale, au Congo Brazzaville, notre cabinet bénéficie d&apos;une position 
              stratégique qui nous permet de développer des partenariats internationaux et 
              d&apos;offrir une perspective globale sur les enjeux de la propriété intellectuelle.
            </p>
          </div>
        </div>

        {/* Programmes */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos programmes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Master en PI</h3>
              <p className="text-gray-700">
                Formation complète en propriété intellectuelle sur 2 ans, 
                accessible aux titulaires d&apos;un Bac+3.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Formation continue</h3>
              <p className="text-gray-700">
                Programmes de formation continue pour les professionnels 
                souhaitant se perfectionner ou se reconvertir.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Formations spécialisées</h3>
              <p className="text-gray-700">
                Modules spécialisés en brevets, marques, droits d&apos;auteur 
                et autres aspects de la propriété intellectuelle.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Formations internationales</h3>
              <p className="text-gray-700">
                Programmes en partenariat avec des universités et centres 
                de formation du monde entier.
              </p>
            </div>
          </div>
        </div>

        {/* Équipe */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enseignants-chercheurs</h3>
              <p className="text-gray-600 text-sm">
                Des experts reconnus dans leur domaine, 
                combinant expertise académique et expérience pratique.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professionnels</h3>
              <p className="text-gray-600 text-sm">
                Des praticiens en exercice qui partagent 
                leur expérience du terrain avec nos étudiants.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Équipe administrative</h3>
              <p className="text-gray-600 text-sm">
                Une équipe dédiée au soutien des étudiants 
                et au bon fonctionnement de nos programmes.
              </p>
            </div>
          </div>
        </div>

        {/* Partenariats */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos partenariats</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Le CEIPI développe des partenariats stratégiques avec des universités, 
              des centres de recherche et des entreprises du monde entier. Ces collaborations 
              nous permettent d&apos;offrir des programmes de formation de qualité et de 
              favoriser les échanges internationaux.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Partenaires internationaux</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">30+</div>
                <div className="text-sm text-gray-600">Pays partenaires</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">1000+</div>
                <div className="text-sm text-gray-600">Étudiants formés</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">95%</div>
                <div className="text-sm text-gray-600">Taux d&apos;insertion</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            En savoir plus sur le CEIPI
          </h2>
          <p className="text-blue-800 mb-6">
            Découvrez nos programmes, nos actualités et nos événements sur notre site officiel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ceipi.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Visiter le site officiel
            </a>
            <a
              href="/ajouter"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Publier une offre
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

