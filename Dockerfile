# --- Build stage ---
    FROM node:lts-alpine AS build

    WORKDIR /app
    
    # Install dependencies
    COPY package*.json ./
    RUN npm install --legacy-peer-deps
    
    # Copy source and build
    COPY . .
    RUN npm run build
    
    
    # --- Production stage ---
    FROM node:lts-alpine
    
    WORKDIR /app
    
    # Install "serve" globally
    RUN npm install -g serve
    
    # Copy build output from previous stage
    COPY --from=build /app/build ./build
    
    # Expose port
    EXPOSE 3000
    
    # Start the app
    CMD ["serve", "-s", "build", "-l", "3000"]
    