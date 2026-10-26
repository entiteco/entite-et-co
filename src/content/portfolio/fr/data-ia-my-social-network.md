---
title: "My Social Network API - Architecture Backend"
client: "Projet académique EFREI"
year: 2026
category: "data"
summary: "API REST sécurisée (Node.js, Express, MongoDB) pour un réseau social : groupes, événements, billetterie transactionnelle, covoiturage et sondages."
services:
  - "API REST"
  - "Développement Backend"
  - "Sécurité API"
  - "Modélisation de données"
tools:
  - "Node.js"
  - "Express"
  - "MongoDB"
  - "JWT"
  - "Postman"
cover: "../../../assets/page-portfolio/data-ia/entite_co_data_ia_my_social_network_logo.webp"
coverAlt: "Logo de My Social Network API, l'API REST de réseau social"
order: 12
intro:
  context: "Ce projet s'inscrit dans le cadre d'une simulation professionnelle où Facebook a commandé la création d'une API REST pour un tout nouveau service de réseau social. L'objectif était de concevoir une architecture backend robuste, en ayant carte blanche sur la définition des endpoints, tout en respectant un cahier des charges fonctionnel précis."
  approachIntro: "Pour répondre à ces exigences, une API RESTful complète et sécurisée a été développée avec Node.js, Express et MongoDB."
  approach:
    - icon: "database"
      title: "Architecture & Modélisation"
      text: "Conception de schémas de base de données avancés pour gérer les utilisateurs, les groupes (publics, privés, secrets) et les événements."
    - icon: "users"
      title: "Fonctionnalités Sociales"
      text: "Fils de discussion liés aux groupes ou aux événements, albums photos commentables et sondages interactifs."
    - icon: "ticket"
      title: "Billetterie & Transactions"
      text: "Billetterie avec gestion stricte des stocks (1 billet par personne extérieure) via des transactions MongoDB atomiques (mongoose.startSession())."
    - icon: "rocket"
      title: "Modules Collaboratifs (Bonus)"
      text: "Shopping List événementielle et module de Covoiturage interactif."
    - icon: "shield"
      title: "Sécurité Maximale"
      text: "Authentification JWT, hachage bcrypt, rate limiting contre la force brute, en-têtes sécurisés (Helmet) et trafic exclusivement chiffré en HTTPS."
  deliverables: "Une API REST totalement fonctionnelle et documentée sur Postman, accompagnée d'un code source validé par des tests de sécurité et d'une visualisation architecturale via un composant Terminal interactif et un diagramme de flux de données."
---
