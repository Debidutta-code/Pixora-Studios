"use client";

import { industries } from "@/content/industries";
import SectionLabel from "@/components/shared/SectionLabel";
import RevealText from "@/components/shared/RevealText";
import { m } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";

export default function Industries() {
  return (
    <section id="industries" className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Who We Build For</SectionLabel>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 max-w-3xl">
          <RevealText>Tailored Solutions for Every Industry</RevealText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <m.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <Link href={`/industries/${industry.slug}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                />

                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-text-2 text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    {industry.tagline}
                  </p>
                </div>
              </Link>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
