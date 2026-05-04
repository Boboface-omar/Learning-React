// Mini-exercice 🎯

// Imagine que tu dois créer un composant <Badge /> pour afficher le rôle d'un utilisateur ("Admin", "Membre", etc.).

// Ta mission : Écris-moi le code complet (en TypeScript) de ce composant <Badge />.
// Il doit accepter deux props :

// label (une string, obligatoire) : le texte à afficher.

// color (une string, facultatif) : qui par défaut sera égale à "blue".
interface BadgeProps {
    label: string;
    color?: string;
}

export const Badge = ({ label, color = "blue" }: BadgeProps) => {
    return (
        // On utilise la prop "color" pour injecter du style dynamique
        <span className="badge" style={{ backgroundColor: color, padding: "4px 8px", borderRadius: "12px" }}>
            {label}
        </span>
    );
};