# Multi-stage Dockerfile for Next.js production (standalone output)
# - Builds the app with npm (build stage)
# - Uses Next.js "standalone" output from `.next/standalone`
# - Runs in a slim production image as a non-root user

###############
# Builder
###############
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package manifests first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies (including devDependencies needed for build)
RUN npm ci

# Copy the rest of the source
COPY . .

# Ensure Next is configured to produce `output: 'standalone'` in next.config.js
# Build the production output (this creates `.next/standalone`)
RUN npm run build


###############
# Production image
###############
FROM node:20-alpine AS runner

# Set NODE_ENV for optimizations
ENV NODE_ENV=production

WORKDIR /app

# Create a non-root user `nextjs` and group with a home directory
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copy the Next.js standalone server build and static assets from builder
# `.next/standalone` contains a minimal `package.json` and server entry `server.js`
COPY --from=builder /app/.next/standalone .
# Static files used by the server at runtime
COPY --from=builder /app/.next/static ./.next/static
# Public assets (if present)
COPY --from=builder /app/public ./public

# Install only production dependencies referenced by the standalone package.json
# The standalone folder contains a small package.json with needed deps
RUN npm ci --omit=dev

# Fix ownership for the non-root user
RUN chown -R nextjs:nextjs /app

# Switch to non-root user
USER nextjs

# Expose the standard Next.js port
EXPOSE 3000

# Start the Next.js standalone server. The standalone build exposes `server.js`
CMD ["node", "server.js"]

# Notes:
# - This image does not run the Next.js dev server. It runs the production server
#   produced by `next build` with `output: 'standalone'`.
# - Keep environment configuration in docker-compose.yml (not baked into image).