import { motion } from "framer-motion";
import {
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { artista, fotoPlayer, musicaNome, playlistNome } from "./config";
import { PlayPauseButton } from "./PlayPauseButton";
import { ProgressBar } from "./ProgressBar";

export function PlayerScreen() {
  return (
    <section className="snap-section relative flex min-h-[100%] flex-col px-5 pt-4 pb-6">
      {/* topo */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3"
      >
        <ChevronDown className="shrink-0 text-foreground/90" size={22} />
        <p className="truncate text-center text-sm font-bold text-foreground">{playlistNome}</p>
        <MoreHorizontal className="shrink-0 text-foreground/90" size={22} />
      </motion.div>

      {/* capa */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.2 }}
        className="mt-6 overflow-hidden rounded-xl shadow-[0_24px_60px_-24px_oklch(0_0_0/0.8)]"
      >
        <motion.img
          src={fotoPlayer}
          alt="Foto do casal"
          width={768}
          height={960}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="aspect-square w-full object-cover"
        />
      </motion.div>

      {/* título */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-6 flex items-center gap-3"
      >
        <div className="min-w-0 flex-1 overflow-hidden">
          {/* recorte à esquerda, como no Spotify quando o título é longo */}
          <h1 className="-ml-6 whitespace-nowrap text-2xl font-extrabold tracking-tight text-foreground">
            {artista} - {musicaNome}
          </h1>
          <p className="-ml-6 mt-1 truncate text-sm font-medium text-foreground/60">{artista}</p>
        </div>
        <motion.span
          animate={{ scale: [1, 1.16, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="shrink-0"
        >
          <BadgeCheck className="fill-wine-bright text-foreground" size={30} />
        </motion.span>
      </motion.div>

      {/* progresso */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-5"
      >
        <ProgressBar />
      </motion.div>

      {/* controles */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-5 flex items-center justify-between"
      >
        {[Shuffle, SkipBack].map((Icon, i) => (
          <motion.button
            key={i}
            type="button"
            aria-label="controle"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="text-foreground/85"
          >
            <Icon size={i === 0 ? 22 : 30} className={i === 1 ? "fill-current" : ""} />
          </motion.button>
        ))}
        <PlayPauseButton />
        {[SkipForward, Repeat].map((Icon, i) => (
          <motion.button
            key={i}
            type="button"
            aria-label="controle"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="text-foreground/85"
          >
            <Icon size={i === 0 ? 30 : 22} className={i === 0 ? "fill-current" : ""} />
          </motion.button>
        ))}
      </motion.div>

      {/* dica de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="mt-auto pt-6"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 rounded-t-xl bg-card/80 px-4 py-3 ring-1 ring-border"
        >
          <ChevronUp size={16} className="text-foreground/70" />
          <span className="text-sm font-bold text-foreground">Sobre o casal</span>
        </motion.div>
      </motion.div>
    </section>
  );
}