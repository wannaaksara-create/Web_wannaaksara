export type WorkCategory = "puisi" | "audio" | "artikel";

export interface Work {
  id: string;
  category: WorkCategory;
  title: string;
  excerpt: string;
  fullPoem?: string;
  meta?: string;
  year?: string;
  image?: string;
  platform?: string;
  readTime?: string;
  external?: boolean;
  url?: string;
}

export const CATEGORY_LABEL: Record<WorkCategory, string> = {
  puisi: "Puisi Tulis",
  audio: "Audio & Video Puisi",
  artikel: "Artikel & Esai",
};

export const works: Work[] = [
  // ---------- PUISI TULIS ----------
  {
    id: "surat-untuk-hujan",
    category: "puisi",
    title: "Surat untuk Hujan",
    excerpt:
      "Hujan tidak pernah datang membawa jawaban. Ia hanya duduk di tepi jendela, mendengarkan semua yang belum selesai kita ceritakan.",
    fullPoem: `Hujan tidak pernah datang membawa jawaban.
Ia hanya duduk di tepi jendela,
mendengarkan semua yang belum selesai
kita ceritakan.

Jika suatu hari engkau merindukanku,
jangan cari aku di keramaian.
Cukup buka jendela —
aku ada di setiap riuh
yang memilih untuk pelan.`,
    year: "2023",
    meta: "Antologi “Surat untuk Hujan”",
  },
  {
    id: "perempuan-bulan",
    category: "puisi",
    title: "Perempuan yang Menanam Bulan",
    excerpt:
      "Ia menanam bulan di halaman belakang, supaya malamnya punya sesuatu untuk dituai.",
    fullPoem: `Ia menanam bulan di halaman belakang,
supaya malamnya punya sesuatu
untuk dituai.

Orang-orang menertawakan cahaya kecil itu.
Ia tidak peduli.
Ia tahu, semua yang tumbuh dari kesabaran
akan bersinar pada waktunya —
meski hanya untuk dirinya sendiri.`,
    year: "2022",
    meta: "Antologi “Rumah bagi Kata-kata Lelah”",
  },
  {
    id: "rumah-kata",
    category: "puisi",
    title: "Rumah bagi Kata-kata Lelah",
    excerpt:
      "Marilah, kata-kata yang lelah di jalan. Ada teh hangat, ada lampu yang cukup, ada aku yang masih percaya padamu.",
    fullPoem: `Marilah, kata-kata yang lelah di jalan.
Ada teh hangat, ada lampu yang cukup,
ada aku yang masih percaya padamu.

Kalian tidak harus indah malam ini.
Cukup masuk, cukup meletakkan semua makna
yang terlalu lama kalian pikul.

Besok kita baru berangkat,
menggenggam dunia lagi.`,
    year: "2021",
    meta: "Antologi “Rumah bagi Kata-kata Lelah”",
  },
  {
    id: "sajak-stasiun",
    category: "puisi",
    title: "Sajak Kecil di Stasiun Kota",
    excerpt:
      "Kereta yang lewat membawa pergi sepertiga hati para penumpang. Aku yang menunggu di peron belajar: sebagian pertemuan memang dirancang untuk melatih pelukan melepaskan.",
    fullPoem: `Kereta yang lewat membawa pergi
sepertiga hati para penumpang.
Aku yang menunggu di peron belajar:
sebagian pertemuan memang dirancang
untuk melatih pelukan melepaskan.

Tapi kereta terakhir bawa aku pulang —
dan pulang pun sebuah puisi
yang belum selesai.`,
    year: "2024",
    meta: "Koleksi terbaru · belum terbit",
  },
  {
    id: "roti-dan-puisi",
    category: "puisi",
    title: "Roti dan Puisi",
    excerpt:
      "Ibu bertanya, apa gunanya puisi bila tak bisa mengisi perut. Sore itu kami makan berdua: kenyang oleh roti, hidup oleh puisi.",
    fullPoem: `Ibu bertanya,
apa gunanya puisi
bila tak bisa mengisi perut.

Aku tidak menjawab. Kupotong roti dua,
setengah untuknya,
setengah untuk mimpiku.

Sore itu kami makan berdua:
kenyang oleh roti,
hidup oleh puisi.`,
    year: "2020",
    meta: "Karya paling banyak dibagikan",
  },
  {
    id: "aku-ingin",
    category: "puisi",
    title: "Aku Ingin (Dedikasi)",
    excerpt:
      "Aku ingin menjadi bahasa yang lembut di mulut orang yang sedang belajar berbahasa sayang.",
    fullPoem: `Aku ingin menjadi bahasa yang lembut
di mulut orang yang sedang belajar
berbahasa sayang.

Sederhana saja:
mimpi yang kecil tapi jelas,
cinta yang tidak perlu ditebak,
dan pulang yang selalu
punya lampunya.`,
    year: "2024",
    meta: "Seri “Puisi 30 Detik” · TikTok",
  },

  // ---------- AUDIO & VIDEO ----------
  {
    id: "puisi-30-detik",
    category: "audio",
    title: "Seri “Puisi 30 Detik”",
    excerpt:
      "Satu puisi, tiga puluh detik, satu tarikan napas. Seri video pendek yang membaca sajak dengan musik latar lembut — karya asli maupun penafsiran penyair Nusantara.",
    meta: "TikTok · 45 episode · 12,4 jt tayangan",
    image: "/images/audio-mic.jpg",
    platform: "TikTok",
    external: true,
  },
  {
    id: "malam-rumah-angin",
    category: "audio",
    title: "Malam Puisi: Rumah Angin",
    excerpt:
      "Rekaman utuh pembacaan puisi bersama musisi lokal — satu jam perjalanan melalui sajak tentang rumah, pergi, dan pulang. Direkam langsung di Taman Ismail Marzuki.",
    meta: "YouTube · 1 jam 08 mnt · 890 rb tayangan",
    image: "/images/work-rumah.jpg",
    platform: "YouTube",
    external: true,
  },
  {
    id: "podcast-sepatu-kata",
    category: "audio",
    title: "Podcast: Sepasang Sepatu Kata",
    excerpt:
      "Obrolan mingguan tentang menulis, keseharian, dan hal-hal kecil yang menyelamatkan. Bersama tamu: penulis, editor, dan orang-orang yang bekerja dengan kata.",
    meta: "Spotify · 24 episode · 4,9 rating",
    image: "/images/writing-hands.jpg",
    platform: "Podcast",
    external: true,
  },
  {
    id: "voice-over-kisah-tanah",
    category: "audio",
    title: "Voice-Over: “Kisah Tanah”",
    excerpt:
      "Proyek audiobook membacakan kumpulan sajak karya Saut Situmorang — pengerjaan penuh perhatian pada jeda, napas, dan keheningan di antara kata.",
    meta: "Audiobook · 3 jam 42 mnt",
    image: "/images/audio-mic.jpg",
    platform: "Voice-over",
    external: true,
    url: "https://spotify.com",
  },

  // ---------- ARTIKEL & ESAI ----------
  {
    id: "esai-puisi-era-algoritma",
    category: "artikel",
    title: "Mengapa Kita Masih Butuh Puisi di Era Algoritma",
    excerpt:
      "Di tengah umpan yang tak pernah habis, puisi justru mengajarkan hal yang paling langka: berhenti. Sebuah esai tentang lambat, sunyi, dan kata yang tinggal.",
    readTime: "6 mnt baca",
    year: "2024",
  },
  {
    id: "esai-menulis-pemulihan",
    category: "artikel",
    title: "Menulis sebagai Ruang Pemulihan Diri",
    excerpt:
      "Bagaimana buku harian lima baris setiap malam menyelamatkanku dari tahun yang paling berat — dan mengapa kamu juga bisa memulainya malam ini.",
    readTime: "8 mnt baca",
    year: "2023",
  },
  {
    id: "esai-poetry-reading",
    category: "artikel",
    title: "Panduan Memulai Poetry Reading Pertamamu",
    excerpt:
      "Dari memilih tempat, menggunduk pendaftar, sampai mengatasi tangan gemetar di depan mikrofon. Semua yang ingin aku ketahui sebelum panggung pertamaku tahun 2017.",
    readTime: "10 mnt baca",
    year: "2024",
  },
  {
    id: "esai-sapardi",
    category: "artikel",
    title: "Membaca Kembali Sapardi: Lirih tapi Berani",
    excerpt:
      "Tentang “Hujan Bulan Juni” yang mengajarkan bahwa keberanian tak harus berteriak — cukup jujur, cukup sederhana, cukup lama untuk tetap diingat.",
    readTime: "7 mnt baca",
    year: "2023",
  },
];

export const featuredIds = ["surat-untuk-hujan", "perempuan-bulan", "rumah-kata"];

export interface Anthology {
  title: string;
  year: string;
  desc: string;
  color: string;
  accent: string;
}

export const anthologies: Anthology[] = [
  {
    title: "Rumah bagi Kata-kata Lelah",
    year: "2021",
    desc: "Kumpulan sajak pertama. 68 puisi tentang pulang, ibu, dan hal-hal yang kita simpan di saku mantel. Terjual 3.000+ eksemplar dan masuk daftar pendek Sayembara Novel Dewan Kesenian Jakarta — kategori sajak.",
    color: "#8a4430",
    accent: "#f2ebdd",
  },
  {
    title: "Surat untuk Hujan",
    year: "2023",
    desc: "Kumpulan sajak kedua yang ditulis selama tiga musim hujan di Yogyakarta. 54 puisi tentang kerinduan yang tidak sempat diucapkan. Diterbitkan oleh Pustaka Kata, Jakarta.",
    color: "#3f4a3c",
    accent: "#e9e4d4",
  },
];

export interface Platform {
  name: string;
  handle: string;
  desc: string;
  stat: string;
  icon: "tiktok" | "instagram" | "youtube" | "podcast";
  url: string;
}

export const platforms: Platform[] = [
  {
    name: "TikTok",
    handle: "@larassekar",
    desc: "Puisi 30 detik setiap Senin & Kamis malam. Yang paling dekat dengan para pembaca muda.",
    stat: "412 rb pengikut",
    icon: "tiktok",
    url: "https://tiktok.com",
  },
  {
    name: "Instagram",
    handle: "@larasmenulis",
    desc: "Kliping sajak, cuplikan buku harian, dan catatan di balik proses menulis.",
    stat: "286 rb pengikut",
    icon: "instagram",
    url: "https://instagram.com",
  },
  {
    name: "YouTube",
    handle: "Laras Sekar",
    desc: "Malam puisi, vlog menulis di kedai kopi, dan kolaborasi bersama musisi.",
    stat: "154 rb pengikut",
    icon: "youtube",
    url: "https://youtube.com",
  },
  {
    name: "Podcast",
    handle: "Sepasang Sepatu Kata",
    desc: "Obrolan mingguan tentang menulis dan hal-hal kecil yang menyelamatkan.",
    stat: "24 episode",
    icon: "podcast",
    url: "https://spotify.com",
  },
];
