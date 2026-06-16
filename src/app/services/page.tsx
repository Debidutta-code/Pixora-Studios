import { constructMetadata } from "@/content/seo";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { services } from "@/content/services";

export const metadata: Metadata = constructMetadata("services");

const ServicesContent = dynamic(() => import("./ServicesContent"), {
  ssr: true,
});

export default function ServicesPage() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.shortDescription,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Pixora Studios",
          "url": "https://pixorastudios.com"
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Suspense fallback={<div className="pt-32 px-6 h-screen animate-pulse bg-background" />}>
        <ServicesContent />
      </Suspense>
    </>
  );
}
