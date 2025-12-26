# Stage 1: Build
FROM node:20-alpine AS builder
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install
COPY . .
RUN pnpm run build

# Stage 2: Runner (ใช้สำหรับทั้ง Dev และ Prod)
FROM node:20-alpine AS runner
WORKDIR /app
# ติดตั้ง pnpm อีกครั้งเพื่อให้รองรับคำสั่ง command ใน docker-compose
RUN npm install -g pnpm

ENV NODE_ENV development

# คัดลอกไฟล์จาก builder (จำเป็นสำหรับ standalone mode)
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
# ค่าเริ่มต้นถ้าไม่ระบุ command ใน compose
CMD ["node", "server.js"]