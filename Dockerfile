# Base stage
FROM node:20-slim AS base
WORKDIR /app
COPY package.json package-lock.json ./

# Development Stage

FROM base AS development
RUN npm install
COPY . .
CMD ["npm", "run", "dev", "--", "--host"]

# Build Stage for production
FROM base AS build
RUN npm ci  # 'npm ci' es más rápido y seguro para builds automáticos
COPY . .
RUN npm run build

# Production Stage
FROM node:20-slim AS production
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/package-lock.json ./package-lock.json

RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "run", "preview"]