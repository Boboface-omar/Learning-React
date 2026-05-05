// // Leçon 3 : Les Props (Passer des données aux composants)
// Explication simple 📝
// Les Props sont tout simplement les paramètres que tu passes à ton composant. Puisqu'un composant React n'est qu'une fonction JavaScript, les props sont les arguments de cette fonction. Elles permettent à un composant Parent d'envoyer des données à un composant Enfant.

// Analogie concrète 🧱
// Imagine une machine à café d'entreprise (le composant).
// La machine sait comment faire du café (sa logique interne). Mais pour qu'elle te serve ce que tu veux, tu dois appuyer sur des boutons : "Espresso", "Sans sucre", "Allongé". Ces choix que tu envoies à la machine, ce sont les Props. La machine va adapter son comportement en fonction de ce que tu lui as passé.

// Exemple concret 📱
// Puisque tu maîtrises TypeScript, on va faire ça comme des pros tout de suite, avec une interface pour typer nos données.

// Le composant Enfant :
// 1. On définit la "forme" des données attendues
interface ProductCardProps {
  title: string;
  price: number;
  isAvailable?: boolean; // Le '?' signifie que cette prop est facultative
}

// 2. On destructure les props directement dans les paramètres
export const ProductCard = ({ title, price, isAvailable = true }: ProductCardProps) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Prix : {price} €</p>
      {/* Affichage conditionnel simple */}
      {isAvailable ? <button>Ajouter</button> : <p>Rupture de stock</p>}
    </div>
  );
};

// Le composant Parent (qui utilise l'enfant) :
export const App = () => {
  return (
    <div className="catalog">
      {/* On passe les props comme des attributs HTML */}
      <ProductCard title="Clavier Mécanique" price={49.99} />
      <ProductCard title="Souris Gamer" price={29.99} isAvailable={false} />
    </div>
  );
};
// Explication technique ⚙️
// En React, le flux de données est unidirectionnel (Top-Down). Les données "coulent" toujours du Parent vers l'Enfant. Jamais l'inverse.
// Sous le capot, toutes les props que tu passes à un composant sont regroupées dans un seul gros objet JavaScript en lecture seule (Read-Only).

// Bonnes pratiques 🏆

// Déstructuration : Ne fais jamais (props: Props) => { return props.title }. Déstructure directement dans les paramètres ({ title, price }) comme dans mon exemple. C'est plus lisible.

// Erreurs fréquentes ⚠️

// Essayer de modifier une prop : Les props sont IMMUABLES. Si tu essaies de faire title = "Nouveau titre" à l'intérieur de ton composant ProductCard, React va hurler et ton app va crasher. Un composant ne modifie jamais les props qu'il reçoit.

// Oublier les accolades pour les nombres ou les booléens : Quand tu passes une string, tu fais title="Clavier". Mais pour tout le reste (nombres, booléens, objets, variables), tu DOIS utiliser des accolades : price={49.99}. Si tu fais price="49.99", tu passes une string, et ton TypeScript va te gronder.

// Typage strict : En TS, chaque composant doit avoir son interface de Props nommée NomDuComposantProps.

// Tips de senior 💡
// La prop la plus puissante en React s'appelle children. C'est une prop spéciale (intégrée de base) qui te permet de passer du contenu à l'intérieur de ton composant, entre sa balise d'ouverture et de fermeture, comme en HTML natif (<Modal> <p>Mon texte</p> </Modal>). C'est la base de ce qu'on appelle la "Composition", un pattern essentiel qu'on verra plus tard.