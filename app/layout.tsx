// Import global styles
import "./globals.css";

// Import type definitions from Next.js for better type safety
import type { Metadata } from "next";

// Import Google Fonts (Inter)
import { Inter } from "next/font/google";

// Import ThemeProvider for theme switching functionality
import { ThemeProvider } from "@/components/theme-provider";

// Import site configuration containing metadata and other settings
import { siteConfig } from "@/config/site";

// Import reusable layout components
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";

// Import Next.js Script component for injecting structured data
import Script from "next/script";

// Initialize the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

/**
 * Metadata configuration for SEO, OpenGraph, Twitter, and icons.
 * Uses values dynamically from siteConfig.
 */
export const metadata: Metadata = {
    title: {
        default: siteConfig.title, // Default title of the site
        template: `%s | ${siteConfig.title}`, // Page title format
    },
    description: siteConfig.tagline, // Meta description for SEO
    keywords: siteConfig.keywords, // SEO keywords
    authors: [
        {
            name: siteConfig.author, // Site author name
            url: siteConfig.url, // Author's website or profile link
        },
    ],
    creator: siteConfig.author, // Creator field for metadata
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url, // OpenGraph URL for link previews
        title: siteConfig.title,
        description: siteConfig.tagline,
        siteName: siteConfig.title,
        images: [
            {
                url: siteConfig.ogImage, // OpenGraph preview image
                width: 1200,
                height: 630,
                alt: siteConfig.title,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.tagline,
        images: [siteConfig.ogImage], // Twitter card preview image
        creator: siteConfig.twitterHandle, // Twitter handle
    },
    icons: {
        icon: "/favicon.ico", // Default favicon
        shortcut: "/favicon-16x16.png", // Shortcut icon
        apple: "/apple-touch-icon.png", // Apple touch icon
    },
    alternates: {
        canonical: siteConfig.url, // Canonical URL for avoiding duplicate content issues
    },
    manifest: `${siteConfig.url}/site.webmanifest`, // Link to the web manifest file
};

/**
 * RootLayout component - Defines the structure of the application.
 * Wraps the app with essential layout components and metadata.
 */
export default function RootLayout({
    children,
}: {
    children: React.ReactNode; // Specifies that children should be React nodes
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Viewport meta tag for responsive design */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className={inter.className}>
                {/* ThemeProvider enables dark/light mode switching */}
                <ThemeProvider
                    attribute="class"
                    defaultTheme={siteConfig.theme}
                    disableTransitionOnChange
                >
                    {/* Header component (Navigation, Logo, etc.) */}
                    <Header />

                    {/* Main content (Injected via Next.js pages/components) */}
                    {children}

                    {/* Footer component */}
                    <Footer />
                </ThemeProvider>

                {/* JSON-LD Structured Data (Schema.org) for SEO & Page Speed */}
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": siteConfig.title,
                            "operatingSystem": "Web",
                            "applicationCategory": "Technology",
                            "description": siteConfig.tagline,
                            "author": {
                                "@type": "Person",
                                "name": siteConfig.author,
                            },
                            "image": siteConfig.ogImage,
                            "url": siteConfig.url,
                        }),
                    }}
                />
            </body>
        </html>
    );
}
