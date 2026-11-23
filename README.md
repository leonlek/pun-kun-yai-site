# ปั่นกันใหญ่ — Landing Page

หน้าโปรโมตแอป iOS **ปั่นกันใหญ่** แอปบันทึกทริปจักรยานของพ่อกับลูก เก็บความทรงจำและแชร์ความภูมิใจให้คนในครอบครัว

## ดูบนเครื่อง

โปรเจกต์เป็น static site ไม่ต้องติดตั้ง dependencies:

```bash
python3 -m http.server 4173
```

จากนั้นเปิด `http://localhost:4173`

## โครงสร้าง

- `index.html` — หน้าหลักภาษาไทย (`/`)
- `en/index.html` — หน้าภาษาอังกฤษ (`/en/`)
- `privacy.html`, `support.html` — นโยบายความเป็นส่วนตัวและหน้าช่วยเหลือ (ไทย + อังกฤษ `#en`)
- `robots.txt`, `sitemap.xml` — สำหรับ search engine
- `styles.css` — visual system, animation และ responsive layout
- `script.js` — share sheet, LINE share, copy link และ modal (ข้อความเปลี่ยนตาม `<html lang>`)
- `assets/father-child-hero.webp` — ภาพแคมเปญที่สร้างขึ้นสำหรับโปรเจกต์นี้
- `assets/og-image.jpg` — ภาพแชร์ 1200×630 · `assets/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` — ไอคอน

## หมายเหตุ

ยังไม่มีลิงก์ App Store — ส่วน `#notify` แสดงแค่ "เร็วๆ นี้บน App Store" เมื่อแอปเปิดตัวแล้วให้เปลี่ยนเป็นลิงก์ App Store จริงทั้งสองภาษา
