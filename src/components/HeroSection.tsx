import { motion } from "framer-motion";
import starImg from "@/assets/star-sticker.png";
import claimSpotImg from "@/assets/claim-spot-sticker.png";
import moonImg from "@/assets/moon-sticker.png";

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
        src={moonImg}
        alt=""
        className="sticker-img w-14 md:w-20 absolute top-[12%] right-[8%]"
        animate={{ y: [0, -6, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      />
      <motion.img
        src={starImg}
        alt=""
        className="sticker-img w-8 md:w-12 absolute bottom-[20%] left-[15%]"
        animate={{ y: [0, -12, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
      />
      <motion.img
        src={starImg}
        alt=""
        className="sticker-img w-6 md:w-10 absolute bottom-[25%] right-[12%]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />

      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.35, delay: 0.15 }}
      >
        <h1 className="font-display text-5xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] glow-text text-primary">
          stargazing
        </h1>

        <p className="font-body text-lg md:text-2xl text-foreground mt-6 max-w-xl mx-auto font-semibold">
          hack the night away. delhi to mussoorie. april 10th. pure magic.
        </p>

        <p className="font-body text-sm md:text-base text-foreground/80 mt-3">
          a hackathon by{" "}
          <a href="https://zuup.dev" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-accent-pink transition-colors">
            zuup.dev
          </a>{" "}
          — for everyone
        </p>

        <motion.a
          href="#apply"
          className="inline-block mt-8"
          whileHover={{ scale: 1.1, rotate: -3 }}
          whileTap={{ scale: 0.92 }}
        >
          <img src={claimSpotImg} alt="Claim your spot" className="sticker-img w-40 md:w-56 mx-auto" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
