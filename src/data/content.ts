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
        "HTML (HyperText Markup Language) adalah tulang punggung setiap website. Ini bukan bahasa pemrograman, melainkan bahasa markup.",
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
      validation: (code: string) => 
        code.toLowerCase().includes('<html>') && 
        code.toLowerCase().includes('</html>') && 
        code.toLowerCase().includes('<body>') && 
        code.toLowerCase().includes('</body>')
    }
  },
  {
    id: 2,
    title: "Judul yang Menarik (Headings)",
    materi: {
      paragraphs: [
        "Headings membantu pembaca memahami struktur halaman. HTML menyediakan enam tingkatan, dari <h1> sampai <h6>.",
        "<h1> adalah yang paling besar dan penting, biasanya hanya ada satu per halaman untuk judul utama.",
        "Semakin besar angkanya, semakin kecil ukurannya (h2 lebih kecil dari h1)."
      ],
      codeExample: "<h1>Judul Utama</h1>\n<h2>Subjudul</h2>"
    },
    quest: {
      instruction: "Buatlah judul utama website Anda menggunakan tag h1 dengan teks 'Halo Developer!'.",
      xp: 120,
      explanation: {
        "<h1>": "Heading level 1, digunakan untuk topik paling penting."
      },
      initialCode: `<html>\n  <body>\n    <!-- Tambahkan h1 di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<h1.*>.*Halo Developer!.*<\/h1>/i.test(code)
    }
  },
  {
    id: 3,
    title: "Paragraf & Teks",
    materi: {
      paragraphs: [
        "Untuk menulis teks biasa atau narasi, kita menggunakan tag <p> (Paragraph).",
        "Browser secara otomatis menambahkan sedikit ruang (margin) di atas dan di bawah setiap elemen <p>."
      ],
      codeExample: "<p>Ini adalah sebuah paragraf teks.</p>"
    },
    quest: {
      instruction: "Tambahkan paragraf di bawah judul h1 Anda dengan teks 'Saya sedang belajar coding.'.",
      xp: 100,
      explanation: {
        "<p>": "Digunakan untuk membungkus blok teks atau paragraf."
      },
      initialCode: `<html>\n  <body>\n    <h1>Halo Developer!</h1>\n    <!-- Tambahkan p di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<p.*>.*Saya sedang belajar coding..*<\/p>/i.test(code)
    }
  },
  {
    id: 4,
    title: "Menonjolkan Kata (Formatting)",
    materi: {
      paragraphs: [
        "Terkadang kita ingin menebalkan atau memiringkan kata tertentu agar lebih menonjol.",
        "Gunakan <strong> untuk menebalkan (penting) dan <em> untuk miring (penekanan).",
        "Elemen-elemen ini disebut 'inline elements' karena mereka tidak membuat baris baru."
      ],
      codeExample: "<strong>Tebal</strong> dan <em>Miring</em>"
    },
    quest: {
      instruction: "Di dalam paragraf baru, tulis 'Belajar itu seru!' dan bungkus kata 'seru' dengan tag strong.",
      xp: 130,
      explanation: {
        "<strong>": "Menebalkan teks untuk menunjukkan kepentingan penting."
      },
      initialCode: `<html>\n  <body>\n    <p>Belajar itu <!-- bungkus kata seru --> seru!</p>\n  </body>\n</html>`,
      validation: (code: string) => /<strong>.*seru.*<\/strong>/i.test(code)
    }
  },
  {
    id: 5,
    title: "Daftar Tak Terurut (Unordered List)",
    materi: {
      paragraphs: [
        "Gunakan <ul> (Unordered List) untuk membuat daftar poin-poin (bullet points).",
        "Setiap item di dalam daftar harus dibungkus dengan tag <li> (List Item)."
      ],
      codeExample: "<ul>\n  <li>Kopi</li>\n  <li>Teh</li>\n</ul>"
    },
    quest: {
      instruction: "Buat daftar 'Skill Saya' menggunakan <ul> dan tambahkan satu <li> dengan teks 'HTML'.",
      xp: 150,
      explanation: {
        "<ul>": "Wadah untuk daftar poin.",
        "<li>": "Item di dalam sebuah daftar."
      },
      initialCode: `<html>\n  <body>\n    <h3>Skill Saya</h3>\n    <!-- Buat ul dan li di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<ul>\s*<li.*>.*HTML.*<\/li>\s*<\/ul>/i.test(code)
    }
  },
  {
    id: 6,
    title: "Daftar Berurutan (Ordered List)",
    materi: {
      paragraphs: [
        "Jika urutan itu penting (seperti langkah-langkah), gunakan <ol> (Ordered List).",
        "Browser akan memberikan nomor otomatis (1, 2, 3...) untuk setiap item <li>."
      ],
      codeExample: "<ol>\n  <li>Buka Laptop</li>\n  <li>Buka Browser</li>\n</ol>"
    },
    quest: {
      instruction: "Buat daftar berurutan <ol> dengan teks 'Langkah 1'.",
      xp: 150,
      explanation: {
        "<ol>": "Wadah untuk daftar bernomor."
      },
      initialCode: `<html>\n  <body>\n    <!-- Buat ol di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<ol>\s*<li.*>.*Langkah 1.*<\/li>\s*<\/ol>/i.test(code)
    }
  },
  {
    id: 7,
    title: "Menampilkan Gambar",
    materi: {
      paragraphs: [
        "Website terasa hampa tanpa visual. Gunakan tag <img> untuk menampilkan gambar.",
        "Tag ini spesial karena 'self-closing' (tidak punya tag penutup).",
        "Atribut 'src' adalah alamat gambarnya, dan 'alt' adalah teks alternatif jika gambar tidak muncul."
      ],
      codeExample: '<img src="cat.jpg" alt="Kucing Lucu">'
    },
    quest: {
      instruction: "Tampilkan gambar menggunakan src 'https://picsum.photos/200' dan alt 'Random Image'.",
      xp: 180,
      explanation: {
        "src": "Atribut source (sumber gambar).",
        "alt": "Teks deskripsi untuk aksesibilitas."
      },
      initialCode: `<html>\n  <body>\n    <!-- Tambahkan img di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<img.*src="https:\/\/picsum\.photos\/200".*alt="Random Image"/i.test(code)
    }
  },
  {
    id: 8,
    title: "Tautan (Links)",
    materi: {
      paragraphs: [
        "Internet adalah jaring-jaring tautan. Gunakan tag <a> (Anchor) untuk membuat link.",
        "Atribut 'href' menentukan tujuan link tersebut (bisa alamat website lain atau file sendiri)."
      ],
      codeExample: '<a href="https://google.com">Buka Google</a>'
    },
    quest: {
      instruction: "Buat link ke 'https://github.com' dengan teks 'Profil Saya'.",
      xp: 160,
      explanation: {
        "href": "Hyperlink Reference, alamat tujuan."
      },
      initialCode: `<html>\n  <body>\n    <!-- Tambahkan a di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<a.*href="https:\/\/github\.com".*>.*Profil Saya.*<\/a>/i.test(code)
    }
  },
  {
    id: 9,
    title: "Input Teks",
    materi: {
      paragraphs: [
        "Untuk menerima ketikan dari pengguna, kita menggunakan tag <input>.",
        "Tentukan `type=\"text\"` untuk kotak teks biasa.",
        "Seperti <img>, tag <input> juga merupakan self-closing."
      ],
      codeExample: '<input type="text" placeholder="Nama Anda">'
    },
    quest: {
      instruction: "Buat sebuah input teks dengan placeholder 'Username'.",
      xp: 140,
      explanation: {
        "type": "Menentukan jenis input.",
        "placeholder": "Teks petunjuk di dalam kotak input."
      },
      initialCode: `<html>\n  <body>\n    <p>Silakan login:</p>\n    <!-- Tambahkan input di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="text".*placeholder="Username"/i.test(code)
    }
  },
  {
    id: 10,
    title: "Tombol (Buttons)",
    materi: {
      paragraphs: [
        "Elemen <button> membuat tombol yang bisa diklik.",
        "Biasanya digunakan untuk mengirim form atau memicu suatu aksi di website."
      ],
      codeExample: "<button>Klik Saya</button>"
    },
    quest: {
      instruction: "Tambahkan sebuah tombol dengan teks 'Kirim'.",
      xp: 120,
      explanation: {
        "<button>": "Membuat elemen tombol interaktif."
      },
      initialCode: `<html>\n  <body>\n    <input type="text">\n    <!-- Tambahkan button di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<button.*>.*Kirim.*<\/button>/i.test(code)
    }
  },
  {
    id: 11,
    title: "Kontainer Divisi (Div)",
    materi: {
      paragraphs: [
        "Tag <div> adalah blok pembungkus generik. Ia tidak memiliki makna khusus kecuali untuk mengelompokkan elemen lain.",
        "Sangat berguna saat kita ingin memberikan gaya (CSS) ke sekelompok elemen sekaligus."
      ],
      codeExample: "<div>\n  <h2>Grup 1</h2>\n  <p>Deskripsi</p>\n</div>"
    },
    quest: {
      instruction: "Bungkus judul h2 'Card Title' dan p 'Card Text' di dalam sebuah tag div.",
      xp: 150,
      explanation: {
        "<div>": "Blok pembungkus untuk struktur halaman."
      },
      initialCode: `<html>\n  <body>\n    <!-- Bungkus elemen di bawah ini -->\n    <h2>Card Title</h2>\n    <p>Card Text</p>\n  </body>\n</html>`,
      validation: (code: string) => /<div>\s*<h2.*>.*<\/h2>\s*<p.*>.*<\/p>\s*<\/div>/i.test(code)
    }
  },
  {
    id: 12,
    title: "Teks Inline (Span)",
    materi: {
      paragraphs: [
        "Berbeda dengan div, <span> digunakan untuk membungkus potongan kecil teks di dalam sebuah baris.",
        "Ia tidak membuat baris baru setelahnya."
      ],
      codeExample: "<p>Harga: <span style=\"color:red\">Gratis</span></p>"
    },
    quest: {
      instruction: "Di dalam tag p, bungkus kata 'Gratis' dengan tag span.",
      xp: 130,
      explanation: {
        "<span>": "Kontainer inline untuk bagian dari teks."
      },
      initialCode: `<html>\n  <body>\n    <p>Layanan ini Gratis selamanya.</p>\n  </body>\n</html>`,
      validation: (code: string) => /<span>.*Gratis.*<\/span>/i.test(code)
    }
  },
  {
    id: 13,
    title: "Input Email",
    materi: {
      paragraphs: [
        "HTML5 memiliki tipe input khusus untuk email agar browser bisa memvalidasi formatnya secara otomatis.",
        "Gunakan `type=\"email\"`."
      ],
      codeExample: '<input type="email">'
    },
    quest: {
      instruction: "Buat input dengan type email.",
      xp: 140,
      explanation: {
        "type=\"email\"": "Input khusus alamat email."
      },
      initialCode: `<html>\n  <body>\n    <!-- Tambahkan input email di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="email"/i.test(code)
    }
  },
  {
    id: 14,
    title: "Input Password",
    materi: {
      paragraphs: [
        "Agar karakter yang diketik tidak terlihat (muncul sebagai bintang atau titik), gunakan `type=\"password\"`."
      ],
      codeExample: '<input type="password">'
    },
    quest: {
      instruction: "Buat input dengan type password.",
      xp: 140,
      explanation: {
        "type=\"password\"": "Input tersembunyi untuk keamanan."
      },
      initialCode: `<html>\n  <body>\n    <!-- Tambahkan input password di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="password"/i.test(code)
    }
  },
  {
    id: 15,
    title: "Checkboxes",
    materi: {
      paragraphs: [
        "Checkbox memungkinkan pengguna memilih lebih dari satu opsi.",
        "Gunakan `type=\"checkbox\"`."
      ],
      codeExample: '<input type="checkbox"> Setuju'
    },
    quest: {
      instruction: "Buat sebuah checkbox dengan label 'Ingat Saya'.",
      xp: 130,
      explanation: {
        "checkbox": "Kotak centang untuk pilihan jamak."
      },
      initialCode: `<html>\n  <body>\n    <!-- Buat checkbox di sini -->\n    Ingat Saya\n  </body>\n</html>`,
      validation: (code: string) => /<input.*type="checkbox"/i.test(code)
    }
  },
  {
    id: 16,
    title: "Area Teks (Textarea)",
    materi: {
      paragraphs: [
        "Jika input teks biasa terlalu pendek, gunakan <textarea> untuk pesan yang lebih panjang.",
        "Tag ini membutuhkan penutup </textarea>."
      ],
      codeExample: "<textarea></textarea>"
    },
    quest: {
      instruction: "Buat textarea dengan pesan awal 'Tulis di sini...'.",
      xp: 160,
      explanation: {
        "<textarea>": "Input teks multi-baris."
      },
      initialCode: `<html>\n  <body>\n    <!-- Tambahkan textarea di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<textarea.*>.*Tulis di sini.*<\/textarea>/i.test(code)
    }
  },
  {
    id: 17,
    title: "Judul Halaman (Title)",
    materi: {
      paragraphs: [
        "Tag <title> diletakkan di dalam <head>. Ini adalah teks yang muncul di tab browser Anda.",
        "Sangat penting untuk identitas website dan SEO."
      ],
      codeExample: "<head>\n  <title>Toko Saya</title>\n</head>"
    },
    quest: {
      instruction: "Ubah judul halaman menjadi 'Belajar HTML' di dalam tag head.",
      xp: 120,
      explanation: {
        "<title>": "Menentukan judul dokumen di tab browser."
      },
      initialCode: `<html>\n  <head>\n    <!-- Tambahkan title di sini -->\n  </head>\n  <body></body>\n</html>`,
      validation: (code: string) => /<title.*>.*Belajar HTML.*<\/title>/i.test(code)
    }
  },
  {
    id: 18,
    title: "Video Player",
    materi: {
      paragraphs: [
        "Kita bisa menampilkan video langsung dengan tag <video>.",
        "Tambahkan atribut `controls` agar pengguna bisa memutar atau menghentikan video."
      ],
      codeExample: '<video src="vid.mp4" controls></video>'
    },
    quest: {
      instruction: "Tambahkan tag video dengan atribut controls.",
      xp: 200,
      explanation: {
        "controls": "Menampilkan tombol play, volume, dll."
      },
      initialCode: `<html>\n  <body>\n    <!-- Tambahkan video di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<video.*controls/i.test(code)
    }
  },
  {
    id: 19,
    title: "Komentar HTML",
    materi: {
      paragraphs: [
        "Komentar membantu kita memberi catatan di kode tanpa terlihat di hasil website.",
        "Gunakan format <!-- Catatan -->."
      ],
      codeExample: "<!-- Ini adalah komentar -->"
    },
    quest: {
      instruction: "Buat sebuah komentar dengan teks 'Selesai'.",
      xp: 100,
      explanation: {
        "<!-- -->": "Sintaks untuk komentar di HTML."
      },
      initialCode: `<html>\n  <body>\n    <!-- Tulis komentar di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<!--.*Selesai.*-->/.test(code)
    }
  },
  {
    id: 20,
    title: "Tantangan Final: Kartu Nama",
    materi: {
      paragraphs: [
        "Selamat! Anda telah mempelajari dasar-dasar HTML.",
        "Tantangan terakhir: Gabungkan elemen-elemen yang sudah dipelajari untuk membuat sebuah 'Kartu Nama Digital' sederhana."
      ],
      codeExample: "<div>\n  <h1>Nama</h1>\n  <p>Bio</p>\n</div>"
    },
    quest: {
      instruction: "Buat sebuah div yang berisi h1 (Nama Anda) dan p (Bio singkat Anda).",
      xp: 300,
      explanation: {
        "Struktur": "Gunakan div sebagai pembungkus utama."
      },
      initialCode: `<html>\n  <body>\n    <!-- Buat Kartu Nama Digital Anda di sini -->\n  </body>\n</html>`,
      validation: (code: string) => /<div>\s*<h1.*>.*<\/h1>\s*<p.*>.*<\/p>\s*<\/div>/i.test(code)
    }
  }
];

export const LINUX_CONTENT: LearningStep[] = [
  {
    id: 1,
    title: "GPS Terminal (pwd)",
    materi: {
      paragraphs: [
        "Selamat datang di dunia teks! CLI (Command Line Interface) adalah cara tercepat mengontrol komputer.",
        "Perintah pertama yang wajib dikuasai adalah 'pwd' (Print Working Directory).",
        "Gunakan 'pwd' saat Anda tersesat untuk mengetahui di folder mana Anda berada sekarang."
      ],
      codeExample: "$ pwd\n/home/user"
    },
    quest: {
      instruction: "Tanyakan pada terminal: 'Di mana posisi saya saat ini?'. Ketik perintah GPS-nya.",
      xp: 100,
      explanation: {
        "pwd": "Singkatan dari Print Working Directory. Menampilkan lokasi folder aktif."
      },
      command: "pwd"
    }
  },
  {
    id: 2,
    title: "Melihat Sekitar (ls)",
    materi: {
      paragraphs: [
        "Setelah tahu lokasi, sekarang mari kita lihat ada apa saja di sana menggunakan perintah 'ls' (List).",
        "Bayangkan folder komputer Anda seperti lemari. 'ls' adalah cara kita membuka pintu lemari untuk melihat isinya.",
        "Secara default, 'ls' akan menampilkan daftar file dan sub-folder."
      ],
      codeExample: "$ ls\ndocuments  photos  music"
    },
    quest: {
      instruction: "Gunakan perintah 'List' untuk melihat daftar isi direktori saat ini.",
      xp: 120,
      explanation: {
        "ls": "Singkatan dari List. Menampilkan isi folder."
      },
      command: "ls"
    }
  },
  {
    id: 3,
    title: "Siapa Saya? (whoami)",
    materi: {
      paragraphs: [
        "Di sistem Linux yang bisa digunakan banyak orang, penting untuk tahu kita sedang login sebagai siapa.",
        "Gunakan perintah 'whoami' untuk melihat username Anda."
      ],
      codeExample: "$ whoami\nuser"
    },
    quest: {
      instruction: "Cari tahu siapa identitas user yang sedang aktif di terminal ini.",
      xp: 100,
      explanation: {
        "whoami": "Menampilkan nama pengguna yang sedang aktif."
      },
      command: "whoami"
    }
  },
  {
    id: 4,
    title: "Membersihkan Layar (clear)",
    materi: {
      paragraphs: [
        "Terkadang layar terminal jadi sangat berantakan dengan banyak teks.",
        "Jangan panik! Gunakan perintah 'clear' untuk menyapu bersih layar dan mulai dari atas lagi."
      ],
      codeExample: "$ clear"
    },
    quest: {
      instruction: "Bersihkan layar terminal Anda agar tampak rapi kembali.",
      xp: 100,
      explanation: {
        "clear": "Menghapus semua teks di layar terminal."
      },
      command: "clear"
    }
  },
  {
    id: 5,
    title: "Membuat Folder (mkdir)",
    materi: {
      paragraphs: [
        "Sekarang mari kita mulai memanipulasi file. Untuk membuat folder baru, gunakan 'mkdir' (Make Directory).",
        "Ketik 'mkdir' diikuti dengan nama folder yang diinginkan."
      ],
      codeExample: "$ mkdir projek_baru"
    },
    quest: {
      instruction: "Buatlah sebuah folder baru bernama 'belajar'.",
      xp: 150,
      explanation: {
        "mkdir": "Singkatan dari Make Directory. Membuat folder baru."
      },
      command: "mkdir belajar"
    }
  },
  {
    id: 6,
    title: "Membuat File Kosong (touch)",
    materi: {
      paragraphs: [
        "Jika 'mkdir' untuk folder, maka 'touch' digunakan untuk membuat file baru yang kosong.",
        "Sangat berguna jika Anda ingin menyiapkan file sebelum mulai menulis kodenya."
      ],
      codeExample: "$ touch index.html"
    },
    quest: {
      instruction: "Buatlah file kosong bernama 'catatan.txt'.",
      xp: 150,
      explanation: {
        "touch": "Membuat file baru tanpa isi."
      },
      command: "touch catatan.txt"
    }
  },
  {
    id: 7,
    title: "Masuk ke Folder (cd)",
    materi: {
      paragraphs: [
        "Gunakan perintah 'cd' (Change Directory) untuk masuk ke dalam sebuah folder.",
        "Anda tinggal mengetik 'cd' diikuti nama folder tujuannya."
      ],
      codeExample: "$ cd documents"
    },
    quest: {
      instruction: "Masuklah ke dalam folder 'belajar' yang barusan Anda buat.",
      xp: 140,
      explanation: {
        "cd": "Singkatan dari Change Directory. Berpindah folder."
      },
      command: "cd belajar"
    }
  },
  {
    id: 8,
    title: "Kembali ke Atas (cd ..)",
    materi: {
      paragraphs: [
        "Bagaimana jika ingin keluar dari folder atau naik satu tingkat ke atas?",
        "Gunakan perintah khusus 'cd ..' (titik dua kali)."
      ],
      codeExample: "$ cd .."
    },
    quest: {
      instruction: "Naiklah satu tingkat keluar dari folder Anda saat ini.",
      xp: 130,
      explanation: {
        "..": "Simbol untuk folder induk (parent directory)."
      },
      command: "cd .."
    }
  },
  {
    id: 9,
    title: "Melihat Waktu (date)",
    materi: {
      paragraphs: [
        "Terminal juga bisa jadi jam dinding Anda.",
        "Ketik 'date' untuk melihat hari, tanggal, dan waktu sistem saat ini."
      ],
      codeExample: "$ date\nMon Sep 14 10:00:00 WIB 2026"
    },
    quest: {
      instruction: "Cek waktu dan tanggal sistem saat ini melalui terminal.",
      xp: 100,
      explanation: {
        "date": "Menampilkan informasi waktu sistem."
      },
      command: "date"
    }
  },
  {
    id: 10,
    title: "Mencetak Teks (echo)",
    materi: {
      paragraphs: [
        "Perintah 'echo' digunakan untuk menampilkan teks kembali ke layar.",
        "Sering digunakan dalam pemrograman shell (scripting) untuk memberi info kepada pengguna."
      ],
      codeExample: "$ echo Hello World\nHello World"
    },
    quest: {
      instruction: "Gunakan echo untuk mencetak teks 'Belajar Linux'.",
      xp: 110,
      explanation: {
        "echo": "Menampilkan argumen atau teks ke terminal."
      },
      command: "echo Belajar Linux"
    }
  },
  {
    id: 11,
    title: "Membaca Isi File (cat)",
    materi: {
      paragraphs: [
        "Penasaran apa isi sebuah file teks? Gunakan perintah 'cat' (Concatenate).",
        "Perintah ini akan mencetak seluruh isi file tersebut langsung ke layar terminal."
      ],
      codeExample: "$ cat rahasia.txt\nIsi rahasia ada di sini."
    },
    quest: {
      instruction: "Baca isi file 'readme.txt' yang ada di folder ini.",
      xp: 160,
      explanation: {
        "cat": "Membaca dan menampilkan isi file."
      },
      command: "cat readme.txt"
    }
  },
  {
    id: 12,
    title: "Menghapus File (rm)",
    materi: {
      paragraphs: [
        "Hati-hati! Perintah 'rm' (Remove) akan menghapus file secara permanen.",
        "Tidak ada 'Recycle Bin' di terminal standar, jadi pastikan Anda tidak salah hapus."
      ],
      codeExample: "$ rm file_sampah.txt"
    },
    quest: {
      instruction: "Hapuslah file bernama 'catatan.txt'.",
      xp: 150,
      explanation: {
        "rm": "Singkatan dari Remove. Menghapus file."
      },
      command: "rm catatan.txt"
    }
  },
  {
    id: 13,
    title: "Menghapus Folder (rmdir)",
    materi: {
      paragraphs: [
        "Untuk menghapus folder yang kosong, kita menggunakan 'rmdir' (Remove Directory).",
        "Jika folder ada isinya, rmdir akan menolak menghapusnya demi keamanan."
      ],
      codeExample: "$ rmdir folder_kosong"
    },
    quest: {
      instruction: "Hapus folder bernama 'belajar'.",
      xp: 150,
      explanation: {
        "rmdir": "Menghapus direktori/folder yang kosong."
      },
      command: "rmdir belajar"
    }
  },
  {
    id: 14,
    title: "Menyalin File (cp)",
    materi: {
      paragraphs: [
        "Ingin menduplikasi file? Gunakan 'cp' (Copy).",
        "Formatnya: cp [sumber] [tujuan]."
      ],
      codeExample: "$ cp foto.jpg foto_copy.jpg"
    },
    quest: {
      instruction: "Salin file 'readme.txt' menjadi 'readme_v2.txt'.",
      xp: 180,
      explanation: {
        "cp": "Singkatan dari Copy. Menyalin file atau direktori."
      },
      command: "cp readme.txt readme_v2.txt"
    }
  },
  {
    id: 15,
    title: "Memindahkan/Ganti Nama (mv)",
    materi: {
      paragraphs: [
        "Perintah 'mv' (Move) punya dua fungsi: memindahkan file ke folder lain atau mengganti nama file tersebut.",
        "Jika tujuannya adalah nama file baru, maka ia akan mengganti namanya (rename)."
      ],
      codeExample: "$ mv lama.txt baru.txt"
    },
    quest: {
      instruction: "Ganti nama file 'readme_v2.txt' menjadi 'final.txt'.",
      xp: 180,
      explanation: {
        "mv": "Singkatan dari Move. Memindah atau mengubah nama."
      },
      command: "mv readme_v2.txt final.txt"
    }
  },
  {
    id: 16,
    title: "Intip Awal File (head)",
    materi: {
      paragraphs: [
        "Jika file sangat panjang dan Anda hanya ingin melihat bagian atasnya, gunakan 'head'.",
        "Secara default, ia akan menampilkan 10 baris pertama."
      ],
      codeExample: "$ head log.txt"
    },
    quest: {
      instruction: "Lihat bagian awal dari file 'final.txt'.",
      xp: 140,
      explanation: {
        "head": "Menampilkan baris-baris pertama dari sebuah file."
      },
      command: "head final.txt"
    }
  },
  {
    id: 17,
    title: "Intip Akhir File (tail)",
    materi: {
      paragraphs: [
        "Kebalikan dari head, 'tail' menunjukkan bagian paling bawah dari sebuah file.",
        "Sangat berguna untuk melihat log sistem terbaru."
      ],
      codeExample: "$ tail log.txt"
    },
    quest: {
      instruction: "Lihat bagian akhir dari file 'final.txt'.",
      xp: 140,
      explanation: {
        "tail": "Menampilkan baris-baris terakhir dari sebuah file."
      },
      command: "tail final.txt"
    }
  },
  {
    id: 18,
    title: "Mencari Kata (grep)",
    materi: {
      paragraphs: [
        "Butuh mencari kata tertentu di dalam file yang ribuan baris? Gunakan 'grep'.",
        "Ia akan memfilter dan hanya menampilkan baris yang mengandung kata tersebut."
      ],
      codeExample: "$ grep \"error\" log.txt"
    },
    quest: {
      instruction: "Cari kata 'Linux' di dalam file 'final.txt'.",
      xp: 200,
      explanation: {
        "grep": "Global Regular Expression Print. Mencari teks di dalam file."
      },
      command: "grep Linux final.txt"
    }
  },
  {
    id: 19,
    title: "Kekuatan Super (sudo)",
    materi: {
      paragraphs: [
        "Beberapa perintah rahasia hanya bisa dijalankan oleh Administrator (Root).",
        "Gunakan 'sudo' (SuperUser Do) sebelum perintah utama untuk mendapatkan kekuatan administrator sementara."
      ],
      codeExample: "$ sudo apt update"
    },
    quest: {
      instruction: "Jalankan perintah 'whoami' dengan kekuatan administrator.",
      xp: 250,
      explanation: {
        "sudo": "Menjalankan perintah dengan hak akses root."
      },
      command: "sudo whoami"
    }
  },
  {
    id: 20,
    title: "Selesai (exit)",
    materi: {
      paragraphs: [
        "Selamat! Anda telah menguasai 20 perintah dasar Linux.",
        "Untuk mengakhiri sesi terminal dengan sopan, ketik 'exit'."
      ],
      codeExample: "$ exit"
    },
    quest: {
      instruction: "Tutup sesi terminal Anda sekarang.",
      xp: 300,
      explanation: {
        "exit": "Keluar dari shell atau terminal."
      },
      command: "exit"
    }
  }
];
