import { EXPERIENCES } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 sm:py-28 lg:py-32 bg-[#ECE7DE] border-b border-[#DCD5CB]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2
            id="experience-heading"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#292724] mb-4"
          >
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-[#777067] leading-relaxed">
            My experience in writing and communication has grown through marketing, business
            development and partnership-focused responsibilities.
          </p>
        </div>

        {/* Editorial Experience List */}
        <div className="divide-y divide-[#DCD5CB]">
          {EXPERIENCES.map((item, index) => (
            <div
              key={`${item.role}-${index}`}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
            >
              {/* Date / Period Column */}
              <div className="md:col-span-4 lg:col-span-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#713B43]">
                  {item.period}
                </span>
              </div>

              {/* Details Column */}
              <div className="md:col-span-8 lg:col-span-9">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#292724] tracking-tight">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-[#777067] mt-1 mb-4">
                  {item.organization}
                </p>

                {item.responsibilities && item.responsibilities.length > 0 && (
                  <ul className="space-y-2 text-sm sm:text-base text-[#292724]/85 max-w-2xl">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[#713B43] mt-2 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.additionalRoles && (
                  <p className="text-sm text-[#777067] italic mt-2">
                    {item.additionalRoles}.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
