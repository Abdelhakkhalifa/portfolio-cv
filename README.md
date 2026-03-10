# Portfolio / CV — Abdelhak KHALIFA

## Présentation

Ce projet est un **site portfolio / CV interactif** réalisé avec **HTML, CSS, JavaScript et Bootstrap 5**.

L’objectif du site est de présenter mon **profil, mes compétences et mes expériences** sous la forme d’un site web moderne, responsive et interactif.

Le site est également **hébergé en ligne avec GitHub Pages**.

---

# Technologies utilisées

* HTML5  
* CSS3  
* JavaScript  
* Bootstrap 5 (framework CSS pour le design responsive)  
* Bootstrap Icons (bibliothèque d’icônes)  
* LocalStorage (sauvegarde des préférences utilisateur)

---

# Fonctionnalités JavaScript

Le site utilise plusieurs fonctionnalités JavaScript pour améliorer l’expérience utilisateur.

---

## Rendu dynamique

Les informations du CV sont stockées dans le fichier :


assets/js/data.js


Le fichier `main.js` lit ces données et **génère automatiquement certaines sections du site**.

Cela permet de **mettre à jour facilement le contenu du site sans modifier directement le HTML**.

---

## Filtre de compétences

Un champ de recherche permet de **filtrer les compétences en temps réel**.

L’utilisateur peut taper un mot clé pour afficher uniquement les compétences correspondantes.

Cette fonctionnalité est réalisée en **JavaScript avec la manipulation du DOM**.

---

## Mode sombre / clair

Le site possède un **mode sombre activable avec un bouton**.

La préférence de l’utilisateur est **sauvegardée dans le LocalStorage du navigateur**, ce qui permet de garder le thème choisi lors des prochaines visites.

---

## Formulaire de contact

Le site contient également un **formulaire de contact** permettant aux visiteurs d’envoyer un message.

Le formulaire inclut :

* validation des champs (nom, email, message)
* affichage d’un message de confirmation
* sauvegarde locale des messages

Actuellement, les messages sont **stockés dans le LocalStorage du navigateur** pour démontrer le fonctionnement du formulaire.

---

## Comment recevoir les messages du formulaire

Dans une version améliorée du projet, le formulaire pourrait être connecté à un **service externe ou un serveur** afin de recevoir les messages directement par email.

Plusieurs solutions sont possibles :

### EmailJS

Le formulaire peut être connecté à **EmailJS**, un service qui permet d’envoyer des emails directement depuis JavaScript sans serveur backend.

Fonctionnement :

1. L’utilisateur remplit le formulaire
2. Le message est envoyé via l’API EmailJS
3. Le propriétaire du site reçoit le message par email

---

### Formspree

Une autre solution consiste à utiliser **Formspree**, un service permettant de connecter facilement un formulaire HTML à une adresse email.

---

### Backend (Node.js ou PHP)

Une autre amélioration possible serait de connecter le formulaire à un **backend (Node.js ou PHP)** qui traiterait les messages et les stockerait dans une base de données ou les enverrait par email.

---

# Impression / Export PDF

Le bouton **Imprimer** utilise la fonction JavaScript :


window.print()


Cela permet d’exporter le CV au format **PDF avec un style optimisé pour l’impression**.

---

# Structure du projet


portfolio-cv
│
├── index.html
│
├── assets
│ ├── css
│ │ └── style.css
│ │
│ ├── js
│ │ ├── data.js
│ │ └── main.js
│ │
│ └── img
│
└── README.md


---

# Description des fichiers

| Fichier | Description |
|--------|-------------|
| index.html | structure principale du site |
| style.css | design, animations et mode sombre |
| data.js | données du CV |
| main.js | logique JavaScript |

---

# Responsive Design

Le site utilise le **système de grille Bootstrap** pour s’adapter automatiquement aux différents écrans :

* ordinateur
* tablette
* mobile

---

# Hébergement (GitHub Pages)

Le site est hébergé avec **GitHub Pages**.

## Étapes de déploiement

1. Push du projet sur GitHub
2. Aller dans **Settings → Pages**
3. Choisir :


Deploy from branch
Branch : main
Folder : /root


4. GitHub génère automatiquement le lien du site.

---

# Améliorations possibles

Plusieurs améliorations pourraient être ajoutées au projet dans le futur :

* connecter le formulaire de contact à un service email
* ajouter des **animations avancées avec JavaScript**
* intégrer automatiquement les **projets GitHub**
* ajouter une **section projets ou blog**
* améliorer l’accessibilité du site
* ajouter des **statistiques de visite (Google Analytics)**

Ces améliorations permettraient de rendre le site **plus interactif et plus professionnel**.

---

# Auteur

**Abdelhak KHALIFA**

Étudiant en informatique  
Développeur Web

---

# Objectif pédagogique

Ce projet m’a permis de pratiquer :

* le développement **front-end**
* l’utilisation d’un **framework CSS**
* la manipulation du **DOM avec JavaScript**
* la création d’un **site web interactif et responsive**
