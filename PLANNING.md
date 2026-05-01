# Planning BelajarDev - Future Roadmap

## 🎯 Visi
Menjadi platform "Fullstack Foundation" interaktif no. 1 untuk pengembang pemula di Indonesia.

---

## 💰 Strategi Monetisasi (Freemium)
**Tujuan:** Memberikan akses gratis untuk fundamental, dan akses berbayar (murah/terjangkau) untuk materi lanjutan (Advanced).
- [ ] **Sistem "Pro User":** Menambahkan status `isPro` pada data user di Firebase Firestore.
- [ ] **Paywall UI:** Membuat popup/halaman khusus berlangganan saat user mencoba mengakses modul berlabel `[PRO]`.
- [ ] **Payment Gateway:** Integrasi dengan payment gateway lokal (misal: Midtrans) untuk proses pembayaran otomatis.

---

## 🏗️ Fase 1: Matangkan Fondasi (HTML Deep-Dive)
**Tujuan:** Memastikan user benar-benar paham struktur web profesional.
- [x] **HTML Basics (Free):** Anatomi, Teks, List, Image, Form Dasar.
- [ ] **Semantic HTML [PRO]:** Materi `<header>`, `<footer>`, `<main>`, `<article>`.
- [ ] **Advanced Forms [PRO]:** Radio buttons, checkbox groups, `<select>`, `<datalist>`.
- [ ] **SEO & Metadata [PRO]:** Meta description, Open Graph, dan Favicon logic.

## 🎨 Fase 2: Ekspansi CSS (Seni Menghias Web)
**Tujuan:** Memberikan kemampuan styling yang modern dan responsif.
- [x] **CSS Basics (Free):** Syntax dasar, Selector P, Background, Color.
- [ ] **The Box Model [PRO]:** Margin, Border, Padding, Content.
- [ ] **Modern Layouts [PRO]:** Flexbox & CSS Grid (Fundamental & Advanced).
- [ ] **Responsive Design [PRO]:** Media Queries & Fluid Typography.
- [ ] **Animations [PRO]:** `@keyframes` dan Transisi.

## 🧠 Fase 3: Ekspansi JavaScript (Logika & Interaksi)
**Tujuan:** Memberikan "otak" pada website.
- [x] **JS Basics (Free):** Variables, Console, Basic Data Types.
- [ ] **Logic & Loops [PRO]:** If/Else, Switch, Looping (For/While/Map).
- [ ] **DOM Manipulation [PRO]:** Memilih elemen, mengubah konten, mengubah style via JS.
- [ ] **Event Listeners [PRO]:** Klik, Ketik, Form Submit.
- [ ] **Async JS [PRO]:** Fetch API dasar (mengambil data JSON).

---

## ⚙️ Optimasi Sistem Internal
- [ ] **Multi-Module Engine:** Refactor sistem navigasi agar mendukung banyak modul.
- [ ] **JS Execution Sandbox:** Sistem preview yang bisa menjalankan kode JS dengan aman.
- [ ] **Achievement System:** Badge digital untuk penyelesaian setiap modul.
- [ ] **Leaderboard:** Menampilkan top user berdasarkan XP (global).

---

## 🔒 Security Checklist
- [x] **Environment Variables:** Pindah API Keys ke `.env`.
- [x] **Git Protection:** Pastikan `.env` masuk ke `.gitignore`.
- [ ] **Firestore Rules:** Perketat aturan akses database hanya untuk pemilik UID yang sah.
