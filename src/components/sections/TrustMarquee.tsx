"use client";

import { m } from 'framer-motion';
import { clients } from "@/content/clients";

export default function TrustMarquee() {
  return (
    <section className="py-20 bg-background overflow-hidden border-y border-border">
      <div className="flex flex-col gap-12">
        <div className="flex overflow-hidden">
          <m.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-nowrap shrink-0 items-center gap-20 px-10"
          >
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div
                key={`${client.id}-${i}`}
                className="text-2xl font-display font-bold text-text-3 grayscale hover:grayscale-0 transition-all cursor-default"
              >
                {client.name.toUpperCase()}
              </div>
            ))}
          </m.div>
        </div>

        <div className="flex overflow-hidden">
          <m.div
            animate={{ x: [-1000, 0] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-nowrap shrink-0 items-center gap-20 px-10"
          >
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div
                key={`${client.id}-rev-${i}`}
                className="text-2xl font-display font-bold text-text-3 grayscale hover:grayscale-0 transition-all cursor-default"
              >
                {client.name.toUpperCase()}
              </div>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  );
}
