import { Icons } from "@/components/icons";
/**
 * 🔥 Site Configuration (SEO + Theme + Section + Page)
 * 
 * 🎯 SEO is pre-configured. Just update `siteConfig` values per project.
 */

export const siteConfig = {
    // Site metadata
    name: "MobifyX", // Site name
    title: "MobifyX", // Site name with tagline
    tagline: "Your amazing mobile app description that captures attention and drives downloads.", // Short description
    url: "https://your-domain.com", // Domain of your site
    ogImage: "https://your-domain.com/og.png", // Open Graph Image URL
    author: "Your Name", // Placeholder for customization
    twitterHandle: "@yourhandle", // Generic or empty
    keywords: ["keyword-1", "keyword-2", "keyword-3",], // Placeholder for customization
    theme: "dark", // Active Theme

    // Header
    header: {
        logo: {
            text: "MobifyX",
            image: "",
        },
        nav: [
            { title: "Home", href: "#home" },
            { title: "Highlights", href: "#highlights" },
            { title: "Benefits", href: "#benefits" },
            { title: "Testimonials", href: "#testi" },
            { title: "Pricing", href: "#pricing" },
            { title: "FAQ", href: "#faq" },
        ],
        cta: {
            primary: {
                text: "Download Now",
                href: "#",
            },
        },
    },

    // Hero Section
    hero: {
        title: "Transform Your Mobile Experience",
        subtitle: "Experience the next generation of mobile applications with our innovative solution that helps you achieve more.",
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1200",
        cta: {
            primary: {
                text: "Get Started",
                href: "#",
            },
            secondary: {
                text: "Learn More",
                href: "#features",
            },
        },
        stats: [
            { value: "10M+", label: "Downloads" },
            { value: "4.9", label: "AppStore Rating" },
            { value: "99.9%", label: "Uptime" },
        ],
    },

    // Highlights Section
    highlights: {
        title: "Key Features",
        description: "Discover the features that make our app stand out from the rest.",
        features: [
            {
                badge: "Architecture",
                title: "Lightning Fast",
                description: "Experience blazing fast performance with our optimized architecture.",
                icon: Icons.zap,
                image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?w=800",
                cta: {
                    label: "Learn More",
                    href: "#"
                }
            },
            {
                badge: "Security",
                title: "Secure by Design",
                description: "Bank-grade security ensuring your data is always protected.",
                icon: Icons.shield,
                image: "https://images.unsplash.com/photo-1618388810903-840bb0d15ea5?w=800",
                cta: {
                    label: "Learn More",
                    href: "#"
                }
            },
            {
                badge: "Technology",
                title: "Smart Automation",
                description: "Automate repetitive tasks and focus on what matters.",
                icon: Icons.robot,
                image: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=800",
                cta: {
                    label: "Learn More",
                    href: "#"
                }
            },
        ],
    },

    // Benefits Section
    benefits: {
        title: "Why Choose Us",
        benefits: [
            {
                title: "Easy to Use",
                description: "Intuitive interface designed for everyone.",
                icon: Icons.mouse,
            },
            {
                title: "24/7 Support",
                description: "Get help whenever you need it.",
                icon: Icons.headphones,
            },
            {
                title: "Regular Updates",
                description: "Constant improvements and new features.",
                icon: Icons.refresh,
            },
            {
                title: "Data Privacy",
                description: "Your data is always protected.",
                icon: Icons.lock,
            },
        ],
    },

    // Features Section
    features: {
        title: "Powerful Features",
        description: "Everything you need to succeed.",
        items: [
            {
                title: "Cross-Platform",
                description: "Use on any device seamlessly.",
                icon: Icons.devices,
            },
            {
                title: "Offline Mode",
                description: "Work without internet connection.",
                icon: Icons.wifi,
            },
            {
                title: "Custom Themes",
                description: "Personalize your experience.",
                icon: Icons.palette,
            },
        ],
    },

    // Testimonials Section
    testimonials: {
        title: "What Our Users Say",
        items: [
            {
                quote: "This app has completely transformed how I work. Couldn't imagine going back!",
                author: "Sarah Johnson",
                role: "Product Designer",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
            },
            {
                quote: "The best investment I've made for my productivity this year.",
                author: "Michael Chen",
                role: "Entrepreneur",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
            },
            {
                quote: "Intuitive, powerful, and beautiful. Everything you want in an app.",
                author: "Emily Davis",
                role: "Marketing Director",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
            },
        ],
    },

    // Pricing Section
    pricing: {
        title: "Simple, transparent pricing",
        description: "Choose the plan that's right for you",
        plans: [
            {
                name: "Free",
                price: "0",
                description: "Perfect for trying out our app",
                features: [
                    "Basic features",
                    "Up to 5 projects",
                    "1GB storage",
                    "Community support",
                ],
                cta: {
                    text: "Get Started",
                    href: "#",
                },
            },
            {
                name: "Pro",
                price: "9.99",
                description: "For power users and small teams",
                features: [
                    "All Free features",
                    "Unlimited projects",
                    "10GB storage",
                    "Priority support",
                    "Advanced analytics",
                ],
                cta: {
                    text: "Start Free Trial",
                    href: "#",
                },
                popular: true,
            },
            {
                name: "Enterprise",
                price: "49.99",
                description: "For large organizations",
                features: [
                    "All Pro features",
                    "Unlimited storage",
                    "24/7 phone support",
                    "Custom integrations",
                    "SLA guarantee",
                ],
                cta: {
                    text: "Contact Sales",
                    href: "#",
                },
            },
        ],
    },

    // FAQ Section
    faq: {
        title: "Frequently Asked Questions",
        items: [
            {
                question: "How do I get started?",
                answer: "Simply download the app from your preferred app store and follow the quick setup guide. You'll be up and running in minutes!",
            },
            {
                question: "Is my data secure?",
                answer: "Yes! We use bank-level encryption and follow industry best practices to ensure your data is always protected.",
            },
            {
                question: "Can I use it offline?",
                answer: "Yes, our app works offline and automatically syncs when you're back online.",
            },
            {
                question: "What about updates?",
                answer: "We regularly release updates with new features and improvements. You'll always have access to the latest version.",
            },
        ],
    },

    // CTA Section
    cta: {
        title: "Ready to get started?",
        description: "Join thousands of satisfied users and transform your mobile experience today.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
        actions: [
            {
                text: "Download Now",
                href: "#",
                variant: "default",
            },
            {
                text: "Contact Sales",
                href: "#",
                variant: "outline",
            },
        ],
    },

    // Footer
    footer: {
        social: [
            { icon: Icons.twitter, href: "#" },
            { icon: Icons.facebook, href: "#" },
            { icon: Icons.instagram, href: "#" },
            { icon: Icons.linkedin, href: "#" },
        ],
        links: [
            {
                title: "Product",
                items: [
                    { text: "Features", href: "#" },
                    { text: "Pricing", href: "#" },
                    { text: "Download", href: "#" },
                ],
            },
            {
                title: "Company",
                items: [
                    { text: "About", href: "#" },
                    { text: "Blog", href: "#" },
                    { text: "Careers", href: "#" },
                ],
            },
            {
                title: "Resources",
                items: [
                    { text: "Documentation", href: "#" },
                    { text: "Help Center", href: "#" },
                    { text: "Contact", href: "#" },
                ],
            },
            {
                title: "Legal",
                items: [
                    { text: "Privacy", href: "#" },
                    { text: "Terms", href: "#" },
                    { text: "Security", href: "#" },
                ],
            },
        ],
    },
};
