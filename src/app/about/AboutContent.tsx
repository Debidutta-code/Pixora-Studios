"use client";

import SectionLabel from "@/components/shared/SectionLabel";
import RevealText from "@/components/shared/RevealText";
import { m } from 'framer-motion';
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import Image from "next/image";
import { stats } from "@/content/stats";
import { aboutContent } from "@/content/about";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 text-center">
          <SectionLabel className="justify-center">About Us</SectionLabel>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold mb-12">
            <RevealText>{aboutContent.headline}</RevealText>
          </h1>
          <p className="text-xl md:text-2xl text-text-2 max-w-3xl mx-auto leading-relaxed">
            {aboutContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
           <div className="relative aspect-square bg-surface border border-border rounded-[40px] overflow-hidden">
              <Image
                src={aboutContent.founder.image}
                alt={aboutContent.founder.name}
                fill
                priority
                loading="eager"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
           </div>
           <div>
             <SectionLabel>The Founder</SectionLabel>
             <h2 className="text-4xl font-display font-bold mb-8 text-accent">{aboutContent.founder.name}</h2>
             <div className="space-y-6 text-lg text-text-2">
               {aboutContent.founder.story.map((para, i) => (
                 <p key={i}>{para}</p>
               ))}
             </div>
           </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {stats.map((stat, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-surface border border-border rounded-3xl text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-text-3 uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </m.div>
          ))}
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-[40px] p-12 md:p-20">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {aboutContent.values.map((v, i) => (
                <div key={i}>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {v.title}
                  </h4>
                  <p className="text-text-2">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
