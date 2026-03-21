import { motion } from "framer-motion";
import starImg from "@/assets/star-sticker.png";

const expenses = [
  { category: "Tempo traveller round trip", vendor: "Shivaya Tours", amount: "₹42,500" },
  { category: "Insurance (all participants)", vendor: "Bajaj Allianz", amount: "₹900" },
  { category: "Sightseeing (Kempty Falls + George Everest / Surkanda Devi)", vendor: "Local operators", amount: "₹8,100" },
  { category: "Hotel — 2 nights with all 3 meals included", vendor: "Almost Heaven, Mussoorie", amount: "₹86,000" },
  { category: "Buffer (emergencies & unexpected expenses)", vendor: "—", amount: "₹10,000" },
];

const totalExpenses = "₹1,47,500";
const perPerson = "₹8,200";

const PricingSection = () => {
  return (
    <section id="pricing" className="relative z-10 px-6 py-[15vh] max-w-5xl mx-auto">
      <motion.div
        className="flex flex-col items-center text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={starImg} alt="" className="sticker-img w-20 md:w-28 mb-4" />
        <h2 className="font-display text-4xl md:text-6xl text-primary glow-text">transparent pricing</h2>
        <p className="font-body text-foreground mt-4 max-w-2xl font-semibold">
          zero profit. every single rupee goes into making this trip happen. here's exactly where your money goes.
        </p>
      </motion.div>

      <motion.div
        className="sticker-card overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-primary/30">
                <th className="font-display text-primary text-sm md:text-base pb-3 pr-4">#</th>
                <th className="font-display text-primary text-sm md:text-base pb-3 pr-4">expense</th>
                <th className="font-display text-primary text-sm md:text-base pb-3 pr-4">vendor</th>
                <th className="font-display text-primary text-sm md:text-base pb-3 text-right">amount</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((item, i) => (
                <motion.tr
                  key={i}
                  className="border-b border-foreground/10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <td className="font-display text-foreground/50 py-3 pr-4 text-sm">{i + 1}</td>
                  <td className="font-body text-foreground font-medium py-3 pr-4 text-sm md:text-base">{item.category}</td>
                  <td className="font-body text-foreground/60 py-3 pr-4 text-sm">{item.vendor}</td>
                  <td className="font-display text-foreground py-3 text-sm md:text-base text-right font-bold">{item.amount}</td>
                </motion.tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-primary/40">
                <td colSpan={3} className="font-display text-primary text-lg md:text-xl pt-4 pb-2">total expenses</td>
                <td className="font-display text-primary text-lg md:text-xl pt-4 pb-2 text-right glow-text">{totalExpenses}</td>
              </tr>
              <tr>
                <td colSpan={3} className="font-display text-secondary text-xl md:text-2xl pb-3">per person (÷18)</td>
                <td className="font-display text-secondary text-xl md:text-2xl pb-3 text-right glow-text">{perPerson}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </motion.div>

      <motion.p
        className="font-body text-foreground/60 text-xs text-center mt-6 max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        this is a community-driven event. the organizers take absolutely zero profit. if there's money left over, it goes back to making the event even better.
      </motion.p>
    </section>
  );
};

export default PricingSection;
