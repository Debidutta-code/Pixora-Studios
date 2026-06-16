"use client";

import { faqs } from "@/content/faq";
import SectionLabel from "@/components/shared/SectionLabel";
import { Plus, Minus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";

export default function FAQ() {
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center">FAQ</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="bg-background border border-border rounded-2xl overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full px-8 py-6 flex items-center justify-between text-left group">
                  <span className="font-bold text-lg">{faq.question}</span>
                  <div className="text-accent group-data-[state=open]:hidden">
                    <Plus size={20} />
                  </div>
                  <div className="text-accent group-data-[state=closed]:hidden">
                    <Minus size={20} />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-8 pb-6 text-text-2 leading-relaxed data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <div className="mt-16 p-8 rounded-3xl bg-accent/5 border border-accent/10 text-center">
          <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
          <p className="text-text-2 mb-8">We&apos;re here to help you build your digital future.</p>
          <Link href="/contact" className="px-8 py-3 bg-accent rounded-full font-bold">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
