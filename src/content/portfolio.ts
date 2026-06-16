import { PortfolioItem } from "@/types";

export const portfolio: PortfolioItem[] = [
  {
    id: "1",
    slug: "smile-dental-crm",
    title: "Smile Dental CRM",
    category: "Healthcare",
    description: "A comprehensive CRM and appointment system for a chain of dental clinics.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=1200",
    images: [],
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    results: [
      { metric: "Efficiency", value: "+45%" },
      { metric: "Patient Retention", value: "+30%" }
    ],
    year: 2024
  },
  {
    id: "2",
    slug: "bistro-pos",
    title: "Bistro POS",
    category: "Restaurants",
    description: "Modern point-of-sale and inventory system for high-end restaurants.",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    images: [],
    technologies: ["React Native", "Node.js", "MongoDB"],
    results: [
      { metric: "Wait Time", value: "-20%" },
      { metric: "Inventory Loss", value: "-15%" }
    ],
    year: 2023
  }
];
