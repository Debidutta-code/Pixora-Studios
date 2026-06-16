"use client";

import SectionLabel from "@/components/shared/SectionLabel";
import RevealText from "@/components/shared/RevealText";
import { Check, X } from "lucide-react";
import { comparisons } from "@/content/comparison";

export default function WhyPixora() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Why Pixora Studios</SectionLabel>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16">
          <RevealText>A Different Breed of Agency</RevealText>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-6 px-4 text-text-3 font-mono text-xs uppercase tracking-widest">Service Feature</th>
                <th className="py-6 px-4 font-display text-xl font-bold text-accent">PixoraStudios</th>
                <th className="py-6 px-4 text-text-2 font-bold">Traditional Agencies</th>
                <th className="py-6 px-4 text-text-2 font-bold">Freelancers</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={i} className="border-b border-border hover:bg-surface/50 transition-colors">
                  <td className="py-6 px-4 font-bold">{row.label}</td>
                  <td className="py-6 px-4 bg-accent/5 border-x border-accent/20">
                    {typeof row.pixora === "boolean" ? (
                      <Check className="text-accent" />
                    ) : (
                      <span className="font-bold text-accent">{row.pixora}</span>
                    )}
                  </td>
                  <td className="py-6 px-4 text-text-2">
                     {row.agency === "false" ? <X className="text-text-3" /> : row.agency}
                  </td>
                  <td className="py-6 px-4 text-text-2">
                     {row.freelancer === "false" ? <X className="text-text-3" /> : row.freelancer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
