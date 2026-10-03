import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import { platforms } from "../data/works";
import { FlowerMark, TikTokIcon } from "./icons";

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

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2.5">
              <FlowerMark className="h-8 w-8 text-clay" />
              <span className="font-serif text-3xl italic text-ink">Laras Sekar</span>
            </div>
            <p className="mt-5 max-w-sm font-serif text-lg italic leading-relaxed text-ink-soft">
              “Ditulis pelan-pelan, di antara dua hujan — untukmu yang sedang
              belajar berbahasa sayang.”
            </p>
            <a
              href="mailto:halo@larassekar.id"
              className="mt-6 inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-clay"
            >
              <Mail className="h-4 w-4" />
              halo@larassekar.id
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-clay">
              Jelajahi
            </p>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Beranda" },
                { to: "/karya", label: "Karya & Portofolio" },
                { to: "/tentang", label: "Tentang Aku" },
                { to: "/kontak", label: "Kontak & Kolaborasi" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-reveal text-ink-soft transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-clay">
              Temukan Aku
            </p>
            <ul className="space-y-3 text-sm">
              {platforms.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2.5 text-ink-soft transition-colors hover:text-ink"
                  >
                    <PlatformIcon icon={p.icon} className="h-4 w-4 text-clay" />
                    {p.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-ink-soft sm:flex-row sm:items-center">
          <p>© 2025 Laras Sekar. Seluruh sajak dilindungi hak cipta.</p>
          <p className="font-serif italic">
            Bandung, di antara dua hujan — {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
