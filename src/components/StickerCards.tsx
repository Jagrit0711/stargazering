import { motion } from "framer-motion";
import busImg from "@/assets/bus-sticker.png";
import mountainImg from "@/assets/mountain-sticker.png";
import campfireImg from "@/assets/campfire-sticker.png";
import delhiImg from "@/assets/delhi-sticker.png";
import laptopImg from "@/assets/laptop-sticker.png";
import starImg from "@/assets/star-sticker.png";

const cards = [
  {
    img: delhiImg,
    imgAlt: "Delhi",
    rotate: "-2deg",
    title: "where?",
    body: "delhi to mussoorie. we pick you up from delhi and head to the mountains.",
  },
  {
    img: busImg,
    imgAlt: "Bus",
    rotate: "3deg",
    title: "when?",
    body: "april 10th. pack your hoodies and your wildest ideas. the bus leaves early.",
  },
  {
    img: starImg,
    imgAlt: "Star",
    rotate: "-1deg",
    title: "how much?",
    body: "₹10,000 covers the ride, stay, food, and hackathon experience.",
  },
  {
    img: campfireImg,
    imgAlt: "Campfire",
    rotate: "2deg",
    title: "not a school trip.",
    body: "this hackathon is not affiliated with any school. it is open to everyone.",
  },
  {
    img: laptopImg,
    imgAlt: "Laptop",
    rotate: "-3deg",
    title: "for everyone who dreams in code.",
    body: "first-time hackers and experienced builders are both welcome.",
  },
  {
    img: mountainImg,
    imgAlt: "Mountains",
    rotate: "1deg",
    title: "fun. very fun.",
    body: "no formal classroom setup. just telescopes, terminals, and mountain nights.",
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
        the sticker sheet
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="sticker-card flex flex-col items-center text-center cursor-default"
            style={{ rotate: card.rotate }}
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.05, rotate: "0deg" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
          >
            <img src={card.img} alt={card.imgAlt} className="sticker-img w-20 md:w-28 mb-4 -mt-14" />
            <h3 className="font-display text-2xl md:text-3xl text-primary font-bold mb-2">{card.title}</h3>
            <p className="font-body text-sm md:text-base text-foreground font-medium">{card.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StickerCards;
