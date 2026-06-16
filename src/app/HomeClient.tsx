"use client";

import dynamic from 'next/dynamic';
import Hero from "@/components/sections/Hero";
import TrustMarquee from "@/components/sections/TrustMarquee";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import CaseStudies from "@/components/sections/CaseStudies";
import WhyPixora from "@/components/sections/WhyPixora";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import ScrollProgress from "@/components/shared/ScrollProgress";

const FeatureShowcase = dynamic(() => import("@/components/sections/FeatureShowcase"), {
  ssr: false,
  loading: () => <div className="h-[100vh] animate-pulse bg-surface/50 rounded-3xl m-6" />
});

const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), {
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-surface/50 rounded-2xl m-6" />
});

const Process = dynamic(() => import("@/components/sections/Process"), {
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-surface/50 rounded-2xl m-6" />
});

export default function HomeClient() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <TrustMarquee />
      <Services />
      <Industries />
      <FeatureShowcase />
      <CaseStudies />
      <WhyPixora />
      <Testimonials />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
