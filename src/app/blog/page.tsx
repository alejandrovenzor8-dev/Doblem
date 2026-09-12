import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogArticles } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog de arquitectura, construcción e inmuebles en Chihuahua",
  description: "Guías de Doble M. sobre construcción, arquitectura, permisos, preventa, inversión inmobiliaria y remodelación en Chihuahua.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0b1526] px-4 pb-24 pt-40 text-white md:px-8 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,169,110,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a96e]">Guías para decidir mejor</p>
          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl" style={{ fontFamily: "var(--font-playfair, serif)" }}>Arquitectura, construcción y patrimonio</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">Información clara y respaldada para construir, remodelar o invertir en una propiedad en Chihuahua.</p>
        </div>
      </section>

      <section className="bg-[#f5f0e8] px-4 py-20 md:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map((article, index) => (
            <article key={article.slug} className={`group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}>
              <Link href={`/blog/${article.slug}`} className="block">
                <div className={`relative overflow-hidden ${index === 0 ? "h-72 md:h-96" : "h-64"}`}>
                  <Image src={article.coverImage} alt={article.coverAlt} fill sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"} className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071421]/50 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-[#c9a96e] px-3 py-1 text-xs font-semibold text-white">{article.category}</span>
                </div>
                <div className="p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-4 text-xs text-[#777]">
                    <time dateTime={article.isoDate}>{article.date}</time>
                    <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime} de lectura</span>
                  </div>
                  <h2 className={`${index === 0 ? "text-3xl" : "text-2xl"} font-bold leading-tight text-[#122238] transition group-hover:text-[#b28d50]`} style={{ fontFamily: "var(--font-playfair, serif)" }}>{article.title}</h2>
                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#666]">{article.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#b28d50]">Leer guía completa <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
