import { motion } from "framer-motion";
import astronautImg from "@/assets/astronaut-sticker.png";
import starImg from "@/assets/star-sticker.png";

const contacts = [
  { name: "jagrit", email: "jagrit@zuup.dev", phone: "8851844602", role: "organizer" },
  { name: "advithya", email: "advithya@zuup.dev", phone: "9810273085", role: "organizer" },
  { name: "vansh gupta", email: "", phone: "9654191089", role: "student incharge" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 py-[15vh] px-6">
      <motion.div
        className="flex flex-col items-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={astronautImg} alt="Astronaut sticker" className="sticker-img w-24 md:w-32 mb-4" />
        <h2 className="font-display text-4xl md:text-6xl text-center text-primary glow-text">contact</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
        {contacts.map((c, i) => (
          <motion.div
            key={c.name}
            className="sticker-card flex flex-col items-center gap-3 w-full md:w-auto md:min-w-[240px]"
            style={{ rotate: i === 0 ? "-2deg" : "2deg" }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: "0deg" }}
            transition={{ type: "spring", bounce: 0.4, delay: i * 0.1 }}
          >
            <img src={starImg} alt="" className="sticker-img w-8 -mt-8" />
            <p className="font-body text-xs text-foreground/50 uppercase tracking-wider">{c.role}</p>
            <h3 className="font-display text-2xl text-primary font-bold">{c.name}</h3>
            {c.email && (
              <a href={`mailto:${c.email}`} className="text-foreground hover:text-primary transition-colors font-body text-sm">
                {c.email}
              </a>
            )}
            <a href={`tel:${c.phone}`} className="text-foreground hover:text-primary transition-colors font-body text-sm">
              {c.phone}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
