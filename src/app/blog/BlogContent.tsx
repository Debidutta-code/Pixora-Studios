"use client";

import SectionLabel from "@/components/shared/SectionLabel";
import RevealText from "@/components/shared/RevealText";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    slug: "modernizing-dental-clinics",
    title: "How Modern Software is Changing Dental Practices",
    excerpt: "Discover the impact of custom CRM and automated scheduling on patient retention and clinic efficiency.",
    category: "Healthcare",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "restaurant-tech-trends-2025",
    title: "Restaurant Tech Trends to Watch in 2025",
    excerpt: "From AI-powered inventory to contactless dining, explore the future of restaurant management.",
    category: "Restaurants",
    date: "Dec 10, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionLabel>Our Blog</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            <RevealText>Insights & Innovation</RevealText>
          </h1>
          <p className="text-xl text-text-2 max-w-2xl leading-relaxed">
            Thoughts on technology, design, and business growth from the PixoraStudios team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-surface border border-border rounded-3xl overflow-hidden hover:border-accent transition-colors"
            >
              <div className="relative h-64 bg-accent/5 border-b border-border overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{post.category}</span>
                  <span className="text-xs text-text-3">•</span>
                  <span className="text-xs text-text-3">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{post.title}</h2>
                <p className="text-text-2 text-sm mb-8 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  Read Article <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
