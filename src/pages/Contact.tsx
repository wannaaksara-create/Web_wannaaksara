import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { platforms } from "../data/works";
import Reveal from "../components/Reveal";
import { FlowerMark, TikTokIcon } from "../components/icons";

const collabTypes = [
  "Freelance Writing / Copywriting",
  "Voice-over Puisi / Audiobook",
  "Poetry Reading / Acara Sastra",
  "Workshop Menulis",
  "Kolaborasi Konten / Brand",
  "Lainnya",
];

const faqs = [
  {
    q: "Berapa lama waktu balasan pesan?",
    a: "Aku berusaha membalas setiap pesan dalam 2×24 jam pada hari kerja. Untuk penawaran acara, idealnya hubungi minimal 3 minggu sebelum tanggal acara.",
  },
  {
    q: "Apakah terbuka untuk kolaborasi brand atau iklan?",
    a: "Ya, selama nilainya sejalan: hangat, jujur, dan menghargai kata. Aku tidak menerima kolaborasi yang mengharuskanku menulis bertentangan dengan nilai-nilai sajakku.",
  },
  {
    q: "Boleh menggunakan puisimu untuk acara atau konten?",
    a: "Untuk pembacaan non-komersil (komunitas, sekolah), cukup cantumkan nama dan tag aku — tak perlu izin formal. Untuk penggunaan komersial, mari berdiskusi lewat formulir ini.",
  },
  {
    q: "Apakah menerima permintaan puisi khusus (dedikasi)?",
    a: "Sesekali, ya — biasanya untuk momen penting seperti pernikahan atau kelahiran. Slot terbatas setiap bulan; tuliskan ceritamu di formulir dan kuberi tahu apakah bisa kutenun.",
  },
];

function PlatformIcon({ icon, className }: { icon: string; className?: string }) {
  switch (icon) {
    case "tiktok":
      return <TikTokIcon className={className} />;
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <circle cx="12" cy="11" r="3" />
          <path d="M12 17.5v4.5M8.5 14.5 5.5 19M15.5 14.5l3 4.5M6.5 8.5 3 6.5M17.5 8.5 21 6.5" strokeLinecap="round" />
        </svg>
      );
  }
}

export default function Contact() {
  const [form, setForm] = useState({ nama: "", email: "", jenis: collabTypes[0], pesan: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1400);
  };

  const inputCls =
    "w-full rounded-xl border border-line bg-paper-card px-4.5 py-3.5 text-[15px] text-ink placeholder:text-ink-soft/50 outline-none transition-all duration-300 focus:border-clay focus:ring-4 focus:ring-clay/10";

  return (
    <div className="pt-32 md:pt-44">
      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-clay">
            <span className="h-px w-10 bg-clay" /> Kontak & Kolaborasi
          </p>
          <h1 className="max-w-3xl font-serif text-5xl font-light leading-[1.08] text-ink sm:text-6xl">
            Ceritakan idemu — <span className="italic text-clay">aku siap mendengar.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Penawaran freelance writing, voice-over puisi, acara poetry reading,
            atau sekadar menyapa — semua dipersilakan. Pesanmu akan dibaca
            langsung oleh aku, bukan asisten.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 pb-24 lg:grid-cols-12 md:pb-32">
          {/* Info */}
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col gap-6">
              <div className="relative overflow-hidden rounded-3xl bg-night p-8 text-paper">
                <FlowerMark className="animate-spin-slow absolute -right-6 -top-6 h-24 w-24 text-clay/20" />
                <p className="font-serif text-xl italic leading-relaxed text-paper/90">
                  “Setiap pesan adalah undangan untuk bertemu. Aku membacanya
                  seperti membaca surat.”
                </p>
                <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-clay-soft">
                  Laras Sekar
                </p>
              </div>

              <div className="rounded-3xl border border-line bg-paper-card p-8">
                <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.24em] text-clay">
                  Informasi Profesional
                </p>
                <ul className="space-y-5 text-[15px]">
                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-clay-soft/60 text-clay">
                      <Mail className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-ink-soft">Email</span>
                      <a href="mailto:halo@larassekar.id" className="font-medium text-ink transition-colors hover:text-clay">
                        halo@larassekar.id
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-clay-soft/60 text-clay">
                      <Phone className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-ink-soft">WhatsApp Bisnis</span>
                      <a href="tel:+6281234567890" className="font-medium text-ink transition-colors hover:text-clay">
                        +62 812-3456-7890
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-clay-soft/60 text-clay">
                      <MapPin className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-ink-soft">Basis</span>
                      <span className="font-medium text-ink">Bandung, Indonesia</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-clay-soft/60 text-clay">
                      <Clock3 className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-ink-soft">Waktu Balasan</span>
                      <span className="font-medium text-ink">2×24 jam pada hari kerja</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-line bg-paper-deep p-8">
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-clay">
                  Atau temukan aku di sini
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {platforms.map((p) => (
                    <a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-line bg-paper-card px-4 py-3 text-sm text-ink transition-all duration-300 hover:border-clay hover:text-clay"
                    >
                      <span className="flex items-center gap-2.5">
                        <PlatformIcon icon={p.icon} className="h-4 w-4 text-clay" />
                        {p.name}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="relative h-full rounded-3xl border border-line bg-paper-card p-8 md:p-12">
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex h-full min-h-[480px] flex-col items-center justify-center text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 14 }}
                      className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-clay text-paper"
                    >
                      <Check className="h-9 w-9" strokeWidth={2.5} />
                    </motion.span>
                    <h3 className="font-serif text-3xl italic text-ink">
                      Pesanmu telah terkirim.
                    </h3>
                    <p className="mt-4 max-w-sm leading-relaxed text-ink-soft">
                      Terima kasih, {form.nama.split(" ")[0] || "sahabat kata"}.
                      Aku akan membacanya pelan-pelan dan membalas dalam
                      2×24 jam pada hari kerja.
                    </p>
                    <p className="mt-6 font-serif text-sm italic text-clay">
                      “Sampai jumpa di baris-baris berikutnya.”
                    </p>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setForm({ nama: "", email: "", jenis: collabTypes[0], pesan: "" });
                      }}
                      className="mt-9 rounded-full border border-ink/25 px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-clay hover:text-clay"
                    >
                      Kirim pesan lain
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -12 }}
                    onSubmit={handleSubmit}
                    className="flex h-full flex-col"
                  >
                    <h3 className="font-serif text-2xl italic text-ink">
                      Formulir Pesan Singkat
                    </h3>
                    <p className="mt-2 text-sm text-ink-soft">
                      Semua kolom bertanda * wajib diisi.
                    </p>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="nama" className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
                          Nama *
                        </label>
                        <input
                          id="nama"
                          required
                          value={form.nama}
                          onChange={(e) => setForm({ ...form, nama: e.target.value })}
                          placeholder="Nama lengkapmu"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="nama@email.com"
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label htmlFor="jenis" className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
                        Jenis Kolaborasi *
                      </label>
                      <div className="relative">
                        <select
                          id="jenis"
                          value={form.jenis}
                          onChange={(e) => setForm({ ...form, jenis: e.target.value })}
                          className={`${inputCls} appearance-none pr-12`}
                        >
                          {collabTypes.map((c) => (
                            <option key={c}>{c}</option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-soft" />
                      </div>
                    </div>

                    <div className="mt-5 flex-1">
                      <label htmlFor="pesan" className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
                        Pesan *
                      </label>
                      <textarea
                        id="pesan"
                        required
                        rows={6}
                        value={form.pesan}
                        onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                        placeholder="Ceritakan proyek, tanggal acara, atau idemu — boleh selirat dulu, yang penting jujur."
                        className={`${inputCls} h-full min-h-[160px] resize-none`}
                      />
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                      <p className="max-w-xs text-xs leading-relaxed text-ink-soft">
                        Dengan mengirim formulir, kamu menyetujui data ini
                        digunakan hanya untuk keperluan kolaborasi.
                      </p>
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:bg-clay disabled:opacity-70"
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Mengirim…
                          </>
                        ) : (
                          <>
                            Kirim Pesan
                            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-paper-deep py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <div className="mb-14 text-center">
              <h2 className="font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
                Pertanyaan yang <span className="italic text-clay">sering tiba</span> di
                kotak suratku.
              </h2>
            </div>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    openFaq === i ? "border-clay/40 bg-paper-card" : "border-line bg-paper-card/60"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
                  >
                    <span className="font-serif text-lg italic text-ink">{f.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        openFaq === i
                          ? "rotate-180 border-clay bg-clay text-paper"
                          : "border-line text-ink-soft"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-7 pb-7 text-sm leading-relaxed text-ink-soft">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
