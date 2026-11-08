# POC MongoDB — Document Database

Proof of Concept réalisé dans le cadre d’un Peer Learning Day sur les bases de données NoSQL.

## Objectif
Comprendre le modèle document et réaliser un petit projet fonctionnel (CRUD + feature distinctive).

## Prérequis
- Node.js
- Docker

## Installation

```bash
# Lancer MongoDB
docker run -d -p 27017:27017 --name mongodb mongo:7

# Installer la dépendance
npm install
```

## Lancer le POC

```bash
npm start
```

## Ce que le POC démontre
- Connexion à MongoDB
- Insert, Find, Update, Delete
- Requête sur un champ imbriqué (`metadata.ip`)
