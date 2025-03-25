"use client"; // This component runs only on the client-side

// Import required dependencies
import { useState } from "react"; // React state for managing open/close state of FAQs
import { Container } from "@/components/ui/container"; // Wrapper component for layout consistency
import { siteConfig } from "@/config/site"; // Configuration file storing site-wide data
import { FAQItem } from "../ui/faq-item"; // FAQ item component for individual collapsible questions

/**
 * Frequently Asked Questions (FAQ) Section
 * - Displays a list of questions and answers.
 * - Uses an accordion-style layout where only one FAQ expands at a time.
 * - Dynamically fetches FAQ content from `siteConfig`.
 */
export function FAQ() {
  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container>
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {siteConfig.faq.title} {/* Dynamically fetched from siteConfig */}
          </h2>
        </div>

        {/* FAQ Items List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {siteConfig.faq.items.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question} // FAQ Question
              answer={item.answer} // FAQ Answer
              isOpen={openIndex === index} // Controls whether this FAQ is open
              onToggle={() => setOpenIndex(openIndex === index ? null : index)} // Toggles open state
              index={index} // Unique index for tracking
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
