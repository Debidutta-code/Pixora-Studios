import { constructMetadata } from "@/content/seo";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export const metadata: Metadata = constructMetadata("contact");

const ContactContent = dynamic(() => import("./ContactContent"), {
  ssr: true,
});

export default function Page() {
  return (
    <Suspense fallback={<div className="pt-32 px-6 h-screen animate-pulse bg-background" />}>
      <ContactContent />
    </Suspense>
  );
}
