import { motion } from "framer-motion";
import { mensagemFinal, retrospectiva } from "./config";

function Confetti() {
  const pieces = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((_, i) => {
        const left = (i * 37) % 100;
        const delay = (i % 6) * 0.8;
        const dur = 7 + (i % 5);
        return (
          <motion.span
            key={i}
            className={`absolute top-[-8%] h-2 w-1 rounded-full ${
              i % 2 === 0 ? "bg-wine-bright" : "bg-foreground/70"
            }`}
            style={{ left: `${left}%` }}
            animate={{ y: ["0%", "900%"], opacity: [0, 0.8, 0], rotate: [0, 220] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: "linear" }}
          />
        );
      })}
    </div>
  );
}

export function RetrospectiveSection() {
  return (
    <section className="snap-section relative min-h-[100%] px-5 py-10">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold leading-tight tracking-tight text-foreground"
      >
        Nossa retrospectiva
        <span className="mt-1 block text-base font-semibold text-rose-soft/80">2 anos em fotos</span>
      </motion.h2>

      <div className="relative mt-8 pl-6">
        {/* linha do tempo */}
        <div className="absolute left-1.5 top-2 bottom-2 w-[2px] bg-gradient-to-b from-wine-bright via-wine to-transparent" />

        {retrospectiva.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, x: i % 2 === 0 ? -16 : 16 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
            className={`relative mb-8 ${i % 2 === 0 ? "mr-6" : "ml-6"}`}
          >
            <span
              className={`absolute top-6 h-3 w-3 rounded-full bg-wine-bright ring-4 ring-background ${
                i % 2 === 0 ? "-left-[22px]" : "-left-[46px]"
              }`}
            />
            <div className="overflow-hidden rounded-2xl bg-card shadow-[0_24px_60px_-30px_oklch(0_0_0/0.9)] ring-1 ring-border">
              <motion.img
                src={item.src}
                alt={item.legenda}
                loading="lazy"
                width={768}
                height={960}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
                className="aspect-[4/5] w-full object-cover"
              />
              <p className="px-4 py-3 text-xs font-semibold text-muted-foreground">{item.legenda}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-6 overflow-hidden rounded-2xl py-14 text-center">
        <Confetti />
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 90, damping: 16 }}
          className="relative text-2xl font-extrabold tracking-tight text-foreground"
        >
          {mensagemFinal}
        </motion.p>
      </div>
    </section>
  );
}