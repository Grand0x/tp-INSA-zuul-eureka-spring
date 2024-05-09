# Choisissez une image de base pour Node.js
FROM node:16

# Définissez le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copiez le fichier package.json et package-lock.json (si disponible)
COPY package*.json ./

# Installez les dépendances du projet
RUN npm install

# Copiez tous les fichiers locaux dans le conteneur
COPY . .

# Exposez le port sur lequel votre application va tourner
EXPOSE 3000

# Commande pour démarrer votre application
CMD ["node", "app.js"]
