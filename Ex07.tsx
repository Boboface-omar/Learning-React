// Mini-exercice 🎯

// Un développeur junior de ton équipe a écrit ce composant qui est censé mettre à jour le titre de l'onglet du navigateur à chaque fois que l'utilisateur reçoit un nouveau message.

// Mais il y a une grosse erreur dans son code, qui fait que le titre de l'onglet ne se mettra jamais à jour si le nombre de messages change après le premier affichage.
import { useEffect } from 'react';

export const MessageNotifier = ({ unreadCount }: { unreadCount: number }) => {
  
  useEffect(() => {
    document.title = `Vous avez ${unreadCount} messages !`;
  }, []);

  return <div>Messages non lus : {unreadCount}</div>;
};

// CORRECTION :
// L'erreur se trouvait dans le tableau de dépendances du useEffect (la toute dernière ligne du hook) :
import { useEffect } from 'react';

export const MessageNotifier = ({ unreadCount }: { unreadCount: number }) => {
  
  useEffect(() => {
    document.title = `Vous avez ${unreadCount} messages !`;
  }, [unreadCount]); // <-- L'erreur était ici : il fallait ajouter la variable !

  return <div>Messages non lus : {unreadCount}</div>;
};