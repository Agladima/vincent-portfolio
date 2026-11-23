import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, Phone, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-28 lg:py-32 border-b border-[#DCD5CB]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          {/* Section Heading */}
          <h2
            id="contact-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#292724] mb-6"
          >
            Let&apos;s work together.
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#777067] leading-relaxed mb-10">
            Have a writing project, a collaboration in mind or an opportunity you&apos;d like to
            discuss? I&apos;d be glad to hear from you.
          </p>

          {/* Prominent Email Button */}
          <div className="mb-12">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent("Writing Inquiry — Vincent Adie")}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#713B43] text-white text-base font-medium tracking-wide hover:bg-[#592E35] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#713B43]"
              aria-label={`Open preferred email application to write to ${PERSONAL_INFO.email}`}
            >
              <Mail size={18} aria-hidden="true" />
              <span>Email Vincent</span>
            </a>
          </div>

          {/* Contact Details Grid */}
          <div className="pt-10 border-t border-[#DCD5CB] grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Direct Channels */}
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#713B43] mb-4">
                Direct Contact
              </p>
              <ul className="space-y-3 text-sm sm:text-base">
                <li>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent("Writing Inquiry — Vincent Adie")}`}
                    className="inline-flex items-center gap-2 text-[#292724] hover:text-[#713B43] transition-colors"
                  >
                    <Mail size={16} className="text-[#777067]" aria-hidden="true" />
                    <span>{PERSONAL_INFO.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${PERSONAL_INFO.phoneFormatted}`}
                    className="inline-flex items-center gap-2 text-[#292724] hover:text-[#713B43] transition-colors"
                  >
                    <Phone size={16} className="text-[#777067]" aria-hidden="true" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Publications & Writing Channels */}
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#713B43] mb-4">
                Publications & Profiles
              </p>
              <ul className="space-y-3 text-sm sm:text-base">
                <li>
                  <a
                    href={PERSONAL_INFO.substackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#292724] hover:text-[#713B43] transition-colors"
                  >
                    <ExternalLink size={15} className="text-[#777067]" aria-hidden="true" />
                    <span>Substack (Titae&apos;s Tantrums)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#292724] hover:text-[#713B43] transition-colors"
                  >
                    <ExternalLink size={15} className="text-[#777067]" aria-hidden="true" />
                    <span>Medium (@kishaadie)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
