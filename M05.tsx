// // Bilan d'étape 🚩
// // Nous venons de voir la "Sainte Trinité" de React :

// // Les Composants (les briques)

// // Les Props (la communication parent -> enfant)

// // Le State (la mémoire interne et l'interactivité)

// L'astuce cruciale ici : 
// Beaucoup de débutants créent un deuxième state [totalPrice, setTotalPrice]. 
// C'est une erreur (un "anti-pattern"). En React, si une donnée peut être devinée ou calculée à partir de tes props ou de ton state existant, calcule-la simplement comme une variable classique. À chaque fois que quantity change, le composant se rafraîchit, 
// et totalPrice est recalculé automatiquement.

// Maintenant que tu as les bases (Composants, Props, State), il faut qu'on regarde sous le capot pour comprendre pourquoi ce recalcul automatique est si performant.