---
title: "Modèle prédictif d'attrition client"
category: data
client: "Service d'abonnement (démo)"
year: 2025
summary: "Un modèle de Machine Learning qui identifie les clients à risque de départ pour déclencher des actions ciblées."
services: ["Data Science", "Machine Learning", "MLOps"]
tools: ["Python", "Scikit-Learn", "Pandas", "Docker"]
featured: false
order: 2
demo: true
---

## Contexte
Les départs de clients étaient constatés trop tard pour être évités. L'objectif : anticiper les résiliations à partir de l'historique d'usage.

## Notre approche
- Exploration des données d'usage et de facturation, création de variables comportementales.
- Entraînement et comparaison de plusieurs modèles de classification, avec une attention particulière à leur interprétabilité.
- Déploiement du modèle via une API Python conteneurisée, interrogée chaque semaine par le CRM.

## Livrables
Un score de risque par client directement visible dans les outils existants, accompagné des principaux facteurs explicatifs.
