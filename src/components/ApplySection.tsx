import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import applyImg from "@/assets/apply-sticker.png";
import starImg from "@/assets/star-sticker.png";
import applyBadgeImg from "@/assets/apply-badge-sticker.png";

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
          className="flex flex-col items-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <img src={applyBadgeImg} alt="Application sticker" className="sticker-img w-20 md:w-28 mb-4" />
          <h2 className="font-display text-4xl md:text-6xl text-primary glow-text">application</h2>
        </motion.div>

        <motion.p
          className="font-body text-foreground max-w-md mx-auto mb-10 text-base md:text-lg font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ready to launch? smash the rocket to apply.
        </motion.p>

        <motion.button
          type="button"
          className="relative inline-flex flex-col items-center cursor-pointer group"
          onClick={() => setShowForm(true)}
          whileHover={{ scale: 1.08, rotate: -2 }}
          whileTap={{ scale: 0.92 }}
        >
          <img src={applyImg} alt="Launch application" className="sticker-img w-36 md:w-48" />
          <span className="font-display text-2xl md:text-3xl text-primary glow-text mt-4 group-hover:text-accent-pink transition-colors">
            blast off
          </span>
        </motion.button>

        <div className="flex justify-center gap-4 mt-6">
          <motion.img src={starImg} alt="" className="sticker-img w-6" animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
          <a
            href="https://form.fillout.com/t/u6SC6x2YTAus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 font-body hover:text-accent-pink transition-colors"
          >
            open direct form link
          </a>
          <motion.img src={starImg} alt="" className="sticker-img w-6" animate={{ rotate: [0, -360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
        </div>
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
