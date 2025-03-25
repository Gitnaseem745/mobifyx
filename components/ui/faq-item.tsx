import { ChevronDown } from "lucide-react"; // Import dropdown icon from Lucide
import { motion, AnimatePresence } from "framer-motion"; // Import animation utilities from Framer Motion
import { FAQItemProps } from "@/types"; // Import the FAQ item type definition
import { faqAnswerVariants, faqItemVariants } from "@/animations"; // Import animation variants

// FAQItem Component - Represents an individual collapsible FAQ entry
export const FAQItem = ({ question, answer, isOpen, onToggle, index }: FAQItemProps) => {
  return (
    <motion.div
      variants={faqItemVariants} // Apply animation variants to the entire FAQ item
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Ensures animation triggers only once
      custom={index} // Custom animation control for staggered effects
      className="border rounded-lg" // Styling for the FAQ container
    >
      {/* Toggle Button - Handles opening and closing of the FAQ item */}
      <button
        className="w-full flex items-center justify-between p-6 text-left"
        onClick={onToggle} // Calls parent function to toggle open/close state
      >
        <span className="text-lg font-semibold">{question}</span> {/* FAQ question text */}
        {/* Chevron icon rotates when the FAQ is open */}
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* FAQ Answer Section - Appears when `isOpen` is true */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={faqAnswerVariants} // Apply animation variants to answer section
            initial="hidden"
            animate="visible"
            exit="exit" // Smooth exit animation when closed
            transition={{ duration: 0.2 }} // Controls animation speed
            className="overflow-hidden"
          >
            <p className="p-6 pt-0 text-muted-foreground">{answer}</p> {/* FAQ answer text */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
