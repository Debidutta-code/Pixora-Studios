"use client";

import { use } from "react";
import { industries } from "@/content/industries";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/shared/SectionLabel";
import RevealText from "@/components/shared/RevealText";
import Link from "next/link";
import MagneticButton from "@/components/shared/MagneticButton";

export default function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) notFound();

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <Link href="/industries" className="text-text-3 hover:text-text-2 text-sm mb-8 inline-block">
            ← Back to Industries
          </Link>
          <SectionLabel>{industry.name}</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            <RevealText>{industry.tagline}</RevealText>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-3xl font-display font-bold mb-8 text-accent">The Challenge</h2>
            <ul className="space-y-6">
              {industry.problems.map((p, i) => (
                <li key={i} className="bg-surface border border-border p-6 rounded-2xl flex gap-6">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center font-bold shrink-0">
                    !
                  </div>
                  <p className="text-text-2">{p}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold mb-8 text-accent-2">Our Solution</h2>
            <ul className="space-y-6">
              {industry.solutions.map((s, i) => (
                <li key={i} className="bg-surface border border-border p-6 rounded-2xl flex gap-6">
                  <div className="w-8 h-8 rounded-full bg-accent-2/10 text-accent-2 flex items-center justify-center font-bold shrink-0">
                    ✓
                  </div>
                  <p className="text-text-2">{s}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-cta" />
           <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
             Transform Your {industry.name} Business
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
             {industry.benefits.map((b, i) => (
               <div key={i} className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold mb-4">
                   {i + 1}
                 </div>
                 <p className="font-bold">{b}</p>
               </div>
             ))}
           </div>
           <MagneticButton>
             <Link href="/contact" className="px-10 py-4 bg-gradient-cta rounded-full font-bold text-lg">
               {industry.cta}
             </Link>
           </MagneticButton>
        </div>
      </div>
    </div>
  );
}
