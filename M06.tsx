// // Leçon 5 : Le fonctionnement interne de React (Virtual DOM)
// // Explication simple 📝
// // React possède un "clone" de ton interface web en mémoire vive (RAM). À chaque fois qu'un state change, React modifie d'abord ce clone. Ensuite, il compare ce clone avec le vrai site web que l'utilisateur regarde. Il trouve les 2 ou 3 petites différences, et ne met à jour que ces petits morceaux sur le vrai site web.
// Analogie concrète 🧱
// Imagine que tu as un plan de maison sur papier (le Virtual DOM) et la vraie maison en briques (le DOM réel).
// // Tu veux ajouter une fenêtre. Au lieu de raser la maison complète et de la reconstruire avec la nouvelle fenêtre (ce que faisaient les anciens sites web), l'architecte React dessine la fenêtre sur son plan, compare avec la vraie maison, et dit aux ouvriers : "Cassez juste ce mur et mettez la fenêtre ici". C'est ultra-rapide.

// L'explication technique ⚙️
// En React, un changement de state provoque le re-rendu du composant concerné et de tous ses enfants. Mais ça ne remonte jamais vers les parents. C'est pour cela que React est si rapide : il isole les mises à jour au plus bas niveau possible dans son Virtual DOM.