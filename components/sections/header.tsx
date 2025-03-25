import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import ThemeToggle from "../ui/theme-toggle";
import Link from "next/link";
import Image from "next/image";
import { Command } from "lucide-react";

/**
 * Header Component
 * - Displays the site logo, navigation menu, theme toggle, and CTA button.
 * - Stays **sticky** at the top with a **blur effect** for smooth UI.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {siteConfig.header.logo.image ? (
              <Image
                src={siteConfig.header.logo.image}
                alt={siteConfig.name}
                width={32}
                height={32}
                priority // Faster loading
              />
            ) : (
              <Command className="h-6 w-6" />
            )}
            <span className="text-lg font-bold">{siteConfig.header.logo.text}</span>
          </Link>

          {/* Navigation Menu (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-6">
            {siteConfig.header.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right-Side Icons (Theme Toggle + CTA Button) */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle (Hidden on Mobile) */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* CTA Button */}
            {siteConfig.header.cta?.primary && (
              <Button size="sm">
                {siteConfig.header.cta.primary.text}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
