"use client";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { PricingCard } from "../ui/pricing-card";

/**
 * Pricing Section
 * - Displays available **pricing plans** in a structured grid.
 * - Uses `PricingCard` for reusable plan components.
 * - Handles **missing or empty data** gracefully.
 */
export function Pricing() {
  const { pricing } = siteConfig;

  // Ensure pricing plans exist before rendering
  if (!pricing?.plans || pricing.plans.length === 0) return null;

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <Container>
        {/* Section Title & Description */}
        <div className="text-center mb-16">
          {pricing.title && (
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {pricing.title}
            </h2>
          )}
          {pricing.description && (
            <p className="text-lg text-muted-foreground">
              {pricing.description}
            </p>
          )}
        </div>

        {/* Pricing Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
