// Mini-exercice 🎯
// Pour valider cette leçon, regarde ce bout de code écrit par un stagiaire (il est volontairement faux).
export const header = () => {
  return (
    <nav class="navbar">Logo</nav>
    <div>Menu de navigation</div>
  )
}

// Voici le code final du stagiaire, entièrement corrigé :
// 1. Majuscule au nom du composant
export const Header = () => {
  return (
    // 2. Fragment pour envelopper les éléments
    <>
      {/* 3. className au lieu de class */}
      <nav className="navbar">Logo</nav>
      <div>Menu de navigation</div>
    </>
  );
};