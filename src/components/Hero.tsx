export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36 border-b border-[#DCD5CB]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          {/* Professional Identifier */}
          <div className="mb-6 sm:mb-8 space-y-1">
            <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#713B43]">
              Content Writer & Copywriter
            </p>
            <p className="text-xs tracking-[0.18em] uppercase text-[#777067]">
              Calabar, Nigeria
            </p>
          </div>

          {/* Editorial Headline */}
          <h1
            id="hero-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal leading-[1.2] tracking-tight text-[#292724] mb-8"
          >
            Writing that explores people, culture and the way we work.
          </h1>

          {/* Supporting Introduction */}
          <div className="space-y-5 text-base sm:text-lg text-[#777067] leading-relaxed mb-10 sm:mb-12">
            <p>
              I&apos;m Vincent, a content writer and copywriter based in Calabar, Nigeria. I write
              long-form essays, articles and marketing copy, exploring organizational behaviour,
              workplace culture and human experiences.
            </p>
            <p>
              My approach combines research, storytelling and a thoughtful understanding of the
              audience. Whether I&apos;m developing a campaign message, writing a proposal or
              exploring an idea through an essay, I aim to make every piece of writing clear,
              engaging and meaningful.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#writing"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#713B43] text-white text-sm font-medium tracking-wide hover:bg-[#592E35] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#713B43]"
            >
              Explore My Writing
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border border-[#713B43] text-[#713B43] text-sm font-medium tracking-wide hover:bg-[#ECE7DE] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#713B43]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
