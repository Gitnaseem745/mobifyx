"use client"; // Ensures this component runs on the client-side

// Import necessary libraries and components
import { motion } from "framer-motion"; // For animations
import { Container } from "@/components/ui/container"; // A wrapper component for consistent layout spacing
import { siteConfig } from "@/config/site"; // Configuration file storing site-wide data
import { containerVariants } from "@/animations"; // Predefined animation variants
import DetailsCard from "../ui/details-card"; // Reusable card component to display each benefit

/**
 * Benefits Section - Highlights the key advantages of the product/service.
 * - Uses motion animations for a smooth appearance effect.
 * - Fetches benefit details dynamically from `siteConfig`.
 * - Displays each benefit in a responsive grid layout.
 */
export function Benefits() {
  return (
    <section id="benefits" className="py-24 sm:py-32 bg-muted/50">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {siteConfig.benefits.title} {/* Dynamic title from siteConfig */}
          </h2>
        </div>

        {/* Animated Grid Layout for Benefits */}
        <motion.div
          variants={containerVariants} // Animation effects from predefined variants
          initial="hidden" // Initially hidden before coming into view
          whileInView="visible" // Animates when scrolled into view
          viewport={{ once: true }} // Ensures animation runs only once
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Loop through benefits and render a card for each */}
          {siteConfig.benefits.benefits.map((benefit, index) => (
            <DetailsCard 
              key={index} 
              title={benefit.title} 
              description={benefit.description} 
              Icon={benefit.icon} 
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
