---
title: "My Social Network API - Backend Architecture"
client: "EFREI academic project"
year: 2026
category: "data"
summary: "Secure REST API (Node.js, Express, MongoDB) for a social network: groups, events, transactional ticketing, carpooling and polls."
services:
  - "REST API"
  - "Backend Development"
  - "API Security"
  - "Data Modelling"
tools:
  - "Node.js"
  - "Express"
  - "MongoDB"
  - "JWT"
  - "Postman"
cover: "../../../assets/page-portfolio/data-ia/entite_co_data_ia_my_social_network_logo.webp"
coverAlt: "My Social Network API logo, the social network REST API"
order: 12
intro:
  context: "This project is part of a professional simulation in which Facebook commissioned a REST API for a brand-new social networking service. The goal was to design a robust backend architecture, with full freedom over the endpoint design, while meeting a precise functional specification."
  approachIntro: "To meet these requirements, a complete and secure RESTful API was built with Node.js, Express and MongoDB."
  approach:
    - icon: "database"
      title: "Architecture & Modelling"
      text: "Advanced database schemas to manage users, groups (public, private, secret) and events."
    - icon: "users"
      title: "Social Features"
      text: "Discussion threads attached to groups or events, commentable photo albums and interactive polls."
    - icon: "ticket"
      title: "Ticketing & Transactions"
      text: "Ticketing with strict stock control (one ticket per outside attendee) handled through atomic MongoDB transactions (mongoose.startSession())."
    - icon: "rocket"
      title: "Collaborative Modules (Bonus)"
      text: "An event Shopping List and an interactive Carpooling module."
    - icon: "shield"
      title: "Maximum Security"
      text: "JWT authentication, bcrypt password hashing, rate limiting against brute force, hardened headers (Helmet) and HTTPS-only encrypted traffic."
  deliverables: "A fully working REST API documented in Postman, with source code validated by security tests and an architectural visualisation through an interactive Terminal component and a data flow diagram."
---
