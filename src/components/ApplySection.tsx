import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import telescopeImg from "@/assets/telescope-sticker.png";
import applyBadgeImg from "@/assets/apply-badge-sticker.png";

const ApplySection = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector('script[data-fillout-embed="true"]');
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    script.setAttribute("data-fillout-embed", "true");
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <section id="apply" className="relative z-10 py-[15vh] px-6 text-center">
        <motion.h2
          className="font-display text-4xl md:text-6xl text-primary glow-text mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          application
        </motion.h2>

        <motion.p
          className="font-body text-foreground max-w-md mx-auto mb-10 text-base md:text-lg font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          click the telescope to open the full application form.
        </motion.p>

        <motion.button
          type="button"
          className="relative inline-flex flex-col items-center cursor-pointer"
          onClick={() => setShowForm(true)}
          whileHover={{ scale: 1.08, rotate: -1 }}
          whileTap={{ scale: 0.92 }}
        >
          <img src={telescopeImg} alt="Open application form" className="sticker-img w-44 md:w-60" />
          <img src={applyBadgeImg} alt="Apply badge" className="sticker-img w-40 md:w-52 -mt-6" />
        </motion.button>

        <a
          href="https://form.fillout.com/t/u6SC6x2YTAus"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-primary underline underline-offset-4 font-body"
        >
          open direct form link
        </a>
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
