# Pobranie obrazu Node.js
FROM node:18-alpine AS builder

WORKDIR /app

# Kopiowanie package.json i package-lock.json
COPY package.json package-lock.json ./

# Instalacja zależności
RUN npm install

# Kopiowanie reszty plików
COPY . .

# Budowanie aplikacji
RUN npm run build

# Expose port 3000 (Nginx domyślnie działa na 80, ale możemy go zmienić w nginx.conf)
EXPOSE 3000

# Uruchamianie 
CMD ["npm", "start"]