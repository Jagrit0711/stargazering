import { motion } from "framer-motion";
import telescopeImg from "@/assets/telescope-sticker.png";
import starImg from "@/assets/star-sticker.png";

const pop = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { type: "spring", bounce: 0.5, delay: i * 0.15 },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-[15vh] text-center overflow-hidden">
      <motion.img
        src={starImg}
        alt=""
        className="sticker-img w-16 md:w-24 absolute top-[10%] left-[10%]"
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.img
        src={starImg}
        alt=""
        className="sticker-img w-10 md:w-14 absolute top-[20%] right-[15%]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />

      <motion.img
        src={telescopeImg}
        alt="telescope"
        className="sticker-img w-28 md:w-40 mb-6"
        variants={pop}
        initial="hidden"
        animate="visible"
        custom={0}
      />

      <motion.h1
        className="font-display text-5xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] glow-text text-primary"
        variants={pop}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        stargazing ✦
      </motion.h1>

      <motion.p
        className="font-body text-lg md:text-2xl text-foreground/80 mt-6 max-w-xl font-medium"
        variants={pop}
        initial="hidden"
        animate="visible"
        custom={2}
        style={{ textWrap: "pretty" } as React.CSSProperties}
      >
        hack the night away. delhi to mussoorie. april 10th. ₹10k. pure magic. ✨
      </motion.p>

      <motion.p
        className="font-body text-sm md:text-base text-muted-foreground mt-3"
        variants={pop}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        a hackathon by{" "}
        <a href="https://zuup.dev" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-accent-pink transition-colors">
          zuup.dev
        </a>{" "}
        — for everyone 🌙
      </motion.p>

      <motion.a
        href="#apply"
        className="mt-10 inline-block bg-secondary text-secondary-foreground px-10 md:px-14 py-4 md:py-6 rounded-full font-display text-2xl md:text-3xl font-bold border-b-[6px] border-secondary/50 cursor-pointer"
        whileHover={{ scale: 1.1, rotate: -2 }}
        whileTap={{ scale: 0.9 }}
        variants={pop}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        claim your star ✦
      </motion.a>
    </section>
  );
};

export default HeroSection;
