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
        "Jika urutan itu sangat penting (seperti tutorial atau resep), gunakan <ol> (Ordered List).",
        "Elemen ini akan otomatis memberikan penomoran (1, 2, 3...) di depan setiap item.",
        "Sama seperti <ul>, setiap butir daftar harus dibungkus dengan tag <li> (List Item)."
      ],
      codeExample: "<ol>\n  <li>Langkah Pertama</li>\n  <li>Langkah Kedua</li>\n</ol>"
    },
    quest: {
      instruction: "Buatlah daftar berurutan <ol> dan tambahkan satu item <li> dengan teks 'Langkah 1'.",
      xp: 150,
      explanation: { 
        "<ol>": "Ordered List, wadah untuk daftar yang memiliki urutan nomor.",
        "<li>": "List Item, elemen wajib untuk setiap butir di dalam daftar."
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
        "Untuk menampilkan visual, kita menggunakan tag <img>. Tag ini unik karena 'Self-Closing' (tidak butuh tag penutup).",
        "Ada dua atribut wajib: 'src' (alamat gambar) dan 'alt' (deskripsi gambar untuk mesin pencari dan pembaca layar disabilitas).",
        "Contoh: <img src='foto.jpg' alt='Deskripsi Foto'>"
      ],
      codeExample: '<img src="https://bit.ly/3kS4N" alt="Logo">'
    },
    quest: {
      instruction: "Tampilkan sebuah gambar menggunakan src 'https://picsum.photos/200' dan alt 'Random Image'.",
      xp: 180,
      explanation: { 
        "src": "Source, alamat URL atau lokasi file gambar kamu.",
        "alt": "Alternative text, teks yang muncul jika gambar gagal dimuat."
      },
      initialCode: `<html>\n  <body>\n    <!-- Tambahkan tag img di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<img.*src="https:\/\/picsum\.photos\/200".*alt="Random Image"/i.test(code)
    }
  },
  {
    id: 8,
    title: "Tautan (Hyperlinks)",
    materi: {
      paragraphs: [
        "Link adalah inti dari internet. Kita membuatnya menggunakan tag <a> (Anchor).",
        "Gunakan atribut 'href' untuk menentukan ke mana user akan pergi saat mengklik link tersebut.",
        "Apapun yang ada di antara <a> dan </a> akan menjadi bagian yang bisa diklik."
      ],
      codeExample: '<a href="https://google.com">Klik ke Google</a>'
    },
    quest: {
      instruction: "Buat link yang mengarah ke 'https://github.com' dengan teks klik 'Profil Saya'.",
      xp: 160,
      explanation: { 
        "<a>": "Anchor tag, elemen untuk membuat tautan.",
        "href": "Hyperlink Reference, atribut untuk menyimpan alamat tujuan."
      },
      initialCode: `<html>\n  <body>\n    <!-- Buat link ke Github di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<a.*href="https:\/\/github\.com".*>.*Profil Saya.*<\/a>/i.test(code)
    }
  },
  {
    id: 9,
    title: "Input Teks Dasar",
    materi: {
      paragraphs: [
        "Untuk membuat formulir atau fitur login, kita butuh elemen <input>.",
        "Atribut `type='text'` akan membuat kotak ketik satu baris.",
        "Gunakan atribut `placeholder` untuk memberikan teks petunjuk di dalam kotak sebelum user mengetik."
      ],
      codeExample: '<input type="text" placeholder="Ketik nama...">'
    },
    quest: {
      instruction: "Buatlah input teks dengan placeholder 'Username'.",
      xp: 140,
      explanation: { 
        "<input>": "Elemen input mandiri (self-closing).",
        "placeholder": "Teks bantuan sementara di dalam input."
      },
      initialCode: `<html>\n  <body>\n    <p>Silakan Masuk:</p>\n    <!-- Tambahkan input username di sini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="text".*placeholder="Username"/i.test(code)
    }
  },
  {
    id: 10,
    title: "Membuat Tombol (Button)",
    materi: {
      paragraphs: [
        "Tombol digunakan untuk memicu aksi, seperti mengirim data atau membuka jendela baru.",
        "Kita menggunakan tag <button>. Apapun teks di dalamnya akan muncul di atas tombol.",
        "Tag ini membutuhkan penutup </button>."
      ],
      codeExample: "<button>Submit Sekarang</button>"
    },
    quest: {
      instruction: "Tambahkan sebuah tombol dengan teks 'Kirim'.",
      xp: 120,
      explanation: { 
        "<button>": "Tag untuk membuat tombol interaktif."
      },
      initialCode: `<html>\n  <body>\n    <input type="text">\n    <!-- Tambahkan tombol kirim di bawah input -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<button.*>.*Kirim.*<\/button>/i.test(code)
    }
  },
  {
    id: 11,
    title: "Wadah Konten (Div)",
    materi: {
      paragraphs: [
        "Elemen <div> (Division) adalah wadah paling populer di dunia web.",
        "Ia tidak memiliki efek visual secara langsung, namun sangat berguna untuk mengelompokkan elemen agar mudah diatur tata letaknya nanti.",
        "Gunakan <div> jika kamu ingin membungkus beberapa elemen menjadi satu kesatuan."
      ],
      codeExample: "<div>\n  <h3>Grup Judul</h3>\n  <p>Grup Deskripsi</p>\n</div>"
    },
    quest: {
      instruction: "Bungkus elemen h2 'Card Title' dan p 'Card Text' yang sudah ada di bawah menggunakan tag <div>.",
      xp: 150,
      explanation: { 
        "<div>": "Generic Container, digunakan sebagai blok pembungkus."
      },
      initialCode: `<html>\n  <body>\n    <!-- Bungkus dua elemen di bawah ini dengan div -->\n    <h2>Card Title</h2>\n    <p>Card Text</p>\n  </body>\n</html>`,
      validation: (code: string) => /<div>\s*<h2.*>.*<\/h2>\s*<p.*>.*<\/p>\s*<\/div>/i.test(code)
    }
  },
  {
    id: 12,
    title: "Sentuhan Inline (Span)",
    materi: {
      paragraphs: [
        "Jika <div> membungkus satu blok besar, <span> digunakan untuk membungkus potongan kecil teks di dalam sebuah kalimat.",
        "Ini sangat berguna jika kamu ingin memberi warna berbeda hanya pada satu kata di tengah paragraf.",
        "<span> bersifat 'inline', artinya ia tidak akan membuat baris baru."
      ],
      codeExample: "<p>Status: <span>Aktif</span></p>"
    },
    quest: {
      instruction: "Bungkus kata 'Gratis' di dalam paragraf menggunakan tag <span>.",
      xp: 130,
      explanation: { 
        "<span>": "Inline container untuk memformat bagian kecil dari teks."
      },
      initialCode: `<html>\n  <body>\n    <p>Layanan ini Gratis selamanya.</p>\n  </body>\n</html>`,
      validation: (code: string) => /<span>.*Gratis.*<\/span>/i.test(code)
    }
  },
  {
    id: 13,
    title: "Input Khusus Email",
    materi: {
      paragraphs: [
        "HTML5 menyediakan input khusus untuk alamat email menggunakan `type='email'`.",
        "Keuntungannya: Browser di HP akan otomatis memunculkan tombol '@' di keyboard, dan browser akan memvalidasi jika user lupa memasukkan simbol '.' atau '@'."
      ],
      codeExample: '<input type="email" placeholder="nama@email.com">'
    },
    quest: {
      instruction: "Buatlah satu elemen input dengan type 'email'.",
      xp: 140,
      explanation: { 
        "type='email'": "Input yang divalidasi secara otomatis sebagai format email."
      },
      initialCode: `<html>\n  <body>\n    <p>Email Anda:</p>\n    <!-- Tambahkan input email di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="email"/i.test(code)
    }
  },
  {
    id: 14,
    title: "Rahasia Terjamin (Password)",
    materi: {
      paragraphs: [
        "Keamanan user sangat penting. Gunakan `type='password'` agar karakter yang diketik user disamarkan menjadi titik atau bintang.",
        "Ini mencegah orang di sekitar user mengintip kata sandi mereka."
      ],
      codeExample: '<input type="password">'
    },
    quest: {
      instruction: "Tambahkan input dengan type 'password' untuk kolom kata sandi.",
      xp: 140,
      explanation: { 
        "type='password'": "Input yang menyembunyikan teks demi keamanan."
      },
      initialCode: `<html>\n  <body>\n    <p>Password:</p>\n    <!-- Tambahkan input password di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="password"/i.test(code)
    }
  },
  {
    id: 15,
    title: "Kotak Centang (Checkboxes)",
    materi: {
      paragraphs: [
        "Checkbox memungkinkan pengguna untuk memilih satu atau banyak opsi dari daftar yang tersedia.",
        "Gunakan `type='checkbox'` untuk membuatnya. Kamu bisa menambahkan teks di sampingnya sebagai label."
      ],
      codeExample: '<input type="checkbox"> Langganan Newsletter'
    },
    quest: {
      instruction: "Buat sebuah checkbox yang diikuti teks 'Ingat Saya'.",
      xp: 130,
      explanation: { 
        "checkbox": "Input kotak centang untuk pilihan jamak."
      },
      initialCode: `<html>\n  <body>\n    <!-- Buat checkbox dan teks di sini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="checkbox"/i.test(code)
    }
  },
  {
    id: 16,
    title: "Pesan Panjang (Textarea)",
    materi: {
      paragraphs: [
        "Jika kamu butuh user menulis pesan panjang (seperti komentar atau keluhan), gunakan <textarea>.",
        "Berbeda dengan <input>, tag ini butuh penutup </textarea> dan kotaknya bisa ditarik agar lebih besar oleh user."
      ],
      codeExample: '<textarea placeholder="Tulis pesan..."></textarea>'
    },
    quest: {
      instruction: "Buatlah elemen textarea dengan pesan awal di dalamnya 'Tulis di sini...'.",
      xp: 160,
      explanation: { 
        "<textarea>": "Elemen input teks multi-baris."
      },
      initialCode: `<html>\n  <body>\n    <p>Kritik & Saran:</p>\n    <!-- Tambahkan textarea di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<textarea.*>.*Tulis di sini.*<\/textarea>/i.test(code)
    }
  },
  {
    id: 17,
    title: "Identitas Tab (Title)",
    materi: {
      paragraphs: [
        "Pernahkah kamu melihat teks di tab browser? Itu diatur oleh tag <title>.",
        "Tag ini **wajib** diletakkan di dalam tag <head>, bukan <body>, karena ia memberikan informasi tentang halaman, bukan isi halaman."
      ],
      codeExample: "<head>\n  <title>Nama Web Kamu</title>\n</head>"
    },
    quest: {
      instruction: "Lengkapi tag <head> dan tambahkan <title> dengan teks 'Belajar HTML'.",
      xp: 120,
      explanation: { 
        "<title>": "Menentukan teks yang muncul di bagian atas browser (Tab)."
      },
      initialCode: `<html>\n  <head>\n    <!-- Tambahkan title di sini -->\n\n  </head>\n  <body></body>\n</html>`,
      validation: (code: string) => /<title.*>.*Belajar HTML.*<\/title>/i.test(code)
    }
  },
  {
    id: 18,
    title: "Memutar Video",
    materi: {
      paragraphs: [
        "HTML modern memudahkan kita memutar video tanpa plugin tambahan menggunakan tag <video>.",
        "Sangat penting menambahkan atribut `controls` agar tombol play, volume, dan full-screen muncul secara otomatis."
      ],
      codeExample: '<video src="video.mp4" controls></video>'
    },
    quest: {
      instruction: "Tampilkan sebuah video dan pastikan tombol kontrolnya muncul dengan atribut 'controls'.",
      xp: 200,
      explanation: { 
        "<video>": "Media player bawaan HTML.",
        "controls": "Atribut untuk memunculkan antarmuka pemutar video."
      },
      initialCode: `<html>\n  <body>\n    <!-- Masukkan video di sini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<video.*controls/i.test(code)
    }
  },
  {
    id: 19,
    title: "Catatan Developer (Comments)",
    materi: {
      paragraphs: [
        "Komentar adalah teks yang hanya bisa dibaca oleh pembuat kode (developer) dan diabaikan oleh browser.",
        "Ini sangat berguna untuk memberi tanda atau penjelasan pada bagian kode yang rumit.",
        "Sintaksnya: <!-- Tulis catatan di sini -->"
      ],
      codeExample: "<!-- Bagian ini untuk Footer -->"
    },
    quest: {
      instruction: "Buatlah sebuah komentar HTML dengan teks 'Selesai'.",
      xp: 100,
      explanation: { 
        "<!-- -->": "Sintaks pembuka dan penutup komentar di HTML."
      },
      initialCode: `<html>\n  <body>\n    <!-- Tulis komentar kamu di bawah ini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<!--.*Selesai.*-->/.test(code)
    }
  },
  {
    id: 20,
    title: "Tantangan Final: Kartu Nama",
    materi: {
      paragraphs: [
        "Selamat! Kamu telah menyelesaikan perjalanan dasar HTML.",
        "Saatnya menguji semua ingatanmu. Kamu harus membuat struktur 'Kartu Nama' yang utuh.",
        "Kartu ini harus memiliki pembungkus utama (div), nama besar (h1/h2), dan deskripsi diri (p)."
      ],
      codeExample: "<div>\n  <h1>John Doe</h1>\n  <p>Web Developer</p>\n</div>"
    },
    quest: {
      instruction: "Gunakan <div> untuk membungkus judul h1 (Nama Kamu) dan paragraf p (Bio Singkat Kamu).",
      xp: 300,
      explanation: { 
        "Final Boss": "Gunakan gabungan container (div), heading, dan paragraph."
      },
      initialCode: `<html>\n  <body>\n    <!-- Bangun Kartu Nama kamu di sini -->\n\n  </body>\n</html>`,
      validation: (code: string) => /<div>\s*<h[12].*>.*<\/h[12]>\s*<p.*>.*<\/p>\s*<\/div>/i.test(code)
    }
  }
];

export const CSS_CONTENT: LearningStep[] = [
  {
    id: 1,
    title: "Pewarnaan Teks",
    materi: {
      paragraphs: [
        "CSS digunakan untuk mempercantik HTML. Untuk menulis CSS di dalam file HTML, kita wajib menggunakan tag <style> yang diletakkan di dalam <head>.",
        "Properti `color` digunakan untuk mengubah warna teks. Contohnya `p { color: red; }` akan membuat semua paragraf berwarna merah."
      ],
      codeExample: "<style>\n  h1 {\n    color: blue;\n  }\n</style>"
    },
    quest: {
      instruction: "Ubah warna teks paragraf <p> menjadi merah (red). Tulis kode CSS kamu di dalam tag <style>.",
      xp: 100,
      explanation: { 
        "<style>": "Tag HTML untuk menulis kode CSS internal.",
        "color": "Properti CSS untuk mengatur warna tulisan.",
        "Selector": "Nama elemen yang ingin diubah (contoh: p, h1, body)."
      },
      initialCode: `<head>\n  <style>\n    p {\n      /* Tulis color: red; di sini */\n    }\n  </style>\n</head>\n<body>\n  <p>Teks ini harus berwarna merah.</p>\n</body>`,
      validation: (code: string) => /color\s*:\s*red/i.test(code) && !code.includes('/* Tulis color: red; di sini */')
    }
  },
  {
    id: 2,
    title: "Warna Latar",
    materi: {
      paragraphs: [
        "Gunakan `background-color` untuk mengubah warna latar belakang elemen.",
        "Ingat, setiap instruksi CSS harus berada di dalam kurung kurawal `{ }` milik sebuah selector."
      ],
      codeExample: "body {\n  background-color: lightblue;\n}"
    },
    quest: {
      instruction: "Ubah background body menjadi lightblue di dalam tag <style>.",
      xp: 120,
      explanation: { 
        "background-color": "Properti untuk mewarnai latar belakang.",
        "body": "Selector untuk menargetkan seluruh halaman."
      },
      initialCode: `<head>\n  <style>\n    body {\n      /* Tulis background-color: lightblue; di sini */\n    }\n  </style>\n</head>`,
      validation: (code: string) => /background-color\s*:\s*lightblue/i.test(code) && !code.includes('/* Tulis background-color: lightblue; di sini */')
    }
  }
];

export const JS_CONTENT: LearningStep[] = [
  {
    id: 1,
    title: "Output Console",
    materi: {
      paragraphs: [
        "JavaScript adalah bahasa pemrograman. Agar bisa berjalan di HTML, kode JS harus dibungkus dengan tag <script>.",
        "Fungsi `console.log()` adalah cara paling dasar untuk menampilkan pesan ke jendela debugger browser."
      ],
      codeExample: "<script>\n  console.log('Halo');\n</script>"
    },
    quest: {
      instruction: "Cetak teks 'Belajar JS' menggunakan console.log. Pastikan kodenya di dalam tag <script>.",
      xp: 100,
      explanation: { 
        "<script>": "Tag HTML untuk menulis atau memanggil kode JavaScript.",
        "console.log": "Perintah untuk mencetak data ke console browser."
      },
      initialCode: `<body>\n  <script>\n    // Tulis console.log("Belajar JS"); di bawah ini\n\n  </script>\n</body>`,
      validation: (code: string) => /console\.log\s*\(\s*['"]Belajar JS['"]\s*\)/i.test(code) && !code.includes('// Tulis console.log("Belajar JS"); di bawah ini')
    }
  },
  {
    id: 2,
    title: "Variabel Modern",
    materi: {
      paragraphs: [
        "Variabel adalah wadah penyimpanan data. Di JavaScript modern, kita menggunakan `let`.",
        "Contoh: `let nama = 'Budi';` akan menyimpan teks 'Budi' ke dalam variabel bernama 'nama'."
      ],
      codeExample: "let skor = 10;"
    },
    quest: {
      instruction: "Buat variabel bernama 'skor' dengan nilai 100 di dalam tag <script>.",
      xp: 120,
      explanation: { 
        "let": "Kata kunci untuk membuat variabel.",
        "assignment": "Gunakan tanda '=' untuk memasukkan nilai ke variabel."
      },
      initialCode: `<script>\n  // Tulis let skor = 100; di sini\n\n</script>`,
      validation: (code: string) => /let\s+skor\s*=\s*100/i.test(code) && !code.includes('// Tulis let skor = 100; di sini')
    }
  }
];

export const LINUX_CONTENT: LearningStep[] = [
  {
    id: 1, title: "GPS Terminal (pwd)",
    materi: { paragraphs: ["'pwd' (Print Working Directory) menunjukkan lokasi folder aktif."], codeExample: "$ pwd" },
    quest: { instruction: "Ketik perintah untuk cek lokasi saat ini.", xp: 100, explanation: { "pwd": "Cek lokasi." }, command: "pwd" }
  },
  {
    id: 2, title: "Melihat Sekitar (ls)",
    materi: { paragraphs: ["'ls' (List) menampilkan isi direktori."], codeExample: "$ ls" },
    quest: { instruction: "Gunakan perintah list isi folder.", xp: 120, explanation: { "ls": "Daftar isi." }, command: "ls" }
  },
  {
    id: 3, title: "Siapa Saya? (whoami)",
    materi: { paragraphs: ["Cek username yang sedang aktif."], codeExample: "$ whoami" },
    quest: { instruction: "Ketik perintah whoami.", xp: 100, explanation: { "whoami": "Cek user." }, command: "whoami" }
  },
  {
    id: 4, title: "Bersihkan Layar (clear)",
    materi: { paragraphs: ["Gunakan 'clear' untuk merapikan tampilan."], codeExample: "$ clear" },
    quest: { instruction: "Ketik perintah clear.", xp: 100, explanation: { "clear": "Hapus teks layar." }, command: "clear" }
  },
  {
    id: 5, title: "Buat Folder (mkdir)",
    materi: { paragraphs: ["'mkdir' untuk membuat folder baru."], codeExample: "$ mkdir folder" },
    quest: { instruction: "Buat folder bernama 'belajar'.", xp: 150, explanation: { "mkdir": "Make Directory." }, command: "mkdir belajar" }
  },
  {
    id: 6, title: "Buat File (touch)",
    materi: { paragraphs: ["'touch' untuk membuat file kosong."], codeExample: "$ touch file.txt" },
    quest: { instruction: "Buat file 'catatan.txt'.", xp: 150, explanation: { "touch": "Buat file." }, command: "touch catatan.txt" }
  },
  {
    id: 7, title: "Masuk Folder (cd)",
    materi: { paragraphs: ["'cd' untuk berpindah direktori."], codeExample: "$ cd folder" },
    quest: { instruction: "Masuk ke folder 'belajar'.", xp: 140, explanation: { "cd": "Change Directory." }, command: "cd belajar" }
  },
  {
    id: 8, title: "Kembali (cd ..)",
    materi: { paragraphs: ["'cd ..' untuk naik satu tingkat."], codeExample: "$ cd .." },
    quest: { instruction: "Keluar dari folder saat ini.", xp: 130, explanation: { "..": "Parent directory." }, command: "cd .." }
  },
  {
    id: 9, title: "Cek Waktu (date)",
    materi: { paragraphs: ["Tampilkan waktu sistem."], codeExample: "$ date" },
    quest: { instruction: "Ketik perintah date.", xp: 100, explanation: { "date": "Info waktu." }, command: "date" }
  },
  {
    id: 10, title: "Cetak Teks (echo)",
    materi: { paragraphs: ["'echo' untuk menampilkan teks."], codeExample: "$ echo Halo" },
    quest: { instruction: "Cetak teks 'Belajar Linux'.", xp: 110, explanation: { "echo": "Print teks." }, command: "echo Belajar Linux" }
  },
  {
    id: 11, title: "Baca File (cat)",
    materi: { paragraphs: ["'cat' untuk melihat isi file."], codeExample: "$ cat file.txt" },
    quest: { instruction: "Baca file 'readme.txt'.", xp: 160, explanation: { "cat": "Read file." }, command: "cat readme.txt" }
  },
  {
    id: 12, title: "Hapus File (rm)",
    materi: { paragraphs: ["'rm' menghapus file secara permanen."], codeExample: "$ rm file.txt" },
    quest: { instruction: "Hapus 'catatan.txt'.", xp: 150, explanation: { "rm": "Remove file." }, command: "rm catatan.txt" }
  },
  {
    id: 13, title: "Hapus Folder (rmdir)",
    materi: { paragraphs: ["'rmdir' menghapus folder kosong."], codeExample: "$ rmdir folder" },
    quest: { instruction: "Hapus folder 'belajar'.", xp: 150, explanation: { "rmdir": "Remove directory." }, command: "rmdir belajar" }
  },
  {
    id: 14, title: "Salin File (cp)",
    materi: { paragraphs: ["'cp source dest' untuk menyalin."], codeExample: "$ cp a.txt b.txt" },
    quest: { instruction: "Salin 'readme.txt' ke 'readme_v2.txt'.", xp: 180, explanation: { "cp": "Copy." }, command: "cp readme.txt readme_v2.txt" }
  },
  {
    id: 15, title: "Pindah/Ganti Nama (mv)",
    materi: { paragraphs: ["'mv' untuk memindah atau mengganti nama."], codeExample: "$ mv a.txt b.txt" },
    quest: { instruction: "Ganti nama 'readme_v2.txt' ke 'final.txt'.", xp: 180, explanation: { "mv": "Move/Rename." }, command: "mv readme_v2.txt final.txt" }
  },
  {
    id: 16, title: "Intip Awal (head)",
    materi: { paragraphs: ["Lihat 10 baris pertama file."], codeExample: "$ head file.txt" },
    quest: { instruction: "Intip awal file 'final.txt'.", xp: 140, explanation: { "head": "Top of file." }, command: "head final.txt" }
  },
  {
    id: 17, title: "Intip Akhir (tail)",
    materi: { paragraphs: ["Lihat bagian bawah file."], codeExample: "$ tail file.txt" },
    quest: { instruction: "Intip akhir file 'final.txt'.", xp: 140, explanation: { "tail": "Bottom of file." }, command: "tail final.txt" }
  },
  {
    id: 18, title: "Cari Kata (grep)",
    materi: { paragraphs: ["Cari teks di dalam file."], codeExample: "$ grep kata file.txt" },
    quest: { instruction: "Cari kata 'Linux' di 'final.txt'.", xp: 200, explanation: { "grep": "Search text." }, command: "grep Linux final.txt" }
  },
  {
    id: 19, title: "Akses Admin (sudo)",
    materi: { paragraphs: ["Gunakan 'sudo' untuk hak akses root."], codeExample: "$ sudo command" },
    quest: { instruction: "Jalankan 'whoami' with sudo.", xp: 250, explanation: { "sudo": "Superuser do." }, command: "sudo whoami" }
  },
  {
    id: 20, title: "Selesai (exit)",
    materi: { paragraphs: ["Keluar dari terminal."], codeExample: "$ exit" },
    quest: { instruction: "Ketik perintah exit.", xp: 300, explanation: { "exit": "Keluar." }, command: "exit" }
  }
];
