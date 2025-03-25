// Importing the MetadataRoute type from Next.js for type safety
import type { MetadataRoute } from "next";

// Importing site configuration settings
import { siteConfig } from "@/config/site";

/**
 * Generates and exports the sitemap configuration for the site.
 * 
 * @returns {MetadataRoute.Sitemap} An array of sitemap entries.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL of the site, retrieved from siteConfig
  const baseUrl = siteConfig.url;

  // Defining static routes for the sitemap
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl, // Homepage URL
      lastModified: new Date().toISOString(), // Automatically sets the last modified date
      changeFrequency: "monthly", // Suggests that search engines check for updates monthly
      priority: 1, // Highest priority for homepage indexing
    },
  ];

  return routes; // Returning the sitemap configuration
}
