import { AnimatePresence, motion } from "framer-motion";

/** Número com troca animada tipo odômetro */
export function FlipNumber({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-secondary/70 px-2 py-4 ring-1 ring-border">
      <div className="relative h-9 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            initial={{ y: 24, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -24, opacity: 0, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="block text-3xl font-extrabold tabular-nums text-foreground"
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-1 text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  );
}