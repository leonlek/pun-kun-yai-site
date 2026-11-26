# ปั่นกันใหญ่ — Landing Page

หน้าโปรโมตแอป iOS **ปั่นกันใหญ่** แอปสำหรับพ่อแม่ที่ปั่นจักรยานกับลูก เก็บความทรงจำและแชร์ความภูมิใจให้คนในครอบครัว

App Store: https://apps.apple.com/th/app/id6815602549 · เว็บ: https://leonlek.github.io/pun-kun-yai-site/ (GitHub Pages deploy จาก branch `main` โดยตรง)

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
- `404.html` — หน้าไม่พบ (ลิงก์ทั้งหมดเป็น absolute เพราะ Pages ใช้ไฟล์นี้กับทุก path)
- `robots.txt`, `sitemap.xml` — สำหรับ search engine (ส่งเข้า Google Search Console แล้ว)
- `site.css` — visual system, animation และ responsive layout
- `site.js` — header on scroll, reveal-on-scroll, share sheet และ LINE share (ข้อความเปลี่ยนตาม `<html lang>`)
- `assets/open-road.webp`, `assets/tree-tunnel.webp` — รูปถ่ายจริง · `assets/shots/<th|en>/` — หน้าจอจริงจากแอป
- `assets/og-th.jpg`, `assets/og-en.jpg` — ภาพแชร์ 1200×630 · `assets/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` — ไอคอน

## หมายเหตุ

- ทุกหน้ามี Smart App Banner (`apple-itunes-app`) และ JSON-LD `MobileApplication` + `FAQPage` — ถ้าแก้คำถามในหน้า ให้แก้ใน JSON-LD ด้วย
- หน้าไทยลิงก์ไป App Store ไทย (`/th/app/…`), หน้าอังกฤษใช้ลิงก์กลางให้ Apple เลือกประเทศเอง
- อย่าเขียนว่าเป็นแอป "สำหรับเด็ก" — กลุ่มผู้ใช้คือพ่อแม่ที่ปั่นกับลูก
