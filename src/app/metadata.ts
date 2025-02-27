import { Metadata } from "next";

export const _metadata: Metadata = {
  title: {
    default: "Local Guide - Find the Best Local Services & Businesses",
    template: "%s | Local Guide",
  },
  applicationName: "Local Guide",
  generator: "Next.js",
  creator: "Kawish",
  publisher: "Kawish",
  category: "local guide",
  description:
    "Discover and connect with trusted local services, professionals, restaurants, hotels, electricians, plumbers, and more. Read verified reviews and explore top-rated businesses near you on Local Guide.",
  keywords: [
    "Local Guide",
    "local services",
    "trusted local businesses",
    "best local professionals",
    "find local businesses",
    "restaurants near me",
    "hotels near me",
    "electricians",
    "plumbers",
    "verified reviews",
    "customer ratings",
    "local businesses directory",
    "home services",
    "small business reviews",
    "top-rated services",
    "explore local",
    "business recommendations",
    "service providers",
    "trusted recommendations",
    "find experts",
    "community reviews",
    "business ratings",
  ],
  authors: [
    {
      name: "Local Guide",
      url: "https://localguide.kawish.dev",
    },
    {
      name: "Kawish",
      url: "https://kawish.dev",
    },
  ],
  robots: {
    index: true, // Allow search engines to index the site
    follow: true, // Allow following links
  },
  alternates: {
    canonical: "https://localguide.kawish.dev",
  },
};
