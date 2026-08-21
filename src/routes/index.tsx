import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AboutCouple } from "@/components/tribute/AboutCouple";
import { LyricsScreen } from "@/components/tribute/LyricsScreen";
import { PlayerScreen } from "@/components/tribute/PlayerScreen";
import { PlayerProvider } from "@/components/tribute/player-context";
import { RetrospectiveSection } from "@/components/tribute/RetrospectiveSection";
import { SpecialMessageCard } from "@/components/tribute/SpecialMessageCard";
import { Splash } from "@/components/tribute/Splash";
import { nomeCasal, playlistNome } from "@/components/tribute/config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${nomeCasal} — ${playlistNome}` },
      {
        name: "description",
        content:
          "Uma homenagem animada de aniversário de namoro em formato de player de música: contadores em tempo real, carta em letra sincronizada e retrospectiva em fotos.",
      },
      { property: "og:title", content: `${nomeCasal} — ${playlistNome}` },
      {
        property: "og:description",
        content: "Homenagem de aniversário de namoro no estilo player de música.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);
  const [lyricsOpen, setLyricsOpen] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(id);
  }, []);

  return (
    <PlayerProvider>
      <AnimatePresence>{loading && <Splash />}</AnimatePresence>

      {/* fundo desfocado do desktop */}
      <main className="relative grid min-h-screen place-items-center overflow-hidden bg-background p-0 sm:p-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70 blur-3xl"
          style={{ background: "var(--gradient-player)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={loading ? {} : { opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 90, damping: 20, delay: 0.2 }}
          className="relative h-[100dvh] w-full max-w-[420px] overflow-hidden bg-background sm:h-[min(860px,92dvh)] sm:rounded-[2rem] sm:ring-1 sm:ring-border"
          style={{ boxShadow: "var(--shadow-phone)" }}
        >
          <div className="no-scrollbar h-full snap-y snap-mandatory overflow-y-auto">
            <PlayerScreen />
            <AboutCouple />
            <SpecialMessageCard onOpen={() => setLyricsOpen(true)} />
            <RetrospectiveSection />
          </div>

          <AnimatePresence>
            {lyricsOpen && <LyricsScreen onClose={() => setLyricsOpen(false)} />}
          </AnimatePresence>
        </motion.div>
      </main>
    </PlayerProvider>
  );
}
