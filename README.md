# Interactive Rating Component – Frontend Mentor

Ceci est ma solution au challenge **Interactive rating component** de Frontend Mentor.  
L’objectif était de reproduire au plus près le design fourni et de créer un composant de notation interactif et accessible.

## Aperçu

### Le challenge

Les utilisateurs doivent pouvoir :

- Voir une mise en page optimale selon la taille de l’écran (mobile et desktop).
- Voir des états de survol pour tous les éléments interactifs.
- Sélectionner une note de 1 à 5.
- Soumettre cette note et voir un écran de remerciement affichant la note choisie.

## Réalisé avec

- HTML5 sémantique.
- CSS3 (flexbox, variables HSL, états hover/focus, responsive design).
- JavaScript vanilla (gestion d’état, événements, manipulation du DOM).

## Fonctionnalités

- Sélection d’une note via des boutons ronds (1 à 5) avec un état visuel « sélectionné ».
- Gestion au clavier (Tab + Entrée/Espace) grâce à l’utilisation de vrais boutons.
- Affichage dynamique du message `You selected X out of 5` sur la carte de remerciement.
- Bascule entre la carte de notation et la carte “Thank you” après soumission.

## Ce que j’ai appris

En réalisant ce projet, j’ai pu :

- M’entraîner à gérer un petit état en JavaScript (stockage de la note sélectionnée et mise à jour de l’interface).
- Utiliser `querySelectorAll` et `forEach` pour ajouter des écouteurs d’événements à plusieurs boutons.
- Manipuler les classes CSS (`classList.add` / `classList.remove`) pour gérer les états actifs et les styles.
- Mettre en place deux écrans dans la même page (notation et remerciement) et basculer entre eux en modifiant `display`.

## Ressources utiles

- Frontend Mentor : https://www.frontendmentor.io
- MDN Web Docs – Événements et DOM : https://developer.mozilla.org/

## Auteur

- Frontend Mentor – [@LuumiA](https://www.frontendmentor.io/profile/LuumiA)
- GitHub – [@LuumiA](https://github.com/LuumiA)
