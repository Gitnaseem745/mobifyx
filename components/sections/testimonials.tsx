import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { InfiniteSlider } from "../ui/infinite-slider";

/**
 * Testimonials Section
 * - Displays customer testimonials using an **infinite slider effect**.
 * - Ensures **testimonials exist** before rendering.
 * - Uses **alternating scroll directions** for a dynamic effect.
 */
export function Testimonials() {
  const { testimonials } = siteConfig;

  // Ensure testimonials exist before rendering
  if (!testimonials?.items || testimonials.items.length === 0) return null;

  return (
    <section id="testi" className="py-24 sm:py-32 bg-muted/50">
      <Container>
        {/* Section Title */}
        {testimonials.title && (
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {testimonials.title}
            </h2>
          </div>
        )}

        {/* Infinite Sliders with Alternating Directions */}
        {[...Array(2)].map((_, index) => (
          <InfiniteSlider
            key={index}
            items={testimonials.items}
            speed="fast"
            direction={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </Container>
    </section>
  );
}
