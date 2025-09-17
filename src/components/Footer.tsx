export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">JobBoard CEIPI</h3>
            <p className="text-gray-300 text-sm">
              Plateforme de gestion des offres de stages internes du  Cabinet d&apos;Études Informatique pour les Projets et Institutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm">
              Email: contact@cab-ceipi.com<br />
              Téléphone: +242 06 691 92 80<br />
              Adresse: 59 sergent malamine , moungalie
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="https://ceipi.edu" className="hover:text-white transition-colors">Site officiel CEIPI</a></li>
              <li><a href="/a-propos" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="/ajouter" className="hover:text-white transition-colors">Publier une offre</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} JobBoard CEIPI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

