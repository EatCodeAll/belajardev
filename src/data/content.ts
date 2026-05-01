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
      paragraphs: ["Jika urutan itu penting, gunakan <ol> (Ordered List)."],
      codeExample: "<ol>\n  <li>Langkah 1</li>\n</ol>"
    },
    quest: {
      instruction: "Buat daftar berurutan <ol> dengan teks 'Langkah 1'.",
      xp: 150,
      explanation: { "<ol>": "Wadah untuk daftar bernomor." },
      initialCode: `<html>\n  <body>\n    <!-- Buat ol di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<ol>\s*<li.*>.*Langkah 1.*<\/li>\s*<\/ol>/i.test(code)
    }
  },
  {
    id: 7,
    title: "Menampilkan Gambar",
    materi: {
      paragraphs: ["Gunakan tag <img> untuk menampilkan gambar."],
      codeExample: '<img src="cat.jpg" alt="Kucing">'
    },
    quest: {
      instruction: "Tampilkan gambar menggunakan src 'https://picsum.photos/200' dan alt 'Random Image'.",
      xp: 180,
      explanation: { "src": "Sumber gambar.", "alt": "Teks alternatif." },
      initialCode: `<html>\n  <body>\n    <!-- Tambahkan img di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<img.*src="https:\/\/picsum\.photos\/200".*alt="Random Image"/i.test(code)
    }
  },
  {
    id: 8,
    title: "Tautan (Links)",
    materi: {
      paragraphs: ["Gunakan tag <a> (Anchor) untuk membuat link."],
      codeExample: '<a href="https://google.com">Buka Google</a>'
    },
    quest: {
      instruction: "Buat link ke 'https://github.com' dengan teks 'Profil Saya'.",
      xp: 160,
      explanation: { "href": "Alamat tujuan." },
      initialCode: `<html>\n  <body>\n    <!-- Tambahkan a di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<a.*href="https:\/\/github\.com".*>.*Profil Saya.*<\/a>/i.test(code)
    }
  },
  {
    id: 9,
    title: "Input Teks",
    materi: {
      paragraphs: ["Untuk menerima ketikan pengguna, gunakan tag <input>."],
      codeExample: '<input type="text">'
    },
    quest: {
      instruction: "Buat sebuah input teks dengan placeholder 'Username'.",
      xp: 140,
      explanation: { "type": "Jenis input.", "placeholder": "Teks petunjuk." },
      initialCode: `<html>\n  <body>\n    <!-- Tambahkan input di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="text".*placeholder="Username"/i.test(code)
    }
  },
  {
    id: 10,
    title: "Tombol (Buttons)",
    materi: {
      paragraphs: ["Elemen <button> membuat tombol yang bisa diklik."],
      codeExample: "<button>Kirim</button>"
    },
    quest: {
      instruction: "Tambahkan sebuah tombol dengan teks 'Kirim'.",
      xp: 120,
      explanation: { "<button>": "Elemen tombol." },
      initialCode: `<html>\n  <body>\n    <input type="text">\n    <!-- Tambahkan button di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<button.*>.*Kirim.*<\/button>/i.test(code)
    }
  },
  {
    id: 11,
    title: "Kontainer Divisi (Div)",
    materi: {
      paragraphs: ["Tag <div> adalah wadah pembungkus generik."],
      codeExample: "<div>\n  <p>Grup</p>\n</div>"
    },
    quest: {
      instruction: "Bungkus h2 'Card Title' dan p 'Card Text' di dalam tag div.",
      xp: 150,
      explanation: { "<div>": "Blok pembungkus." },
      initialCode: `<html>\n  <body>\n    <h2>Card Title</h2>\n    <p>Card Text</p>\n  </body>\n</html>`,
      validation: (code: string) => /<div>\s*<h2.*>.*<\/h2>\s*<p.*>.*<\/p>\s*<\/div>/i.test(code)
    }
  },
  {
    id: 12,
    title: "Teks Inline (Span)",
    materi: {
      paragraphs: ["<span> digunakan untuk membungkus potongan kecil teks di dalam baris."],
      codeExample: "<span>Teks</span>"
    },
    quest: {
      instruction: "Bungkus kata 'Gratis' dengan tag span.",
      xp: 130,
      explanation: { "<span>": "Kontainer inline." },
      initialCode: `<html>\n  <body>\n    <p>Layanan ini Gratis selamanya.</p>\n  </body>\n</html>`,
      validation: (code: string) => /<span>.*Gratis.*<\/span>/i.test(code)
    }
  },
  {
    id: 13,
    title: "Input Email",
    materi: {
      paragraphs: ["HTML5 memiliki tipe input khusus untuk email."],
      codeExample: '<input type="email">'
    },
    quest: {
      instruction: "Buat input dengan type email.",
      xp: 140,
      explanation: { "type=\"email\"": "Input khusus email." },
      initialCode: `<html>\n  <body>\n    <!-- Email di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="email"/i.test(code)
    }
  },
  {
    id: 14,
    title: "Input Password",
    materi: {
      paragraphs: ["Gunakan `type=\"password\"` agar karakter tidak terlihat."],
      codeExample: '<input type="password">'
    },
    quest: {
      instruction: "Buat input dengan type password.",
      xp: 140,
      explanation: { "type=\"password\"": "Input tersembunyi." },
      initialCode: `<html>\n  <body>\n    <!-- Password di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="password"/i.test(code)
    }
  },
  {
    id: 15,
    title: "Checkboxes",
    materi: {
      paragraphs: ["Checkbox memungkinkan pengguna memilih lebih dari satu opsi."],
      codeExample: '<input type="checkbox">'
    },
    quest: {
      instruction: "Buat sebuah checkbox dengan label 'Ingat Saya'.",
      xp: 130,
      explanation: { "checkbox": "Kotak centang." },
      initialCode: `<html>\n  <body>\n    <!-- Checkbox di sini -->\n    Ingat Saya\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="checkbox"/i.test(code)
    }
  },
  {
    id: 16,
    title: "Area Teks (Textarea)",
    materi: {
      paragraphs: ["Gunakan <textarea> untuk pesan yang lebih panjang."],
      codeExample: "<textarea></textarea>"
    },
    quest: {
      instruction: "Buat textarea dengan pesan awal 'Tulis di sini...'.",
      xp: 160,
      explanation: { "<textarea>": "Input teks multi-baris." },
      initialCode: `<html>\n  <body>\n    <!-- Textarea di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<textarea.*>.*Tulis di sini.*<\/textarea>/i.test(code)
    }
  },
  {
    id: 17,
    title: "Judul Halaman (Title)",
    materi: {
      paragraphs: ["Tag <title> diletakkan di dalam <head>."],
      codeExample: "<title>Toko Saya</title>"
    },
    quest: {
      instruction: "Ubah judul halaman menjadi 'Belajar HTML' di dalam tag head.",
      xp: 120,
      explanation: { "<title>": "Judul tab browser." },
      initialCode: `<html>\n  <head>\n    <!-- Tambahkan title di sini -->\n  </head>\n  <body></body>\n</html>`,
      validation: (code: string) => /<title.*>.*Belajar HTML.*<\/title>/i.test(code)
    }
  },
  {
    id: 18,
    title: "Video Player",
    materi: {
      paragraphs: ["Gunakan tag <video> dengan atribut `controls`."],
      codeExample: '<video src="v.mp4" controls></video>'
    },
    quest: {
      instruction: "Tambahkan tag video dengan atribut controls.",
      xp: 200,
      explanation: { "controls": "Tombol pemutar." },
      initialCode: `<html>\n  <body>\n    <!-- Video di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<video.*controls/i.test(code)
    }
  },
  {
    id: 19,
    title: "Komentar HTML",
    materi: {
      paragraphs: ["Gunakan format <!-- Catatan --> untuk memberi catatan di kode."],
      codeExample: "<!-- Ini komentar -->"
    },
    quest: {
      instruction: "Buat sebuah komentar dengan teks 'Selesai'.",
      xp: 100,
      explanation: { "<!-- -->": "Sintaks komentar." },
      initialCode: `<html>\n  <body>\n    <!-- Tulis komentar di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<!--.*Selesai.*-->/.test(code)
    }
  },
  {
    id: 20,
    title: "Tantangan Final: Kartu Nama",
    materi: {
      paragraphs: ["Gabungkan elemen yang sudah dipelajari untuk membuat kartu nama."],
      codeExample: "<div>\n  <h1>Nama</h1>\n  <p>Bio</p>\n</div>"
    },
    quest: {
      instruction: "Buat sebuah div yang berisi h1 (Nama) dan p (Bio).",
      xp: 300,
      explanation: { "Struktur": "Gunakan div sebagai pembungkus." },
      initialCode: `<html>\n  <body>\n    <!-- Kartu Nama di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<div>\s*<h2.*>.*<\/h2>\s*<p.*>.*<\/p>\s*<\/div>/i.test(code) || /<div>\s*<h1.*>.*<\/h1>\s*<p.*>.*<\/p>\s*<\/div>/i.test(code)
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
