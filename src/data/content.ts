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
    title: "Anatomi Elemen HTML",
    materi: {
      paragraphs: [
        "HTML (HyperText Markup Language) adalah tulang punggung setiap website.",
        "Elemen HTML biasanya memiliki tag pembuka, isi, dan tag penutup. Contoh: <p>Halo Dunia</p>.",
        "Deklarasi <!DOCTYPE html> di awal file sangat penting agar browser tahu kita menggunakan standar HTML5."
      ],
      codeExample: "<tag>Isi konten di sini</tag>"
    },
    quest: {
      instruction: "Lengkapi kerangka dasar website Anda. Tambahkan tag <html> dan di dalamnya tambahkan tag <body>.",
      xp: 100,
      explanation: {
        "<html>": "Elemen akar yang membungkus seluruh konten halaman.",
        "<body>": "Wadah untuk semua konten yang akan terlihat di browser."
      },
      initialCode: `<!DOCTYPE html>\n<!-- Tulis <html> dan <body> di bawah ini -->\n`,
      validation: (code: string) => code.toLowerCase().includes('<html>') && code.toLowerCase().includes('</html>') && code.toLowerCase().includes('<body>') && code.toLowerCase().includes('</body>')
    }
  },
  {
    id: 2,
    title: "Judul yang Menarik (Headings)",
    materi: {
      paragraphs: [
        "Headings membantu pembaca memahami struktur halaman. HTML menyediakan enam tingkatan, dari <h1> sampai <h6>.",
        "<h1> adalah yang paling besar dan penting."
      ],
      codeExample: "<h1>Judul Utama</h1>"
    },
    quest: {
      instruction: "Buatlah judul utama website Anda menggunakan tag h1 dengan teks 'Halo Developer!'.",
      xp: 120,
      explanation: { "<h1>": "Heading level 1, digunakan untuk topik paling penting." },
      initialCode: `<html>\n  <body>\n    <!-- Tambahkan h1 di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<h1.*>.*Halo Developer!.*<\/h1>/i.test(code)
    }
  },
  {
    id: 3,
    title: "Paragraf & Teks",
    materi: {
      paragraphs: ["Untuk menulis teks biasa atau narasi, kita menggunakan tag <p> (Paragraph)."],
      codeExample: "<p>Ini adalah sebuah paragraf teks.</p>"
    },
    quest: {
      instruction: "Tambahkan paragraf di bawah judul h1 Anda dengan teks 'Saya sedang belajar coding.'.",
      xp: 100,
      explanation: { "<p>": "Digunakan untuk membungkus blok teks atau paragraf." },
      initialCode: `<html>\n  <body>\n    <h1>Halo Developer!</h1>\n    <!-- Tambahkan p di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<p.*>.*Saya sedang belajar coding..*<\/p>/i.test(code)
    }
  },
  {
    id: 4,
    title: "Menonjolkan Kata",
    materi: {
      paragraphs: ["Gunakan <strong> untuk menebalkan kata agar lebih menonjol."],
      codeExample: "<strong>Tebal</strong>"
    },
    quest: {
      instruction: "Bungkus kata 'seru' dengan tag strong.",
      xp: 130,
      explanation: { "<strong>": "Menebalkan teks." },
      initialCode: `<html>\n  <body>\n    <p>Belajar itu seru!</p>\n  </body>\n</html>`,
      validation: (code: string) => /<strong>.*seru.*<\/strong>/i.test(code)
    }
  },
  {
    id: 5,
    title: "Daftar Tak Terurut",
    materi: {
      paragraphs: ["Gunakan <ul> dan <li> untuk membuat daftar poin-poin."],
      codeExample: "<ul>\n  <li>Item</li>\n</ul>"
    },
    quest: {
      instruction: "Buat daftar <ul> dan tambahkan satu <li> dengan teks 'HTML'.",
      xp: 150,
      explanation: { "<ul>": "Unordered List.", "<li>": "List Item." },
      initialCode: `<html>\n  <body>\n    <!-- Buat ul dan li di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<ul>\s*<li.*>.*HTML.*<\/li>\s*<\/ul>/i.test(code)
    }
  },
  {
    id: 6,
    title: "Daftar Berurutan (Ordered List)",
    materi: {
      paragraphs: [
        "Jika urutan itu sangat penting, gunakan <ol> (Ordered List).",
        "Elemen ini akan otomatis memberikan penomoran (1, 2, 3...) di depan setiap item."
      ],
      codeExample: "<ol>\n  <li>Langkah Satu</li>\n</ol>"
    },
    quest: {
      instruction: "Buatlah daftar berurutan <ol> dan tambahkan satu item <li> dengan teks 'Langkah 1'.",
      xp: 150,
      explanation: { 
        "<ol>": "Ordered List, wadah untuk daftar bernomor.",
        "<li>": "List Item, elemen untuk setiap butir daftar."
      },
      initialCode: `<html>\n  <body>\n    <!-- Buat daftar berurutan di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<ol>\s*<li.*>.*Langkah 1.*<\/li>\s*<\/ol>/i.test(code)
    }
  },
  {
    id: 7,
    title: "Menampilkan Gambar",
    materi: {
      paragraphs: [
        "Gunakan tag <img> untuk visual. Tag ini unik karena 'Self-Closing'.",
        "Atribut 'src' adalah alamat gambar, dan 'alt' adalah teks alternatif."
      ],
      codeExample: '<img src="https://picsum.photos/200" alt="Foto">'
    },
    quest: {
      instruction: "Tampilkan gambar dengan src 'https://picsum.photos/200' dan alt 'Random Image'.",
      xp: 180,
      explanation: { "src": "Source alamat gambar.", "alt": "Teks deskripsi gambar." },
      initialCode: `<html>\n  <body>\n    <!-- Tambahkan tag img di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<img.*src="https:\/\/picsum\.photos\/200".*alt="Random Image"/i.test(code)
    }
  },
  {
    id: 8,
    title: "Tautan (Hyperlinks)",
    materi: {
      paragraphs: [
        "Tautan dibuat menggunakan tag <a>.",
        "Gunakan atribut 'href' untuk menentukan alamat tujuan link."
      ],
      codeExample: '<a href="https://google.com">Google</a>'
    },
    quest: {
      instruction: "Buat link ke 'https://github.com' dengan teks 'Profil Saya'.",
      xp: 160,
      explanation: { "<a>": "Anchor tag.", "href": "Alamat tujuan link." },
      initialCode: `<html>\n  <body>\n    <!-- Buat link ke Github di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<a.*href="https:\/\/github\.com".*>.*Profil Saya.*<\/a>/i.test(code)
    }
  },
  {
    id: 9,
    title: "Input Teks Dasar",
    materi: {
      paragraphs: ["Gunakan <input type='text'> untuk kotak ketik satu baris."],
      codeExample: '<input type="text" placeholder="Nama">'
    },
    quest: {
      instruction: "Buatlah input teks dengan placeholder 'Username'.",
      xp: 140,
      explanation: { "placeholder": "Teks bantuan di dalam kotak input." },
      initialCode: `<html>\n  <body>\n    <p>Masuk:</p>\n    <!-- Tambahkan input di sini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="text".*placeholder="Username"/i.test(code)
    }
  },
  {
    id: 10,
    title: "Membuat Tombol",
    materi: {
      paragraphs: ["Gunakan tag <button> untuk membuat tombol yang bisa diklik."],
      codeExample: "<button>Kirim</button>"
    },
    quest: {
      instruction: "Tambahkan sebuah tombol dengan teks 'Kirim'.",
      xp: 120,
      explanation: { "<button>": "Tag tombol interaktif." },
      initialCode: `<html>\n  <body>\n    <input type="text">\n    <!-- Tambahkan tombol di sini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<button.*>.*Kirim.*<\/button>/i.test(code)
    }
  },
  {
    id: 11,
    title: "Wadah Konten (Div)",
    materi: {
      paragraphs: ["Elemen <div> adalah wadah paling populer untuk mengelompokkan elemen."],
      codeExample: "<div>\n  <p>Grup</p>\n</div>"
    },
    quest: {
      instruction: "Bungkus h2 'Card Title' dan p 'Card Text' menggunakan tag <div>.",
      xp: 150,
      explanation: { "<div>": "Wadah generik pembungkus." },
      initialCode: `<html>\n  <body>\n    <!-- Bungkus elemen di bawah dengan div -->\n    <h2>Card Title</h2>\n    <p>Card Text</p>\n  </body>\n</html>`,
      validation: (code: string) => /<div>\s*<h2.*>.*<\/h2>\s*<p.*>.*<\/p>\s*<\/div>/i.test(code)
    }
  },
  {
    id: 12,
    title: "Sentuhan Inline (Span)",
    materi: {
      paragraphs: ["<span> digunakan untuk membungkus potongan kecil teks di dalam kalimat."],
      codeExample: "<p>Halo <span>User</span></p>"
    },
    quest: {
      instruction: "Bungkus kata 'Gratis' menggunakan tag <span>.",
      xp: 130,
      explanation: { "<span>": "Wadah teks inline." },
      initialCode: `<html>\n  <body>\n    <p>Layanan ini Gratis selamanya.</p>\n  </body>\n</html>`,
      validation: (code: string) => /<span>.*Gratis.*<\/span>/i.test(code)
    }
  },
  {
    id: 13,
    title: "Input Khusus Email",
    materi: {
      paragraphs: ["Gunakan `type='email'` untuk input alamat email yang valid."],
      codeExample: '<input type="email">'
    },
    quest: {
      instruction: "Buatlah satu elemen input dengan type 'email'.",
      xp: 140,
      explanation: { "type='email'": "Validasi email otomatis." },
      initialCode: `<html>\n  <body>\n    <p>Email:</p>\n    <!-- Input email di sini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="email"/i.test(code)
    }
  },
  {
    id: 14,
    title: "Input Password",
    materi: {
      paragraphs: ["Gunakan `type='password'` agar karakter yang diketik user disamarkan."],
      codeExample: '<input type="password">'
    },
    quest: {
      instruction: "Tambahkan input dengan type 'password'.",
      xp: 140,
      explanation: { "type='password'": "Menyembunyikan teks input." },
      initialCode: `<html>\n  <body>\n    <p>Sandi:</p>\n    <!-- Input sandi di sini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="password"/i.test(code)
    }
  },
  {
    id: 15,
    title: "Checkboxes",
    materi: {
      paragraphs: ["Checkbox memungkinkan pengguna untuk memilih satu atau banyak opsi."],
      codeExample: '<input type="checkbox"> Pilihan'
    },
    quest: {
      instruction: "Buat sebuah checkbox yang diikuti teks 'Ingat Saya'.",
      xp: 130,
      explanation: { "checkbox": "Input centang." },
      initialCode: `<html>\n  <body>\n    <!-- Checkbox di sini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="checkbox"/i.test(code)
    }
  },
  {
    id: 16,
    title: "Area Teks (Textarea)",
    materi: {
      paragraphs: ["Gunakan <textarea> untuk input pesan yang panjang."],
      codeExample: '<textarea></textarea>'
    },
    quest: {
      instruction: "Buat elemen textarea dengan pesan awal 'Tulis di sini...'.",
      xp: 160,
      explanation: { "<textarea>": "Input teks multi-baris." },
      initialCode: `<html>\n  <body>\n    <p>Pesan:</p>\n    <!-- Textarea di sini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<textarea.*>.*Tulis di sini.*<\/textarea>/i.test(code)
    }
  },
  {
    id: 17,
    title: "Identitas Tab (Title)",
    materi: {
      paragraphs: ["Tag <title> menentukan teks yang muncul di tab browser. Letakkan di dalam <head>."],
      codeExample: "<head><title>Web</title></head>"
    },
    quest: {
      instruction: "Tambahkan <title> dengan teks 'Belajar HTML' di dalam <head>.",
      xp: 120,
      explanation: { "<title>": "Judul tab browser." },
      initialCode: `<html>\n  <head>\n    <!-- Title di sini -->\n\n  </head>\n  <body></body>\n</html>`,
      validation: (code: string) => /<title.*>.*Belajar HTML.*<\/title>/i.test(code)
    }
  },
  {
    id: 18,
    title: "Memutar Video",
    materi: {
      paragraphs: ["Gunakan tag <video> dengan atribut `controls` untuk memutar video."],
      codeExample: '<video src="v.mp4" controls></video>'
    },
    quest: {
      instruction: "Tampilkan video dengan atribut 'controls'.",
      xp: 200,
      explanation: { "controls": "Tombol kontrol video." },
      initialCode: `<html>\n  <body>\n    <!-- Video di sini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<video.*controls/i.test(code)
    }
  },
  {
    id: 19,
    title: "Catatan (Comments)",
    materi: {
      paragraphs: ["Komentar diabaikan oleh browser. Sintaksnya: <!-- Pesan -->."],
      codeExample: "<!-- Komentar -->"
    },
    quest: {
      instruction: "Buatlah sebuah komentar HTML dengan teks 'Selesai'.",
      xp: 100,
      explanation: { "<!-- -->": "Sintaks komentar." },
      initialCode: `<html>\n  <body>\n    <!-- Tulis komentar di sini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<!--.*Selesai.*-->/.test(code)
    }
  },
  {
    id: 20,
    title: "Tantangan Final: Kartu Nama",
    materi: {
      paragraphs: ["Buat struktur 'Kartu Nama' menggunakan <div>, <h1>, dan <p>."],
      codeExample: "<div><h1>Nama</h1><p>Bio</p></div>"
    },
    quest: {
      instruction: "Gunakan <div> untuk membungkus judul h1 dan paragraf p.",
      xp: 300,
      explanation: { "Final": "Gabungan container, heading, dan paragraph." },
      initialCode: `<html>\n  <body>\n    <!-- Kartu Nama di sini -->\n\n  </body>\n</html>`,
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
