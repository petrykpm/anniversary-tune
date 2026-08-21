import { motion } from "framer-motion";
import { ChevronDown, Flag } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { artista, cartaLinhas, musicaNomeCurto } from "./config";
import { PlayPauseButton } from "./PlayPauseButton";
import { ProgressBar } from "./ProgressBar";
import { usePlayer } from "./player-context";

/** Tela de letras sincronizadas (a carta) */
export function LyricsScreen({ onClose }: { onClose: () => void }) {
  const { playing } = usePlayer();
  const [active, setActive] = useState(0);
  const scroller = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<Array<HTMLParagraphElement | null>>([]);

  // avanço automático da linha ativa (efeito karaokê)
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % cartaLinhas.length);
    }, 5000);
    return () => clearInterval(id);
  }, [playing]);

  useEffect(() => {
    lineRefs.current[active]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [active]);

  const trilhaProgresso = cartaLinhas.length > 1 ? active / (cartaLinhas.length - 1) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 110, damping: 20 }}
      className="absolute inset-0 z-30 flex flex-col"
      style={{ background: "var(--gradient-player)" }}
    >
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 bg-background/40 px-4 py-3 backdrop-blur">
        <motion.button
          type="button"
          onClick={onClose}
          aria-label="Voltar"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-foreground/10"
        >
          <ChevronDown size={20} className="text-foreground" />
        </motion.button>
        <div className="min-w-0 text-center">
          <p className="truncate text-sm font-bold text-foreground">
            {artista} - {musicaNomeCurto}
          </p>
          <p className="truncate text-xs font-medium text-foreground/60">{artista}</p>
        </div>
        <Flag size={20} className="shrink-0 text-foreground" />
      </div>

      {/* letra */}
      <div className="relative min-h-0 flex-1">
        <div ref={scroller} className="no-scrollbar h-full overflow-y-auto px-6 py-8">
          {cartaLinhas.map((linha, i) => (
            <motion.p
              key={i}
              ref={(el) => {
                lineRefs.current[i] = el;
              }}
              animate={{
                opacity: i === active ? 1 : i < active ? 0.45 : 0.3,
                color: i === active ? "var(--foreground)" : "var(--text-subtle)",
                scale: i === active ? 1 : 0.985,
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-7 origin-left text-2xl font-extrabold leading-snug tracking-tight"
            >
              {linha}
            </motion.p>
          ))}
        </div>

        {/* scrollbar decorativa */}
        <div className="pointer-events-none absolute right-1.5 top-6 bottom-6 w-1 rounded-full bg-foreground/15">
          <motion.div
            className="absolute w-1 rounded-full bg-foreground/70"
            style={{ height: "22%" }}
            animate={{ top: `${trilhaProgresso * 78}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="px-6 pb-8">
        <ProgressBar />
        <div className="mt-5 flex justify-center">
          <PlayPauseButton size={62} />
        </div>
      </div>
    </motion.div>
  );
}