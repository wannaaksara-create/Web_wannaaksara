import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clock3, Headphones, Play, ScrollText } from "lucide-react";
import {
  CATEGORY_LABEL,
  works,
  type Work,
  type WorkCategory,
} from "../data/works";
import Reveal from "../components/Reveal";
import PoemModal from "../components/PoemModal";

type Tab = "semua" | WorkCategory;

const tabs: { id: Tab; label: string }[] = [
  { id: "semua", label: "Semua Karya" },
  { id: "puisi", label: "Puisi Tulis" },
  { id: "audio", label: "Audio & Video Puisi" },
  { id: "artikel", label: "Artikel & Esai" },
];

function WorkCard({ work, onOpenPoem }: { work: Work; onOpenPoem: (w: Work) => void }) {
  if (work.category === "puisi") {
    return (
      <motion.button
        layout
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => onOpenPoem(work)}
        className="group flex h-full flex-col rounded-2xl border border-line bg-paper-card p-8 text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-clay/40 hover:shadow-xl hover:shadow-clay/10"
      >
        <div className="mb-6 flex items-center justify-between">
          <ScrollText className="h-5 w-5 text-clay" strokeWidth={1.5} />
          <span className="rounded-full border border-line px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ink-soft">
            {work.year}
          </span>
        </div>
        <h3 className="font-serif text-2xl italic leading-snug text-ink transition-colors group-hover:text-clay">
          {work.title}
        </h3>
        <p className="mt-4 flex-1 border-l-2 border-clay/40 pl-4 font-serif text-[15px] italic leading-relaxed text-ink-soft">
          {work.excerpt}
        </p>
        <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
          <span className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">
            {work.meta}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-clay opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Baca →
          </span>
        </div>
      </motion.button>
    );
  }

  if (work.category === "audio") {
    return (
      <motion.a
        layout
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        href={work.url}
        target="_blank"
        rel="noreferrer"
        className="group relative block overflow-hidden rounded-2xl"
      >
        <img
          src={work.image}
          alt={work.title}
          className="aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-108 sm:aspect-[4/4.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/25 to-transparent" />

        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-paper/90 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-ink backdrop-blur">
          <Headphones className="h-3 w-3" />
          {work.platform}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-paper/40 bg-paper/15 text-paper backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-clay group-hover:border-clay">
            <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
          </div>
          <h3 className="font-serif text-2xl italic leading-snug text-paper">
            {work.title}
          </h3>
          <p className="mt-3 text-[13px] leading-relaxed text-paper/70 line-clamp-3">
            {work.excerpt}
          </p>
          <p className="mt-4 border-t border-paper/15 pt-4 text-[11px] uppercase tracking-[0.18em] text-clay-soft">
            {work.meta}
          </p>
        </div>
      </motion.a>
    );
  }

  // artikel
  return (
    <motion.a
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      href="#baca-artikel"
      onClick={(e) => e.preventDefault()}
      className="group flex h-full flex-col rounded-2xl border border-line bg-paper-deep/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-clay/40 hover:bg-paper-card"
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="font-serif text-5xl font-light italic text-clay/30 transition-colors duration-500 group-hover:text-clay/60">
          {work.id.length % 10}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-500 group-hover:border-clay group-hover:bg-clay group-hover:text-paper">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <h3 className="font-serif text-[22px] italic leading-snug text-ink transition-colors group-hover:text-clay">
        {work.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
        {work.excerpt}
      </p>
      <div className="mt-7 flex items-center gap-4 border-t border-line pt-5 text-[11px] uppercase tracking-[0.18em] text-ink-soft">
        <span className="flex items-center gap-1.5">
          <Clock3 className="h-3.5 w-3.5" /> {work.readTime}
        </span>
        <span>·</span>
        <span>Esai {work.year}</span>
      </div>
    </motion.a>
  );
}

export default function Portfolio() {
  const [tab, setTab] = useState<Tab>("semua");
  const [activePoem, setActivePoem] = useState<Work | null>(null);

  const filtered = tab === "semua" ? works : works.filter((w) => w.category === tab);

  return (
    <div className="pt-32 md:pt-44">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-clay">
            <span className="h-px w-10 bg-clay" /> Karya & Portofolio
          </p>
          <h1 className="max-w-3xl font-serif text-5xl font-light leading-[1.08] text-ink sm:text-6xl">
            Setiap karya adalah <span className="italic text-clay">surat</span> yang
            kukirim kepada dunia.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Puisi tulis yang tumbuh dari buku harian, rekaman suara yang lahir di
            penghujung senja, dan esai-esai tentang mengapa kita tetap perlu
            kata-kata. Pilih kategori — atau baca semuanya, pelan-pelan.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap gap-3 border-b border-line pb-8">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full border px-5 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                  tab === t.id
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-transparent text-ink-soft hover:border-clay hover:text-clay"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <motion.div layout className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((w) => (
              <WorkCard key={w.id} work={w} onOpenPoem={setActivePoem} />
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-20">
          <div className="rounded-3xl border border-line bg-paper-deep px-8 py-12 text-center">
            <p className="mx-auto max-w-xl font-serif text-xl italic leading-relaxed text-ink-soft">
              “Belum menemukan yang kamu cari? Mungkin ia sedang tumbuh di
              buku catatan yang belum selesai.”
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-clay">
              {CATEGORY_LABEL.puisi} baru setiap pekan
            </p>
          </div>
        </Reveal>
      </section>

      <PoemModal work={activePoem} onClose={() => setActivePoem(null)} />
    </div>
  );
}
