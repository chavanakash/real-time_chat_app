# Use lightweight Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application source including public folder
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Start the app
CMD ["node", "index.js"]
