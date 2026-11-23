"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, Phone, ExternalLink, Copy, Check, X } from "lucide-react";

export default function Contact() {
  const [isChooserOpen, setIsChooserOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const subject = encodeURIComponent("Writing Inquiry — Vincent Adie");
  const defaultMailto = `mailto:${PERSONAL_INFO.email}?subject=${subject}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${subject}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${PERSONAL_INFO.email}&subject=${subject}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      const textArea = document.createElement("textarea");
      textArea.value = PERSONAL_INFO.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-28 lg:py-32 border-b border-[#DCD5CB] relative"
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

          {/* Email Action Section */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setIsChooserOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#713B43] text-white text-base font-medium tracking-wide hover:bg-[#592E35] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#713B43] cursor-pointer"
                aria-haspopup="dialog"
                aria-expanded={isChooserOpen}
              >
                <Mail size={18} aria-hidden="true" />
                <span>Email Vincent</span>
              </button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-transparent border border-[#DCD5CB] text-[#292724] text-sm font-medium hover:border-[#713B43] hover:text-[#713B43] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#713B43] cursor-pointer"
                aria-label="Copy Vincent's email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-[#713B43]" aria-hidden="true" />
                    <span className="text-[#713B43]">Copied Address!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="text-[#777067]" aria-hidden="true" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Helper Links */}
            <p className="text-xs text-[#777067] mt-3">
              Click to choose your preferred email app, or open directly in{" "}
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#713B43] underline underline-offset-2 hover:text-[#592E35]"
              >
                Gmail
              </a>
              {" "}or{" "}
              <a
                href={outlookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#713B43] underline underline-offset-2 hover:text-[#592E35]"
              >
                Outlook
              </a>
              .
            </p>
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
                  <button
                    type="button"
                    onClick={() => setIsChooserOpen(true)}
                    className="inline-flex items-center gap-2 text-[#292724] hover:text-[#713B43] transition-colors text-left cursor-pointer"
                  >
                    <Mail size={16} className="text-[#777067]" aria-hidden="true" />
                    <span>{PERSONAL_INFO.email}</span>
                  </button>
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

      {/* Editorial Email Client Chooser Modal */}
      {isChooserOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#292724]/40 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chooser-title"
          onClick={() => setIsChooserOpen(false)}
        >
          <div
            className="bg-[#F6F3ED] border border-[#DCD5CB] w-full max-w-md p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-[#DCD5CB]">
              <div>
                <h3 id="chooser-title" className="font-serif text-xl sm:text-2xl text-[#292724] font-normal">
                  Send an Email to Vincent
                </h3>
                <p className="text-xs text-[#777067] mt-1">
                  Select your preferred mail application to compose your message.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsChooserOpen(false)}
                className="p-1.5 -mr-1 text-[#777067] hover:text-[#292724] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#713B43]"
                aria-label="Close dialog"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            {/* Email Apps Options */}
            <div className="space-y-3">
              {/* Gmail (Web) */}
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsChooserOpen(false)}
                className="flex items-center justify-between p-3.5 bg-white border border-[#DCD5CB] hover:border-[#713B43] hover:bg-[#ECE7DE]/50 transition-colors group"
              >
                <div>
                  <p className="text-sm font-semibold text-[#292724] group-hover:text-[#713B43] transition-colors">
                    Gmail
                  </p>
                  <p className="text-xs text-[#777067]">
                    Open composer in your browser via mail.google.com
                  </p>
                </div>
                <ExternalLink size={16} className="text-[#777067] group-hover:text-[#713B43]" aria-hidden="true" />
              </a>

              {/* Default System Mail App */}
              <a
                href={defaultMailto}
                onClick={() => setIsChooserOpen(false)}
                className="flex items-center justify-between p-3.5 bg-white border border-[#DCD5CB] hover:border-[#713B43] hover:bg-[#ECE7DE]/50 transition-colors group"
              >
                <div>
                  <p className="text-sm font-semibold text-[#292724] group-hover:text-[#713B43] transition-colors">
                    Default Mail App
                  </p>
                  <p className="text-xs text-[#777067]">
                    Apple Mail, Microsoft Outlook, Thunderbird, or system default
                  </p>
                </div>
                <Mail size={16} className="text-[#777067] group-hover:text-[#713B43]" aria-hidden="true" />
              </a>

              {/* Outlook Web */}
              <a
                href={outlookUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsChooserOpen(false)}
                className="flex items-center justify-between p-3.5 bg-white border border-[#DCD5CB] hover:border-[#713B43] hover:bg-[#ECE7DE]/50 transition-colors group"
              >
                <div>
                  <p className="text-sm font-semibold text-[#292724] group-hover:text-[#713B43] transition-colors">
                    Outlook (Web)
                  </p>
                  <p className="text-xs text-[#777067]">
                    Open composer in your browser via outlook.live.com
                  </p>
                </div>
                <ExternalLink size={16} className="text-[#777067] group-hover:text-[#713B43]" aria-hidden="true" />
              </a>

              {/* Copy Address */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-3.5 bg-white border border-[#DCD5CB] hover:border-[#713B43] hover:bg-[#ECE7DE]/50 transition-colors group text-left cursor-pointer"
              >
                <div>
                  <p className="text-sm font-semibold text-[#292724] group-hover:text-[#713B43] transition-colors">
                    {copied ? "Copied to Clipboard!" : "Copy Email Address"}
                  </p>
                  <p className="text-xs text-[#777067]">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
                {copied ? (
                  <Check size={16} className="text-[#713B43]" aria-hidden="true" />
                ) : (
                  <Copy size={16} className="text-[#777067] group-hover:text-[#713B43]" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
