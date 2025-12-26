FROM node:20-alpine AS builder

# ติดตั้ง pnpm เพื่อจัดการ library
RUN npm install -g pnpm

WORKDIR /app

# คัดลอกไฟล์จัดการ library (pnpm-lock.yaml สำคัญมาก)
COPY package.json pnpm-lock.yaml* ./

# ติดตั้ง dependencies
RUN pnpm install

# คัดลอกโค้ดและ Build
COPY . .
RUN pnpm run build

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

# คัดลอกเฉพาะสิ่งที่ต้องใช้มาจาก builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]