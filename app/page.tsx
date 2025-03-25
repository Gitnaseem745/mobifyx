// Import different sections of the homepage
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { Benefits } from "@/components/sections/benefits";
import { Features } from "@/components/sections/features";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

// Import the Theme Toggle button for switching between light and dark modes
import ThemeToggle from "@/components/ui/theme-toggle";

/**
 * Home component - The main landing page of the website.
 * This page is structured with multiple sections that make up the homepage.
 */
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col overflow-hidden">
            {/* Hero Section - The main banner with a call to action */}
            <Hero />

            {/* Highlights Section - Displays key points or statistics */}
            <Highlights />

            {/* Benefits Section - Showcases the main advantages of the product/service */}
            <Benefits />

            {/* Features Section - Explains the core functionalities of the offering */}
            <Features />

            {/* Testimonials Section - Displays customer reviews and feedback */}
            <Testimonials />

            {/* Pricing Section - Provides information about different pricing plans */}
            <Pricing />

            {/* FAQ Section - Answers frequently asked questions */}
            <FAQ />

            {/* Call to Action (CTA) Section - Encourages users to take action */}
            <CTA />

            {/* Theme Toggle Button (Visible only on mobile devices) */}
            <div className="md:hidden fixed bottom-4 right-4 w-8 h-8 bg-foreground text-background flex items-center justify-center rounded-full shadow-lg">
                <ThemeToggle />
            </div>
        </main>
    );
}
