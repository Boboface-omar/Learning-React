// // Leçon 1 : C'est quoi React et pourquoi on l'utilise ?
// Explication simple 📝
// React est une bibliothèque JavaScript/TypeScript (créée par Facebook) pour construire des interfaces utilisateur. Son but principal est d'afficher des données à l'écran de manière dynamique et de réagir aux actions de l'utilisateur (clics, saisies) sans jamais avoir à recharger la page.

// Analogie concrète 🧱
// Imagine des briques LEGO. Si tu veux construire un immense vaisseau spatial, tu ne vas pas le sculpter dans un seul bloc de plastique géant. Tu vas assembler des petites briques (réacteurs, fenêtres, ailes).
// React, c'est exactement ça. On ne code plus des "pages web" entières. On découpe l'interface en petits blocs indépendants et réutilisables appelés Composants.

// Exemple concret 📱
// Prends l'interface d'un réseau social comme X (Twitter).
// Au lieu de coder un fichier HTML géant, en React on crée :

// Un composant <Sidebar />

// Un composant <TweetInput />

// Un composant <TweetCard /> (qu'on va réutiliser des dizaines de fois dans la liste, en lui passant des données différentes).

// Explication technique ⚙️
// Avant React, on codait de manière impérative (avec Vanilla JS ou jQuery) : on devait donner les instructions exactes au navigateur ("trouve le bouton avec cet ID, écoute le clic, va chercher le paragraphe avec cet autre ID, change son texte").
// React introduit le paradigme déclaratif. Tu décris simplement l'état final désiré ("Si l'utilisateur est connecté, affiche son nom, sinon affiche un bouton Login"). Quand les données changent, React calcule la différence et met à jour le navigateur (le DOM) de manière chirurgicale et optimisée grâce à son moteur interne : le Virtual DOM.

// Bonnes pratiques 🏆

// "Thinking in React" : Avant même d'écrire la moindre ligne de code, la première étape d'un développeur React est de regarder une maquette et d'y tracer des carrés rouges pour isoler chaque futur composant.

// Erreurs fréquentes ⚠️

// Continuer à penser en "pages" ou "fichiers HTML" : En React, on construit des "Single Page Applications" (SPA). Il n'y a qu'un seul vrai fichier HTML de base. Tout le reste, c'est du JavaScript (TypeScript) qui dessine, efface et redessine des composants à l'écran.