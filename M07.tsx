// // Leçon 6 : Le hook useEffect (Gérer les effets de bord)
// Explication simple 📝
// Jusqu'ici, nos composants sont "purs". Ils prennent des données (Props/State) et recrachent du visuel (JSX). 
// Mais dans la vraie vie, un composant doit parfois faire des choses qui n'ont rien à voir avec le dessin de l'interface en elle-même : récupérer des données sur un serveur distant (API), démarrer un chronomètre, ou écouter un événement global comme le scroll de la souris. 
// C'est ce qu'on appelle des effets de bord (Side Effects). On utilise pour cela le hook useEffect.

// Analogie concrète 🧱
// Imagine ton composant comme un chef cuisinier dans sa cuisine.

// Le JSX, c'est le dressage de l'assiette.

// Le State/Props, ce sont les ingrédients sur le plan de travail.

// L'Effet de bord, c'est quand le chef doit sortir de sa cuisine pour aller réceptionner une livraison à la porte d'entrée. Il ne peut pas le faire pendant qu'il dresse l'assiette, sinon tout s'arrête. Il doit le faire à un moment précis (par exemple : juste après avoir fini sa mise en place).

// Exemple concret 📱
// Voici comment on récupère les articles de notre panier au chargement :
import { useState, useEffect } from 'react';

export const CartList = () => {
  const [items, setItems] = useState<string[]>([]);

  // useEffect prend 2 paramètres : 
  // 1. Une fonction (ce qu'on veut faire)
  // 2. Un tableau de dépendances (quand est-ce qu'on veut le faire)
  useEffect(() => {
    // Ce code sera exécuté APRÈS l'affichage de l'interface
    console.log("1. Je vais chercher les données sur le serveur...");
    
    // Simulation d'un appel API (fetch)
    setTimeout(() => {
      setItems(["Clavier", "Souris", "Écran"]);
    }, 1000);

  }, []); // <-- Le tableau vide est crucial ici !

  return (
    <div>
      <h2>Mon Panier</h2>
      {items.length === 0 ? <p>Chargement...</p> : <p>Articles chargés : {items.join(', ')}</p>}
    </div>
  );
};

// Explication technique ⚙️
// Le secret de useEffect réside dans son deuxième argument : le tableau de dépendances [].

// useEffect(() => { ... }) (pas de tableau) : S'exécute à TOUS les rendus. (À fuir, boucle infinie garantie).

// useEffect(() => { ... }, []) (tableau vide) : S'exécute une seule fois au montage du composant (quand il apparaît). C'est parfait pour les appels API initiaux.

// useEffect(() => { ... }, [quantity]) (tableau avec une variable) : S'exécute au montage, PUIS à chaque fois que la variable quantity change.

// Bonnes pratiques 🏆

// Un effet = Une responsabilité. Si ton composant doit récupérer des données ET écouter le scroll de la souris, écris deux useEffect distincts. C'est plus propre et plus facile à débugger.

// Erreurs fréquentes ⚠️

// Mettre async directement sur le useEffect : Tu ne peux PAS écrire useEffect(async () => { ... }, []). React l'interdit car un effet ne doit rien retourner (ou seulement une fonction de nettoyage). Tu dois déclarer ta fonction asynchrone à l'intérieur de l'effet, puis l'appeler.

// Mentir sur les dépendances : Si tu utilises une variable (prop ou state) à l'intérieur de ton useEffect, tu dois la mettre dans le tableau de dépendances. Sinon, ton effet utilisera une vieille version obsolète de cette variable.

// Tips de senior 💡
// Depuis React 18, en mode développement (sur ta machine locale), React exécute intentionnellement tous tes useEffect avec tableau vide deux fois au démarrage. C'est le "Strict Mode". Ne panique pas en voyant deux appels API dans ton onglet Network ! React fait ça pour t'aider à repérer les effets mal codés qui ne nettoient pas ce qu'ils créent. 
// En production, ça ne s'exécutera qu'une seule fois.


// Félicitations, tu viens de parcourir les 4 piliers fondamentaux de React :

// Les Composants 🧱 (Créer l'interface)

// Les Props 📨 (Communiquer de parent à enfant)

// Le State 🧠 (Mémoriser et rendre interactif)

// Les Effets ⚡ (Gérer ce qui se passe en dehors de l'affichage)