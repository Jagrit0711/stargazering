import { motion } from "framer-motion";
import faqSticker from "@/assets/faq-sticker.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Who can join this hackathon?",
    answer: "Anyone can join. Students, professionals, and first-time builders are all welcome. This is not affiliated with any school or college.",
  },
  {
    question: "What does the ₹8,200 fee include?",
    answer: "The fee of ₹8,200 covers luxury AC tempo traveller from Delhi, accommodation in Mussoorie (Almost Heaven hotel near Mall Road), all meals (except Day 1 breakfast — carry your own), and full event access including hackathon, excursions, and activities.",
  },
  {
    question: "Is any profit being made from this event?",
    answer: "Absolutely not. Zero profit is taken. Every rupee goes directly into travel, stay, food, and the hackathon experience. Full transparency.",
  },
  {
    question: "How do teams work?",
    answer: "You can register solo or with friends. Team matching is also available at the event during the opening circle.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, personal essentials, warm clothing (it's the mountains!), and Day 1 breakfast. Oh, and your wildest project ideas.",
  },
  {
    question: "Is it safe? Who is legally responsible?",
    answer: "Safety is our top priority. Every 3-5 participants get a dedicated mentor who travels with them and supervises 24/7. All participants must print and sign a mandatory declaration waiver form and submit it while boarding. The participant is legally responsible for their own actions — any damage to property is their personal responsibility. We also take comprehensive travel insurance for every participant through Bajaj Allianz Insurance.",
  },
  {
    question: "What is the policy on alcohol and misconduct?",
    answer: "We have a strict zero-tolerance policy. Alcohol, substance use, harassment, and any form of malpractice are absolutely not allowed. Anyone found violating this policy will be asked to leave immediately at their own expense. No exceptions.",
  },
  {
    question: "How are students supervised during the trip?",
    answer: "Every group of 3-5 participants is assigned a dedicated mentor who is responsible for their safety and well-being throughout the event. Mentors travel with the group, stay at the same hotel, and are available around the clock.",
  },
  {
    question: "Do I need to sign any documents?",
    answer: "Yes. Every participant must print, fill out, and sign the declaration waiver form and submit it while boarding the bus. No signed waiver = no boarding. No exceptions. You can download the waiver from the Safety section on this page.",
  },
  {
    question: "What about travel and accommodation?",
    answer: "Travel is in a luxury fully air-conditioned tempo traveller with push-back seats. The hotel is Almost Heaven (almostheaven.co.in) located near Mall Road market in Mussoorie — clean, safe, and comfortable accommodation.",
  },
  {
    question: "What places will we visit besides the hackathon?",
    answer: "We'll visit Kempty Falls, and either do the safe half of the George Everest trek (tiled path with barricades — it's more of a scenic hike) OR visit Surkanda Devi Temple in Dhanaulti — it's one of the two depending on road and weather conditions. We'll also explore Mall Road market and local cafes.",
  },
  {
    question: "Who organized this?",
    answer: "Stargazing is organized by Zuup (zuup.dev). Our travel partner is The Shivayas (theshivayas.com). It's an independent event, not affiliated with any institution.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="relative z-10 py-[15vh] px-6 max-w-4xl mx-auto">
      <motion.div
        className="flex flex-col items-center text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={faqSticker} alt="FAQ sticker" className="sticker-img w-20 md:w-24 mb-4" />
        <h2 className="font-display text-4xl md:text-6xl text-primary glow-text">faq</h2>
      </motion.div>

      <div className="sticker-card">
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-primary/25">
              <AccordionTrigger className="font-body text-left text-base md:text-lg text-foreground hover:no-underline font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-foreground/90 text-sm md:text-base">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
