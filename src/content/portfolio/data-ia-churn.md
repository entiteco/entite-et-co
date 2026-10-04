---
title: "Prédiction de Churn & Revenu à Risque"
client: "Projet Académique (EFREI)"
year: 2026
category: "data"
demo: false
cover: "../../assets/page-portfolio/data-ia/entite__data_ia_churn.webp"
coverAlt: "Logo du projet Prédiction de Churn & Revenu à Risque"
summary: "Pipeline IA complet pour anticiper le désengagement client et estimer le revenu à risque : modèle prédictif, API FastAPI et dashboard Streamlit."
services:
  - "Data Science"
  - "Machine Learning"
  - "Data Engineering"
  - "Dashboard"
tools:
  - "Python"
  - "XGBoost"
  - "FastAPI"
  - "Docker"
  - "Streamlit"
gallery: []
order: 9
---
### Contexte

Dans le secteur des services, acquérir un nouveau client coûte 5 à 25 fois plus cher que d'en fidéliser un existant. Ce projet (réalisé dans le cadre du Mastère Data Engineering & IA à l'EFREI) vise à transformer des données d'activité clients brutes en un système d'aide à la décision proactif permettant d'anticiper le désengagement et d'évaluer dynamiquement le "Revenu à Risque".

### Notre approche

Le projet déploie un pipeline IA complet (hybride Agile/CRISP-DM) :

- **Modélisation & ML :** Entraînement et comparaison de plusieurs algorithmes (Régression Logistique, Random Forest, XGBoost, Deep Learning). Le choix final s'est porté sur la Régression Logistique maximisant le Recall (63.7%) pour cibler efficacement les clients sur le départ.
- **Data Engineering & Déploiement :** Création d'une API FastAPI conteneurisée avec Docker, et gestion du déséquilibre des classes via SMOTE.
- **Interface :** Développement d'un dashboard interactif sous Streamlit pour la simulation client et l'analyse globale.

### Livrables

Un micro-service d'inférence (API) et un tableau de bord analytique complet, déployés via Docker-Compose, permettant aux équipes métiers d'optimiser le ROI de leurs campagnes de rétention.
