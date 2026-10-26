---
title: "Hubble Lakehouse — Big Data Architecture & Space Weather"
client: "M1 Data Engineering & AI academic project - EFREI Paris"
year: 2026
category: "data"
summary: "Medallion Big Data pipeline, batch and streaming: Hubble telescope observations joined with NOAA space weather, served as 4 business datamarts."
services:
  - "Data Engineering"
  - "Lakehouse Architecture"
  - "Streaming"
  - "DevOps"
tools:
  - "Apache Spark"
  - "Airflow"
  - "HDFS"
  - "Kubernetes"
  - "Power BI"
cover: "../../../assets/page-portfolio/data-ia/entite_co_data_ia_hubble_lakehouse_logo.webp"
coverAlt: "Hubble Lakehouse logo, the Big Data pipeline for Hubble telescope observations"
order: 13
intro:
  context: "Design an end-to-end Lakehouse architecture to ingest, clean and expose heterogeneous data: a massive history of more than 30 years of observations and a continuous space weather feed."
  approachIntro: "A Big Data pipeline (Medallion architecture) processes, in batch and streaming, the metadata of Hubble telescope observations joined with space weather (NOAA), to feed four business datamarts."
  approach:
    - icon: "planet"
      title: "Physicist Datamart"
      text: "Sky mapping to identify over-observed regions and the blind spots of research."
    - icon: "flask"
      title: "Chemist Datamart"
      text: "Spectrographic analysis of narrow-band filters (hydrogen, oxygen, sulphur)."
    - icon: "sun"
      title: "Biologist Datamart"
      text: "Detection of observations corrupted by solar flares (NOAA space weather)."
    - icon: "wrench"
      title: "Engineer Datamart"
      text: "Maintenance tracking and how instrument calibration times evolve over time."
  deliverables: "A fully working end-to-end Big Data pipeline: source code versioned on GitHub, a JWT-secured API, a video demo of the data flows and a Power BI decision report split into four business pages."
---
