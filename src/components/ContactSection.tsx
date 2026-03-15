import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const contacts = [
  { name: "jagrit", email: "jagrit@zuup.dev", phone: "8851844602" },
  { name: "advithya", email: "advithya@zuup.dev", phone: "9810273085" },
];

const ContactSection = () => {
  return (
    <section className="relative z-10 py-[15vh] px-6">
      <motion.h2
        className="font-display text-4xl md:text-6xl text-center text-primary glow-text mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        contact
      </motion.h2>

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
            <h3 className="font-display text-2xl text-primary font-bold">{c.name}</h3>
            <a href={`mailto:${c.email}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-body text-sm">
              <Mail size={16} /> {c.email}
            </a>
            <a href={`tel:${c.phone}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-body text-sm">
              <Phone size={16} /> {c.phone}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
