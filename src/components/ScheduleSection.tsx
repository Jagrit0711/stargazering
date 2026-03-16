import { motion } from "framer-motion";
import campfireImg from "@/assets/campfire-sticker.png";
import starSticker from "@/assets/star-sticker.png";

const schedule = [
  {
    day: "day 1",
    title: "departure + setup",
    items: [
      "Morning: depart from Delhi",
      "Afternoon: check-in at Mussoorie stay",
      "Evening: opening circle + team formation",
    ],
    rotate: "-2deg",
  },
  {
    day: "day 2",
    title: "build sprint",
    items: [
      "Morning: mentor rounds and workshop",
      "Afternoon: focused build sessions",
      "Night: stargazing coding block",
    ],
    rotate: "2deg",
  },
  {
    day: "day 3",
    title: "finale",
    items: [
      "Morning: final polish and submissions",
      "Afternoon: demos + showcase",
      "Evening: winners, closing, return",
    ],
    rotate: "-1deg",
  },
];

const ScheduleSection = () => {
  return (
    <section className="relative z-10 px-6 py-[15vh] max-w-6xl mx-auto">
      <motion.div
        className="flex flex-col items-center text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={campfireImg} alt="Campfire sticker" className="sticker-img w-24 md:w-32 mb-4" />
        <h2 className="font-display text-4xl md:text-6xl text-primary glow-text">3 day schedule</h2>
        <p className="font-body text-foreground mt-4 max-w-2xl font-semibold">
          theme: <span className="text-primary">signal in the sky</span> — build something that helps people notice hidden patterns.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {schedule.map((entry, index) => (
          <motion.article
            key={entry.day}
            className="sticker-card"
            style={{ rotate: entry.rotate }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.35, delay: index * 0.08 }}
          >
            <img src={starSticker} alt="Star sticker" className="sticker-img w-10 mb-3" />
            <p className="font-display text-3xl text-primary">{entry.day}</p>
            <h3 className="font-display text-2xl text-foreground mt-1 mb-4">{entry.title}</h3>
            <ul className="space-y-2 font-body text-foreground text-sm md:text-base font-semibold">
              {entry.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ScheduleSection;
