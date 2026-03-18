import { motion } from "framer-motion";
import starImg from "@/assets/star-sticker.png";
import claimSpotImg from "@/assets/claim-spot-sticker.png";
import moonImg from "@/assets/moon-sticker.png";
import telescopeImg from "@/assets/telescope-sticker.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-[15vh] text-center overflow-hidden">
      {/* Floating decorative stickers */}
      <motion.img
        src={telescopeImg}
        alt=""
        className="sticker-img w-20 md:w-32 absolute top-[12%] left-[5%] md:left-[8%]"
        animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.img
        src={moonImg}
        alt=""
        className="sticker-img w-16 md:w-24 absolute top-[10%] right-[5%] md:right-[8%]"
        animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.img
        src={starImg}
        alt=""
        className="sticker-img w-10 md:w-14 absolute bottom-[22%] left-[10%]"
        animate={{ y: [0, -12, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
      />
      <motion.img
        src={starImg}
        alt=""
        className="sticker-img w-8 md:w-12 absolute bottom-[28%] right-[10%]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />

      {/* Main hero content */}
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.35, delay: 0.15 }}
      >
        <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] glow-text text-primary">
          stargazing
        </h1>

        <motion.p
          className="font-body text-xl md:text-3xl text-foreground mt-8 max-w-2xl mx-auto font-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          hack the night away. delhi → mussoorie.
        </motion.p>

        <motion.p
          className="font-display text-2xl md:text-4xl text-secondary mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          april 10th. pure magic.
        </motion.p>

        <motion.p
          className="font-body text-sm md:text-base text-foreground/70 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          a hackathon by{" "}
          <a href="https://zuup.dev" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-secondary transition-colors">
            zuup.dev
          </a>{" "}
          — for everyone
        </motion.p>

        {/* Claim your spot CTA */}
        <motion.a
          href="#apply"
          className="inline-block mt-10"
          whileHover={{ scale: 1.1, rotate: -3 }}
          whileTap={{ scale: 0.92 }}
        >
          <img src={claimSpotImg} alt="Claim your spot" className="sticker-img w-44 md:w-60 mx-auto" />
        </motion.a>

        {/* Price tag */}
        <motion.p
          className="font-display text-lg md:text-xl text-foreground/60 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          just <span className="text-primary glow-text text-2xl md:text-3xl">₹7,200</span> all inclusive
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
