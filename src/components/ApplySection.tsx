import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import rocketImg from "@/assets/rocket-sticker.png";
import starImg from "@/assets/star-sticker.png";
import applyBadgeImg from "@/assets/apply-badge-sticker.png";
import waveImg from "@/assets/wave-sticker.png";

const ApplySection = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!showForm) return;

    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    script.setAttribute("data-fillout-embed", "runtime");
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [showForm]);

  return (
    <>
      <section id="apply" className="relative z-10 py-[15vh] px-6 text-center">
        <motion.div
          className="flex flex-col items-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={applyBadgeImg} alt="Application sticker" className="sticker-img w-24 md:w-32 mb-4" />
          <h2 className="font-display text-4xl md:text-6xl text-primary glow-text mb-6">ready to launch?</h2>

          <div className="sticker-card w-full max-w-lg mx-auto flex flex-col items-center gap-6 py-10">
            <img src={waveImg} alt="" className="sticker-img w-16 md:w-20" />
            <p className="font-body text-foreground text-lg md:text-xl font-bold">
              smash the rocket to apply
            </p>
            <p className="font-body text-foreground/60 text-sm">
              takes less than 2 minutes. we'll get back to you fast.
            </p>

            <motion.button
              type="button"
              className="relative inline-flex flex-col items-center cursor-pointer group"
              onClick={() => setShowForm(true)}
              whileHover={{ scale: 1.12, rotate: -5 }}
              whileTap={{ scale: 0.88 }}
            >
              <img src={rocketImg} alt="Launch application" className="sticker-img w-32 md:w-44" />
              <span className="font-display text-3xl md:text-4xl text-primary glow-text mt-4 group-hover:text-secondary transition-colors">
                blast off
              </span>
            </motion.button>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.img src={starImg} alt="" className="sticker-img w-6" animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
            <a
              href="https://form.fillout.com/t/u6SC6x2YTAus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 font-body hover:text-secondary transition-colors"
            >
              open direct form link
            </a>
            <motion.img src={starImg} alt="" className="sticker-img w-6" animate={{ rotate: [0, -360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
          </div>
        </motion.div>
      </section>

      <div className={`${showForm ? "block" : "hidden"} fixed inset-0 z-[9999]`}>
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
          <div
            data-fillout-id="u6SC6x2YTAus"
            data-fillout-embed-type="fullscreen"
            style={{ width: "100%", height: "100%" }}
            data-fillout-inherit-parameters
          ></div>
        </div>

        <motion.button
          type="button"
          onClick={() => setShowForm(false)}
          className="fixed top-5 right-5 bg-card text-foreground rounded-full w-12 h-12 flex items-center justify-center font-display text-xl z-[10000] border-2 border-foreground/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
        >
          X
        </motion.button>
      </div>
    </>
  );
};

export default ApplySection;
