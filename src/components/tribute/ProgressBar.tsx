import { motion } from "framer-motion";
import { formatTime, usePlayer } from "./player-context";

export function ProgressBar() {
  const { position, duration, progress } = usePlayer();
  const restante = duration - position;

  return (
    <div className="w-full">
      <div className="relative h-1 w-full rounded-full bg-foreground/25">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-foreground"
          style={{ width: `${progress * 100}%` }}
        />
        <motion.div
          className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground shadow"
          style={{ left: `${progress * 100}%` }}
        />
      </div>
      <div className="mt-2 flex justify-between text-[11px] font-semibold text-foreground/70">
        <span className="tabular-nums">{formatTime(position)}</span>
        <span className="tabular-nums">-{formatTime(restante)}</span>
      </div>
    </div>
  );
}