import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BookOpen, Feather, Play, Quote } from "lucide-react";
import { featuredIds, platforms, works, type Work } from "../data/works";
import Reveal from "../components/Reveal";
import PoemModal from "../components/PoemModal";
import { FlowerMark, TikTokIcon } from "../components/icons";

const marqueeWords = [
  "hujan",
  "kerinduan",
  "lampu kecil",
  "pulang",
  "sepi yang sehat",
  "sayang",
  "waktu",
  "doa",
  "teh hangat",
  "pergi",
];

function PlatformIcon({ icon, className }: { icon: string; className?: string }) {
  switch (icon) {
    case "tiktok":
      return <TikTokIcon className={className} />;
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
          <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M23 12s0-3.85-.49-5.7a2.98 2.98 0 0 0-2.1-2.1C18.55 3.7 12 3.7 12 3.7s-6.55 0-8.4.5a2.98 2.98 0 0 0-2.1 2.1C1 8.15 1 12 1 12s0 3.85.5 5.7a2.98 2.98 0 0 0 2.1 2.1c1.85.5 8.4.5 8.4.5s6.55 0 8.4-.5a2.98 2.98 0 0 0 2.1-2.1C23 15.85 23 12 23 12zM9.75 15.5v-7L15.8 12l-6.05 3.5z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
          <circle cx="12" cy="11" r="3" />
          <path d="M12 17.5v4.5M8.5 14.5 5.5 19M15.5 14.5l3 4.5M6.5 8.5 3 6.5M17.5 8.5 21 6.5" strokeLinecap="round" />
        </svg>
      );
  }
}

export default function Home() {
  const [activePoem, setActivePoem] = useState<Work | null>(null);
  const featured = featuredIds.map((id) => works.find((w) => w.id === id)!).filter(Boolean);

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay-soft/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-paper-deep blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 md:px-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-clay" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-clay">
                Penulis · Penyair · Pembuat Konten
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[2.9rem] font-light leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.6rem]"
            >
              Menenun kata,
              <br />
              <span className="italic text-clay">merawat rasa.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              Halo, aku <span className="font-medium text-ink">Laras Sekar</span> — aku
              mengubah kerinduan, hujan, dan hal-hal kecil yang luput menjadi
              kata-kata yang bisa dipegang. Selamat datang di ruang tempat
              kata-kata bernapas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/karya"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-all duration-300 hover:bg-clay"
              >
                <BookOpen className="h-4 w-4" />
                Jelajahi Karya Terbaik
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/kontak"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/25 px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:border-clay hover:text-clay"
              >
                Ajukan Kolaborasi
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}
              className="mt-14 flex divide-x divide-line"
            >
              {[
                { n: "120+", l: "puisi ditulis" },
                { n: "850K+", l: "pembaca setia" },
                { n: "2", l: "antologi terbit" },
              ].map((s, i) => (
                <div key={i} className={i === 0 ? "pr-8" : "px-8"}>
                  <p className="font-serif text-3xl italic text-ink sm:text-4xl">{s.n}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-soft">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Portrait */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-sm"
            >
              <div className="absolute -inset-3 rounded-t-[999px] rounded-b-3xl border border-clay/30" />
              <div className="overflow-hidden rounded-t-[999px] rounded-b-3xl">
                <img
                  src="/images/portrait.jpg"
                  alt="Laras Sekar, penulis dan penyair"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[2s] hover:scale-105"
                />
              </div>

              <FlowerMark className="animate-spin-slow absolute -left-10 -top-8 h-14 w-14 text-clay/60" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="animate-float absolute -bottom-8 -left-6 max-w-[240px] rounded-2xl border border-line bg-paper-card p-5 shadow-xl shadow-ink/10 sm:-left-12"
              >
                <Quote className="mb-2 h-4 w-4 text-clay" />
                <p className="font-serif text-sm italic leading-relaxed text-ink">
                  “Puisi bukan untuk dimengerti, melainkan untuk dirasakan —
                  seperti hujan.”
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <div className="overflow-hidden border-y border-line bg-paper-deep py-5">
        <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-serif text-xl italic text-ink-soft">{w}</span>
              <FlowerMark className="h-4 w-4 text-clay/70" />
            </span>
          ))}
        </div>
      </div>

      {/* ================= FEATURED WORKS ================= */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="mb-4 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-clay">
                  <span className="h-px w-10 bg-clay" /> Karya Pilihan
                </p>
                <h2 className="max-w-xl font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
                  Tiga sajak yang paling sering{" "}
                  <span className="italic text-clay">dibaca ulang.</span>
                </h2>
              </div>
              <Link
                to="/karya"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-clay"
              >
                Lihat semua karya
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {featured.map((w, i) => (
              <Reveal key={w.id} delay={i * 0.12}>
                <button
                  onClick={() => setActivePoem(w)}
                  className="group block w-full text-left"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={w.image}
                      alt={w.title}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-ink backdrop-blur">
                      Baca selengkapnya
                    </span>
                  </div>
                  <div className="pt-6">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-clay">
                      {w.meta} · {w.year}
                    </p>
                    <h3 className="font-serif text-2xl italic leading-snug text-ink transition-colors group-hover:text-clay">
                      {w.title}
                    </h3>
                    <p className="mt-3 border-l-2 border-clay/40 pl-4 font-serif text-[15px] italic leading-relaxed text-ink-soft">
                      {w.excerpt}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUOTE BAND ================= */}
      <section className="border-y border-line bg-paper-deep py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <Feather className="mx-auto mb-8 h-8 w-8 text-clay" strokeWidth={1.4} />
            <blockquote className="font-serif text-2xl font-light italic leading-relaxed text-ink sm:text-3xl md:text-[2.6rem] md:leading-[1.3]">
              “Aku menulis bukan karena pandai berkata-kata, tetapi karena
              terlalu banyak hal yang{" "}
              <span className="text-clay">hanya bisa selamat lewat sajak.</span>”
            </blockquote>
            <p className="mt-8 text-xs uppercase tracking-[0.24em] text-ink-soft">
              — Laras Sekar, dari catatan pembuka “Surat untuk Hujan”
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= PLATFORM HUB ================= */}
      <section className="relative overflow-hidden bg-night py-24 text-paper md:py-32">
        <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-clay/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-clay-soft">
                <span className="h-px w-10 bg-clay-soft" /> Platform Hub
              </p>
              <h2 className="font-serif text-4xl font-light leading-tight sm:text-5xl">
                Temukan aku <span className="italic text-clay-soft">di mana-mana</span>{" "}
                tempat kata tinggal.
              </h2>
              <p className="mt-5 leading-relaxed text-paper/60">
                Satu klik menuju seluruh sudut dunia kreatifku — dari video puisi
                30 detik hingga obrolan mingguan di podcast.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1} className="h-full">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-paper/10 bg-night-soft p-7 transition-all duration-500 hover:-translate-y-2 hover:border-clay-soft/40 hover:bg-clay/10"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/15 text-clay-soft transition-colors duration-500 group-hover:border-clay group-hover:bg-clay group-hover:text-paper">
                      <PlatformIcon icon={p.icon} className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-paper/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-clay-soft" />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-paper/40">
                    {p.stat}
                  </p>
                  <h3 className="mt-1.5 font-serif text-2xl italic text-paper">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-clay-soft/80">{p.handle}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-paper/55">
                    {p.desc}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA BAND ================= */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-clay/25 bg-clay-soft/40 px-8 py-16 text-center md:px-16 md:py-20">
              <FlowerMark className="animate-spin-slow absolute left-8 top-8 h-10 w-10 text-clay/40" />
              <FlowerMark className="animate-spin-slow absolute bottom-8 right-8 h-10 w-10 text-clay/40" />
              <h2 className="mx-auto max-w-2xl font-serif text-3xl font-light italic leading-snug text-ink sm:text-4xl">
                Punya proyek, acara, atau halaman kosong yang butuh sentuhan
                kata?
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink-soft">
                Aku terbuka untuk freelance writing, voice-over puisi, poetry
                reading, hingga workshop menulis. Ceritakan idemu — mari kita
                tenun bersama.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/kontak"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:bg-clay"
                >
                  Mulai Kolaborasi
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="#/karya"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-clay"
                >
                  <Play className="h-4 w-4" />
                  Dengarkan puisiku dulu
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PoemModal work={activePoem} onClose={() => setActivePoem(null)} />
    </div>
  );
}
