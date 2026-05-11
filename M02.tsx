// // // Leçon 2 : JSX et les Composants (La base fondamentale)
// // // Explication simple 📝
// // // Un composant React n'est rien d'autre qu'une fonction JavaScript/TypeScript qui retourne de l'interface. 
// L'interface qu'elle retourne est écrite en JSX (JavaScript XML), une syntaxe qui ressemble comme deux gouttes d'eau à du HTML, mais qui vit directement dans ton code TSX.

// // Analogie concrète 🧱
// // Pense à une usine de tampons encreurs.
// // La fonction (le composant), c'est le moule du tampon.
// // Le JSX, c'est le motif gravé sur le tampon.
// // À chaque fois que tu appelles ton composant dans ton code, c'est comme si tu pressais le tampon sur une feuille : ça génère le même bout d'interface.

// // Exemple concret 📱
// // Voici à quoi ressemble un vrai composant typé (même si on approfondira les Props juste après) :
// // // ProductCard.tsx

// // // 1. Le composant est une fonction fléchée avec une Majuscule
export const ProductCard = () => {
  const price: number = 49.99; // On peut mettre du JS classique avant le return

  // 2. Le return contient le JSX
  return (
    <div className="card">
      <h2>Super Clavier Mécanique</h2>
      {/* 3. On injecte des variables JS dans le JSX avec des accolades { } */}
      <p>Prix : {price} €</p>
      <button>Ajouter au panier</button>
    </div>
  );
};
// Explication technique ⚙️
// Le navigateur web est bête : il ne comprend que le HTML, le CSS et le JavaScript standard. Il ne sait pas ce qu'est le JSX.
// Sous le capot, quand tu compiles ton projet (avec Vite, Webpack, etc.), un outil transforme ton JSX en vraies fonctions JavaScript natives.
// Ton <div>Bonjour</div> devient en réalité React.createElement('div', null, 'Bonjour'). Le JSX n'est que du "sucre syntaxique" inventé pour t'éviter d'écrire des milliers de createElement.

// // Bonnes pratiques 🏆

// // Un composant = Un fichier. Nomme le fichier exactement comme le composant, en PascalCase (ex: ProductCard.tsx).

// // Les accolades {} : Dès que tu veux quitter le mode "HTML" et repasser en mode "JavaScript" au milieu de ton JSX (pour afficher une variable, faire un calcul), tu ouvres des accolades.

// // Le Fragment <> </> : Un composant doit toujours retourner un seul élément parent. Si tu as deux <div> côte à côte, tu dois les envelopper dans une balise vide <> ... </> appelée Fragment.

// Erreurs fréquentes ⚠️

// Oublier la majuscule : <button> (minuscule) c'est la balise HTML native. <Button> (majuscule) c'est TON composant React. Si tu mets une minuscule à tes composants, React va planter en cherchant une balise HTML qui n'existe pas.

// Utiliser class au lieu de className : En JSX, on n'écrit pas <div class="container"> car le mot class est réservé en JavaScript (pour les classes POO). On doit obligatoirement utiliser className.

// Tips de senior 💡
// En entreprise, un fichier de composant qui dépasse les 150-200 lignes est souvent un "code smell" (une mauvaise odeur). Si ton JSX est trop long à scroller, c'est que ton composant fait trop de choses. C'est le moment d'extraire des morceaux pour en faire de nouveaux sous-composants plus petits.

// Pour appeler un composant React dans une page, tu dois :

// 1. l’importer
// 2. l’insérer dans le JSX avec une balise <NomDuComposant />
import MonComposant from './MonComposant';

function Page() {
  return (
    <div>
      <MonComposant />
    </div>
  );
}

export default Page;
// Le plus important : un composant React s’utilise toujours comme une balise JSX auto-fermante <MonComposant /> ou avec enfants <MonComposant>...</MonComposant>.