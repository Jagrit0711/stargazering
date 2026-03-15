import { motion } from "framer-motion";
import starImg from "@/assets/star-sticker.png";
import moonImg from "@/assets/moon-sticker.png";
import cloudImg from "@/assets/cloud-sticker.png";

const stickers = [
  { src: starImg, className: "w-12 md:w-16", top: "5%", left: "8%", delay: 0 },
  { src: starImg, className: "w-8 md:w-10", top: "15%", right: "12%", delay: 0.5 },
  { src: moonImg, className: "w-16 md:w-24", top: "8%", right: "5%", delay: 1 },
  { src: cloudImg, className: "w-20 md:w-28", top: "25%", left: "3%", delay: 0.3 },
  { src: starImg, className: "w-6 md:w-8", top: "40%", right: "8%", delay: 1.5 },
  { src: cloudImg, className: "w-16 md:w-20", top: "60%", left: "5%", delay: 0.8 },
  { src: starImg, className: "w-10 md:w-14", top: "75%", right: "6%", delay: 0.2 },
  { src: starImg, className: "w-6", top: "90%", left: "15%", delay: 1.2 },
];

const FloatingStickers = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stickers.map((s, i) => (
        <motion.img
          key={i}
          src={s.src}
          className={`absolute sticker-img opacity-40 ${s.className}`}
          style={{ top: s.top, left: s.left, right: s.right } as React.CSSProperties}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
          alt=""
        />
      ))}
      {/* Tiny star particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="star-particle"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}
    </div>
  );
};

export default FloatingStickers;
