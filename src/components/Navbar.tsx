import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { FlowerMark } from "./icons";

const links = [
  { to: "/", label: "Beranda" },
  { to: "/karya", label: "Karya" },
  { to: "/tentang", label: "Tentang" },
  { to: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-paper/85 backdrop-blur-md border-b border-line/70 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
          <Link to="/" className="group flex items-center gap-2.5">
            <FlowerMark className="h-7 w-7 text-clay transition-transform duration-700 group-hover:rotate-90" />
            <span className="font-serif text-xl italic tracking-tight text-ink">
              Laras Sekar
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `link-reveal text-[13px] font-medium uppercase tracking-[0.18em] transition-colors ${
                    isActive ? "active text-clay" : "text-ink-soft hover:text-ink"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/kontak"
              className="group inline-flex items-center gap-1.5 rounded-full border border-ink/20 bg-ink px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.14em] text-paper transition-all duration-300 hover:bg-clay hover:border-clay"
            >
              Ajukan Kolaborasi
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink md:hidden"
            aria-label="Buka menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col bg-night px-8 py-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <FlowerMark className="h-7 w-7 text-clay-soft" />
                <span className="font-serif text-xl italic text-paper">Laras Sekar</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper"
                aria-label="Tutup menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `font-serif text-5xl italic transition-colors ${
                        isActive ? "text-clay-soft" : "text-paper hover:text-clay-soft"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-serif text-sm italic text-paper/50"
            >
              “Menenun kata, merawat rasa.”
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
