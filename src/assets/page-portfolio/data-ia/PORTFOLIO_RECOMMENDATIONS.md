# Recommandations Portfolio — Top 10 des projets à publier

> Analyse réalisée à partir des fichiers de haut niveau de chaque projet (README, requirements, Dockerfile, docker-compose, manifests). Objectif : maximiser l'impact auprès des recruteurs **Data Engineering, MLOps, Data Science et Data Analysis**.

## Vue d'ensemble

| #  | Projet                                             | Spécialité                 | Signal fort                                                               |
| -- | -------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------- |
| 1  | ~~`efrei-projet-big-data` (Hubble Lakehouse)~~ | Data Engineer                | Spark + Airflow + Lakehouse Medallion + K8s, **déployé en ligne** |
| 2  | `M2OPS_KVZI` (La Gazette)                        | Data Engineer / MLOps        | Airflow + MinIO + PostgreSQL + CI GitHub Actions                          |
| 3  | `Data_Integration_TP3_API_1_2`                   | Data Engineer                | Kafka + ksqlDB + Apache Beam → Data Lake & Data Warehouse                |
| 4  | ~~`Projet_Data_Science_Churn`~~                | Data Scientist / MLOps       | XGBoost + SHAP servi par FastAPI, Dockerisé                              |
| 5  | ~~`Projet_IA_Gen_AISCA`~~                      | AI Engineer (GenAI)          | RAG + SBERT + Gemini, garde-fous anti-hallucination                       |
| 6  | `projet_deep_learning`                           | Data Scientist / ML Engineer | PyTorch, ViT, multimodal image + texte, MLflow                            |
| 7  | `CI_CD`                                          | MLOps / DevOps Data          | GitHub Actions + Azure + Terraform + tests E2E                            |
| 8  | `LangChain_LLM`                                  | AI Engineer (GenAI)          | Agent LangChain RAG sur 5 000 livres, API FastAPI                         |
| 9  | ~~`Project_Urban_Data_Explorer`~~              | Data Engineer / Data Analyst | Pipeline open data Paris, multi-bases, API + dashboard                    |
| 10 | `Akigora`                                        | Data Analyst                 | Dashboard Streamlit réalisé en **stage en entreprise**            |

---

## 1. Hubble Lakehouse — `efrei-projet-big-data`

- **Spécialité :** Data Engineer
- **Mots-clés ATS :** Apache Spark, PySpark, Apache Airflow, Data Lakehouse, Architecture Medallion (Bronze/Silver/Gold), PostgreSQL, Flask, REST API, JWT, Docker Compose, Kubernetes, Makefile, ETL/ELT
- **Argumentaire :** C'est le projet le plus complet du répertoire et celui qui ressemble le plus à une plateforme data de production. Il croise une source volumineuse (~500 000 lignes de l'archive MAST/Hubble) avec une source externe (météo spatiale NOAA), ce qui montre la gestion de sources hétérogènes. L'architecture Medallion est aujourd'hui le standard du secteur (Databricks, Fabric) : la citer et la démontrer vous place directement dans le vocabulaire des équipes data. L'orchestration Airflow, le traitement Spark, l'API sécurisée par JWT et le manifest Kubernetes couvrent toute la chaîne, de l'ingestion à l'exposition. Surtout, **les endpoints Airflow et API sont déployés en ligne** : un recruteur peut cliquer et voir le projet fonctionner, ce qu'aucun autre projet ne permet. À placer en tête de profil GitHub (épinglé) et en premier sur le CV.

## 2. La Gazette — `M2OPS_KVZI`

- **Spécialité :** Data Engineer / MLOps
- **Mots-clés ATS :** Apache Airflow, MinIO (S3-compatible object storage), PostgreSQL, Docker, Docker Compose, GitHub Actions, CI/CD, Pytest, pipeline automatisé, Data Lake
- **Argumentaire :** Pipeline automatisé de bout en bout (lecture, stockage, synthèse thématique de la presse quotidienne) avec ce qui manque à la plupart des projets étudiants : **une CI GitHub Actions et une suite de tests**, plus des scripts de lancement (`./bin/dev`, `./bin/test`) qui rendent le projet reproductible en une commande. MinIO montre la maîtrise du stockage objet de type S3, une compétence directement transférable vers AWS/GCP/Azure. Cela démontre une culture d'ingénierie logicielle appliquée à la data, très recherchée pour des postes Data Engineer et MLOps.

## 3. Data Platform Kafka → Lake & Warehouse — `Data_Integration_TP3_API_1_2`

- **Spécialité :** Data Engineer (streaming)
- **Mots-clés ATS :** Apache Kafka, Confluent Platform, ksqlDB, Schema Registry, Kafka Connect, Apache Beam, Data Lake, Data Warehouse, MySQL, Django REST Framework, Docker Compose, streaming temps réel
- **Argumentaire :** C'est votre meilleure démonstration d'**architecture distribuée et de streaming**. Le flux Kafka → ksqlDB → Apache Beam → Data Lake + Data Warehouse, puis la couche de service Django REST, montre que vous savez concevoir une plateforme découplée (ingestion / traitement / exposition) organisée en mono-repo. Kafka et Beam (le modèle de programmation de Google Dataflow) sont des mots-clés à forte valeur dans les offres Data Engineer. *Conseil :* fusionnez-y ou liez-y `Data_integration_Kafka_KsqlDB_Confluent` (producteur de transactions + TP ksqlDB) pour présenter un seul repo « streaming » solide.

## 4. Rétention client & risque de revenus — `Projet_Data_Science_Churn`

- **Spécialité :** Data Scientist / MLOps
- **Mots-clés ATS :** Machine Learning, XGBoost, SHAP (explicabilité), churn prediction, FastAPI, Streamlit, Docker, Docker Compose, micro-service d'inférence, Python, RNCP Expert en Ingénierie de Données
- **Argumentaire :** Le projet relie un modèle à un **problème métier chiffré** (coût d'acquisition contre coût de rétention), ce qui parle autant aux managers qu'aux équipes techniques. L'explicabilité via SHAP est un vrai différenciateur : elle montre que vous savez justifier une prédiction, un enjeu clé (AI Act, confiance métier). Le modèle n'est pas resté dans un notebook : il est **servi par une API FastAPI et consommé par un front Streamlit, le tout dockerisé**, soit le cycle complet attendu d'un profil MLOps. Le cadre certifiant RNCP renforce sa crédibilité.

## 5. AISCA — Agent Sémantique & Génératif — `Projet_IA_Gen_AISCA`

- **Spécialité :** AI Engineer / Data Scientist (IA générative)
- **Mots-clés ATS :** IA Générative, LLM, RAG (Retrieval-Augmented Generation), Google Gemini, Sentence-Transformers (SBERT), embeddings, similarité cosinus, NLP, Streamlit, Docker Compose, prompt engineering
- **Argumentaire :** Projet GenAI end-to-end avec une **architecture hybride** pertinente : la recherche sémantique se fait en local avec SBERT (sans coût ni fuite de données) et le LLM n'intervient que pour la génération. Les garde-fous logiques anti-hallucination montrent une maturité rare : vous ne vous contentez pas d'appeler une API, vous fiabilisez la sortie. Le cas d'usage (matching de compétences, coaching carrière) est concret et facile à présenter en entretien. Un des projets les plus attractifs du moment pour les recruteurs.

## 6. Aide au tri radiologique — `projet_deep_learning`

- **Spécialité :** Data Scientist / ML Engineer (Computer Vision)
- **Mots-clés ATS :** Deep Learning, PyTorch, Computer Vision, Transfer Learning, EfficientNet, Vision Transformer (ViT), timm, Autoencoder / VAE, détection d'anomalies, multimodal, Hugging Face Transformers, BioBERT, MLflow, Streamlit
- **Argumentaire :** Démonstration avancée de Deep Learning : trois approches comparées (supervisé, détection d'anomalies, multimodal image + texte) sur un cas médical à fort impact. Le code est **structuré en package** (`src/models`, `src/training`, `src/evaluation`) plutôt qu'en notebooks seuls, et le **tracking MLflow** apporte la dimension MLOps (reproductibilité, comparaison d'expériences). Le rapport détaillé avec analyse critique montre une vraie rigueur scientifique. Idéal pour des postes ML Engineer ou Data Scientist en santé / deeptech.

## 7. CI/CD & Cloud Azure — `CI_CD`

- **Spécialité :** MLOps / DevOps Data
- **Mots-clés ATS :** CI/CD, GitHub Actions, Azure, Azure Blob Storage, Terraform, Infrastructure as Code, Docker, Docker Compose, FastAPI, Pytest, tests unitaires, tests E2E, idempotence, Nginx, MySQL
- **Argumentaire :** Ce repo prouve des compétences d'**industrialisation** que beaucoup de profils data n'ont pas : pipelines GitHub Actions, tests unitaires et E2E, déploiement cloud Azure et provisionnement Terraform. La mise en situation (pipeline data idempotente, fonctions pures, table d'audit des fichiers traités) montre que vous pensez fiabilité et rejouabilité, des notions clés en Data Engineering. *Conseil :* regroupez-y `IOA_Tp_1_Airflow`, `IOA_Tp_2_Kubernetes` et `IOA_Tp_3_Terraform` sous la forme d'un repo « Data Infrastructure & Automation » (Airflow + Kubernetes + Terraform + CI/CD), ce qui donne un très bon signal MLOps.

## 8. Agent LLM sur Project Gutenberg — `LangChain_LLM`

- **Spécialité :** AI Engineer (IA générative)
- **Mots-clés ATS :** LangChain, LLM, Azure OpenAI, RAG, embeddings, vector store, agent, spaCy (NER), web scraping, FastAPI, Swagger/OpenAPI, Python
- **Argumentaire :** Complète AISCA avec l'**écosystème Microsoft/Azure OpenAI et LangChain**, le framework le plus cité dans les offres GenAI. Le projet couvre la constitution d'un dataset par scraping (5 000+ livres), un agent capable d'utiliser plusieurs sources (métadonnées, résumés, texte intégral), l'extraction d'entités (personnages) avec spaCy, l'**évaluation du RAG** et l'exposition via FastAPI. Montrer deux projets GenAI avec deux fournisseurs différents (Gemini et Azure OpenAI) prouve votre polyvalence.

## 9. Urban Data Explorer — `Project_Urban_Data_Explorer`

- **Spécialité :** Data Engineer / Data Analyst
- **Mots-clés ATS :** Open Data, ETL, pipeline de transformation, MongoDB, MySQL, Redis, Flask, REST API, Docker Compose, dashboard, data visualisation
- **Argumentaire :** Projet open data (données de la Ville de Paris : logements sociaux, équipements publics) qui va de la transformation des données à un dashboard front, en passant par une API. L'usage combiné de **plusieurs bases (relationnelle, document, cache)** montre que vous savez choisir le bon stockage selon le besoin, un argument d'architecture apprécié. Le thème urbain parle à tout le monde, ce qui en fait un bon support de démo. Il est d'ailleurs déjà mis en avant sur votre site Entité & Co.

## 10. Dashboard Akigora — `Akigora`

- **Spécialité :** Data Analyst
- **Mots-clés ATS :** Data Analysis, Streamlit, Python, Pandas, dashboard, KPI, data visualisation, Business Intelligence, stage
- **Argumentaire :** C'est le seul projet issu d'une **expérience en entreprise** (stage Data Analyst, Akigora, Bordeaux). Pour un recruteur, un livrable réel répondant à un besoin métier pèse plus lourd qu'un TP. Il couvre aussi le volet Data Analysis de votre profil. *Attention :* vérifiez avec l'entreprise que le code et les données peuvent être publiés, et anonymisez-les si besoin.

---

## Mentions honorables

- **`NoSQL_Project_Redis_MongoDB`** — Redis (temps réel) + MongoDB (historique) + FastAPI + React, dockerisé avec Makefile : bon projet full-stack data, à publier en second rang.
- **`MLOps_machine_learning_in_production_embedding_a_model_in_a_backend`** — modèle servi par FastAPI + Streamlit + Docker + tests API : un bon exemple court de mise en production d'un modèle.
- **`Brief_MLflow`** — orchestration avec Mage + MLflow (Docker) : à intégrer dans un repo « MLOps » plutôt qu'à publier seul.
- **`Sécurité_1`** — le lab (Vault, RLS PostgreSQL, pgAudit, TLS) est un vrai atout « Data Security / Gouvernance », rare chez les Data Engineers.
- **`Projet_ML_RTE`** — ML classique propre (pipeline sans fuite, ensemble + non supervisé) sur des données énergie RTE.

## À ne pas mettre en avant

- `docker-hadoop-spark-master` et `cp-all-in-one-7.5.0-post` : ce sont des dépôts tiers (Big Data Europe, Confluent). Les présenter comme vos projets serait contre-productif ; citez-les seulement comme outils utilisés.
- `Programmes_de_base`, `Concepts_Mathematiques`, `Deep_Learning` (perceptron), `Data_integration_To_fill_prog_fonc`, `MLOPS_Big_Data_Kafka` : trop scolaires ou trop courts pour un portfolio.
- `Horloge_Master`, `go-kleo`, `Entite_et_Co` : hors périmètre data (`Entite_et_Co` reste une bonne vitrine personnelle à part).

## Checklist avant publication (important)

1. **Secrets en clair** : mots de passe dans `CI_CD/clienthub_project/docker-compose.yml`, clés JWT codées en dur dans `Flask_Api_Bdd_Livres*`, fichier `.env` dans `Sécurité_1/Lab_Security_Cryptography/`. Déplacez-les dans des `.env` ignorés par git et fournissez un `.env.example`.
2. **États Terraform** : `terraform.tfstate*` (dans `IOA_Tp_3_Terraform` et `CI_CD/Mise_En_Situation_Intégration_Continu`) ne doivent jamais être publiés, car ils peuvent contenir des secrets. Ajoutez-les au `.gitignore`.
3. **Environnements virtuels versionnés** : les dossiers `env/` (Flask, MLOPS_Big_Data_Kafka, CI_CD) doivent être exclus.
4. **Données volumineuses ou sensibles** : publiez un lien de téléchargement ou un échantillon plutôt que les datasets complets (comme c'est déjà fait pour Hubble).
5. **Projets en binôme** : créditez vos co-équipiers (Valentin Massonnière, Zuzanna Gliniak, Tristan Bouris) et précisez votre contribution personnelle dans chaque README.
6. **Vitrine** : pour chaque projet du Top 5, ajoutez un schéma d'architecture, une capture d'écran ou un GIF, et une section « Résultats / métriques ».
