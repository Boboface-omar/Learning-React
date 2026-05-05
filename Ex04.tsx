// Mini-exercice 🎯

// On va créer un classique du e-commerce : le sélecteur de quantité pour le panier.

// Ta mission : Écris le code d'un composant <QuantitySelector /> qui permet de choisir combien d'articles on veut ajouter.
// Il te faut :

// Un state quantity initialisé à 1.

// Un bouton "-" qui diminue la quantité.

// Un bouton "+" qui augmente la quantité.

// L'affichage de la quantité actuelle au milieu.

// Bonus Tech Lead : Essaie de faire en sorte que l'utilisateur ne puisse pas descendre en dessous de 1 (pas de quantité négative ou à zéro).

// Montre-moi ton code !

import { useState } from 'react';

export const QuantitySelector = () => {
  // 1. On stocke un nombre (la quantité), qui commence à 1
  const [quantity, setQuantity] = useState<number>(1);

  return (
    // 2. On utilise le Fragment correctement pour englober le tout
    <>
      {/* 3. Au clic, on met à jour le state en soustrayant 1 */}
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
      
      {/* 4. On affiche la valeur de notre state */}
      <span> {quantity} </span>
      
      {/* 5. Au clic, on met à jour le state en ajoutant 1 */}
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </>
  );
};