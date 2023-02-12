# Build stage
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Test stage
FROM build AS test
WORKDIR /app
COPY --from=build /app .
RUN npm run test

# Production stage
FROM node:14 AS production
WORKDIR /app
COPY --from=build /app/dist /app
EXPOSE 8080
CMD ["npm", "start"]
