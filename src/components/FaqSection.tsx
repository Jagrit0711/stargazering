import { motion } from "framer-motion";
import faqSticker from "@/assets/faq-sticker.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Who can join this hackathon?",
    answer: "Anyone can join. Students, professionals, and first-time builders are all welcome. This is not affiliated with any school or college.",
  },
  {
    question: "What does the 8.5k INR fee include?",
    answer: "The fee covers luxury AC tempo traveller from Delhi, accommodation in Mussoorie, all meals (except Day 1 breakfast — carry your own), and full event access including hackathon, excursions, and activities.",
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
    answer: "Safety is our top priority. Every 3-5 participants get a dedicated mentor who travels with them and supervises 24/7. All participants must sign a mandatory declaration waiver form. The participant is legally responsible for their own actions — any damage to property is their personal responsibility. We collect emergency contacts and medical info during registration.",
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
    answer: "Yes. Every participant must sign a declaration waiver form before boarding the bus. This is mandatory and covers liability, code of conduct acknowledgement, and emergency contact details. No signature = no boarding.",
  },
  {
    question: "What about travel and accommodation?",
    answer: "Travel is in a luxury fully air-conditioned tempo traveller with push-back seats. The hotel hasn't been finalized yet but will be near Mall Road market. We're ensuring clean, safe, and comfortable accommodation. Details will be shared once confirmed.",
  },
  {
    question: "What places will we visit besides the hackathon?",
    answer: "We'll visit Kempty Falls, do the safe half of the George Everest trek (tiled path with barricades — it's more of a scenic hike), explore Mall Road market and local cafes. If road conditions allow, we'll also visit Surkanda Devi Temple in Dhanaulti.",
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
