"use client"; // This component is client-side only

// Import required dependencies
import { motion } from "framer-motion"; // Animation library for smooth UI interactions
import { Container } from "@/components/ui/container"; // Reusable layout container
import { siteConfig } from "@/config/site"; // Centralized site configuration
import DetailsCard from "../ui/details-card"; // Reusable card component for features
import { containerVariants } from "@/animations"; // Animation settings for the feature grid

/**
 * Features Section
 * - Displays a list of key features dynamically from `siteConfig`.
 * - Uses Framer Motion for smooth fade-in animations.
 * - Designed as a grid layout with responsive support.
 */
export function Features() {
    return (
        <section id="features" className="py-24 sm:py-32">
            <Container>
                {/* Section Title & Description */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        {siteConfig.features.title} {/* Dynamic title from siteConfig */}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {siteConfig.features.description} {/* Dynamic description */}
                    </p>
                </div>

                {/* Features Grid with Animation */}
                <motion.div
                    variants={containerVariants} // Animation variants
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }} // Ensures animation triggers only once
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Dynamically Map Features from siteConfig */}
                    {siteConfig.features.items.map((feature, index) => (
                        <DetailsCard
                            key={index} // Unique key for React rendering optimization
                            title={feature.title} // Feature title
                            description={feature.description} // Feature description
                            Icon={feature.icon} // Feature icon
                        />
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
