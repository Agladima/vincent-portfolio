import { ARTICLES } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function Writing() {
  const featuredArticle = ARTICLES[0];
  const secondaryArticles = ARTICLES.slice(1);

  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="py-20 sm:py-28 lg:py-32 border-b border-[#DCD5CB]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2
            id="writing-heading"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#292724] mb-4"
          >
            Selected Writing
          </h2>
          <p className="text-base sm:text-lg text-[#777067] leading-relaxed">
            A collection of essays and articles exploring people, experiences, workplace dynamics and
            the ideas that shape our perspectives.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <article className="mb-8 bg-white border border-[#DCD5CB] p-8 sm:p-10 lg:p-12 transition-colors duration-200 hover:border-[#713B43]/50">
            <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase font-semibold text-[#713B43] mb-4">
              <span>Featured Essay</span>
              <span className="text-[#DCD5CB]" aria-hidden="true">•</span>
              <span>{featuredArticle.platform}</span>
              {featuredArticle.date && (
                <>
                  <span className="text-[#DCD5CB]" aria-hidden="true">•</span>
                  <span className="text-[#777067] font-normal">{featuredArticle.date}</span>
                </>
              )}
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#292724] tracking-tight leading-snug mb-4">
              <a
                href={featuredArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#713B43] transition-colors duration-200"
              >
                {featuredArticle.title}
              </a>
            </h3>

            <p className="text-base sm:text-lg text-[#777067] leading-relaxed max-w-3xl mb-8">
              {featuredArticle.description}
            </p>

            <div>
              <a
                href={featuredArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#713B43] hover:text-[#592E35] underline underline-offset-4 decoration-[#713B43]/40 hover:decoration-[#713B43] transition-all"
                aria-label={`Read article: ${featuredArticle.title} on ${featuredArticle.platform}`}
              >
                <span>Read Article</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </article>
        )}

        {/* Two-Column Secondary Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryArticles.map((article) => (
            <article
              key={article.title}
              className="bg-white border border-[#DCD5CB] p-7 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-[#713B43]/50"
            >
              <div>
                <div className="text-xs tracking-wider uppercase font-semibold text-[#713B43] mb-3">
                  {article.platform}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#292724] tracking-tight leading-snug mb-3">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#713B43] transition-colors duration-200"
                  >
                    {article.title}
                  </a>
                </h3>

                <p className="text-sm sm:text-base text-[#777067] leading-relaxed mb-6">
                  {article.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCD5CB]/60">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#713B43] hover:text-[#592E35] underline underline-offset-4 decoration-[#713B43]/40 hover:decoration-[#713B43] transition-all"
                  aria-label={`Read article: ${article.title} on ${article.platform}`}
                >
                  <span>Read Article</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
