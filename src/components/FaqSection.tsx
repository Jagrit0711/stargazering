import { motion } from "framer-motion";
import faqSticker from "@/assets/faq-sticker.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Who can join this hackathon?",
    answer: "Anyone can join. Students, professionals, and first-time builders are all welcome.",
  },
  {
    question: "Is this affiliated with any school or college?",
    answer: "No. Stargazing by Zuup is independently organized and not affiliated with any school.",
  },
  {
    question: "What does the ₹8,500 fee include?",
    answer: "The fee covers travel from Delhi, accommodation, meals, and full event access.",
  },
  {
    question: "How do teams work?",
    answer: "You can register solo or with friends. Team matching is also available at the event.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, personal essentials, and one project idea you want to explore.",
  },
  {
    question: "Who is legally responsible if something goes wrong?",
    answer: "All participants must sign a declaration waiver form before attending. While organizers take safety seriously and provide mentor supervision, participants acknowledge personal responsibility through the signed waiver.",
  },
  {
    question: "What is the policy on alcohol and misconduct?",
    answer: "We have a strict zero-tolerance policy. Alcohol, substance use, harassment, and any form of malpractice are absolutely not allowed. Anyone found violating this policy will be asked to leave immediately at their own expense.",
  },
  {
    question: "How are students supervised during the trip?",
    answer: "Every group of 3-5 participants is assigned a dedicated mentor who is responsible for their safety and well-being throughout the event. Mentors travel with the group and are available around the clock.",
  },
  {
    question: "Do I need to sign any documents?",
    answer: "Yes, every participant must sign a declaration waiver form before boarding the bus. This is mandatory and covers liability, code of conduct acknowledgement, and emergency contact details.",
  },
];

const FaqSection = () => {
  return (
    <section className="relative z-10 py-[15vh] px-6 max-w-4xl mx-auto">
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
              <AccordionTrigger className="font-body text-left text-base md:text-lg text-foreground hover:no-underline">
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
