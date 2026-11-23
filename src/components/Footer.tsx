import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F6F3ED] py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Identity & Location */}
          <div className="space-y-1">
            <p className="font-serif text-xl font-normal text-[#292724]">
              {PERSONAL_INFO.shortName}.
            </p>
            <p className="text-sm text-[#777067]">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-xs text-[#777067]">
              {PERSONAL_INFO.shortLocation}.
            </p>
          </div>

          {/* Links & Copyright */}
          <div className="flex flex-col md:items-end gap-3 text-sm">
            <div className="flex items-center gap-6">
              <a
                href={PERSONAL_INFO.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777067] hover:text-[#713B43] transition-colors"
              >
                Substack
              </a>
              <span className="text-[#DCD5CB]" aria-hidden="true">•</span>
              <a
                href={PERSONAL_INFO.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777067] hover:text-[#713B43] transition-colors"
              >
                Medium
              </a>
            </div>
            <p className="text-xs text-[#777067]">
              &copy; {currentYear} {PERSONAL_INFO.fullName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
