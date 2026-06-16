"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navigationLinks } from "@/content/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { m, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-display font-bold">
          PIXORA<span className="text-accent">STUDIOS</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-2 hover:text-text-1 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-6 py-2 bg-gradient-cta rounded-full text-sm font-bold hover:scale-105 transition-transform"
          >
            Get Free Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[64px] bg-background z-40 flex flex-col p-6 space-y-6 md:hidden"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-display font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="w-full py-4 bg-gradient-cta rounded-xl text-center font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Free Demo
            </Link>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
