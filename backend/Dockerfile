# Stage 1: Build
FROM node:20-alpine AS builder

# ติดตั้ง pnpm
RUN npm install -g pnpm

WORKDIR /app

# คัดลอกไฟล์จัดการ library (pnpm-lock.yaml สำคัญมาก)
COPY package.json pnpm-lock.yaml ./

# ติดตั้ง dependencies แบบเข้มงวด
RUN pnpm install --frozen-lockfile

# คัดลอกโค้ดและ Build
COPY . .
RUN pnpm run build

# Stage 2: Production
FROM node:20-alpine AS runner
WORKDIR /app

# ติดตั้ง pnpm ใน stage รันด้วย (ถ้าจำเป็นต้องใช้รันสคริปต์)
RUN npm install -g pnpm

# คัดลอกเฉพาะสิ่งที่ต้องใช้มาจาก builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

# ตั้งค่าพอร์ต 4000 ตามที่คุณต้องการ
ENV PORT=4000
EXPOSE 4000

# สั่งรันแอป
CMD ["node", "dist/main"]