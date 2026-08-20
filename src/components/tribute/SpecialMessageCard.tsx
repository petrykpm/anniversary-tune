import { motion } from "framer-motion";
import { mensagemTeaser } from "./config";

export function SpecialMessageCard({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="snap-section flex min-h-[100%] flex-col justify-center px-5 py-8">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
        className="rounded-2xl p-6 shadow-[0_30px_80px_-30px_oklch(0.35_0.15_18/0.8)]"
        style={{ background: "var(--gradient-wine)" }}
      >
        <p className="text-sm font-bold text-foreground/85">Mensagem especial</p>
        <p className="mt-4 text-2xl font-extrabold leading-snug tracking-tight text-foreground">
          {mensagemTeaser.split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="inline-block"
            >
              {w}&nbsp;
            </motion.span>
          ))}
        </p>
        <motion.button
          type="button"
          onClick={onOpen}
          whileHover={{ scale: 1.04, filter: "brightness(1.05)" }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="mt-7 rounded-full bg-foreground px-6 py-3 text-sm font-bold text-wine"
        >
          Mostrar Mensagem
        </motion.button>
      </motion.div>
    </section>
  );
}