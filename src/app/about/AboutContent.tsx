"use client";

import SectionLabel from "@/components/shared/SectionLabel";
import RevealText from "@/components/shared/RevealText";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import Image from "next/image";

const stats = [
  { label: "Projects Delivered", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 45, suffix: "" },
  { label: "Industries Served", value: 10, suffix: "" },
  { label: "Years Experience", value: 5, suffix: "+" },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 text-center">
          <SectionLabel className="justify-center">About Us</SectionLabel>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold mb-12">
            <RevealText>Premium Digital Craftsmanship</RevealText>
          </h1>
          <p className="text-xl md:text-2xl text-text-2 max-w-3xl mx-auto leading-relaxed">
            PixoraStudios is a boutique agency founded on the principle that small and local businesses deserve the same world-class software as tech giants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
           <div className="relative aspect-square bg-surface border border-border rounded-[40px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Debidutta Acharya"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
           </div>
           <div>
             <SectionLabel>The Founder</SectionLabel>
             <h2 className="text-4xl font-display font-bold mb-8 text-accent">Debidutta Acharya</h2>
             <div className="space-y-6 text-lg text-text-2">
               <p>
                 With a passion for technology and a heart for local entrepreneurship, Debidutta founded PixoraStudios to bridge the gap between complex digital needs and accessible, premium solutions.
               </p>
               <p>
                 Our mission is not just to build websites, but to build growth engines that help clinics, restaurants, and SMBs thrive in the modern economy.
               </p>
             </div>
           </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-surface border border-border rounded-3xl text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-text-3 uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-[40px] p-12 md:p-20">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: "Quality First", desc: "We never compromise on the technical integrity or visual finish of our work." },
                { title: "Radical Transparency", desc: "No hidden fees, no jargon. Just honest, clear communication." },
                { title: "User Centric", desc: "We build for the people who will actually use the software every day." },
                { title: "Future Proof", desc: "Using modern stacks like Next.js 15 to ensure your investment lasts." }
              ].map((v, i) => (
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
