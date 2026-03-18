import { motion } from "framer-motion";
import exploreImg from "@/assets/explore-sticker.png";
import waterfallImg from "@/assets/waterfall-sticker.png";
import trekImg from "@/assets/trek-sticker.png";
import campfireImg from "@/assets/campfire-sticker.png";
import starImg from "@/assets/star-sticker.png";
import mussoorie from "@/assets/mussoorie-sticker.png";

const places = [
  {
    img: waterfallImg,
    title: "kempty falls",
    desc: "a stunning waterfall just outside mussoorie. we'll spend time here soaking it all in.",
    rotate: "-2deg",
  },
  {
    img: trekImg,
    title: "george everest + surkanda devi",
    desc: "a scenic hike up the tiled, barricaded trail to george everest viewpoint (the safe half). if roads allow, we visit surkanda devi temple in dhanaulti too.",
    rotate: "2deg",
  },
  {
    img: campfireImg,
    title: "mall road + cafes",
    desc: "explore the iconic mall road market, grab chai at local cafes, and soak up the mountain town vibes.",
    rotate: "-1deg",
  },
];

const ExploreSection = () => {
  return (
    <section id="explore" className="relative z-10 px-6 py-[15vh] max-w-6xl mx-auto">
      <motion.div
        className="flex flex-col items-center text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={exploreImg} alt="Explore compass sticker" className="sticker-img w-28 md:w-36 mb-4" />
        <h2 className="font-display text-4xl md:text-6xl text-primary glow-text">beyond the hackathon</h2>
        <p className="font-body text-foreground mt-4 max-w-2xl font-semibold">
          it's not just coding. we explore mussoorie's best spots together.
        </p>
        <img src={mussoorie} alt="Mussoorie" className="sticker-img w-32 md:w-48 mt-6" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {places.map((place, index) => (
          <motion.article
            key={place.title}
            className="sticker-card flex flex-col items-center text-center"
            style={{ rotate: place.rotate }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, rotate: "0deg" }}
            transition={{ type: "spring", bounce: 0.35, delay: index * 0.08 }}
          >
            <img src={place.img} alt={place.title} className="sticker-img w-20 md:w-28 mb-4 -mt-14" />
            <h3 className="font-display text-2xl md:text-3xl text-primary font-bold mb-2">{place.title}</h3>
            <p className="font-body text-sm md:text-base text-foreground font-medium">{place.desc}</p>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="flex items-center justify-center gap-3 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <img src={starImg} alt="" className="sticker-img w-5" />
        <p className="font-body text-foreground/70 text-sm text-center max-w-lg">
          outdoor excursions depend on weather and road conditions. the full george everest trek is not attempted as it's dangerous — we do the safe, barricaded half which is more of a scenic hike.
        </p>
        <img src={starImg} alt="" className="sticker-img w-5" />
      </motion.div>
    </section>
  );
};

export default ExploreSection;
