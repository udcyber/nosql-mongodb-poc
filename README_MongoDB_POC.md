# POC MongoDB — Document Database

## Description
Petit Proof of Concept pour le PLD NoSQL.  
Montre les opérations CRUD + une feature distinctive (requête sur document imbriqué).

## Prérequis
- Node.js
- Docker

## Installation

```bash
# Lancer MongoDB
docker run -d -p 27017:27017 --name mongodb mongo:7

# Installer la dépendance
npm install mongodb
```

## Lancer le POC

```bash
node mongodb_poc.js
```

## Ce que le POC démontre
- Connexion à MongoDB
- Insert, Find, Update, Delete
- Requête sur un champ imbriqué (`metadata.ip`) — feature distinctive des bases document
