# Interactive Rating Component

Ce projet est une petite application front-end réalisée en HTML, CSS et JavaScript.  
L’objectif était de recréer le composant “rating” de Frontend Mentor à partir des maquettes fournies,  
en respectant le plus fidèlement possible la mise en page et les effets visuels.

---

## Description du projet

L’utilisateur peut donner une note de **1 à 5** selon sa satisfaction.  
Lorsqu’il clique sur le bouton **Submit**, une carte de remerciement s’affiche avec la note sélectionnée.  
Tous les éléments (boutons, textes, images...) sont générés dynamiquement avec JavaScript.

J’ai choisi un design sobre avec un fond sombre et un accent orange, comme indiqué dans le guide de style.

---

## Fonctionnalités principales

- Construction de tout le contenu via **JavaScript** (`document.createElement`)  
- Animation fluide au survol des boutons **gérée par un event JS** (et non pas avec `:hover`)  
- Transition entre la partie “notation” et la partie “remerciement”  
- Responsive design pour mobile et bureau  
- Code organisé et facile à lire

> Pour le moment, la version actuelle ne sauvegarde pas la note dans le localStorage.  
> Chaque rechargement recommence donc depuis le début.

---

## Technologies utilisées

- **HTML5** : structure de base (une seule div `.container`)
- **CSS3** : mise en page, reset, transitions et couleurs  
- **JavaScript (ES6)** : création du DOM, gestion des événements et logique d’interaction

---

## Structure des fichiers

