# Use official Node.js image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files into container
COPY . .

# Expose port 3000
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]

