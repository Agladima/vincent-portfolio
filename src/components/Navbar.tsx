"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Writing", href: "#writing" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-[#F6F3ED] border-b border-[#DCD5CB] transition-colors">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Name / Wordmark */}
        <Link
          href="#top"
          className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#292724] hover:text-[#713B43] transition-colors duration-200"
          aria-label={`${PERSONAL_INFO.shortName} - Back to top`}
        >
          {PERSONAL_INFO.shortName}.
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 text-[15px] font-medium tracking-normal text-[#777067]"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#713B43] transition-colors duration-200 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-2 text-[#292724] hover:text-[#713B43] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#713B43]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-18 bottom-0 bg-[#F6F3ED] z-30 md:hidden flex flex-col border-b border-[#DCD5CB] px-6 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col gap-6 text-lg font-medium text-[#292724]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#DCD5CB] text-[#292724] hover:text-[#713B43] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-[#DCD5CB] text-sm text-[#777067]">
            <p className="font-serif text-base text-[#292724] mb-1">{PERSONAL_INFO.fullName}</p>
            <p className="text-xs uppercase tracking-wider text-[#777067]">{PERSONAL_INFO.title}</p>
            <p className="text-xs text-[#777067] mt-1">{PERSONAL_INFO.location}</p>
          </div>
        </div>
      )}
    </header>
  );
}
