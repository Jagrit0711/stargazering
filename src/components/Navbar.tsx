import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import starImg from "@/assets/star-sticker.png";
import rocketImg from "@/assets/rocket-sticker.png";

const navLinks = [
  { label: "journey", href: "#journey" },
  { label: "info", href: "#info" },
  { label: "schedule", href: "#schedule" },
  { label: "explore", href: "#explore" },
  { label: "payment", href: "#payment" },
  { label: "safety", href: "#safety" },
  { label: "faq", href: "#faq" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", bounce: 0.3 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <motion.a
          href="#"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={starImg} alt="" className="sticker-img w-7" />
          <span className="font-display text-2xl text-primary glow-text">stargazing</span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-display text-lg text-foreground/80 hover:text-primary px-3 py-1.5 rounded-full transition-colors"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.button>
          ))}
          <motion.button
            onClick={() => handleClick("#apply")}
            whileHover={{ scale: 1.12, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="ml-2"
          >
            <img src={rocketImg} alt="Apply now" className="sticker-img w-12 h-12 object-contain" />
          </motion.button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <motion.button
            onClick={() => handleClick("#apply")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={rocketImg} alt="Apply now" className="sticker-img w-10 h-10 object-contain" />
          </motion.button>
          <motion.button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span className="block w-6 h-0.5 bg-primary rounded-full" animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} />
            <motion.span className="block w-6 h-0.5 bg-primary rounded-full" animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} />
            <motion.span className="block w-6 h-0.5 bg-primary rounded-full" animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/40 px-4 pb-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="block w-full text-left font-display text-xl text-foreground/80 hover:text-primary py-2 px-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.04 }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
