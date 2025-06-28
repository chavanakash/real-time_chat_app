FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .        # This copies only files inside backend/
COPY ../public ./public  # <-- This brings in the public/ folder from parent dir

EXPOSE 8000

CMD ["node", "index.js"]
