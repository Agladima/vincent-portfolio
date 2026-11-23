import { WRITING_INTERESTS } from "@/data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 sm:py-28 lg:py-32 bg-[#ECE7DE] border-b border-[#DCD5CB]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Section Label / Left Column */}
          <div className="lg:col-span-4">
            <h2
              id="about-heading"
              className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[#292724]"
            >
              A little about me.
            </h2>
            <div className="mt-3 w-12 h-px bg-[#713B43]" aria-hidden="true" />
          </div>

          {/* Body Content / Right Column */}
          <div className="lg:col-span-8">
            <div className="space-y-5 text-base sm:text-lg text-[#292724] leading-relaxed">
              <p>
                I&apos;m Vincent Kishatin-unimye Adie, a writer interested in the stories,
                behaviours and everyday interactions that shape how people and organizations
                function.
              </p>
              <p>
                My writing spans long-form essays, human-interest stories, organizational
                behaviour and marketing communication. I enjoy exploring ideas from different
                perspectives, conducting research and turning observations into writing that
                people can connect with.
              </p>
              <p>
                Over the past three years, I&apos;ve also developed experience in professional
                communication, writing pitches and proposals, engaging corporate partners and
                supporting marketing campaigns through my work with AIESEC in Calabar.
              </p>
              <p>
                These experiences have helped me understand that good writing goes beyond
                putting words together. It requires understanding the audience, knowing what
                needs to be communicated and finding the right way to communicate it.
              </p>
              <p>
                I&apos;m interested in opportunities where I can contribute through thoughtful
                writing, research, storytelling and effective communication.
              </p>
            </div>

            {/* Writing Interests */}
            <div className="mt-12 pt-8 border-t border-[#DCD5CB]">
              <h3 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#713B43] mb-5">
                Writing Interests
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-[#292724]">
                {WRITING_INTERESTS.map((interest) => (
                  <li key={interest} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#713B43]" aria-hidden="true" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
