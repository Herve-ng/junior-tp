# JobBoard CEIPI

Une plateforme moderne de gestion des offres de stages et d'emplois pour le Centre d'Études Internationales de la Propriété Intellectuelle (CEIPI).

## 🚀 Fonctionnalités

- **Affichage des offres** : Liste complète des offres disponibles avec filtrage et recherche
- **Détail des offres** : Pages détaillées pour chaque offre avec toutes les informations
- **Publication d'offres** : Formulaire complet pour ajouter de nouvelles offres
- **API REST** : Endpoint JSON pour récupérer les offres
- **Design responsive** : Interface moderne et adaptée à tous les appareils
- **SEO optimisé** : Métadonnées et optimisations pour les moteurs de recherche

## 🛠️ Technologies utilisées

- **Next.js 15** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour le styling
- **CSS Modules** pour les composants personnalisés
- **Server Actions** pour la logique métier
- **React 19** avec les dernières fonctionnalités

## 📁 Structure du projet

```
src/
├── app/                    # App Router Next.js
│   ├── layout.tsx         # Layout global avec navigation
│   ├── page.tsx           # Page d'accueil
│   ├── ajouter/           # Page d'ajout d'offre
│   │   └── page.tsx
│   ├── offres/[id]/       # Route dynamique pour les offres
│   │   └── page.tsx
│   ├── a-propos/          # Page à propos
│   │   └── page.tsx
│   └── api/               # API routes
│       └── offres/
│           └── route.ts
├── components/             # Composants réutilisables
│   ├── Navigation.tsx     # Navigation principale
│   ├── Footer.tsx         # Pied de page
│   ├── OffreCard.tsx      # Carte d'offre (client)
│   ├── ListeOffres.tsx    # Liste des offres (serveur)
│   ├── FormulaireAjoutOffre.tsx # Formulaire d'ajout
│   ├── Button.tsx         # Composant bouton avec CSS Modules
│   └── Button.module.css  # Styles CSS Modules
├── lib/                   # Logique métier et données
│   ├── data.ts            # Données simulées et fonctions
│   └── actions.ts         # Server Actions
├── types/                 # Types TypeScript
│   └── offre.ts           # Interfaces des offres
└── globals.css            # Styles globaux Tailwind
```

## 🚀 Installation et lancement

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

### Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run start` - Lance l'application en mode production
- `npm run lint` - Vérifie le code avec ESLint

## 📱 Utilisation

### Navigation
- **Accueil** : Liste des offres disponibles
- **Ajouter une offre** : Formulaire de publication
- **À propos** : Informations sur le CEIPI

### Fonctionnalités principales

1. **Consulter les offres**
   - Parcourir la liste sur la page d'accueil
   - Cliquer sur une offre pour voir les détails
   - Utiliser les filtres de l'API si nécessaire

2. **Publier une offre**
   - Remplir le formulaire complet
   - Validation automatique des données
   - Confirmation de publication

3. **API REST**
   - `GET /api/offres` - Liste de toutes les offres
   - `GET /api/offres?id=1` - Offre spécifique
   - `GET /api/offres?type=Stage` - Filtrage par type
   - `GET /api/offres?secteur=Droit` - Filtrage par secteur

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env.local` à la racine :

```env
# Configuration de base
NEXT_PUBLIC_APP_NAME="JobBoard CEIPI"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Configuration de l'API (optionnel)
API_RATE_LIMIT=100
API_TIMEOUT=5000
```

### Tailwind CSS

Le projet utilise Tailwind CSS v4 avec une configuration personnalisée. Les styles sont dans `src/app/globals.css`.

### CSS Modules

Le composant `Button` utilise CSS Modules pour démontrer l'utilisation de cette technologie comme demandé dans les spécifications.

## 📊 Données

Les offres sont actuellement stockées en mémoire (simulation). En production, vous pourriez :

- Intégrer une base de données (PostgreSQL, MongoDB)
- Utiliser un CMS headless (Strapi, Contentful)
- Implémenter une authentification (NextAuth.js, Auth0)

## 🚀 Déploiement

### Vercel (recommandé)

1. Connecter votre repository GitHub à Vercel
2. Configurer les variables d'environnement
3. Déployer automatiquement

### Autres plateformes

- **Netlify** : Compatible avec Next.js
- **Railway** : Déploiement simple
- **Docker** : Containerisation possible

## 🧪 Tests

```bash
# Lancer les tests (à implémenter)
npm test

# Tests de linting
npm run lint
```

## 📝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est développé dans le cadre du TP Next.js pour le CEIPI.

## 🤝 Support

Pour toute question ou problème :

- Créer une issue sur GitHub
- Contacter l'équipe de développement
- Consulter la documentation Next.js

---

**JobBoard CEIPI** - Votre plateforme de référence pour les offres de stages et d'emplois dans la propriété intellectuelle.
