import Link from "next/link";
import { contactInfo } from "@/content/contact";
import { industries } from "@/content/industries";
import { services } from "@/content/services";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link href="/" className="text-2xl font-display font-bold">
            PIXORA<span className="text-accent">STUDIOS</span>
          </Link>
          <p className="mt-4 text-text-2 text-sm leading-relaxed">
            World-class premium software agency building custom digital products for local businesses.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6">Services</h4>
          <ul className="space-y-3">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="text-sm text-text-2 hover:text-accent transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Industries</h4>
          <ul className="space-y-3">
            {industries.slice(0, 5).map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`} className="text-sm text-text-2 hover:text-accent transition-colors">
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <ul className="space-y-3 text-sm text-text-2">
            <li>{contactInfo.email}</li>
            <li>{contactInfo.phone}</li>
            <li>{contactInfo.address}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-text-3">
          © {new Date().getFullYear()} PixoraStudios. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link href="/privacy" className="text-xs text-text-3 hover:text-text-2">Privacy Policy</Link>
          <Link href="/terms" className="text-xs text-text-3 hover:text-text-2">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
