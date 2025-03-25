"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * Hero Section
 * - Displays the main **title, subtitle, CTA buttons, stats, and hero image**.
 * - Uses `motion` for smooth animations.
 * - Fully **responsive** and **accessible**.
 */
export function Hero() {
  return (
    <Container id="home" className="py-24 sm:py-32">
      <div className="flex flex-col items-center text-center gap-8">

        {/* Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {siteConfig.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {siteConfig.hero.subtitle}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {siteConfig.hero.cta.primary && (
            <Button size="lg">{siteConfig.hero.cta.primary.text}</Button>
          )}
          {siteConfig.hero.cta.secondary && (
            <Button variant="outline" size="lg">
              {siteConfig.hero.cta.secondary.text}
            </Button>
          )}
        </motion.div>

        {/* Stats Section */}
        {siteConfig.hero.stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
          >
            {siteConfig.hero.stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Hero Image */}
        {siteConfig.hero.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden"
          >
            <Image
              src={siteConfig.hero.image}
              alt="Hero"
              width={1280}
              height={720}
              priority // Ensures fast loading
              className="object-cover w-full h-full"
            />
          </motion.div>
        )}
      </div>
    </Container>
  );
}
