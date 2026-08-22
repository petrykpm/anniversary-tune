import { motion } from "framer-motion";
import { fotoAu, fotoTismo, legendaAu, legendaTismo } from "./config";

export function AuTismoSection() {
  return (
    <section className="snap-section flex min-h-[100%] flex-col justify-center gap-5 px-5 py-10">
      {[
        { src: fotoAu, legenda: legendaAu },
        { src: fotoTismo, legenda: legendaTismo },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 90, damping: 18, delay: i * 0.15 }}
          className="overflow-hidden rounded-2xl bg-card shadow-[0_24px_60px_-30px_oklch(0_0_0/0.9)] ring-1 ring-border"
        >
          <motion.img
            src={item.src}
            alt={item.legenda}
            loading="lazy"
            width={899}
            height={1599}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/5] w-full object-cover"
          />
          <p className="px-4 py-4 text-center text-lg font-extrabold tracking-tight text-foreground">
            {item.legenda}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
