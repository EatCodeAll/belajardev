# Planning BelajarDev - Future Roadmap

## 🎯 Visi
Menjadi platform "Fullstack Foundation" interaktif no. 1 untuk pengembang pemula di Indonesia.

---

## 🏗️ Fase 1: Matangkan Fondasi (HTML Deep-Dive)
**Tujuan:** Memastikan user benar-benar paham struktur web profesional.
- [ ] **Semantic HTML:** Materi `<header>`, `<footer>`, `<main>`, `<article>`.
- [ ] **Advanced Forms:** Radio buttons, checkbox groups, `<select>`, `<datalist>`.
- [ ] **HTML Tables:** Data terstruktur dan atribut `colspan`/`rowspan`.
- [ ] **Accessibility (A11y):** Atribut `aria-label`, `role`, dan penggunaan Alt text yang benar.
- [ ] **SEO Basics:** Meta description, Open Graph, dan Favicon logic.

## 🎨 Fase 2: Ekspansi CSS (Seni Menghias Web)
**Tujuan:** Memberikan kemampuan styling yang modern dan responsif.
- [ ] **The Box Model:** Margin, Border, Padding, Content.
- [ ] **Selectors & Specificity:** Class vs ID vs Attribute selectors.
- [ ] **Modern Layouts:** Flexbox & CSS Grid (Fundamental & Advanced).
- [ ] **Responsive Design:** Media Queries & Fluid Typography.
- [ ] **Custom Properties:** CSS Variables untuk tema Dark/Light.
- [ ] **Animations:** `@keyframes` dan Transisi.

## 🧠 Fase 3: Ekspansi JavaScript (Logika & Interaksi)
**Tujuan:** Memberikan "otak" pada website.
- [ ] **Fundamentals:** Variabel (let/const), Tipe Data, Operator.
- [ ] **Logic:** If/Else, Switch, Looping (For/While/Map).
- [ ] **DOM Manipulation:** Memilih elemen, mengubah konten, mengubah style via JS.
- [ ] **Event Listeners:** Klik, Ketik, Form Submit.
- [ ] **Async JS:** Fetch API dasar (mengambil data JSON).

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
