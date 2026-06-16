import { constructMetadata } from "@/content/seo";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata("home");

import Hero from "@/components/sections/Hero";
import TrustMarquee from "@/components/sections/TrustMarquee";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import CaseStudies from "@/components/sections/CaseStudies";
import WhyPixora from "@/components/sections/WhyPixora";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import ScrollProgress from "@/components/shared/ScrollProgress";

export default function Home() {
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
