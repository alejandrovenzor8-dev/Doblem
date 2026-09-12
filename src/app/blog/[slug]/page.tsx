import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { blogArticles, getBlogArticle } from "@/data/blog";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getBlogArticle((await params).slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      locale: "es_MX",
      publishedTime: article.isoDate,
      images: [{ url: article.coverImage, alt: article.coverAlt }],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = getBlogArticle((await params).slug);
  if (!article) notFound();
  const currentIndex = blogArticles.findIndex(({ slug }) => slug === article.slug);
  const nextArticle = blogArticles[(currentIndex + 1) % blogArticles.length];
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.coverImage,
    datePublished: article.isoDate,
    dateModified: article.isoDate,
    author: { "@type": "Organization", name: "Doble M. Diseño y Construcción" },
    publisher: { "@type": "Organization", name: "Doble M. Diseño y Construcción" },
    mainEntityOfPage: `/blog/${article.slug}`,
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <article className="bg-[#faf8f3]">
        <header className="bg-[#0b1526] px-4 pb-20 pt-36 text-white md:px-8">
          <div className="mx-auto max-w-4xl">
            <Link href="/blog" className="mb-10 inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-[#c9a96e]"><ArrowLeft size={16} /> Volver al blog</Link>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a96e]">{article.category}</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl" style={{ fontFamily: "var(--font-playfair, serif)" }}>{article.title}</h1>
            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-white/60">
              <span>Por Doble M. Diseño y Construcción</span>
              <time dateTime={article.isoDate}>{article.date}</time>
              <span className="flex items-center gap-1.5"><Clock size={15} /> {article.readTime} de lectura</span>
            </div>
          </div>
        </header>

        <div className="relative mx-auto -mt-10 h-[360px] max-w-6xl overflow-hidden rounded-2xl shadow-2xl md:h-[560px]">
          <Image src={article.coverImage} alt={article.coverAlt} fill priority sizes="(max-width: 1200px) 100vw, 1152px" className="object-cover" />
        </div>

        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <div className="space-y-6 text-xl leading-9 text-[#46505c]">
            {article.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <div className="mt-14 space-y-14">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-bold leading-tight text-[#122238] md:text-4xl" style={{ fontFamily: "var(--font-playfair, serif)" }}>{section.heading}</h2>
                <div className="mt-6 space-y-5 text-[17px] leading-8 text-[#59616a]">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && <ul className="space-y-3 pl-1">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a96e]" /><span>{bullet}</span></li>)}</ul>}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-16 rounded-2xl bg-white p-7 shadow-sm md:p-10">
            <h2 className="text-3xl font-bold text-[#122238]" style={{ fontFamily: "var(--font-playfair, serif)" }}>Preguntas frecuentes</h2>
            <div className="mt-7 divide-y divide-[#e8e0d2]">
              {article.faq.map((item) => <div key={item.question} className="py-6 first:pt-0 last:pb-0"><h3 className="font-semibold text-[#172a42]">{item.question}</h3><p className="mt-2 leading-7 text-[#66707a]">{item.answer}</p></div>)}
            </div>
          </section>

          <aside className="mt-12 border-t border-[#ddd4c5] pt-8 text-sm leading-6 text-[#6d7379]">
            <p className="font-semibold text-[#28384b]">Fuentes consultadas</p>
            <ul className="mt-3 space-y-2">{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="text-[#9a753d] underline decoration-[#c9a96e]/40 underline-offset-4 hover:text-[#6f5128]">{source.label}</a></li>)}</ul>
            <p className="mt-5">Contenido informativo. Los requisitos, costos y condiciones pueden cambiar; confirma siempre la información vigente con la autoridad o especialista correspondiente.</p>
          </aside>
        </div>
      </article>

      <section className="bg-[#122238] px-5 py-16 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div><p className="text-sm uppercase tracking-[0.2em] text-[#c9a96e]">Siguiente lectura</p><h2 className="mt-3 max-w-2xl text-2xl font-bold" style={{ fontFamily: "var(--font-playfair, serif)" }}>{nextArticle.title}</h2></div>
          <Link href={`/blog/${nextArticle.slug}`} className="inline-flex shrink-0 items-center gap-2 rounded bg-[#c9a96e] px-6 py-3 font-semibold transition hover:bg-[#b8914a]">Leer artículo <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
