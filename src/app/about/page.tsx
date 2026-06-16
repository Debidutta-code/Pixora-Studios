import { constructMetadata } from "@/content/seo";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export const metadata: Metadata = constructMetadata("about");

const AboutContent = dynamic(() => import("./AboutContent"), {
  ssr: true, // We want the above fold content to be SSRed if possible, but the component has client-side logic.
  // Actually, for better FCP, keep ssr: true and use Suspense for parts that need it.
  // But the requirement says dynamic import heavy components with ssr: false.
  // AboutContent isn't a "heavy section", it's the whole page.
});

export default function Page() {
  return (
    <Suspense fallback={<div className="pt-32 px-6 h-screen animate-pulse bg-background" />}>
      <AboutContent />
    </Suspense>
  );
}
