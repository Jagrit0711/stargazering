import { motion } from "framer-motion";
import safetyImg from "@/assets/safety-sticker.png";
import hotelImg from "@/assets/hotel-sticker.png";
import luxuryBusImg from "@/assets/luxury-bus-sticker.png";
import mealsImg from "@/assets/meals-sticker.png";
import starImg from "@/assets/star-sticker.png";

const safetyPoints = [
  {
    img: safetyImg,
    title: "dedicated mentors",
    desc: "every group of 3-5 participants gets a dedicated mentor assigned to them. mentors travel with the group, supervise all activities, and are available 24/7 throughout the trip.",
    rotate: "-2deg",
  },
  {
    img: luxuryBusImg,
    title: "luxury tempo traveller",
    desc: "travel in a fully air-conditioned luxury tempo traveller with comfortable push-back seats, charging ports, and ample luggage space. safe and comfortable journey guaranteed.",
    rotate: "1deg",
  },
  {
    img: hotelImg,
    title: "stay details",
    desc: "stay at Almost Heaven (almostheaven.co.in) near mall road market in mussoorie. clean, safe, and comfortable accommodation with all amenities.",
    rotate: "-1deg",
  },
  {
    img: mealsImg,
    title: "meals included",
    desc: "all meals are included in the fee except day 1 breakfast — please carry your own for the morning departure. after that, every meal is on us.",
    rotate: "2deg",
  },
];

const legalPoints = [
  "every participant must sign a mandatory declaration waiver form before boarding the bus. no signed waiver = no boarding. no exceptions.",
  "please print the waiver form, fill it out, and submit it while boarding the bus.",
  "participants are responsible for their own actions. any damage caused to property (hotel, bus, venues) is the individual's personal responsibility.",
  "we enforce a strict zero-tolerance policy on alcohol, substance use, harassment, and any form of malpractice. violators will be asked to leave immediately at their own expense.",
  "the child/participant is legally responsible for their own conduct throughout the event.",
  "mentors are assigned at a 1:3-5 ratio for continuous supervision but are not legal guardians.",
  "emergency contacts and medical information are collected during registration for immediate use if needed.",
  "we are taking comprehensive travel insurance for every participant through bajaj allianz insurance for the entire duration of the trip.",
];

const SafetySection = () => {
  return (
    <section id="safety" className="relative z-10 px-6 py-[15vh] max-w-6xl mx-auto">
      <motion.div
        className="flex flex-col items-center text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={safetyImg} alt="Safety shield sticker" className="sticker-img w-20 md:w-28 mb-4" />
        <h2 className="font-display text-4xl md:text-6xl text-primary glow-text">safety + logistics</h2>
        <p className="font-body text-foreground mt-4 max-w-2xl font-semibold">
          your safety is our top priority. here's how we're making sure everyone is taken care of.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {safetyPoints.map((point, index) => (
          <motion.article
            key={point.title}
            className="sticker-card flex flex-col items-center text-center"
            style={{ rotate: point.rotate }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, rotate: "0deg" }}
            transition={{ type: "spring", bounce: 0.35, delay: index * 0.06 }}
          >
            <img src={point.img} alt={point.title} className="sticker-img w-16 md:w-24 mb-3 -mt-12" />
            <h3 className="font-display text-2xl text-primary font-bold mb-2">{point.title}</h3>
            <p className="font-body text-sm md:text-base text-foreground font-medium">{point.desc}</p>
          </motion.article>
        ))}
      </div>

      {/* Legal section */}
      <motion.div
        className="sticker-card max-w-3xl mx-auto mb-10"
        style={{ rotate: "0deg" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <img src={starImg} alt="" className="sticker-img w-8" />
          <h3 className="font-display text-3xl md:text-4xl text-primary text-center">legal + declaration</h3>
          <img src={starImg} alt="" className="sticker-img w-8" />
        </div>
        <ul className="space-y-4">
          {legalPoints.map((point, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 font-body text-sm md:text-base text-foreground font-medium"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <img src={starImg} alt="" className="sticker-img w-4 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Download section - waiver only */}
      <motion.div
        className="sticker-card max-w-3xl mx-auto"
        style={{ rotate: "1deg" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ rotate: "0deg" }}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <img src={starImg} alt="" className="sticker-img w-8" />
          <h3 className="font-display text-3xl md:text-4xl text-primary text-center">mandatory waiver</h3>
          <img src={starImg} alt="" className="sticker-img w-8" />
        </div>
        <a
          href="/stargazing-waiver.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-secondary/30 bg-secondary/5 hover:bg-secondary/10 transition-colors group max-w-sm mx-auto"
        >
          <img src={starImg} alt="" className="sticker-img w-12 group-hover:scale-110 transition-transform" />
          <span className="font-display text-2xl text-secondary">download waiver</span>
          <span className="font-body text-sm text-foreground/70 text-center">print this out, fill it, and submit while boarding the bus. mandatory!</span>
        </a>
        <p className="font-body text-xs text-foreground/50 text-center mt-4">
          no one boards the bus without a signed waiver. please print and bring it with you.
        </p>
      </motion.div>
    </section>
  );
};

export default SafetySection;
