import { constructMetadata } from "@/content/seo";
import { Metadata } from "next";
import SectionLabel from "@/components/shared/SectionLabel";

export const metadata: Metadata = constructMetadata("privacy");

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none space-y-8 text-text-2">
          <section>
            <h2 className="text-2xl font-bold text-text-1 mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you fill out our contact form or book a consultation. This may include your name, email address, phone number, and business details.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-1 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to communicate with you about our services, process your requests, and improve our website and customer experience.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-1 mb-4">3. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing and against accidental loss, destruction, or damage.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-1 mb-4">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at debiduttaacharya.dev@gmail.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
