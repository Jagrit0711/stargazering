import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import telescopeImg from "@/assets/telescope-sticker.png";

const ApplySection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section id="apply" className="relative z-10 py-[15vh] px-6 text-center">
        <motion.h2
          className="font-display text-4xl md:text-6xl text-primary glow-text mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ready to stargaze? 🔭
        </motion.h2>

        <motion.p
          className="font-body text-foreground/70 max-w-md mx-auto mb-10 text-base md:text-lg font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          tap the telescope to open your application. spots are limited — don't miss the bus! 🚌
        </motion.p>

        <motion.div
          className="relative inline-block cursor-pointer group"
          onClick={() => setShowForm(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={telescopeImg} alt="Apply" className="sticker-img w-40 md:w-56 group-hover:brightness-110 transition-all" />
          <span className="absolute inset-0 flex items-center justify-center font-display text-2xl md:text-3xl text-primary font-bold drop-shadow-lg">
            APPLY
          </span>
        </motion.div>
      </section>

      {/* Fullscreen Fillout form overlay */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-background"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0.3 }}
          >
            <div className="relative w-full h-full">
              <div
                data-fillout-id="u6SC6x2YTAus"
                data-fillout-embed-type="fullscreen"
                style={{ width: "100%", height: "100%" }}
                data-fillout-inherit-parameters
              />
              <script src="https://server.fillout.com/embed/v1/" />
              <motion.button
                onClick={() => setShowForm(false)}
                className="fixed top-5 right-5 bg-card text-foreground rounded-full w-12 h-12 flex items-center justify-center font-display text-xl z-[10000] border-2 border-foreground/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ApplySection;
