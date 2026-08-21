import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { usePlayer } from "./player-context";

export function PlayPauseButton({ size = 68 }: { size?: number }) {
  const { playing, toggle } = usePlayer();

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Pausar" : "Tocar"}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
      style={{ width: size, height: size }}
      className="relative grid place-items-center rounded-full bg-foreground shadow-[0_10px_30px_-8px_oklch(0_0_0/0.6)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        {playing ? (
          <motion.span
            key="pause"
            initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.18 }}
          >
            <Pause className="fill-background text-background" size={size * 0.4} />
          </motion.span>
        ) : (
          <motion.span
            key="play"
            initial={{ scale: 0.5, opacity: 0, rotate: 30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: -30 }}
            transition={{ duration: 0.18 }}
            className="translate-x-[2px]"
          >
            <Play className="fill-background text-background" size={size * 0.4} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}