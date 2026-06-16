"use client";

import { services } from "@/content/services";
import SectionLabel from "@/components/shared/SectionLabel";
import RevealText from "@/components/shared/RevealText";
import { m } from 'framer-motion';
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/shared/MagneticButton";
import Image from "next/image";

export default function ServicesContent() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionLabel>Our Services</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            <RevealText>Solutions for Growth</RevealText>
          </h1>
          <p className="text-xl text-text-2 max-w-2xl leading-relaxed">
            We provide a comprehensive suite of digital services designed to help local businesses thrive in a digital-first world.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service) => {
            const Icon = (LucideIcons as unknown as Record<string, LucideIcon>)[service.icon] || LucideIcons.Globe;
            return (
              <section
                key={service.id}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-mt-32"
              >
                <m.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8">
                    <Icon size={32} />
                  </div>
                  <h2 className="text-4xl font-display font-bold mb-6">{service.title}</h2>
                  <p className="text-lg text-text-2 mb-8 leading-relaxed">
                    {service.longDescription}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="font-bold text-accent mb-4 uppercase tracking-wider text-xs">Core Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-text-2">
                            <span className="text-accent mt-1">→</span> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-accent mb-4 uppercase tracking-wider text-xs">Key Features</h4>
                      <ul className="space-y-3">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-text-2">
                            <span className="text-accent mt-1">•</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 pt-8 border-t border-border">
                    <div>
                      <div className="text-xs text-text-3 uppercase tracking-widest mb-1 font-bold">Investment</div>
                      <div className="text-xl font-bold">{service.pricingFrom}</div>
                    </div>
                    <MagneticButton>
                      <Link href="/contact" className="px-6 py-3 bg-accent rounded-full font-bold text-sm">
                        {service.cta}
                      </Link>
                    </MagneticButton>
                  </div>
                </m.div>

                <m.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative h-[400px] lg:h-[500px] bg-surface border border-border rounded-3xl overflow-hidden"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </m.div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
