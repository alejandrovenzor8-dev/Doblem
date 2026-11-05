import type { MetadataRoute } from "next";
import { blogArticles } from "@/data/blog";
import { properties } from "@/data/properties";

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
    lastModified: "2026-11-04",
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

  const propertyPages = properties.map((property) => ({
    url: `${baseUrl}/propiedades/${property.id}`,
    lastModified: "2026-11-04",
    changeFrequency: "monthly" as const,
    priority: property.status === "vendido" ? 0.5 : 0.8,
  }));

  return [...pages, ...propertyPages, ...articles];
}
