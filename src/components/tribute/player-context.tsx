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

    // tenta tocar sozinha assim que a página abre; se o navegador bloquear
    // autoplay com som, toca no primeiro toque/clique da pessoa
    const startOnInteraction = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
      window.removeEventListener("pointerdown", startOnInteraction);
      window.removeEventListener("keydown", startOnInteraction);
    };

    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        window.addEventListener("pointerdown", startOnInteraction, { once: true });
        window.addEventListener("keydown", startOnInteraction, { once: true });
      });

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
      window.removeEventListener("pointerdown", startOnInteraction);
      window.removeEventListener("keydown", startOnInteraction);
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
