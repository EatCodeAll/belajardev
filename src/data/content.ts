export interface LearningStep {
  id: number;
  title: string;
  materi: {
    paragraphs: string[];
    codeExample?: string;
  };
  quest: {
    instruction: string;
    explanation: Record<string, string>;
    xp: number;
    initialCode?: string;
    validation?: (code: string) => boolean;
    command?: string;
  };
}

export const HTML_CONTENT: LearningStep[] = [
  {
    id: 1,
    title: "Membangun Pondasi (Struktur Dasar)",
    materi: {
      paragraphs: [
        "Bayangkan HTML seperti kerangka sebuah rumah.",
        "Setiap rumah butuh pondasi (<html>) dan ruangan untuk isi furniturnya (<body>).",
        "Tag pembuka seperti pintu masuk <tag>, dan tag penutup seperti pintu keluar </tag>."
      ],
      codeExample: "<html>\n  <body>\n    Isi rumah di sini\n  </body>\n</html>"
    },
    quest: {
      instruction: "Ayo buat pondasi rumah digitalmu! Tulis tag <html> dan di dalamnya masukkan tag <body>.",
      xp: 100,
      explanation: {
        "<html>": "Pondasi utama yang membungkus seluruh website.",
        "<body>": "Ruangan utama tempat kita menaruh semua konten yang bisa dilihat orang."
      },
      initialCode: `<!DOCTYPE html>\n<!-- 1. Tulis <html> di sini -->\n\n  <!-- 2. Masukkan <body> di dalam <html> -->\n\n<!-- 3. Jangan lupa tutup dengan </html> -->\n`,
      validation: (code: string) => {
        const lower = code.toLowerCase();
        return lower.includes('<html>') && lower.includes('</html>') && lower.includes('<body>') && lower.includes('</body>') && lower.indexOf('<html>') < lower.indexOf('<body>') && lower.indexOf('</body>') < lower.indexOf('</html>');
      }
    }
  },
  {
    id: 2,
    title: "Papan Nama Utama (Heading h1)",
    materi: {
      paragraphs: [
        "Setiap rumah butuh papan nama agar orang tahu rumah siapa itu.",
        "Di HTML, kita gunakan <h1> untuk judul yang paling besar dan paling penting.",
        "Gunakan h1 hanya satu kali per halaman, biasanya untuk judul utama."
      ],
      codeExample: "<h1>Rumah Budi</h1>"
    },
    quest: {
      instruction: "Pasang papan nama di rumahmu! Tambahkan tag <h1> dengan tulisan 'Halo Developer!' di dalam body.",
      xp: 120,
      explanation: { "<h1>": "Heading level 1, judul paling besar di website." },
      initialCode: `<html>\n  <body>\n    <!-- Pasang papan nama h1 kamu di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<h1.*>\s*Halo Developer!\s*<\/h1>/i.test(code)
    }
  },
  {
    id: 3,
    title: "Menulis Cerita (Paragraf)",
    materi: {
      paragraphs: [
        "Jika ingin menulis cerita atau penjelasan panjang, gunakan tag <p> (Paragraph).",
        "Browser akan otomatis memberikan sedikit jarak antar paragraf agar enak dibaca."
      ],
      codeExample: "<p>Ini adalah sebuah paragraf.</p>"
    },
    quest: {
      instruction: "Tuliskan satu kalimat perkenalan! Tambahkan tag <p> di bawah h1 dengan teks 'Saya sedang belajar coding.'.",
      xp: 100,
      explanation: { "<p>": "Tag untuk membungkus satu paragraf teks." },
      initialCode: `<html>\n  <body>\n    <h1>Halo Developer!</h1>\n    <!-- Tulis perkenalanmu di sini menggunakan tag p -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<p.*>\s*Saya sedang belajar coding\.\s*<\/p>/i.test(code)
    }
  },
  {
    id: 4,
    title: "Memberi Penekanan (Strong)",
    materi: {
      paragraphs: [
        "Terkadang ada kata yang ingin kita ucapkan dengan lebih kuat atau penting.",
        "Gunakan tag <strong> untuk menebalkan teks tersebut."
      ],
      codeExample: "<p>Hari ini <strong>sangat</strong> panas!</p>"
    },
    quest: {
      instruction: "Tekankan kata 'seru'! Bungkus kata tersebut dengan tag <strong> agar terlihat tebal.",
      xp: 130,
      explanation: { "<strong>": "Tag untuk menebalkan teks yang dianggap penting." },
      initialCode: `<html>\n  <body>\n    <p>Belajar coding itu seru!</p>\n  </body>\n</html>`,
      validation: (code: string) => /<strong>\s*seru\s*<\/strong>/i.test(code)
    }
  },
  {
    id: 5,
    title: "Daftar Belanja (Unordered List)",
    materi: {
      paragraphs: [
        "Untuk membuat daftar poin-poin (bullet points), kita gunakan <ul> (Unordered List).",
        "Setiap item di dalamnya harus dibungkus dengan tag <li> (List Item)."
      ],
      codeExample: "<ul>\n  <li>Kopi</li>\n  <li>Gula</li>\n</ul>"
    },
    quest: {
      instruction: "Buat daftar skill! Buat tag <ul> dan di dalamnya tambahkan satu <li> dengan tulisan 'HTML'.",
      xp: 150,
      explanation: { 
        "<ul>": "Wadah untuk daftar poin tanpa nomor.",
        "<li>": "Satu butir/item di dalam daftar."
      },
      initialCode: `<html>\n  <body>\n    <!-- 1. Buat ul di sini -->\n      <!-- 2. Masukkan li di dalam ul -->\n  </body>\n</html>`,
      validation: (code: string) => /<ul>\s*<li.*>\s*HTML\s*<\/li>\s*<\/ul>/i.test(code)
    }
  },
  {
    id: 6,
    title: "Langkah Demi Langkah (Ordered List)",
    materi: {
      paragraphs: [
        "Jika urutan sangat penting (seperti resep masakan), gunakan <ol> (Ordered List).",
        "Bedanya dengan <ul>, daftar ini akan otomatis memberikan nomor (1, 2, 3...) di depannya."
      ],
      codeExample: "<ol>\n  <li>Siapkan Air</li>\n  <li>Rebus Air</li>\n</ol>"
    },
    quest: {
      instruction: "Buatlah daftar langkah belajar! Tambahkan tag <ol> dan di dalamnya masukkan satu <li> dengan tulisan 'Langkah 1'.",
      xp: 150,
      explanation: { 
        "<ol>": "Wadah untuk daftar yang memiliki urutan/nomor.",
        "<li>": "Item atau butir dalam daftar tersebut."
      },
      initialCode: `<html>\n  <body>\n    <!-- Buat daftar berurutan (ol) di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<ol>\s*<li.*>\s*Langkah 1\s*<\/li>\s*<\/ol>/i.test(code)
    }
  },
  {
    id: 7,
    title: "Menambahkan Foto (Images)",
    materi: {
      paragraphs: [
        "Website akan membosankan tanpa gambar. Gunakan tag <img> untuk menampilkannya.",
        "Tag ini spesial karena tidak punya tag penutup. Kita cuma butuh 'src' (sumber foto) dan 'alt' (cerita singkat jika foto gagal muncul)."
      ],
      codeExample: '<img src="foto.jpg" alt="Deskripsi Foto">'
    },
    quest: {
      instruction: "Pasang foto profil digitalmu! Gunakan tag <img> dengan src 'https://picsum.photos/200' dan alt 'Foto Random'.",
      xp: 180,
      explanation: { 
        "src": "Singkatan dari Source, yaitu alamat/link foto.",
        "alt": "Teks alternatif untuk membantu aksesibilitas."
      },
      initialCode: `<html>\n  <body>\n    <!-- Masukkan tag img di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<img.*src="https:\/\/picsum\.photos\/200".*alt="Foto Random"/i.test(code)
    }
  },
  {
    id: 8,
    title: "Pintu Ke Dunia Luar (Links)",
    materi: {
      paragraphs: [
        "Link adalah inti dari web (Hyperlink). Gunakan tag <a> untuk membuat teks yang bisa diklik.",
        "Gunakan atribut 'href' untuk memberi tahu browser ke mana link itu harus pergi."
      ],
      codeExample: '<a href="https://google.com">Klik ke Google</a>'
    },
    quest: {
      instruction: "Buat pintu ke Github! Tambahkan tag <a> dengan href 'https://github.com' dan teks 'Profil Saya'.",
      xp: 160,
      explanation: { 
        "<a>": "Anchor, tag untuk membuat link.",
        "href": "Alamat tujuan link tersebut."
      },
      initialCode: `<html>\n  <body>\n    <!-- Buat link ke Github kamu di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<a.*href="https:\/\/github\.com".*>\s*Profil Saya\s*<\/a>/i.test(code)
    }
  },
  {
    id: 9,
    title: "Kotak Surat (Input Teks)",
    materi: {
      paragraphs: [
        "Ingin user mengetikkan sesuatu? Gunakan <input>.",
        "Atribut 'placeholder' adalah teks abu-abu yang menghilang saat kita mulai mengetik."
      ],
      codeExample: '<input type="text" placeholder="Ketik nama...">'
    },
    quest: {
      instruction: "Siapkan kolom nama! Buat tag <input> dengan type 'text' dan placeholder 'Username'.",
      xp: 140,
      explanation: { "placeholder": "Pesan bantuan yang muncul di dalam kotak input." },
      initialCode: `<html>\n  <body>\n    <p>Siapa namamu?</p>\n    <!-- Tambahkan kotak input di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="text".*placeholder="Username"/i.test(code)
    }
  },
  {
    id: 10,
    title: "Tombol Aksi (Buttons)",
    materi: {
      paragraphs: [
        "Setiap formulir butuh tombol untuk mengirim data. Gunakan tag <button>.",
        "Teks yang berada di antara <button> dan </button> akan muncul di atas tombol."
      ],
      codeExample: "<button>Klik Aku</button>"
    },
    quest: {
      instruction: "Buat tombol untuk mengirim! Tambahkan tag <button> dengan tulisan 'Kirim'.",
      xp: 120,
      explanation: { "<button>": "Tag untuk membuat tombol yang bisa diklik." },
      initialCode: `<html>\n  <body>\n    <input type="text" placeholder="Nama">\n    <!-- Buat tombol Kirim di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<button.*>\s*Kirim\s*<\/button>/i.test(code)
    }
  },
  {
    id: 11,
    title: "Kotak Pembungkus (Div)",
    materi: {
      paragraphs: [
        "<div> adalah elemen yang paling sering digunakan. Ia berfungsi seperti 'kotak kosong' untuk mengelompokkan elemen lain agar rapi.",
        "Bayangkan div seperti sebuah paket yang berisi beberapa barang."
      ],
      codeExample: "<div>\n  <h1>Judul</h1>\n  <p>Isi</p>\n</div>"
    },
    quest: {
      instruction: "Kelompokkan elemen! Bungkus h2 'Judul Kartu' dan p 'Deskripsi Kartu' dengan tag <div>.",
      xp: 150,
      explanation: { "<div>": "Wadah atau kotak untuk mengelompokkan elemen-elemen." },
      initialCode: `<html>\n  <body>\n    <!-- Bungkus h2 dan p di bawah dengan satu buah div -->\n    <h2>Judul Kartu</h2>\n    <p>Deskripsi Kartu</p>\n  </body>\n</html>`,
      validation: (code: string) => /<div>\s*<h2.*>.*<\/h2>\s*<p.*>.*<\/p>\s*<\/div>/i.test(code)
    }
  },
  {
    id: 12,
    title: "Pemberi Warna (Span)",
    materi: {
      paragraphs: [
        "Jika <div> membungkus kotak besar, <span> digunakan untuk membungkus kata atau kalimat di dalam paragraf.",
        "Cocok digunakan jika ingin mengubah warna satu kata saja."
      ],
      codeExample: "<p>Halo <span style='color:blue'>Dunia</span></p>"
    },
    quest: {
      instruction: "Tandai kata 'Gratis'! Bungkus kata 'Gratis' menggunakan tag <span>.",
      xp: 130,
      explanation: { "<span>": "Wadah kecil untuk membungkus teks di dalam baris yang sama." },
      initialCode: `<html>\n  <body>\n    <p>Belajar di sini itu Gratis selamanya.</p>\n  </body>\n</html>`,
      validation: (code: string) => /<span>\s*Gratis\s*<\/span>/i.test(code)
    }
  },
  {
    id: 13,
    title: "Alamat Surat Elektronik (Email)",
    materi: {
      paragraphs: [
        "Untuk keamanan, HTML punya input khusus untuk email. Browser akan mengecek apakah ada simbol '@' di dalamnya.",
        "Gunakan `type='email'` pada tag input."
      ],
      codeExample: '<input type="email">'
    },
    quest: {
      instruction: "Minta email user! Buat satu tag <input> dengan type 'email'.",
      xp: 140,
      explanation: { "type='email'": "Membantu validasi format email secara otomatis." },
      initialCode: `<html>\n  <body>\n    <p>Masukkan Email Kamu:</p>\n    <!-- Buat input email di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="email"/i.test(code)
    }
  },
  {
    id: 14,
    title: "Rahasia Terjaga (Password)",
    materi: {
      paragraphs: [
        "Jangan biarkan orang lain melihat password saat diketik! Gunakan `type='password'`.",
        "Karakter yang diketik akan otomatis berubah menjadi titik-titik atau bintang."
      ],
      codeExample: '<input type="password">'
    },
    quest: {
      instruction: "Buat kotak sandi! Tambahkan tag <input> dengan type 'password'.",
      xp: 140,
      explanation: { "type='password'": "Menyembunyikan teks yang diketik agar aman." },
      initialCode: `<html>\n  <body>\n    <p>Kata Sandi:</p>\n    <!-- Buat input password di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="password"/i.test(code)
    }
  },
  {
    id: 15,
    title: "Memilih Pilihan (Checkboxes)",
    materi: {
      paragraphs: [
        "Checkbox digunakan saat user boleh memilih satu atau lebih dari banyak pilihan (seperti memilih hobi).",
        "Gunakan `type='checkbox'` pada tag input."
      ],
      codeExample: '<input type="checkbox"> Saya Setuju'
    },
    quest: {
      instruction: "Minta persetujuan user! Buat tag <input> dengan type 'checkbox' dan ikuti dengan teks 'Ingat Saya'.",
      xp: 130,
      explanation: { "checkbox": "Input centang untuk memilih banyak opsi." },
      initialCode: `<html>\n  <body>\n    <!-- Buat checkbox di sini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="checkbox"/i.test(code)
    }
  },
  {
    id: 16,
    title: "Pesan Panjang (Textarea)",
    materi: {
      paragraphs: [
        "Kadang satu baris input tidak cukup (misal untuk komentar atau saran).",
        "Gunakan tag <textarea> untuk kotak ketik yang bisa memuat banyak baris."
      ],
      codeExample: "<textarea>Isi pesan...</textarea>"
    },
    quest: {
      instruction: "Sediakan ruang curhat! Buat tag <textarea> dengan tulisan di dalamnya 'Tulis pesanmu...'.",
      xp: 160,
      explanation: { "<textarea>": "Kotak input teks yang luas dan bisa ditarik ukurannya." },
      initialCode: `<html>\n  <body>\n    <p>Saran Kamu:</p>\n    <!-- Buat textarea di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<textarea.*>\s*Tulis pesanmu\.\.\.\s*<\/textarea>/i.test(code)
    }
  },
  {
    id: 17,
    title: "Nama Di Atas (Title)",
    materi: {
      paragraphs: [
        "Tag <title> digunakan untuk memberi nama pada tab browser kamu.",
        "Penting: Tag ini harus diletakkan di dalam tag <head>, bukan di dalam <body>."
      ],
      codeExample: "<html>\n  <head>\n    <title>Judul Tab</title>\n  </head>\n</html>"
    },
    quest: {
      instruction: "Beri nama tab websitemu! Tambahkan tag <title> dengan teks 'Belajar HTML' di dalam <head>.",
      xp: 120,
      explanation: { "<title>": "Identitas website yang muncul di paling atas browser." },
      initialCode: `<html>\n  <head>\n    <!-- Tulis tag title kamu di sini -->\n\n  </head>\n  <body></body>\n</html>`,
      validation: (code: string) => /<title.*>\s*Belajar HTML\s*<\/title>/i.test(code)
    }
  },
  {
    id: 18,
    title: "Bioskop Digital (Video)",
    materi: {
      paragraphs: [
        "Kamu bisa memutar video langsung di web! Gunakan tag <video>.",
        "Jangan lupa tambahkan kata 'controls' agar tombol play, pause, dan volume muncul."
      ],
      codeExample: '<video src="movie.mp4" controls></video>'
    },
    quest: {
      instruction: "Pasang pemutar video! Buat tag <video> dan tambahkan atribut 'controls'.",
      xp: 200,
      explanation: { "controls": "Menampilkan tombol navigasi video (Play, Pause, Stop)." },
      initialCode: `<html>\n  <body>\n    <!-- Masukkan tag video di sini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<video.*controls/i.test(code)
    }
  },
  {
    id: 19,
    title: "Catatan Rahasia (Comments)",
    materi: {
      paragraphs: [
        "Komentar adalah catatan untuk developer yang tidak akan muncul di layar browser.",
        "Sangat berguna untuk memberi pengingat pada diri sendiri atau tim."
      ],
      codeExample: "<!-- Ini adalah sebuah komentar -->"
    },
    quest: {
      instruction: "Tinggalkan catatan! Buat sebuah komentar HTML dengan tulisan 'Misi Selesai'.",
      xp: 100,
      explanation: { "<!-- -->": "Simbol pembuka dan penutup komentar di HTML." },
      initialCode: `<html>\n  <body>\n    <!-- Tulis komentarmu di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<!--\s*Misi Selesai\s*-->/i.test(code)
    }
  },
  {
    id: 20,
    title: "Tantangan Terakhir: Kartu Identitas",
    materi: {
      paragraphs: [
        "Selamat! Kamu sudah sampai di akhir perjalanan HTML.",
        "Saatnya menggabungkan semuanya: gunakan <div> sebagai kotak, h1 sebagai nama, dan p sebagai jabatan."
      ],
      codeExample: "<div>\n  <h1>Nama</h1>\n  <p>Jabatan</p>\n</div>"
    },
    quest: {
      instruction: "Buatlah kartu identitasmu! Gunakan <div> untuk membungkus sebuah h1 dan sebuah p.",
      xp: 300,
      explanation: { "Final": "Menggabungkan kotak (container), judul, dan teks." },
      initialCode: `<html>\n  <body>\n    <!-- Ayo tunjukkan kemampuanmu di sini! -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<div>\s*<h[12].*>.*<\/h[12]>\s*<p.*>.*<\/p>\s*<\/div>/i.test(code)
    }
  }
];

export const CSS_CONTENT: LearningStep[] = [
  {
    id: 1,
    title: "Sintaks Dasar & Warna",
    materi: {
      paragraphs: [
        "CSS digunakan untuk menghias HTML. Tulis di dalam tag <style>.",
        "Format: `selector { properti: nilai; }`."
      ],
      codeExample: "<style>h1 { color: red; }</style>"
    },
    quest: {
      instruction: "Ubah warna h1 menjadi 'crimson' di dalam tag <style>.",
      xp: 100,
      explanation: { "color": "Warna teks.", "style": "Wadah CSS internal." },
      initialCode: `<style>\n  h1 {\n    /* color: crimson; */\n  }\n</style>\n<h1>Judul</h1>`,
      validation: (code: string) => /color\s*:\s*crimson/i.test(code) && !code.includes('/* color: crimson; */')
    }
  },
  {
    id: 2,
    title: "Latar Belakang",
    materi: {
      paragraphs: ["Gunakan `background-color` untuk mewarnai latar belakang."],
      codeExample: "body { background-color: yellow; }"
    },
    quest: {
      instruction: "Ubah background body menjadi 'ghostwhite'.",
      xp: 120,
      explanation: { "background-color": "Warna latar." },
      initialCode: `<style>\n  body {\n    /* background-color: ghostwhite; */\n  }\n</style>`,
      validation: (code: string) => /background-color\s*:\s*ghostwhite/i.test(code) && !code.includes('/* background-color: ghostwhite; */')
    }
  },
  {
    id: 3,
    title: "Ukuran Font",
    materi: {
      paragraphs: ["Gunakan `font-size` dengan satuan 'px' untuk mengatur ukuran teks."],
      codeExample: "p { font-size: 20px; }"
    },
    quest: {
      instruction: "Ubah ukuran font paragraf <p> menjadi '24px'.",
      xp: 110,
      explanation: { "font-size": "Ukuran teks." },
      initialCode: `<style>\n  p {\n    /* font-size: 24px; */\n  }\n</style><p>Teks</p>`,
      validation: (code: string) => /font-size\s*:\s*24px/i.test(code) && !code.includes('/* font-size: 24px; */')
    }
  },
  {
    id: 4,
    title: "Ketebalan Font",
    materi: {
      paragraphs: ["Gunakan `font-weight` (bold atau 100-900) untuk menebalkan teks."],
      codeExample: "span { font-weight: bold; }"
    },
    quest: {
      instruction: "Buat teks di <span> menjadi sangat tebal (900).",
      xp: 120,
      explanation: { "font-weight": "Ketebalan teks." },
      initialCode: `<style>\n  span {\n    /* font-weight: 900; */\n  }\n</style><span>Tebal</span>`,
      validation: (code: string) => /font-weight\s*:\s*900/i.test(code) && !code.includes('/* font-weight: 900; */')
    }
  },
  {
    id: 5,
    title: "Jenis Huruf",
    materi: {
      paragraphs: ["Gunakan `font-family` untuk mengubah tipe huruf (sans-serif, monospace)."],
      codeExample: "body { font-family: sans-serif; }"
    },
    quest: {
      instruction: "Ubah font halaman menjadi 'monospace'.",
      xp: 130,
      explanation: { "font-family": "Tipe huruf." },
      initialCode: `<style>\n  body {\n    /* font-family: monospace; */\n  }\n</style>`,
      validation: (code: string) => /font-family\s*:\s*monospace/i.test(code) && !code.includes('/* font-family: monospace; */')
    }
  },
  {
    id: 6,
    title: "Padding",
    materi: {
      paragraphs: ["Padding adalah jarak di dalam elemen."],
      codeExample: "div { padding: 10px; }"
    },
    quest: {
      instruction: "Tambahkan padding '30px' pada <div>.",
      xp: 150,
      explanation: { "padding": "Jarak dalam." },
      initialCode: `<style>\n  div {\n    /* padding: 30px; */\n  }\n</style><div>Isi</div>`,
      validation: (code: string) => /padding\s*:\s*30px/i.test(code) && !code.includes('/* padding: 30px; */')
    }
  },
  {
    id: 7,
    title: "Garis Tepi (Border)",
    materi: {
      paragraphs: ["Format border: `tebal tipe warna`."],
      codeExample: "img { border: 2px solid black; }"
    },
    quest: {
      instruction: "Berikan border '2px solid blue' pada img.",
      xp: 160,
      explanation: { "border": "Garis tepi." },
      initialCode: `<style>\n  img {\n    /* border: 2px solid blue; */\n  }\n</style><img>`,
      validation: (code: string) => /border\s*:\s*2px\s+solid\s+blue/i.test(code) && !code.includes('/* border: 2px solid blue; */')
    }
  },
  {
    id: 8,
    title: "Margin",
    materi: {
      paragraphs: ["Margin adalah jarak di luar elemen."],
      codeExample: "h1 { margin: 20px; }"
    },
    quest: {
      instruction: "Berikan margin '40px' pada h1.",
      xp: 150,
      explanation: { "margin": "Jarak luar." },
      initialCode: `<style>\n  h1 {\n    /* margin: 40px; */\n  }\n</style><h1>Judul</h1>`,
      validation: (code: string) => /margin\s*:\s*40px/i.test(code) && !code.includes('/* margin: 40px; */')
    }
  },
  {
    id: 9,
    title: "Ukuran Kotak",
    materi: {
      paragraphs: ["Atur `width` (lebar) dan `height` (tinggi) kotak."],
      codeExample: "div { width: 50px; }"
    },
    quest: {
      instruction: "Buat div dengan lebar '200px' dan tinggi '100px'.",
      xp: 140,
      explanation: { "width": "Lebar.", "height": "Tinggi." },
      initialCode: `<style>\n  div {\n    /* width: 200px; height: 100px; */\n  }\n</style><div></div>`,
      validation: (code: string) => /width\s*:\s*200px/i.test(code) && /height\s*:\s*100px/i.test(code)
    }
  },
  {
    id: 10,
    title: "Perataan Teks",
    materi: {
      paragraphs: ["Gunakan `text-align: center` untuk ke tengah."],
      codeExample: "h1 { text-align: center; }"
    },
    quest: {
      instruction: "Pindahkan h1 ke tengah layar.",
      xp: 130,
      explanation: { "text-align": "Perataan teks." },
      initialCode: `<style>\n  h1 {\n    /* text-align: center; */\n  }\n</style><h1>Tengah</h1>`,
      validation: (code: string) => /text-align\s*:\s*center/i.test(code) && !code.includes('/* text-align: center; */')
    }
  }
];

export const JS_CONTENT: LearningStep[] = [
  {
    id: 1,
    title: "Output Console",
    materi: {
      paragraphs: ["Tulis JS di dalam <script>. Gunakan `console.log()`."],
      codeExample: "<script>console.log('Tes');</script>"
    },
    quest: {
      instruction: "Cetak 'Belajar JS' di console.",
      xp: 100,
      explanation: { "console.log": "Output debugger." },
      initialCode: `<script>\n  /* console.log("Belajar JS"); */\n</script>`,
      validation: (code: string) => /console\.log\s*\(\s*['"]Belajar JS['"]\s*\)/i.test(code) && !code.includes('/* console.log("Belajar JS"); */')
    }
  },
  {
    id: 2,
    title: "Variabel (let)",
    materi: {
      paragraphs: ["Gunakan `let` untuk wadah data yang dinamis."],
      codeExample: "let x = 5;"
    },
    quest: {
      instruction: "Buat variabel 'skor' bernilai 100.",
      xp: 120,
      explanation: { "let": "Variabel modern." },
      initialCode: `<script>\n  /* let skor = 100; */\n</script>`,
      validation: (code: string) => /let\s+skor\s*=\s*100/i.test(code) && !code.includes('/* let skor = 100; */')
    }
  },
  {
    id: 3,
    title: "Penjumlahan",
    materi: { paragraphs: ["Operasi matematika dasar (+)."], codeExample: "let x = 1 + 1;" },
    quest: { instruction: "Buat variabel 'hasil' berisi 10 + 20.", xp: 110, explanation: { "+": "Tambah." }, initialCode: `<script></script>`, validation: (code: string) => /let\s+hasil\s*=\s*10\s*\+\s*20/i.test(code) || /let\s+hasil\s*=\s*30/i.test(code) }
  },
  {
    id: 4,
    title: "String",
    materi: { paragraphs: ["Teks harus dibungkus tanda kutip."], codeExample: "let x = 'Halo';" },
    quest: { instruction: "Buat variabel 'kota' berisi 'Jakarta'.", xp: 110, explanation: { "string": "Tipe data teks." }, initialCode: `<script></script>`, validation: (code: string) => /let\s+kota\s*=\s*['"]Jakarta['"]/i.test(code) }
  },
  {
    id: 5,
    title: "Konstanta",
    materi: { paragraphs: ["Gunakan `const` untuk nilai tetap."], codeExample: "const X = 1;" },
    quest: { instruction: "Buat konstanta 'NEGARA' berisi 'Indonesia'.", xp: 130, explanation: { "const": "Variabel tetap." }, initialCode: `<script></script>`, validation: (code: string) => /const\s+NEGARA\s*=\s*['"]Indonesia['"]/i.test(code) }
  },
  {
    id: 6,
    title: "Gabung Teks",
    materi: { paragraphs: ["Gunakan (+) untuk menyambung teks."], codeExample: "'A' + 'B'" },
    quest: { instruction: "Gabungkan 'Satu' dan 'Dua' ke variabel 'angka'.", xp: 140, explanation: { "+": "Penyambung teks." }, initialCode: `<script>let angka = 'Satu' + </script>`, validation: (code: string) => /'Satu'\s*\+\s*['"]Dua['"]/i.test(code) }
  },
  {
    id: 7,
    title: "Alert",
    materi: { paragraphs: ["`alert()` memunculkan pop-up."], codeExample: "alert('Hi');" },
    quest: { instruction: "Munculkan alert 'Sukses!'.", xp: 120, explanation: { "alert": "Dialog box." }, initialCode: `<script></script>`, validation: (code: string) => /alert\s*\(\s*['"]Sukses!['"]\s*\)/i.test(code) }
  },
  {
    id: 8,
    title: "Function",
    materi: { paragraphs: ["Fungsi adalah blok kode yang bisa dipanggil."], codeExample: "function x(){}" },
    quest: { instruction: "Buat fungsi 'tes' yang ada console.log di dalamnya.", xp: 180, explanation: { "function": "Blok kode." }, initialCode: `<script>function tes() {}</script>`, validation: (code: string) => /function\s+tes\s*\(\s*\)\s*{/i.test(code) && /console\.log/i.test(code) }
  },
  {
    id: 9,
    title: "Perkalian",
    materi: { paragraphs: ["Simbol (*) untuk perkalian."], codeExample: "5 * 5" },
    quest: { instruction: "Hitung 4 dikali 5 di variabel 'hitung'.", xp: 130, explanation: { "*": "Kali." }, initialCode: `<script></script>`, validation: (code: string) => /let\s+hitung\s*=\s*4\s*\*\s*5/i.test(code) || /let\s+hitung\s*=\s*20/i.test(code) }
  },
  {
    id: 10,
    title: "Komentar JS",
    materi: { paragraphs: ["Gunakan // untuk catatan."], codeExample: "// Catatan" },
    quest: { instruction: "Tulis komentar JS teks 'Ok'.", xp: 100, explanation: { "//": "Komentar satu baris." }, initialCode: `<script></script>`, validation: (code: string) => /\/\/\s*Ok/i.test(code) }
  }
];

export const LINUX_CONTENT: LearningStep[] = [
  { id: 1, title: "GPS Terminal (pwd)", materi: { paragraphs: ["'pwd' menunjukkan lokasi aktif."], codeExample: "$ pwd" }, quest: { instruction: "Ketik perintah lokasi.", xp: 100, explanation: { "pwd": "Cek lokasi." }, command: "pwd" } },
  { id: 2, title: "Melihat Sekitar (ls)", materi: { paragraphs: ["'ls' menampilkan isi folder."], codeExample: "$ ls" }, quest: { instruction: "Gunakan perintah list.", xp: 120, explanation: { "ls": "Daftar isi." }, command: "ls" } },
  { id: 3, title: "Siapa Saya? (whoami)", materi: { paragraphs: ["Cek username aktif."], codeExample: "$ whoami" }, quest: { instruction: "Ketik whoami.", xp: 100, explanation: { "whoami": "Cek user." }, command: "whoami" } },
  { id: 4, title: "Bersihkan Layar (clear)", materi: { paragraphs: ["'clear' merapikan tampilan."], codeExample: "$ clear" }, quest: { instruction: "Ketik clear.", xp: 100, explanation: { "clear": "Hapus teks." }, command: "clear" } },
  { id: 5, title: "Buat Folder (mkdir)", materi: { paragraphs: ["'mkdir' membuat folder baru."], codeExample: "$ mkdir" }, quest: { instruction: "Buat folder 'belajar'.", xp: 150, explanation: { "mkdir": "Make Dir." }, command: "mkdir belajar" } },
  { id: 6, title: "Buat File (touch)", materi: { paragraphs: ["'touch' membuat file kosong."], codeExample: "$ touch" }, quest: { instruction: "Buat file 'catatan.txt'.", xp: 150, explanation: { "touch": "Buat file." }, command: "touch catatan.txt" } },
  { id: 7, title: "Masuk Folder (cd)", materi: { paragraphs: ["'cd' berpindah direktori."], codeExample: "$ cd" }, quest: { instruction: "Masuk ke 'belajar'.", xp: 140, explanation: { "cd": "Change Dir." }, command: "cd belajar" } },
  { id: 8, title: "Kembali (cd ..)", materi: { paragraphs: ["'cd ..' naik tingkat."], codeExample: "$ cd .." }, quest: { instruction: "Keluar dari folder.", xp: 130, explanation: { "..": "Parent dir." }, command: "cd .." } },
  { id: 9, title: "Cek Waktu (date)", materi: { paragraphs: ["Tampilkan waktu sistem."], codeExample: "$ date" }, quest: { instruction: "Ketik date.", xp: 100, explanation: { "date": "Info waktu." }, command: "date" } },
  { id: 10, title: "Cetak Teks (echo)", materi: { paragraphs: ["'echo' menampilkan teks."], codeExample: "$ echo" }, quest: { instruction: "Cetak 'Belajar Linux'.", xp: 110, explanation: { "echo": "Print." }, command: "echo Belajar Linux" } },
  { id: 11, title: "Baca File (cat)", materi: { paragraphs: ["'cat' melihat isi file."], codeExample: "$ cat" }, quest: { instruction: "Baca 'readme.txt'.", xp: 160, explanation: { "cat": "Read." }, command: "cat readme.txt" } },
  { id: 12, title: "Hapus File (rm)", materi: { paragraphs: ["'rm' menghapus file."], codeExample: "$ rm" }, quest: { instruction: "Hapus 'catatan.txt'.", xp: 150, explanation: { "rm": "Remove." }, command: "rm catatan.txt" } },
  { id: 13, title: "Hapus Folder (rmdir)", materi: { paragraphs: ["'rmdir' hapus folder kosong."], codeExample: "$ rmdir" }, quest: { instruction: "Hapus 'belajar'.", xp: 150, explanation: { "rmdir": "Remove dir." }, command: "rmdir belajar" } },
  { id: 14, title: "Salin File (cp)", materi: { paragraphs: ["'cp' untuk menyalin."], codeExample: "$ cp" }, quest: { instruction: "Salin 'readme.txt' ke 'v2.txt'.", xp: 180, explanation: { "cp": "Copy." }, command: "cp readme.txt v2.txt" } },
  { id: 15, title: "Pindah (mv)", materi: { paragraphs: ["'mv' untuk ganti nama."], codeExample: "$ mv" }, quest: { instruction: "Ganti 'v2.txt' ke 'final.txt'.", xp: 180, explanation: { "mv": "Move." }, command: "mv v2.txt final.txt" } },
  { id: 16, title: "Intip Awal (head)", materi: { paragraphs: ["'head' lihat awal file."], codeExample: "$ head" }, quest: { instruction: "Intip awal 'final.txt'.", xp: 140, explanation: { "head": "Top." }, command: "head final.txt" } },
  { id: 17, title: "Intip Akhir (tail)", materi: { paragraphs: ["'tail' lihat akhir file."], codeExample: "$ tail" }, quest: { instruction: "Intip akhir 'final.txt'.", xp: 140, explanation: { "tail": "Bottom." }, command: "tail final.txt" } },
  { id: 18, title: "Cari (grep)", materi: { paragraphs: ["'grep' cari teks."], codeExample: "$ grep" }, quest: { instruction: "Cari 'Linux' di 'final.txt'.", xp: 200, explanation: { "grep": "Search." }, command: "grep Linux final.txt" } },
  { id: 19, title: "Admin (sudo)", materi: { paragraphs: ["'sudo' hak akses root."], codeExample: "$ sudo" }, quest: { instruction: "Jalankan 'whoami' via sudo.", xp: 250, explanation: { "sudo": "Superuser." }, command: "sudo whoami" } },
  { id: 20, title: "Exit", materi: { paragraphs: ["'exit' keluar terminal."], codeExample: "$ exit" }, quest: { instruction: "Ketik exit.", xp: 300, explanation: { "exit": "Keluar." }, command: "exit" } }
];
