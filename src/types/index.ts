export interface NavLink {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCTA: CTA;
  secondaryCTA: CTA;
  videoSrc: string;
  videoPoster: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  image: string;
  benefits: string[];
  features: string[];
  process: ProcessStep[];
  pricingFrom: string;
  faq: FAQ[];
  cta: string;
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  image: string;
  problems: string[];
  solutions: string[];
  features: string[];
  benefits: string[];
  cta: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  photo: string;
  videoSrc?: string;
  rating: number;
  review: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: "Healthcare" | "Restaurants" | "Business" | "SaaS" | "Corporate";
  description: string;
  thumbnail: string;
  images: string[];
  videoSrc?: string;
  technologies: string[];
  results: { metric: string; value: string }[];
  client?: string;
  year: number;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  googleMapIframe: string;
  socialLinks: { platform: string; url: string; icon: string }[];
  apiEndpoint: string;
  apiSecret: string;
  receiverEmail: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface FeatureShowcaseItem {
  title: string;
  description: string;
  image: string;
  color: string;
}

export interface ComparisonRow {
  label: string;
  pixora: string | boolean;
  agency: string | boolean;
  freelancer: string | boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export interface FinalCTAContent {
  headline: string;
  description: string;
  primaryCTA: CTA;
  trustIndicators: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface AboutContent {
  headline: string;
  description: string;
  founder: {
    name: string;
    story: string[];
    image: string;
  };
  values: {
    title: string;
    desc: string;
  }[];
}
