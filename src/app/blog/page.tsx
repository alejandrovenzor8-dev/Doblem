import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Tendencias en diseño de interiores para 2025",
    category: "Diseño",
    excerpt: "Descubre las paletas de colores, materiales y estilos que dominarán los espacios residenciales en 2025. Minimalismo, naturaleza y tecnología integrada.",
    date: "15 Enero 2025",
    author: "Ana Rodríguez",
    readTime: "5 min",
    gradient: "linear-gradient(135deg, #1a2744 0%, #2d4a7a 100%)",
  },
  {
    id: 2,
    title: "Guía completa para comprar tu primera casa",
    category: "Compra",
    excerpt: "Todo lo que necesitas saber antes de comprar tu primera propiedad en Chihuahua: financiamiento, escrituración y qué factores considerar.",
    date: "8 Enero 2025",
    author: "Carlos Vega",
    readTime: "8 min",
    gradient: "linear-gradient(135deg, #2a1a0e 0%, #5c3a1e 100%)",
  },
  {
    id: 3,
    title: "El mercado inmobiliario en Chihuahua: perspectivas 2025",
    category: "Mercado",
    excerpt: "Análisis de las tendencias del sector inmobiliario en Chihuahua para 2025: zonas en crecimiento, precios y oportunidades de inversión.",
    date: "2 Enero 2025",
    author: "Miguel Martínez",
    readTime: "6 min",
    gradient: "linear-gradient(135deg, #1a3a1a 0%, #2d5a2d 100%)",
  },
  {
    id: 4,
    title: "Construcción sustentable: el futuro de las viviendas",
    category: "Construcción",
    excerpt: "Materiales ecológicos, paneles solares y sistemas de captación de agua: cómo construir de forma sustentable sin sacrificar el lujo.",
    date: "18 Diciembre 2024",
    author: "Carlos Vega",
    readTime: "7 min",
    gradient: "linear-gradient(135deg, #0d1b3e 0%, #1a2744 100%)",
  },
  {
    id: 5,
    title: "Cómo aumentar el valor de tu propiedad",
    category: "Inversión",
    excerpt: "Estrategias probadas para incrementar el valor de tu inmueble: renovaciones clave, mejoras de eficiencia energética y curb appeal.",
    date: "10 Diciembre 2024",
    author: "Ana Rodríguez",
    readTime: "5 min",
    gradient: "linear-gradient(135deg, #2e2e1a 0%, #5a5a2d 100%)",
  },
  {
    id: 6,
    title: "Los mejores fraccionamientos de Chihuahua",
    category: "Propiedades",
    excerpt: "Exploramos los fraccionamientos más exclusivos y con mayor plusvalía en Chihuahua: servicios, accesos y estilo de vida.",
    date: "3 Diciembre 2024",
    author: "Miguel Martínez",
    readTime: "6 min",
    gradient: "linear-gradient(135deg, #1a2e2e 0%, #2d5a5a 100%)",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-4 md:px-8 lg:px-16 text-white"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a2744 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Artículos y Noticias
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Blog
          </h1>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Gradient image */}
              <div
                className="h-48 w-full"
                style={{ background: article.gradient }}
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#c9a96e]/10 text-[#c9a96e] text-xs font-semibold rounded-full mb-3">
                  {article.category}
                </span>
                <h2
                  className="font-bold text-[#1a1a1a] text-lg mb-3 line-clamp-2 group-hover:text-[#c9a96e] transition-colors"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {article.title}
                </h2>
                <p className="text-[#8a8a8a] text-sm leading-relaxed mb-5 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-[#8a8a8a] border-t border-[#ede8dc] pt-4">
                  <div>
                    <span className="font-medium text-[#4a4a4a]">{article.author}</span>
                    <span className="mx-1.5">·</span>
                    <span>{article.date}</span>
                  </div>
                  <span>{article.readTime} lectura</span>
                </div>
                <Link
                  href="#"
                  className="mt-4 block text-center py-2.5 text-[#c9a96e] text-sm font-semibold border border-[#c9a96e] rounded hover:bg-[#c9a96e] hover:text-white transition-colors"
                >
                  Leer artículo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
