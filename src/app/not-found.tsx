import Link from "next/link";
import MagneticButton from "@/components/shared/MagneticButton";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-9xl font-display font-bold text-accent mb-4 animate-pulse">404</h1>
      <h2 className="text-3xl font-display font-bold mb-8">Page Not Found</h2>
      <p className="text-text-2 max-w-md mb-12 text-lg">
        The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <MagneticButton>
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-cta rounded-full font-bold hover:scale-105 transition-transform"
          >
            Back to Home
          </Link>
        </MagneticButton>

        <Link
          href="/portfolio"
          className="px-8 py-4 border border-border rounded-full font-bold hover:bg-surface transition-colors"
        >
          View Portfolio
        </Link>
      </div>
    </div>
  );
}
