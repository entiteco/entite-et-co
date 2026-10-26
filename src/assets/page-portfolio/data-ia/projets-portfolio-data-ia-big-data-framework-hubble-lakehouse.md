
---
title: "Hubble Lakehouse - Pipeline Big Data"
client: "Projet Académique EFREI"
year: 2026
category: "data"
expertise: "Data Engineering, Architecture Lakehouse & DevOps"
demo: false
cover: "../../assets/page-portfolio/data-ia-big-data-framework/logo-hubble.webp"
gallery: []
---
### Contexte

L'objectif de ce projet était de concevoir et d'implémenter une architecture Lakehouse complète selon le paradigme Médaillon (couches Bronze, Silver, Gold) pour analyser les données du télescope spatial Hubble[cite: 24]. Le défi consistait à ingérer de manière fiable un historique massif d'observations astronomiques (MAST) traité en mode batch, et de le croiser avec un flux continu de données de météo spatiale (NOAA SWPC) traité en streaming[cite: 24, 26].

### Notre approche

Le pipeline a été construit pour garantir la traçabilité, la reproductibilité et la haute disponibilité des données, en s'appuyant sur un écosystème Big Data robuste :

- **Ingestion & Stockage Distribué :** Sauvegarde des données brutes (batch et streaming) dans un système de fichiers distribué HDFS (couche Bronze) au format Parquet pour garantir la rejouabilité[cite: 24, 28].
- **Transformation & Orchestration :** Nettoyage, typage et structuration des données via Apache Spark (couches Silver et Gold), avec une orchestration stricte de l'ensemble des tâches automatisée par Apache Airflow[cite: 24, 27].
- **Exposition Analytique :** Matérialisation des données agrégées dans une base de données relationnelle PostgreSQL, répartie en quatre datamarts métier spécifiques[cite: 24, 28].
- **Accessibilité & Sécurité :** Développement d'une API REST avec Flask pour exposer les datamarts de manière sécurisée (authentification par JWT).
- **DevOps & Déploiement :** Conteneurisation de tous les services avec Docker et orchestration sur un cluster Kubernetes hébergé sur un VPS, avec intégration et déploiement continus (CI/CD) via GitLab[cite: 29, 34, 35].

### Livrables

Un pipeline Big Data de bout en bout totalement fonctionnel, comprenant le code source versionné sur GitHub, une API sécurisée, une démonstration vidéo des flux de données, ainsi qu'un rapport décisionnel interactif sous Power BI répondant aux problématiques de quatre profils scientifiques.
