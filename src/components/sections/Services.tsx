"use client";

import { services } from "@/content/services";
import SectionLabel from "@/components/shared/SectionLabel";
import RevealText from "@/components/shared/RevealText";
import { m } from 'framer-motion';
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>What We Build</SectionLabel>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 max-w-3xl">
          <RevealText>Software That Actually Moves the Needle</RevealText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = (LucideIcons as unknown as Record<string, LucideIcon>)[service.icon] || LucideIcons.Globe;
            return (
              <m.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/services#${service.slug}`}
                  className="group block p-8 rounded-2xl bg-surface border border-border hover:border-accent transition-all duration-300 h-full relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-text-2 text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </Link>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
