FROM node:18-alpine

WORKDIR /app

COPY backend/package*.json ./
RUN npm install

COPY backend/. .
COPY ../public ./public

EXPOSE 8000

CMD ["node", "index.js"]