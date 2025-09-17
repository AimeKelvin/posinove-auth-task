# -------------------------
# Build stage
# -------------------------
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies (including dev, so tsc is available)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm ci --legacy-peer-deps

# Copy source code
COPY tsconfig.json ./
COPY src ./src
COPY public ./public

# Build TypeScript
RUN npm run build

# -------------------------
# Production stage
# -------------------------
FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV=production

# Copy only the necessary files from build stage
COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public

# Expose API port
EXPOSE 4000

# Start the server
CMD ["node", "dist/server.js"]
