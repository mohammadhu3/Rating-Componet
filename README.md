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
