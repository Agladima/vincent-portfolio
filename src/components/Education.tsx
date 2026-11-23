import { EDUCATION } from "@/data/portfolioData";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-16 sm:py-20 border-b border-[#DCD5CB]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-baseline">
          {/* Section Heading */}
          <div className="md:col-span-4 lg:col-span-3">
            <h2
              id="education-heading"
              className="text-xs uppercase tracking-[0.2em] font-semibold text-[#713B43]"
            >
              Education
            </h2>
          </div>

          {/* Education Details */}
          <div className="md:col-span-8 lg:col-span-9 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-l border-[#DCD5CB] pl-6 md:pl-8">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#292724] tracking-tight">
                {EDUCATION.institution}
              </h3>
              <p className="text-base text-[#777067] mt-1">
                {EDUCATION.degree}
              </p>
            </div>
            <span className="text-sm font-medium text-[#777067] sm:text-right">
              {EDUCATION.year}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
