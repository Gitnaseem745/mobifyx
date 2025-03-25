"use client"; // ✅ Enables Client Component behavior

import { motion } from "framer-motion"; // ✅ Import motion for animations
import { Button } from "@/components/ui/button"; // ✅ Import custom Button component
import { Check } from "lucide-react"; // ✅ Import check icon for feature list
import { pricingCardVariants } from "@/animations"; // ✅ Import animation variants
import { PricingCardProps } from "@/types"; // ✅ Import type definitions

// 🔹 PricingCard Component - Displays a pricing plan with features and a CTA button
export const PricingCard = ({ plan, index }: PricingCardProps) => {
  return (
    <motion.div
      variants={pricingCardVariants} // ✅ Apply motion animation
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // ✅ Triggers animation only once when in view
      custom={index} // ✅ Pass index for staggered animations
      className={`rounded-xl p-8 shadow-md ${
        plan.popular
          ? "bg-primary text-primary-foreground ring-2 ring-primary" // ✅ Popular plan styling
          : "bg-background border border-border" // ✅ Default plan styling
      }`}
    >
      {/* 🔹 Plan Name, Description & Price */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3> {/* Plan title */}
        <p className="text-muted-foreground">{plan.description}</p> {/* Short description */}
        <div className="mt-4">
          <span className="text-4xl font-bold">${plan.price}</span> {/* Plan price */}
          <span className="text-muted-foreground">/month</span> {/* Billing cycle */}
        </div>
      </div>

      {/* 🔹 Feature List */}
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center gap-2">
            <Check className="h-5 w-5 flex-shrink-0" /> {/* ✅ Check icon for each feature */}
            <span>{feature}</span> {/* Feature text */}
          </li>
        ))}
      </ul>

      {/* 🔹 CTA Button */}
      <Button className="w-full" variant={plan.popular ? "outline" : "default"}>
        {plan.cta.text} {/* Button text */}
      </Button>
    </motion.div>
  );
};
