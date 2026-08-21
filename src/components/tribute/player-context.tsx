import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { duracaoSegundos, musicaSrc } from "./config";

type PlayerState = {
  playing: boolean;
  toggle: () => void;
  /** posição atual em segundos */
  position: number;
  duration: number;
  progress: number; // 0..1
  reset: () => void;
};

const PlayerContext = createContext<PlayerState | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(duracaoSegundos);

  useEffect(() => {
    const audio = new Audio(musicaSrc);
    audio.preload = "auto";
    audioRef.current = audio;

    const onTime = () => setPosition(audio.currentTime);
    const onMeta = () => setDuration(audio.duration || duracaoSegundos);
    const onEnd = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);

    const events = ["pointerdown", "touchstart", "keydown", "scroll", "click"] as const;
    const removeInteractionListeners = () => {
      events.forEach((ev) => window.removeEventListener(ev, startOnInteraction));
    };

    // fallback: se nada disso funcionar, toca assim que a pessoa
    // tocar/clicar/rolar a página pela primeira vez
    function startOnInteraction() {
      audio.muted = false;
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
      removeInteractionListeners();
    }

    // truque pra "enganar" o bloqueio de autoplay dos navegadores:
    // eles quase sempre permitem tocar automaticamente se começar mudo,
    // então tocamos mudo e desmutamos logo em seguida
    audio.muted = true;
    audio
      .play()
      .then(() => {
        setPlaying(true);
        // pequeno delay pra desmutar já com o áudio rodando
        setTimeout(() => {
          audio.muted = false;
        }, 150);
      })
      .catch(() => {
        // navegador bloqueou até mudo (raro) — espera interação
        events.forEach((ev) => window.addEventListener(ev, startOnInteraction, { once: true }));
      });

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
      removeInteractionListeners();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  };

  const reset = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    setPosition(0);
  };

  const value: PlayerState = {
    playing,
    toggle,
    position,
    duration,
    progress: duration > 0 ? position / duration : 0,
    reset,
  };

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used inside PlayerProvider");
  return ctx;
}

export function formatTime(seconds: number) {
  const s = Math.max(0, Math.floor(seconds));
  const m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, "0")}`;
}
