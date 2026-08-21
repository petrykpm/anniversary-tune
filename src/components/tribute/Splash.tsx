import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Splash() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 grid place-items-center bg-background"
    >
      <motion.div
        animate={{ scale: [1, 1.18, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="fill-spotify-green text-spotify-green" size={64} />
      </motion.div>
    </motion.div>
  );
}