import { constructMetadata } from "@/content/seo";
import { Metadata } from "next";
import SectionLabel from "@/components/shared/SectionLabel";

export const metadata: Metadata = constructMetadata("terms");

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12">Terms of Service</h1>

        <div className="prose prose-invert max-w-none space-y-8 text-text-2">
          <section>
            <h2 className="text-2xl font-bold text-text-1 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-1 mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily view the materials on PixoraStudios&apos;s website for personal, non-commercial transitory viewing only.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-1 mb-4">3. Disclaimer</h2>
            <p>The materials on PixoraStudios&apos;s website are provided on an &apos;as is&apos; basis. PixoraStudios makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-1 mb-4">4. Limitations</h2>
            <p>In no event shall PixoraStudios or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on PixoraStudios&apos;s website.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
