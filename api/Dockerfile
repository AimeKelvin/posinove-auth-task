FROM node:20-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

# Install deps with legacy peer deps (ignores eslint peer conflicts)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm ci --omit=dev --legacy-peer-deps || npm ci --legacy-peer-deps

# Copy source
COPY tsconfig.json ./
COPY src ./src
COPY public ./public

# Build
RUN npm run build

# Production image
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=base /app/package.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/dist ./dist
COPY --from=base /app/public ./public

EXPOSE 4000
CMD ["node", "dist/server.js"]
