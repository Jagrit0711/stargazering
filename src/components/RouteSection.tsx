import { motion } from "framer-motion";
import delhiImg from "@/assets/delhi-sticker.png";
import mountainImg from "@/assets/mountain-sticker.png";
import busImg from "@/assets/bus-sticker.png";

const RouteSection = () => {
  return (
    <section className="relative z-10 py-[15vh] px-6">
      <motion.h2
        className="font-display text-4xl md:text-6xl text-center text-primary glow-text mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        the journey 🗺️
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
        {/* Delhi */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          <img src={delhiImg} alt="Delhi" className="sticker-img w-28 md:w-36" />
          <span className="font-display text-2xl md:text-3xl text-primary mt-2">delhi</span>
        </motion.div>

        {/* Dashed path + bus */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="hidden md:block w-24 lg:w-40 border-t-[3px] border-dashed border-primary/40" />
          <div className="block md:hidden h-16 border-l-[3px] border-dashed border-primary/40" />
          <motion.img
            src={busImg}
            alt="Bus"
            className="sticker-img w-20 md:w-28"
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <div className="hidden md:block w-24 lg:w-40 border-t-[3px] border-dashed border-primary/40" />
          <div className="block md:hidden h-16 border-l-[3px] border-dashed border-primary/40" />
        </div>

        {/* Mussoorie */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
        >
          <img src={mountainImg} alt="Mussoorie" className="sticker-img w-32 md:w-44" />
          <span className="font-display text-2xl md:text-3xl text-primary mt-2">mussoorie</span>
        </motion.div>
      </div>
    </section>
  );
};

export default RouteSection;
