# ตัวแปรสำหรับชื่อโปรเจกต์ (ปรับเปลี่ยนได้)
PROJECT_NAME=tang-pai-nai

# คำสั่งเริ่มต้น (เมื่อพิมพ์แค่ make)
.PHONY: help
help:
	@echo "โปรดเลือกคำสั่งที่ต้องการใช้งาน:"
	@echo "  make build    - สร้าง Docker Images สำหรับทุก Service"
	@echo "  make up       - รัน Container ทั้งหมดใน Background"
	@echo "  make down     - หยุดและลบ Container ทั้งหมด"
	@echo "  make logs     - ดู Log ของทุก Service"
	@echo "  make restart  - รีสตาร์ทระบบใหม่ทั้งหมด"
	@echo "  make clean    - ลบ Images และ Volume ที่ไม่ได้ใช้"

# สร้าง Images
build:
	docker compose build

# รันระบบ
up:
	docker compose up -d
# หยุดระบบ
down:
	docker compose down

# ดู Log (แบบ Real-time)
logs:
	docker compose logs -f

# รีสตาร์ท (Build ใหม่แล้วรัน)
restart:
	docker compose down
	docker compose up -d --build	
# ล้างทรัพยากรที่ค้างอยู่ในเครื่อง
clean:
	docker system prune -f
	docker volume prune -f