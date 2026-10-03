import { Link } from "react-router-dom";
import { ArrowRight, BookMarked, Feather, MapPin, Sparkles } from "lucide-react";
import { anthologies } from "../data/works";
import Reveal from "../components/Reveal";
import { FlowerMark } from "../components/icons";

const timeline = [
  {
    year: "2014",
    title: "Buku harian lima baris",
    desc: "Semuanya dimulai dari kebiasaan menulis lima baris setiap malam di kamar kos yang sempit — tentang ibu, hujan, dan gelisah usia sembilan belas.",
  },
  {
    year: "2017",
    title: "Panggung terbuka pertama",
    desc: "Pertama kali membacakan sajak di acara open mic sebuah kedai kopi di Yogyakarta. Tangan gemetar, suara pelan — tetapi kata-kata ternyata bisa mendarat di hati orang lain.",
  },
  {
    year: "2021",
    title: "Antologi pertama terbit",
    desc: "“Rumah bagi Kata-kata Lelah” terbit dan dibaca lebih banyak orang dari yang pernah kubayangkan. Puisi berhenti menjadi monolog; ia menjadi ruang bersama.",
  },
  {
    year: "2023",
    title: "Antologi kedua & konten",
    desc: "“Surat untuk Hujan” lahir bersama keputusan berani: membagikan puisi lewat video pendek. Ternyata ada ratusan ribu orang yang juga menunggu hujan sambil membaca.",
  },
  {
    year: "2024",
    title: "Podcast & voice-over",
    desc: "“Sepasang Sepatu Kata” hadir di platform podcast, diikuti proyek audiobook. Aku belajar bahwa suara pun bisa menjadi lembaran sajak.",
  },
  {
    year: "2025",
    title: "Menulis penuh waktu",
    desc: "Kini aku menulis, membaca, dan berkolaborasi secara penuh waktu — untuk media, brand yang hangat, dan panggung-panggung yang menghargai kata.",
  },
];

const services = [
  "Freelance Writing & Copywriting",
  "Voice-over Puisi & Audiobook",
  "Poetry Reading & Curasi Acara",
  "Workshop Menulis Kreatif",
  "Kolaborasi Konten & Brand Storytelling",
  "Naskah Podcast & Naskah Video",
];

const press = [
  {
    quote: "Kata-kata yang memulihkan. Sajak-sajaknya seperti teh hangat di malam yang panjang.",
    source: "Majalah Sastra Nusantara",
  },
  {
    quote: "Laras membuktikan bahwa puisi bisa tinggal di feed tanpa kehilangan jiwanya.",
    source: "Ruang Baca Mingguan",
  },
  {
    quote: "Salah satu suara paling lirih — dan paling berani — di sastra digital Indonesia.",
    source: "Festival Kata 2024",
  },
];

export default function About() {
  return (
    <div className="pt-32 md:pt-44">
      {/* Header + narrative */}
      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-clay">
            <span className="h-px w-10 bg-clay" /> Tentang Aku
          </p>
          <h1 className="max-w-3xl font-serif text-5xl font-light leading-[1.08] text-ink sm:text-6xl">
            Perempuan yang memilih <span className="italic text-clay">tinggal lebih lama</span>{" "}
            di dalam kata.
          </h1>
        </Reveal>

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="dropcap font-serif text-xl font-light leading-[1.9] text-ink">
              Namaku Laras Sekar. Aku penulis dan pembuat konten puisi yang
              berbasis di Bandung. Sebelas tahun terakhir kuhabiskan dengan satu
              kebiasaan sederhana yang tidak pernah selesai: mencatat dunia
              lewat sajak.
            </div>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-soft">
              <p>
                Aku percaya setiap orang menyimpan satu puisi yang belum
                berani ia ucapkan. Pekerjaanku adalah membantu kata itu
                menemukan bentuknya — melalui halaman buku, video tiga puluh
                detik, suara di mikrofon, atau panggung malam puisi yang
                lampunya sengaja dibuat redup.
              </p>
              <p>
                Karyaku telah terbit dalam dua antologi, hadir di panggung
                Festival Kata, dan dibacakan oleh ribuan orang asing yang entah
                bagaimana merasa aku sedang menulis tentang hidup mereka. Bagiku,
                itulah definisi keberhasilan yang sesungguhnya.
              </p>
              <p>
                Di luar menulis, aku seorang kolektor buku bekas, penikmat teh
                lebih daripada kopi, dan orang yang selalu menoleh ketika
                hujan pertama turun.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-ink-soft">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-clay" /> Bandung, Indonesia
              </span>
              <span className="flex items-center gap-2">
                <Feather className="h-4 w-4 text-clay" /> Menulis sejak 2014
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-clay" /> Terbuka untuk kolaborasi
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 rounded-3xl border border-clay/30" />
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/writing-hands.jpg"
                  alt="Tangan Laras Sekar menulis sajak di jurnal"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[2s] hover:scale-105"
                />
              </div>
              <FlowerMark className="animate-spin-slow absolute -right-6 -top-6 h-12 w-12 text-clay/60" />
              <div className="mt-8 rounded-2xl border border-line bg-paper-card p-6">
                <p className="font-serif text-lg italic leading-relaxed text-ink">
                  “Aku tidak menulis karena hidupku puitis. Aku menulis agar
                  hidup yang biasa saja ini{" "}
                  <span className="text-clay">tidak luput begitu saja.</span>”
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
              Perjalanan yang <span className="italic text-clay">ditulis pelan.</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
              Bukan garis lurus, bukan juga lompatan besar — hanya langkah
              kecil yang konsisten, seperti baris sajak yang satu demi satu
              menjadi halaman.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-[7px] top-2 h-full w-px bg-line md:left-1/2" />
          <div className="space-y-14">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={0.05}>
                <div
                  className={`relative flex flex-col gap-4 pl-10 md:w-1/2 md:pl-0 ${
                    i % 2 === 0
                      ? "md:pr-14 md:text-right"
                      : "md:ml-auto md:pl-14"
                  }`}
                >
                  <span
                    className={`absolute top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-clay bg-paper ${
                      i % 2 === 0
                        ? "left-0 md:left-auto md:-right-[7.5px]"
                        : "left-0 md:-left-[7.5px]"
                    }`}
                  >
                    <span className="h-[5px] w-[5px] rounded-full bg-clay" />
                  </span>
                  <p className="font-serif text-4xl font-light italic text-clay/50">
                    {t.year}
                  </p>
                  <h3 className="font-serif text-2xl italic text-ink">{t.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Anthologies */}
      <section className="border-y border-line bg-paper-deep py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-clay">
                <BookMarked className="h-4 w-4" /> Kliping Antologi
              </p>
              <h2 className="font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
                Dua buku yang <span className="italic text-clay">kubungakan</span>{" "}
                dengan dunia.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-2">
            {anthologies.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.12}>
                <div className="group flex gap-8">
                  {/* CSS book cover */}
                  <div
                    className="relative flex h-64 w-44 shrink-0 flex-col justify-between rounded-r-md rounded-l-sm p-5 shadow-2xl shadow-ink/20 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1"
                    style={{ backgroundColor: a.color, color: a.accent }}
                  >
                    <div className="absolute left-2 top-0 h-full w-[3px] bg-black/20" />
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.3em] opacity-70">
                        Kumpulan Sajak
                      </p>
                      <p className="mt-4 font-serif text-xl italic leading-snug">
                        {a.title}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">
                        Laras Sekar
                      </p>
                      <p className="mt-1 font-serif text-sm italic opacity-70">
                        {a.year}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="font-serif text-3xl font-light italic text-clay/50">
                      {a.year}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl italic leading-snug text-ink">
                      {a.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                      {a.desc}
                    </p>
                    <span className="mt-5 inline-block rounded-full border border-line px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                      Tersedia di toko buku & e-book
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Press */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {press.map((p, i) => (
              <Reveal key={p.source} delay={i * 0.1} className="h-full">
                <figure className="flex h-full flex-col rounded-2xl border border-line bg-paper-card p-7">
                  <Feather className="mb-4 h-5 w-5 text-clay" strokeWidth={1.5} />
                  <blockquote className="flex-1 font-serif text-[15px] italic leading-relaxed text-ink">
                    “{p.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-line pt-4 text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                    {p.source}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services + CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
                Hal-hal yang bisa <span className="italic text-clay">kubantu</span>{" "}
                tenun untukmu.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
                Dari halaman buku hingga layar ponsel — jika proyekmu butuh
                kata-kata yang jujur dan suara yang hangat, aku siap diajak
                bicara.
              </p>
              <Link
                to="/kontak"
                className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:bg-clay"
              >
                Diskusikan Proyekmu
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-3">
                {services.map((s, i) => (
                  <span
                    key={s}
                    className={`rounded-full border px-5 py-3 text-sm transition-colors duration-300 ${
                      i % 3 === 0
                        ? "border-clay/40 bg-clay-soft/50 text-clay-deep"
                        : "border-line bg-paper-card text-ink-soft hover:border-clay hover:text-clay"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
