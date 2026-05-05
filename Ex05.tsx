// 🛠️ Mini-Projet 1 : Le Composant <CartItem />
// Le contexte : Notre site e-commerce a besoin d'afficher les articles dans le panier de l'utilisateur. Tu dois créer un composant qui gère l'affichage d'un seul article du panier, en combinant tout ce qu'on a vu : Composant, Props, et State.

// 📝 Le Cahier des Charges (Specs) :

// Tu dois écrire un composant nommé <CartItem /> en TypeScript.

// Les Props : Il doit recevoir deux props obligatoires depuis son parent :

// name (une string, ex: "Clavier Mécanique")

// unitPrice (un nombre, ex: 50)

// Le State : Il doit avoir un state interne quantity (qui commence à 1).

// L'Interface (JSX) : Le composant doit afficher :

// Le nom de l'article (name).

// Le prix unitaire (unitPrice).

// Les boutons - et + pour modifier la quantité (avec la sécurité pour ne pas descendre en dessous de 1, comme on l'a vu).

// La quantité actuelle.

// Le calcul dynamique : Le prix TOTAL de cet article (c'est-à-dire unitPrice multiplié par quantity).

// 🎯 Ton objectif :
// Écris le code complet de ce fichier (l'interface des props + le composant avec son state et son JSX).
import { useState } from 'react';

// 1. Définition stricte des props
interface CartItemProps {
  name: string;
  unitPrice: number;
}

export const CartItem = ({ name, unitPrice }: CartItemProps) => {
  // 2. Le state local pour la quantité
  const [quantity, setQuantity] = useState<number>(1);

  // 3. Le Tip de Senior : On ne met JAMAIS le prix total dans un state !
  // On le calcule "à la volée" à chaque rendu.
  const totalPrice = unitPrice * quantity;

  return (
    <div className="cart-item" style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "8px" }}>
      <h3>{name}</h3>
      <p>Prix unitaire : {unitPrice} €</p>
      
      <div>
        {/* 4. Sécurité pour ne pas descendre sous 1 */}
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
        <span style={{ margin: "0 10px" }}>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <p><strong>Total : {totalPrice} €</strong></p>
    </div>
  );
};