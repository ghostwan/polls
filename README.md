# Sondoscope

Analyseur de fiabilite des sondages electoraux en France. Visualisez l'ecart entre les predictions des instituts de sondage et les resultats reels des elections francaises de 2002 a 2024.

**[Voir le site en ligne](https://polls-chi-six.vercel.app)**

## Fonctionnalites

- **Navigation par election** -- Presidentielles, europeennes et legislatives de 2002 a 2024, avec bascule 1er/2nd tour
- **Indicateurs de precision** -- Erreur absolue moyenne (MAE), erreur maximale, nombre de sondages et de candidats
- **Evolution des sondages** -- Graphique temporel montrant l'evolution des intentions de vote sur 6 mois avant chaque scrutin
- **Comparaison sondages vs resultats** -- Diagramme en barres confrontant les derniers sondages aux scores reels
- **Tableau de precision detaille** -- Tableau triable avec ecarts par candidat, code couleur par severite
- **Tendance historique** -- Evolution de la precision des sondages sur 20 ans d'elections
- **Classement des instituts** -- Classement des sondeurs (Ifop, Ipsos, Harris Interactive, etc.) par precision globale

## Stack technique

- [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) pour le build
- [Tailwind CSS](https://tailwindcss.com/) pour le style
- [Recharts](https://recharts.org/) pour les graphiques
- [Lucide React](https://lucide.dev/) pour les icones
- Deploye sur [Vercel](https://vercel.com/)

## Demarrage rapide

```bash
# Installer les dependances
npm install

# Lancer en developpement
npm run dev

# Build de production
npm run build

# Previsualiser le build
npm run preview
```

Le site est accessible sur `http://localhost:5173/` en mode developpement.

## Structure du projet

```
src/
  App.tsx                  # Composant principal, gestion d'etat
  types.ts                 # Interfaces TypeScript
  data/
    elections.ts           # Donnees statiques (sondages + resultats)
  utils/
    analysis.ts            # Calculs de precision et formatage
  components/
    Header.tsx             # En-tete avec logo et version
    ElectionSelector.tsx   # Selecteur d'election par type
    RoundToggle.tsx        # Bascule 1er/2nd tour
    DashboardCards.tsx     # Cartes KPI (MAE, erreur max, etc.)
    PollTimeline.tsx       # Graphique temporel des sondages
    AccuracyComparison.tsx # Barres sondages vs resultats
    AccuracyTable.tsx      # Tableau detaille par candidat
    HistoricalTrend.tsx    # Tendance de precision 2002-2024
    PollsterRanking.tsx    # Classement des instituts
```

## Donnees

Les donnees couvrent 14 elections francaises :

| Type | Elections |
|------|-----------|
| Presidentielles | 2002, 2007, 2012, 2017, 2022 |
| Europeennes | 2014, 2019, 2024 |
| Legislatives | 2002, 2007, 2012, 2017, 2022, 2024 |

Les sondages remontent jusqu'a 6 mois avant chaque scrutin pour les presidentielles et europeennes, et 1-2 mois pour les legislatives.

Instituts representes : Ifop, Ipsos, Harris Interactive, Elabe, OpinionWay, BVA.

## Licence

[MIT](LICENSE)
