import type { MetadataRoute } from "next";
import { blogArticles } from "@/data/blog";

const baseUrl = "https://www.xn--doblemdiseoyconstruccion-9kc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/nosotros",
    "/servicios",
    "/propiedades",
    "/portafolio",
    "/galeria",
    "/blog",
    "/contacto",
    "/agenda",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: "2026-09-12",
    changeFrequency: path === "/blog" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path === "/blog" ? 0.8 : 0.7,
  }));

  const articles = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.isoDate,
    changeFrequency: "monthly" as const,
    priority: 0.75,
    images: [`${baseUrl}${article.coverImage}`],
  }));

  return [...pages, ...articles];
}
