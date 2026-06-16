import { Metadata } from "next";

export const seoContent = {
  home: {
    title: "Pixora Studios | World-Class Premium Software Agency",
    description: "Boutique premium software agency building custom digital products for clinics, restaurants, and local businesses.",
    keywords: ["software agency", "custom websites", "clinic management", "restaurant software", "Bhubaneswar", "SMB software"],
  },
  services: {
    title: "Our Services | Pixora Studios",
    description: "Discover our premium software development services: from custom websites to AI-powered business tools.",
  },
  industries: {
    title: "Industries We Serve | Pixora Studios",
    description: "Specialized digital solutions for healthcare, hospitality, and local businesses.",
  },
  portfolio: {
    title: "Our Portfolio | Pixora Studios",
    description: "Explore the successful digital products we've built for our clients.",
  },
  about: {
    title: "About Pixora Studios | Our Story & Values",
    description: "Learn about PixoraStudios, our founder Debidutta Acharya, and our mission to empower local businesses.",
  },
  contact: {
    title: "Contact Us | Book a Free Consultation | Pixora Studios",
    description: "Ready to scale your business? Contact us today for a free 30-minute strategy session.",
  },
  blog: {
    title: "Insights & Innovation | Pixora Studios Blog",
    description: "Stay ahead with the latest in technology, design, and business automation.",
  },
  privacy: {
    title: "Privacy Policy | Pixora Studios",
    description: "Our commitment to protecting your data and privacy.",
  },
  terms: {
    title: "Terms of Service | Pixora Studios",
    description: "The terms and conditions for using our services.",
  }
};

export function constructMetadata(key: keyof typeof seoContent): Metadata {
  const content = seoContent[key];
  return {
    title: content.title,
    description: content.description,
    keywords: "keywords" in content ? content.keywords : seoContent.home.keywords,
    openGraph: {
      title: content.title,
      description: content.description,
      type: "website",
      url: `https://pixorastudios.com/${key === "home" ? "" : key}`,
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
    },
  };
}
