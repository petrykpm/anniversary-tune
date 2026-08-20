import { motion } from "framer-motion";
import { desdeTexto, fotoSobre, nomeCasal } from "./config";
import { FlipNumber } from "./FlipNumber";
import { useTogether } from "./use-together";

export function AboutCouple() {
  const t = useTogether();

  const items = [
    { value: t.anos, label: "Anos" },
    { value: t.meses, label: "Meses" },
    { value: t.dias, label: "Dias" },
    { value: t.horas, label: "Horas" },
    { value: t.minutos, label: "Minutos" },
    { value: t.segundos, label: "Segundos" },
  ];

  return (
    <section className="snap-section flex min-h-[100%] flex-col justify-center px-5 py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
        className="rounded-2xl bg-card p-4 shadow-[0_30px_80px_-40px_oklch(0_0_0/0.9)] ring-1 ring-border"
      >
        <h2 className="mb-3 text-lg font-extrabold text-foreground">Sobre o casal</h2>
        <div className="overflow-hidden rounded-xl">
          <motion.img
            src={fotoSobre}
            alt={nomeCasal}
            loading="lazy"
            width={768}
            height={960}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-2xl font-extrabold tracking-tight text-foreground"
        >
          {nomeCasal}
        </motion.h3>
        <p className="mt-1 text-sm font-medium text-muted-foreground">{desdeTexto}</p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } } }}
          className="mt-5 grid grid-cols-3 gap-3"
        >
          {items.map((it) => (
            <motion.div
              key={it.label}
              variants={{
                hidden: { opacity: 0, y: 28, scale: 0.94 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
            >
              <FlipNumber value={it.value} label={it.label} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}