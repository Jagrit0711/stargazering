import { motion } from "framer-motion";
import campfireImg from "@/assets/campfire-sticker.png";
import starSticker from "@/assets/star-sticker.png";
import scheduleImg from "@/assets/schedule-sticker.png";
import telescopeImg from "@/assets/telescope-sticker.png";

const schedule = [
  {
    day: "day 1",
    title: "departure + setup",
    icon: starSticker,
    items: [
      "morning: depart from Delhi in luxury AC tempo traveller",
      "afternoon: check-in at Mussoorie stay",
      "evening: opening circle + team formation",
    ],
    rotate: "-2deg",
  },
  {
    day: "day 2",
    title: "build sprint",
    icon: telescopeImg,
    items: [
      "morning: mentor rounds and workshop",
      "afternoon: focused build sessions",
      "night: stargazing coding block under the open sky",
    ],
    rotate: "2deg",
  },
  {
    day: "day 3",
    title: "finale",
    icon: campfireImg,
    items: [
      "morning: final polish and submissions",
      "afternoon: demos + showcase + winners",
      "evening: closing circle, pack up, return to Delhi",
    ],
    rotate: "-1deg",
  },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="relative z-10 px-6 py-[15vh] max-w-6xl mx-auto">
      <motion.div
        className="flex flex-col items-center text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={scheduleImg} alt="Schedule sticker" className="sticker-img w-28 md:w-36 mb-4" />
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
            whileHover={{ scale: 1.03, rotate: "0deg" }}
            transition={{ type: "spring", bounce: 0.35, delay: index * 0.08 }}
          >
            <img src={entry.icon} alt="" className="sticker-img w-12 md:w-14 mb-3" />
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
