import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Bed, Bath, CheckCircle, MessageCircle } from "lucide-react";
import { properties } from "@/data/properties";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  return (
    <>
      {/* Large gradient image */}
      <div
        className="w-full"
        style={{
          height: "400px",
          background: property.gradient,
          marginTop: "80px",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-[#c9a96e] text-sm font-semibold tracking-widest uppercase mb-1">
                  {property.type}
                </p>
                <h1
                  className="text-3xl md:text-4xl font-bold text-[#1a1a1a]"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {property.title}
                </h1>
              </div>
              <div className="text-right">
                <div
                  className="text-3xl font-bold text-[#c9a96e]"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {property.price}
                </div>
                <span
                  className={`inline-block mt-1 text-xs font-semibold px-3 py-1 rounded-full ${
                    property.status === "disponible"
                      ? "bg-green-100 text-green-700"
                      : property.status === "en_proceso"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {property.status === "disponible"
                    ? "Disponible"
                    : property.status === "en_proceso"
                    ? "En Proceso"
                    : "Vendido"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#8a8a8a] mb-6">
              <MapPin size={16} className="text-[#c9a96e]" />
              <span>{property.location}</span>
            </div>

            {/* Details grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-5 bg-[#f5f0e8] rounded-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#c9a96e]">
                  {property.area}
                </div>
                <div className="text-xs text-[#8a8a8a] mt-1">m² totales</div>
              </div>
              {property.bedrooms > 0 && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#c9a96e]">
                    {property.bedrooms}
                  </div>
                  <div className="text-xs text-[#8a8a8a] mt-1">Habitaciones</div>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#c9a96e]">
                    {property.bathrooms}
                  </div>
                  <div className="text-xs text-[#8a8a8a] mt-1">Baños</div>
                </div>
              )}
              <div className="text-center">
                <div className="text-lg font-bold text-[#c9a96e] capitalize">
                  {property.type}
                </div>
                <div className="text-xs text-[#8a8a8a] mt-1">Tipo</div>
              </div>
            </div>

            <p className="text-[#4a4a4a] leading-relaxed mb-8">
              {property.description}
            </p>

            {/* Features */}
            <h2
              className="text-xl font-bold text-[#1a1a1a] mb-4"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Características
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {property.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[#4a4a4a]">
                  <CheckCircle size={16} className="text-[#c9a96e] flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Amenities */}
            <h2
              className="text-xl font-bold text-[#1a1a1a] mb-4"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Amenidades
            </h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {property.amenities.map((a) => (
                <span
                  key={a}
                  className="px-3 py-1.5 bg-[#f5f0e8] text-[#4a4a4a] text-sm rounded-full border border-[#ede8dc]"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#111111] rounded-2xl p-6 sticky top-28 text-white">
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                ¿Te interesa?
              </h3>
              <p className="text-[#8a8a8a] text-sm mb-6">
                Contáctanos para más información o agenda una visita.
              </p>
              <a
                href={`https://wa.me/526140000000?text=Hola, me interesa la propiedad: ${encodeURIComponent(property.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#1daa52] transition-colors mb-4"
              >
                <MessageCircle size={18} />
                Contactar por WhatsApp
              </a>
              <Link
                href="/agenda"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#c9a96e] text-white font-semibold rounded-xl hover:bg-[#b8914a] transition-colors mb-4"
              >
                Agendar Visita
              </Link>
              <Link
                href="/comparador"
                className="block w-full text-center py-3 border border-white/20 text-white/70 text-sm rounded-xl hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
              >
                Comparar propiedad
              </Link>

              <div className="mt-6 pt-6 border-t border-[#2a2a2a] space-y-3">
                <div className="flex items-center gap-3">
                  <Bed size={16} className="text-[#c9a96e]" />
                  <span className="text-sm text-[#8a8a8a]">
                    {property.bedrooms > 0
                      ? `${property.bedrooms} habitaciones`
                      : "Sin habitaciones"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Bath size={16} className="text-[#c9a96e]" />
                  <span className="text-sm text-[#8a8a8a]">
                    {property.bathrooms > 0
                      ? `${property.bathrooms} baños`
                      : "Sin baños"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#c9a96e]" />
                  <span className="text-sm text-[#8a8a8a]">
                    {property.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
