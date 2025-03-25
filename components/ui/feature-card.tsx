"use client";

import { featureCardVariants } from "@/animations"; // Import animation variants
import { motion } from "framer-motion"; // Import motion components for animation
import Image from "next/image"; // Import Next.js optimized Image component
import { Button } from "./button"; // Import custom Button component
import { ArrowRight } from "lucide-react"; // Import right arrow icon
import { FeatureCardProps } from "@/types"; // Import type definitions

// FeatureCard Component - Displays a feature with an image, title, description, and CTA
export default function FeatureCard({ feature, index }: FeatureCardProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% of the card is visible
            variants={featureCardVariants} // Apply predefined animation variants
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-6 md:p-8 rounded-2xl max-sm:shadow-lg max-lg:border max-lg:border-border max-lg:hover:bg-muted/20"
        >
            {/* === Left Side: Text Content === */}
            <div className={`space-y-6 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                
                {/* Badge (Label for the feature) */}
                <span className="inline-block bg-foreground text-background text-sm font-medium px-3 py-1 rounded-full">
                    {feature.badge || "New Feature"} {/* Fallback text if badge is missing */}
                </span>

                {/* Title with an optional icon */}
                <div className="flex items-center gap-3">
                    {feature.icon && (
                        <feature.icon className="h-8 w-8 text-primary" /> // Display feature icon if available
                    )}
                    <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
                        {feature.title} {/* Feature title */}
                    </h3>
                </div>

                {/* Feature description */}
                <p className="text-base sm:text-lg text-primary/70 leading-relaxed">
                    {feature.description}
                </p>

                {/* Call-to-Action (CTA) Button */}
                {feature?.cta && (
                    <Button variant="default">
                        {feature.cta.label || "Learn More"} {/* Default label if missing */}
                        <ArrowRight className="ml-1 w-4 h-4" /> {/* Right arrow icon */}
                    </Button>
                )}
            </div>

            {/* === Right Side: Image === */}
            <div className={`relative ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                    <Image
                        src={feature.image} // Feature image
                        alt={feature.title} // Alt text for accessibility
                        width={500}
                        height={100}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>
        </motion.div>
    );
}
