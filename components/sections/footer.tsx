"use client"; // Client-side component

// Import dependencies
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { Command } from "lucide-react";
import Image from "next/image";

/**
 * Footer Component
 * - Displays logo, social media links, navigation links, and copyright info.
 * - Uses dynamic data from `siteConfig.footer`.
 * - Ensures accessibility & responsiveness.
 */
export function Footer() {
    return (
        <footer className="border-t py-12 md:py-16">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Logo & Social Links */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            {siteConfig.header.logo.image ? (
                                <Image
                                    src={siteConfig.header.logo.image}
                                    alt={siteConfig.name}
                                    width={32}
                                    height={32}
                                    priority // Ensures fast loading
                                />
                            ) : (
                                <Command className="h-6 w-6" />
                            )}
                            <span className="text-lg font-bold">
                                {siteConfig.header.logo.text}
                            </span>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex gap-4">
                            {siteConfig.footer.social.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    aria-label={item.label || "Social Link"} // Accessibility
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <item.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    {siteConfig.footer.links.map((group, index) => (
                        <div key={index}>
                            <h3 className="font-semibold mb-4">{group.title}</h3>
                            <ul className="space-y-3">
                                {group.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <a
                                            href={item.href}
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright Section */}
                <div className="w-full sm:mt-5 mt-10 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
