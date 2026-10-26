
---
title: "My Social Network API - Backend Architecture"
client: "Projet Académique (Simulation Facebook)"
year: 2026
category: "data"
expertise: "Développement Backend & Sécurité API"
demo: false
cover: "../../assets/page-portfolio/data-ia-my-social-network/logo-api.webp"
gallery: []
---
### Contexte

Ce projet s'inscrit dans le cadre d'une simulation professionnelle où Facebook a commandé la création d'une API REST pour un tout nouveau service de réseau social[cite: 5]. L'objectif était de concevoir une architecture backend robuste, en ayant carte blanche sur la définition des endpoints, tout en respectant un cahier des charges fonctionnel précis[cite: 5].

### Notre approche

Pour répondre à ces exigences, une API RESTful complète et sécurisée a été développée avec Node.js, Express et MongoDB :

- **Architecture & Modélisation :** Conception de schémas de base de données avancés pour gérer les utilisateurs, les groupes (publics, privés, secrets) et les événements[cite: 6, 7].
- **Fonctionnalités Sociales :** Implémentation de fils de discussion liés aux groupes ou aux événements[cite: 7]. Ajout d'albums photos commentables et de sondages interactifs[cite: 7].
- **Système de Billetterie & Transactions :** Création d'une billetterie avec gestion stricte des stocks (1 billet par personne extérieure) gérée via des transactions MongoDB atomiques (`mongoose.startSession()`)[cite: 7].
- **Modules Collaboratifs (Bonus) :** Développement d'une *Shopping List* événementielle et d'un module de *Covoiturage* interactif[cite: 8].
- **Sécurité Maximale :** Authentification par JWT, hachage des mots de passe (bcrypt), protection contre les attaques par force brute (rate limiting), sécurisation des en-têtes (Helmet), et trafic exclusivement chiffré via HTTPS.

### Livrables

Une API REST totalement fonctionnelle et documentée sur Postman, accompagnée d'un code source validé par des tests de sécurité et d'une visualisation architecturale via un composant Terminal interactif et un diagramme de flux de données.
