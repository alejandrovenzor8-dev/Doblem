"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Navigation, Home, Ruler, Bed, Bath, Car } from "lucide-react";

// Imágenes de casas con información detallada
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500",
    alt: "Casa moderna con diseño minimalista",
    height: "h-64",
    title: "Residencia Moderna Quintas del Sol",
    location: "Quintas del Sol, Chihuahua, Chih.",
    area: "320 m²",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    description: "Espectacular residencia con acabados de lujo y diseño contemporáneo. Amplios espacios iluminados naturalmente en una de las mejores zonas de Chihuahua.",
    nearbyPlaces: ["Plaza del Sol - 1.2km", "Parque Central - 800m", "Colegio Chihuahua - 1.5km"],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    ],
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
    alt: "Casa contemporánea con jardín",
    height: "h-80",
    title: "Casa Campestre San Felipe",
    location: "San Felipe, Chihuahua, Chih.",
    area: "450 m²",
    bedrooms: 5,
    bathrooms: 4,
    parking: 3,
    description: "Hermosa casa con amplio jardín y diseño arquitectónico único. Perfecta para familias grandes que buscan tranquilidad.",
    nearbyPlaces: ["Soriana San Felipe - 2km", "Clínica San Felipe - 1.8km", "Escuelas zona San Felipe - 1.2km"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800",
    ],
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
    alt: "Diseño de interiores elegante",
    height: "h-72",
    title: "Penthouse Vista Hermosa",
    location: "Saucito, Chihuahua, Chih.",
    area: "280 m²",
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    description: "Lujoso penthouse con vistas panorámicas de la ciudad. Acabados de primera calidad en zona premium.",
    nearbyPlaces: ["Plaza Saucito - 500m", "Restaurantes La Pérgola - 300m", "Hospital CIMA - 2km"],
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800",
    ],
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500",
    alt: "Fachada moderna de casa",
    height: "h-96",
    title: "Villa Campestre Los Nogales",
    location: "Residencial Los Nogales, Chihuahua, Chih.",
    area: "550 m²",
    bedrooms: 6,
    bathrooms: 5,
    parking: 4,
    description: "Majestuosa villa con arquitectura contemporánea. Espacios amplios y elegantes en la zona más exclusiva de Chihuahua.",
    nearbyPlaces: ["Club Campestre - 1.5km", "Tec de Monterrey Campus - 2.5km", "Zona comercial - 2km"],
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
    ],
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500",
    alt: "Casa con piscina",
    height: "h-64",
    title: "Residencia Las Palmas",
    location: "Residencial Las Palmas, Chihuahua, Chih.",
    area: "380 m²",
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    description: "Hermosa residencia con alberca. Diseño moderno y acabados de primera en zona residencial premium.",
    nearbyPlaces: ["Galerías Chihuahua - 3km", "Colegios privados - 1km", "Parque Metropolitano - 2.5km"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
    ],
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=500",
    alt: "Cocina moderna",
    height: "h-80",
    title: "Departamento Punto Panorámico",
    location: "Punto Panorámico, Chihuahua, Chih.",
    area: "180 m²",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    description: "Moderno departamento con cocina de diseño europeo. Ubicación privilegiada con vista a la ciudad.",
    nearbyPlaces: ["Fashion Mall - 1km", "Restaurantes zona dorada - 800m", "Hospital Star Médica - 1.5km"],
    gallery: [
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
    ],
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500",
    alt: "Sala de estar contemporánea",
    height: "h-72",
    title: "Casa Residencial Cantera",
    location: "Residencial Cantera, Chihuahua, Chih.",
    area: "220 m²",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    description: "Elegante casa en residencial privado con áreas verdes. Diseño interior contemporáneo y funcional.",
    nearbyPlaces: ["Walmart Cantera - 1.5km", "Gimnasios - 500m", "Escuelas zona sur - 1km"],
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
      "https://images.unsplash.com/photo-1600210492507-ede44f76d50d?w=800",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800",
    ],
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500",
    alt: "Casa con acabados de lujo",
    height: "h-64",
    title: "Residencia Hacienda del Bosque",
    location: "Hacienda del Bosque, Chihuahua, Chih.",
    area: "420 m²",
    bedrooms: 5,
    bathrooms: 4,
    parking: 3,
    description: "Casa de lujo en zona residencial exclusiva. Acabados premium y domótica integrada.",
    nearbyPlaces: ["Universidad La Salle - 2km", "Centro Médico - 1.8km", "Plaza comercial - 1.2km"],
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800",
      "https://images.unsplash.com/photo-1600047508788-786d503d2c5f?w=800",
    ],
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=500",
    alt: "Dormitorio principal",
    height: "h-96",
    title: "Suite Real del Bosque",
    location: "Real del Bosque, Chihuahua, Chih.",
    area: "350 m²",
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    description: "Residencia con master suite de ensueño. Walking closet y baño tipo spa con acabados de mármol.",
    nearbyPlaces: ["Country Club Chihuahua - 1km", "Colegios bilingües - 800m", "Torres Cantera - 2km"],
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800",
      "https://images.unsplash.com/photo-1616594266467-1b265d12ab8d?w=800",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800",
    ],
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500",
    alt: "Casa estilo arquitectónico",
    height: "h-80",
    title: "Casa Arquitectónica El Palomar",
    location: "Residencial El Palomar, Chihuahua, Chih.",
    area: "390 m²",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    description: "Obra maestra arquitectónica en zona residencial premium. Diseño galardonado por arquitectos locales.",
    nearbyPlaces: ["Plaza del Valle - 1.5km", "Parque Lerdo - 2km", "Zona restaurantes - 1km"],
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      "https://images.unsplash.com/photo-1600566752734-fb0e8e09700e?w=800",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
    ],
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=500",
    alt: "Exterior de casa moderna",
    height: "h-72",
    title: "Casa Valle de los Olivos",
    location: "Valle de los Olivos, Chihuahua, Chih.",
    area: "310 m²",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    description: "Casa moderna en zona tranquila y arbolada. Perfecta para familias que buscan seguridad y tranquilidad.",
    nearbyPlaces: ["Sam's Club - 2km", "Colegios - 1.2km", "Clínica del Norte - 1.5km"],
    gallery: [
      "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=800",
      "https://images.unsplash.com/photo-1600563438966-a2a89da44206?w=800",
      "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=800",
    ],
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500",
    alt: "Casa con terraza",
    height: "h-64",
    title: "Penthouse Terraza Puerta de Hierro",
    location: "Puerta de Hierro, Chihuahua, Chih.",
    area: "250 m²",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    description: "Increíble penthouse con roof garden privado. Vista 360° de Chihuahua y la sierra.",
    nearbyPlaces: ["Plaza Universidad - 800m", "Zona restaurantes - 500m", "Catedral de Chihuahua - 3km"],
    gallery: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800",
      "https://images.unsplash.com/photo-1600585152974-a7c67eefc5ff?w=800",
    ],
  },
];

const categories = ["Todas", "Exteriores", "Interiores", "Cocinas", "Baños", "Jardines"];

type ImageData = typeof galleryImages[0];

export default function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16 bg-linear-to-br from-[#1a1a1a] to-[#2d2d2d]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Galería de <span className="text-[#c9a96e]">Proyectos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Explora nuestra colección de diseños y construcciones que transforman espacios en hogares soñados
          </motion.p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#c9a96e] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galería Masonry */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid mb-4"
                onClick={() => {
                  setSelectedImage(image);
                  setCurrentGalleryIndex(0);
                }}
              >
                <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className={`relative ${image.height} w-full`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium">
                        {image.title}
                      </p>
                      <p className="text-white/80 text-xs mt-1">
                        <MapPin className="inline w-3 h-3 mr-1" />
                        {image.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Detalle */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón Cerrar */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors z-10"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              {/* Galería de Imágenes */}
              <div className="relative h-100 bg-gray-900">
                <Image
                  src={selectedImage.gallery[currentGalleryIndex]}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                
                {/* Navegación de Galería */}
                {selectedImage.gallery.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentGalleryIndex((prev) =>
                          prev === 0 ? selectedImage.gallery.length - 1 : prev - 1
                        );
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentGalleryIndex((prev) =>
                          prev === selectedImage.gallery.length - 1 ? 0 : prev + 1
                        );
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    {/* Indicadores */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedImage.gallery.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentGalleryIndex(idx);
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentGalleryIndex ? "bg-white w-6" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Contenido */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-[#c9a96e] text-lg mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {selectedImage.location}
                </p>

                {/* Especificaciones */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Ruler className="w-6 h-6 text-[#c9a96e]" />
                    <div>
                      <p className="text-sm text-gray-600">Área</p>
                      <p className="font-semibold text-gray-900">{selectedImage.area}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Bed className="w-6 h-6 text-[#c9a96e]" />
                    <div>
                      <p className="text-sm text-gray-600">Recámaras</p>
                      <p className="font-semibold text-gray-900">{selectedImage.bedrooms}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Bath className="w-6 h-6 text-[#c9a96e]" />
                    <div>
                      <p className="text-sm text-gray-600">Baños</p>
                      <p className="font-semibold text-gray-900">{selectedImage.bathrooms}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Car className="w-6 h-6 text-[#c9a96e]" />
                    <div>
                      <p className="text-sm text-gray-600">Estacionamiento</p>
                      <p className="font-semibold text-gray-900">{selectedImage.parking}</p>
                    </div>
                  </div>
                </div>

                {/* Descripción */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Home className="w-5 h-5 text-[#c9a96e]" />
                    Descripción
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>

                {/* Lugares Cercanos */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-[#c9a96e]" />
                    Lugares Cercanos
                  </h3>
                  <ul className="space-y-2">
                    {selectedImage.nearbyPlaces.map((place, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-[#c9a96e] rounded-full"></span>
                        {place}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <a
                    href="/agenda"
                    className="flex-1 px-6 py-3 bg-[#c9a96e] text-white text-center font-semibold rounded-lg hover:bg-[#b8914a] transition-colors"
                  >
                    Agendar Visita
                  </a>
                  <a
                    href="/contacto"
                    className="flex-1 px-6 py-3 bg-gray-200 text-gray-900 text-center font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Más Información
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-linear-to-br from-[#c9a96e] to-[#b8914a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para crear tu proyecto?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Agenda una cita con nosotros y haz realidad el espacio que siempre has soñado
          </p>
          <a
            href="/agenda"
            className="inline-block px-8 py-4 bg-white text-[#c9a96e] text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Agendar Consulta
          </a>
        </div>
      </section>
    </main>
  );
}
