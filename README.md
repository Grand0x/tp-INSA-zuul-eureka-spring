# Projet de Micro-Services pour E-Commerce

## Description

Ce projet est une démonstration d'une architecture de micro-services pour une application de e-commerce. Il utilise Spring Boot pour le développement des services, Eureka pour la gestion de la découverte des services, et Zuul comme API Gateway pour router et filtrer les requêtes. Ce système est conçu pour être simple mais évolutif, permettant une séparation claire des responsabilités via différents micro-services.

## Architecture

### Composants du Système

- **API Gateway (Zuul)**: Sert de point d'entrée unique pour toutes les requêtes externes. Il est responsable de router les requêtes vers les services appropriés et applique des politiques de sécurité pour l'authentification et la validation des requêtes.
- **Service de Découverte (Eureka)**: Permet à chaque micro-service de s'enregistrer et facilite la découverte dynamique des instances de service pour la communication inter-services.
- **Service d'Authentification**: Gère l'authentification des utilisateurs et la génération de tokens de sécurité.
- **Service Client**: Responsable de la gestion des informations clients, telles que les enregistrements et les mises à jour des profils.
- **Service Produit**: Gère les opérations relatives aux produits de l'e-commerce, telles que l'ajout, la suppression et la mise à jour des produits.
- **Service Commande**: Traite les commandes des clients, incluant la création, le suivi et la gestion des états des commandes.

### Diagramme d'Architecture

```mermaid
graph TB
    A[Front-end] -->|requêtes| B[API Gateway Zuul]
    B -->|route & filtre| E[Eureka Server]
    B -->|authentifie & route| C[Service Client]
    B -->|authentifie & route| D[Service Produit]
    B -->|authentifie & route| F[Service Commande]
    B -->|authentifie & route| G[Service Authentification]
    C -->|registre| E
    D -->|registre| E
    F -->|registre| E
    G -->|registre| E

    class A,B,C,D,E,F,G default
```


### Technologies Utilisées

- **Spring Boot**: Framework de développement pour les micro-services.
- **Spring Security & JWT**: Pour la sécurisation et l'authentification.
- **Netflix Zuul & Eureka**: Pour la gestion des routes et la découverte des services.
- **PostgreSQL**: Base de données pour la gestion des données des services.
- **Docker**: Utilisé pour la conteneurisation des services pour faciliter le déploiement.

## Méthode de Travail : Git Flow

Nous utilisons la méthode Git Flow pour gérer le développement de notre projet. Git Flow est une stratégie de gestion de branches qui aide à structurer et à organiser le développement de manière efficace et ordonnée. - Voici les principes clés et comment nous les appliquons :

### Branches Principales

- **main**: Cette branche contient le code de production, celui qui est actuellement en production.
- **develop**: Tous les développements en cours (features, corrections, etc.) sont fusionnés dans cette branche avant d'être passés en production.

### Workflow

1. **Démarrer une nouvelle fonctionnalité** : `git checkout -b feature/xyz develop`
2. **Terminer une fonctionnalité** : `git checkout develop` puis `git merge feature/xyz`
3. **Préparer une release** : `git checkout -b release/1.0 develop`
4. **Terminer une release** : `git checkout main` puis `git merge release/1.0` et aussi `git checkout develop` puis `git merge release/1.0`
5. **Gérer un hotfix** : `git checkout -b hotfix/urgent-fix main`

## Installation

*Instructions d'installation seront ajoutées ici une fois le projet prêt pour le déploiement.*

## Utilisation

*Des exemples d'utilisation et des instructions détaillées seront fournis ici pour aider les utilisateurs à démarrer avec l'application une fois celle-ci déployée.*

## Licence

*Informations sur la licence sous laquelle le projet est distribué seront ajoutées ici.*

