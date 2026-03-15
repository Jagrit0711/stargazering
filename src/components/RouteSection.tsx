import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import delhiImg from "@/assets/delhi-sticker.png";
import mountainImg from "@/assets/mountain-sticker.png";
import busImg from "@/assets/bus-sticker.png";

const RouteSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const busLeft = useTransform(scrollYProgress, [0.15, 0.85], ["10%", "90%"]);

  return (
    <section ref={sectionRef} className="relative z-10 py-[15vh] px-6">
      <motion.h2
        className="font-display text-4xl md:text-6xl text-center text-primary glow-text mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        the journey
      </motion.h2>

      <div className="relative max-w-5xl mx-auto min-h-[260px] md:min-h-[300px]">
        <div className="absolute left-[12%] right-[12%] top-[45%] border-t-[3px] border-dashed border-primary/55" />

        <motion.img
          src={busImg}
          alt="Bus moving from Delhi to Mussoorie"
          className="sticker-img w-20 md:w-28 absolute top-[45%] -translate-y-1/2 -translate-x-1/2"
          style={{ left: busLeft }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />

        <motion.div
          className="absolute left-[6%] top-[26%] flex flex-col items-center"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.45 }}
        >
          <img src={delhiImg} alt="Delhi landmark sticker" className="sticker-img w-24 md:w-36" />
          <span className="font-display text-2xl md:text-3xl text-primary mt-2">delhi</span>
        </motion.div>

        <motion.div
          className="absolute right-[4%] top-[18%] flex flex-col items-center"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.45, delay: 0.15 }}
        >
          <img src={mountainImg} alt="Mussoorie mountain sticker" className="sticker-img w-28 md:w-40" />
          <span className="font-display text-2xl md:text-3xl text-primary mt-2">mussoorie</span>
        </motion.div>
      </div>
    </section>
  );
};

export default RouteSection;
