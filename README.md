# DWWM CEPPIC 2025 – FOAD du 23/10/2025

## Sujet

À partir du component **Rating** de *Frontend Mentor*, j’ai réalisé un composant **HTML / CSS / JavaScript** à partir des maquettes fournies dans le dossier *design*, en respectant le plus fidèlement possible l’apparence du modèle.

L’objectif était de reproduire un composant de notation simple et esthétique, avec une interaction fluide gérée entièrement en JavaScript.

---

## Consignes du projet

- Le survol des éléments numérotés (1 à 5) doit comprendre une **animation fluide et esthétique**.  
  → L’animation doit être déclenchée **par un event JavaScript** (et non par la pseudo-classe `:hover` en CSS).

- Lors du clic sur **Submit**, un message de remerciement doit apparaître avec la note sélectionnée.  
  (Dans la version actuelle, la note n’est pas encore enregistrée dans le *localStorage*.)

- *Bonus optionnel :* La note attribuée peut être stockée dans le `localStorage` du navigateur pour être affichée automatiquement à la réouverture.  
- *Bonus encore plus optionnel :* Tous les éléments HTML doivent être créés dynamiquement en JavaScript.

---

## Réalisation

Le projet a été développé **sans HTML statique**, à l’exception d’une seule `<div class="container">` dans le fichier principal.  
Tout le contenu (texte, boutons, images, titres, etc.) est généré par **JavaScript** via `document.createElement`.

Les effets d’animation sont gérés avec des classes CSS ajoutées ou retirées en fonction des événements :

```js
btn.addEventListener("mouseenter", () => {
  btn.classList.add("hover");
});
btn.addEventListener("mouseleave", () => {
  btn.classList.remove("hover");
});
````

Et la transition CSS associée :

```css
#rate button.hover {
  background-color: #fb7413;
  color: #fff;
  transform: scale(1.1);
  transition: all 0.3s ease;
}
```

---

## Fonctionnement

1. L’utilisateur choisit une note entre **1** et **5**.
2. Le bouton choisi devient actif et change de couleur.
3. Au clic sur **Submit**, la carte “Thank you” s’affiche avec la note sélectionnée.
4. (Dans la version avec localStorage, cette note resterait enregistrée après rechargement.)

---

## Technologies utilisées

* **HTML5** : structure minimale (1 div container)
* **CSS3** : reset, style principal, responsive design, transitions
* **JavaScript (ES6)** : création dynamique du DOM, gestion des événements et des animations

---

## Structure du projet

```
index.html
assets/
│
├── css/
│   ├── reset.css
│   └── style.css
│
├── js/
│   └── script.js
│
└── img/
    ├── icon-star.svg
    ├── illustration-thank-you.svg
    └── favicon-32x32.png
```


## Résultat attendu

* Interface fidèle à la maquette
* Animation fluide et naturelle au survol des notes (event JS uniquement)
* Composant responsive sur mobile et desktop
* Passage automatique à la vue “Thank you” après validation

---

## Auteur

Projet réalisé dans le cadre de la formation **DWWM CEPPIC 2025 – FOAD**
Date : *23 octobre 2025*
Travail personnel réalisé à partir des consignes du formateur.
