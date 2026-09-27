# ปั่นกันใหญ่ — Landing Page

หน้าโปรโมตแอป iOS **ปั่นกันใหญ่** แอปบันทึกทริปจักรยานของพ่อกับลูก เก็บความทรงจำและแชร์ความภูมิใจให้คนในครอบครัว

## ดูบนเครื่อง

โปรเจกต์เป็น static site ไม่ต้องติดตั้ง dependencies:

```bash
python3 -m http.server 4173
```

จากนั้นเปิด `http://localhost:4173`

## โครงสร้าง

- `index.html` — เนื้อหาและโครงสร้างหน้าเว็บ
- `styles.css` — visual system, animation และ responsive layout
- `script.js` — share sheet, LINE share, copy link, modal และ notification form
- `assets/father-child-hero.webp` — ภาพแคมเปญที่สร้างขึ้นสำหรับโปรเจกต์นี้

## หมายเหตุ

ฟอร์มรับข่าวในเดโมบันทึกอีเมลไว้ใน `localStorage` เท่านั้น ยังไม่ได้เชื่อมต่อ backend หรือผู้ให้บริการอีเมล
