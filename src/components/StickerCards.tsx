import { motion } from "framer-motion";
import busImg from "@/assets/bus-sticker.png";
import mountainImg from "@/assets/mountain-sticker.png";
import campfireImg from "@/assets/campfire-sticker.png";
import delhiImg from "@/assets/delhi-sticker.png";
import laptopImg from "@/assets/laptop-sticker.png";
import starImg from "@/assets/star-sticker.png";

const cardPop = {
  hidden: { scale: 0.8, opacity: 0, y: 40 },
  visible: { scale: 1, opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0.4, duration: 0.8 } },
};

const cards = [
  {
    img: delhiImg,
    imgAlt: "Delhi",
    rotate: "-2deg",
    title: "where?",
    body: "delhi → mussoorie. we pick you up from delhi and head to the mountains. crisp air, glowing screens, starry skies. 🏔️",
  },
  {
    img: busImg,
    imgAlt: "Bus",
    rotate: "3deg",
    title: "when?",
    body: "april 10th, 2025. pack your hoodies and your wildest ideas. the bus leaves early! 🚌",
  },
  {
    img: starImg,
    imgAlt: "Star",
    rotate: "-1deg",
    title: "how much?",
    body: "₹10,000 covers everything — the ride, the stay, the food, and the vibes. no hidden costs. 💫",
  },
  {
    img: campfireImg,
    imgAlt: "Campfire",
    rotate: "2deg",
    title: "not a school trip.",
    body: "this isn't affiliated with any school. it's for everyone — dreamers, builders, creators. all ages, all backgrounds. 🔥",
  },
  {
    img: laptopImg,
    imgAlt: "Laptop",
    rotate: "-3deg",
    title: "for everyone who dreams in code.",
    body: "whether you're a first-timer or a seasoned hacker — there's a place for you under the stars. 💻",
  },
  {
    img: mountainImg,
    imgAlt: "Mountains",
    rotate: "1deg",
    title: "fun. very fun.",
    body: "no teachers, just telescopes and terminal screens. campfires, midnight coding, and mountain sunrises. ⛺",
  },
];

const StickerCards = () => {
  return (
    <section className="relative z-10 px-6 py-[15vh] max-w-6xl mx-auto">
      <motion.h2
        className="font-display text-4xl md:text-6xl text-center text-primary glow-text mb-16 md:mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.4 }}
      >
        the sticker sheet ✨
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="sticker-card flex flex-col items-center text-center cursor-default"
            style={{ rotate: card.rotate }}
            variants={cardPop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.05, rotate: "0deg" }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={card.img} alt={card.imgAlt} className="sticker-img w-20 md:w-28 mb-4 -mt-14" />
            <h3 className="font-display text-2xl md:text-3xl text-primary font-bold mb-2">{card.title}</h3>
            <p className="font-body text-sm md:text-base text-foreground/80 font-medium" style={{ textWrap: "pretty" } as React.CSSProperties}>
              {card.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StickerCards;
