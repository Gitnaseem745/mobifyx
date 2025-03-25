// Importing site configuration settings
import { siteConfig } from "@/config/site";
// Importing MetadataRoute type from Next.js for type safety
import { MetadataRoute } from "next";

/**
 * Generates and exports the robots.txt configuration for the site.
 * 
 * @returns {MetadataRoute.Robots} The configuration object for robots.txt.
 */
export default function robots(): MetadataRoute.Robots {
    return {
      rules: [
        {
          userAgent: "*", // Applies to all search engine bots
          allow: "/", // Allows crawling of all pages
          disallow: [""], // Currently not blocking any specific paths
        },
      ],
      sitemap: `${siteConfig.url}/sitemap.xml`, // Points to the site's sitemap
    };
}
