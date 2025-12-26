# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /src/app
COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm run build

# Stage 2: Runner
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

# คัดลอกไฟล์ที่ Next.js standalone ต้องการ
COPY --from=builder /src/app/public ./public
COPY --from=builder /src/app/.next/standalone ./
COPY --from=builder /src/app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]