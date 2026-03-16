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

      {/* Twinkling star particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="star-particle"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 1.5 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 5 }}
        />
      ))}

      {/* Shooting star animation */}
      <motion.div
        className="absolute w-1 h-1 rounded-full"
        style={{ background: "hsl(var(--star-glow))", boxShadow: "0 0 8px 4px hsl(var(--star-glow) / 0.6), -20px 0 30px 2px hsl(var(--star-glow) / 0.3)" }}
        animate={{
          top: ["10%", "40%"],
          left: ["-5%", "105%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 8, ease: "easeIn" }}
      />
      <motion.div
        className="absolute w-1 h-1 rounded-full"
        style={{ background: "hsl(var(--accent-pink))", boxShadow: "0 0 8px 4px hsl(var(--accent-pink) / 0.6), -20px 0 30px 2px hsl(var(--accent-pink) / 0.3)" }}
        animate={{
          top: ["5%", "30%"],
          left: ["20%", "120%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 12, ease: "easeIn", delay: 5 }}
      />
    </div>
  );
};

export default FloatingStickers;
