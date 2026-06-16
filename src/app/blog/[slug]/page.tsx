"use client";

import { use } from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import Link from "next/link";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-text-3 hover:text-text-2 text-sm mb-8 inline-block">
          ← Back to Blog
        </Link>
        <SectionLabel>Technology</SectionLabel>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
          The Future of Business Software
        </h1>
        <div className="flex items-center gap-4 mb-12 border-b border-border pb-8">
          <div className="w-10 h-10 rounded-full bg-accent" />
          <div>
            <div className="font-bold">Debidutta Acharya</div>
            <div className="text-xs text-text-3">Founder, PixoraStudios</div>
          </div>
        </div>

        <article className="prose prose-invert prose-accent max-w-none space-y-6 text-text-2 leading-relaxed">
          <p className="text-xl text-text-1 font-medium">
            In an era where every business is a digital business, the quality of your software defines the limits of your growth.
          </p>
          <p>
            This is a placeholder for the blog post content for: <strong>{slug}</strong>. In a full implementation, this would be rendered from MDX or a CMS.
          </p>
          <h2 className="text-2xl font-bold text-text-1 mt-12 mb-4">Why Custom Matters</h2>
          <p>
            Off-the-shelf solutions often force your business to adapt to the software. We believe the software should adapt to your business. Custom digital products are built around your unique workflows, giving you a competitive edge that generic tools can&apos;t match.
          </p>
          <h2 className="text-2xl font-bold text-text-1 mt-12 mb-4">Looking Ahead</h2>
          <p>
            As we move into 2025, AI and automation are no longer luxuries for large enterprises. They are becoming essential tools for local businesses to maintain efficiency and provide superior customer experiences.
          </p>
        </article>
      </div>
    </div>
  );
}
