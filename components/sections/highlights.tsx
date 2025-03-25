"use client";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import FeatureCard from "../ui/feature-card";

/**
 * Highlights Section
 * - Displays key features in a **structured, animated layout**.
 * - Uses `FeatureCard` for reusable **feature items**.
 * - Handles **missing or empty data** gracefully.
 */
export function Highlights() {
  const { highlights } = siteConfig;

  // Ensure highlights exist before rendering
  if (!highlights?.features || highlights.features.length === 0) return null;

  return (
    <section id="highlights" className="pb-24 sm:pb-32">
      <Container>
        {/* Section Title & Description */}
        <div className="text-center mb-10">
          {highlights.title && (
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
              {highlights.title}
            </h2>
          )}
          {highlights.description && (
            <p className="text-lg text-muted-foreground">
              {highlights.description}
            </p>
          )}
        </div>

        {/* Features List */}
        <div className="space-y-16 max-sm:space-y-10 sm:pt-20 pt-10">
          {highlights.features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
