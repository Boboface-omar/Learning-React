// // Leçon 4 : Le State (Rendre l'application interactive)
// Explication simple 📝
// Le "State" (l'état), c'est la mémoire interne de ton composant.
// Contrairement aux Props qui lui sont imposées par le composant parent (et qu'il ne peut pas modifier), le State est une donnée qui appartient au composant lui-même. Quand l'utilisateur interagit (clique sur un bouton, tape du texte), le composant modifie son state, ce qui provoque une mise à jour de l'affichage.

// Analogie concrète 🧱
// Imagine un interrupteur mural avec un petit voyant lumineux intégré.
// Son état actuel est soit "Allumé", soit "Éteint". Quand tu appuies dessus, il change son propre état, et le voyant s'allume ou s'éteint en conséquence. L'interrupteur se gère tout seul.

// Exemple concret 📱
// En React, on utilise une fonction spéciale appelée un Hook pour créer un state. Ce Hook s'appelle useState.
// Voici un bouton "Like" classique (comme sur X/Twitter) :
// 1. On importe le hook depuis React
import { useState } from 'react';

export const LikeButton = () => {
  // 2. On déclare le state avec la syntaxe de déstructuration de tableau
  // isLiked = la variable qui contient la valeur
  // setIsLiked = la fonction pour modifier cette valeur
  const [isLiked, setIsLiked] = useState<boolean>(false); // false est la valeur initiale

  return (
    <button 
      // 3. Au clic, on appelle la fonction de mise à jour pour inverser la valeur
      onClick={() => setIsLiked(!isLiked)} 
      className={isLiked ? "btn-liked" : "btn-normal"}
    >
      {isLiked ? '❤️ Liké' : '🤍 J\'aime'}
    </button>
  );
};

// Bonnes pratiques 🏆

// Convention de nommage : On nomme toujours le state [chose, setChose]. Par exemple : [isOpen, setIsOpen], [user, setUser].

// Typage TypeScript : Prends l'habitude d'écrire useState<Type>(valeur_initiale). C'est vital dès que ton state va contenir des objets complexes ou pouvoir être null.

// Erreurs fréquentes ⚠️

// Modifier la variable directement : Écrire isLiked = true est le péché capital en React. Si tu fais ça, la variable change en mémoire, mais React n'est pas prévenu. L'interface ne se mettra pas à jour. Il faut absolument utiliser setIsLiked(true).

// Penser que la mise à jour est immédiate : La fonction setChose est asynchrone. Si tu fais un console.log(isLiked) juste après avoir appelé setIsLiked(true), la console affichera encore l'ancienne valeur. React attend la fin de l'exécution de ton code pour mettre à jour l'écran.

// Tips de senior 💡
// Dans 90% des cas en entreprise, le plus grand défi d'une application React n'est pas de créer le state, mais de savoir où le placer. La règle d'or est : "Place ton state au plus proche de là où on en a besoin". Si un seul composant s'en sert, le state reste dedans. Si deux composants frères ont besoin de la même donnée, on doit remonter le state dans leur parent commun (on appelle ça le Lifting State Up).