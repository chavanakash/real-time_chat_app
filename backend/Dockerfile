FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy all project files including public/
COPY . .

# Ensure public/ folder exists
# Alternatively: COPY public/ public/

EXPOSE 8000

CMD ["node", "index.js"]
