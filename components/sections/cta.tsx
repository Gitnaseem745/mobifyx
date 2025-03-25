"use client"; // Ensures this component is rendered on the client side

// Import required dependencies
import { motion } from "framer-motion"; // For smooth animations
import { Container } from "@/components/ui/container"; // Wrapper component for layout consistency
import { Button } from "@/components/ui/button"; // Reusable button component
import { siteConfig } from "@/config/site"; // Site-wide configuration file
import Image from "next/image"; // Optimized image handling in Next.js

/**
 * Call-to-Action (CTA) Section
 * - Encourages users to take action (e.g., sign up, learn more).
 * - Uses animations to enhance user engagement.
 * - Dynamically displays title, description, buttons, and image from `siteConfig`.
 */
export function CTA() {
  return (
    <section id="cta" className="py-24 sm:py-32 bg-muted/50">
      <Container>
        {/* Responsive grid layout for text and image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Animated Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} // Start position (hidden & slightly left)
            whileInView={{ opacity: 1, x: 0 }} // Animate to visible when scrolled into view
            viewport={{ once: true }} // Ensures animation plays only once
            className="space-y-6 max-sm:text-center"
          >
            {/* CTA Title */}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {siteConfig.cta.title} {/* Fetching title dynamically from siteConfig */}
            </h2>

            {/* CTA Description */}
            <p className="text-lg text-muted-foreground">
              {siteConfig.cta.description} {/* Fetching description dynamically */}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 max-sm:justify-center">
              {siteConfig.cta.actions.map((action, index) => (
                <Button
                  key={index} 
                  variant={action.variant as "default" | "outline"} // Ensuring valid variants
                >
                  {action.text} {/* Dynamic button text */}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Animated Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} // Start position (hidden & slightly right)
            whileInView={{ opacity: 1, x: 0 }} // Animate to visible when scrolled into view
            viewport={{ once: true }} // Ensures animation plays only once
            className="aspect-video rounded-xl overflow-hidden"
          >
            {/* CTA Image */}
            <Image
              src={siteConfig.cta.image} // Dynamic image source from siteConfig
              alt="CTA" // Accessibility enhancement
              width={500}
              height={150}
              className="w-full h-full object-cover" // Ensures the image covers the container properly
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
