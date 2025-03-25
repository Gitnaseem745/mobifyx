import { siteConfig } from "@/config/site";
import { LucideIcon } from "lucide-react";

export type SiteConfig = typeof siteConfig;

export interface FeatureCardProps {
    feature: {
      badge?: string;
      icon: any;
      title: string;
      description: string;
      cta: {
          href: string;
          label: string;
      };
      image: string
    }; 
      index: number;
  }

  export interface InfiniteSliderProps {
    items: {
      quote: string;
      author: string;
      role: string;
      avatar: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
  }

  export interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
    index: number;
  }
  
  export interface PricingCardProps {
    plan: {
      name: string;
      description: string;
      price: string;
      popular?: boolean;
      features: string[];
      cta: { text: string };
    };
    index?: number;
  }

  export interface DetailsCardProps { 
    title: string; 
    description: string;
    Icon: LucideIcon;
 }
