import { motion } from "framer-motion";
import telescopeImg from "@/assets/telescope-sticker.png";
import starImg from "@/assets/star-sticker.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-[15vh] text-center overflow-hidden">
      <motion.img
        src={starImg}
        alt="floating star sticker"
        className="sticker-img w-16 md:w-24 absolute top-[10%] left-[10%]"
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.img
        src={starImg}
        alt="floating star sticker"
        className="sticker-img w-10 md:w-14 absolute top-[20%] right-[15%]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />

      <motion.img
        src={telescopeImg}
        alt="telescope sticker"
        className="sticker-img w-28 md:w-40 mb-6"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.45, duration: 0.8 }}
      />

      <motion.div
        className="hero-text-panel max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.35, delay: 0.15 }}
      >
        <h1 className="font-display text-5xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] glow-text text-primary">
          stargazing
        </h1>

        <p className="font-body text-lg md:text-2xl text-foreground mt-6 max-w-xl mx-auto font-semibold">
          hack the night away. delhi to mussoorie. april 10th. ₹10k. pure magic.
        </p>

        <p className="font-body text-sm md:text-base text-foreground/80 mt-3">
          a hackathon by{" "}
          <a href="https://zuup.dev" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-accent-pink transition-colors">
            zuup.dev
          </a>{" "}
          — for everyone
        </p>

        <a href="#apply" className="inline-block mt-8 text-primary underline underline-offset-8 text-xl md:text-2xl font-display hover:text-accent-pink transition-colors">
          open application section
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
