"use client";

import useEmblaCarousel from "embla-carousel-react";
import { testimonials } from "@/content/testimonials";
import SectionLabel from "@/components/shared/SectionLabel";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="py-32 px-6 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <SectionLabel>Client Stories</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-all group"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-all group"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((t) => (
              <div key={t.id} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] px-4">
                <div className="bg-background border border-border p-10 rounded-3xl h-full flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className={i < t.rating ? "fill-accent text-accent" : "text-text-3"} />
                    ))}
                  </div>
                  <p className="text-lg italic mb-10 flex-grow">&quot;{t.review}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-accent/20">
                      <Image
                        src={t.photo}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className="text-sm text-text-3">{t.designation}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
