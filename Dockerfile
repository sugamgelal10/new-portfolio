
# Production stage
FROM node:18-alpine

WORKDIR /app

RUN npm install

COPY . .

RUN npm run build

# Install serve to serve static files
RUN npm install -g serve


# Copy build output
COPY --from=build /app/build ./build

# Expose port
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build", "-l", "3000"]
