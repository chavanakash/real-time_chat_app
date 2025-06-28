FROM node:18-alpine

WORKDIR /app

# Copy package files from backend/
COPY backend/package*.json ./

RUN npm install

# Copy backend app source code
COPY backend/. .

# Copy public folder from root directory (outside backend)
COPY public ./public

EXPOSE 8000

CMD ["node", "index.js"]
