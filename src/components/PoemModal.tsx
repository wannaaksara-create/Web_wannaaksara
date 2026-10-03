import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Feather } from "lucide-react";
import type { Work } from "../data/works";

interface PoemModalProps {
  work: Work | null;
  onClose: () => void;
}

export default function PoemModal({ work, onClose }: PoemModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = work ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [work]);

  return (
    <AnimatePresence>
      {work && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/60 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-line bg-paper-card shadow-2xl sm:rounded-3xl"
          >
            <div className="pointer-events-none absolute left-6 top-6 text-clay/30">
              <Feather className="h-10 w-10" strokeWidth={1.2} />
            </div>

            <button
              onClick={onClose}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-ink transition-colors hover:bg-clay hover:text-paper hover:border-clay"
              aria-label="Tutup"
            >
              <X className="h-4.5 w-4.5" />
            </button>

            <div className="px-7 pb-12 pt-20 sm:px-14">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-clay">
                {work.meta} · {work.year}
              </p>
              <h3 className="mb-10 font-serif text-3xl italic leading-snug text-ink sm:text-4xl">
                {work.title}
              </h3>
              <motion.div
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              >
                {work.fullPoem?.split("\n\n").map((stanza, i) => (
                  <motion.p
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 14 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                    className="poem-text mb-8 text-ink last:mb-0"
                  >
                    {stanza}
                  </motion.p>
                ))}
              </motion.div>

              <div className="mt-12 flex items-center gap-4 border-t border-line pt-6">
                <div className="h-px w-10 bg-clay" />
                <p className="font-serif text-sm italic text-ink-soft">
                  Laras Sekar — dibaca pelan-pelan, bila berkenan.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
