import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VirtualAssistant from "@/components/assistant/VirtualAssistant";
import { COMPANY } from "@/data/assistantConstants";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.name,
  url: "https://www.xn--doblemdiseoyconstruccion-9kc.com",
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Torre Azenzo, Paseos Vista del Sol 6803, Piso 16, Torre A, Oficina 02",
    addressLocality: "Chihuahua",
    addressRegion: "Chihuahua",
    postalCode: "31207",
    addressCountry: "MX",
  },
  sameAs: [COMPANY.instagramUrl, COMPANY.facebookUrl],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xn--doblemdiseoyconstruccion-9kc.com"),
  title: "DobleM Diseño y Construcción | Inmuebles Premium en Chihuahua",
  description:
    "DobleM Diseño y Construcción: empresa líder en venta de inmuebles premium, construcción residencial y diseño personalizado en Chihuahua, México. 10 años de experiencia y 70 proyectos realizados.",
  keywords:
    "inmuebles, casas, construcción, diseño, Chihuahua, México, DobleM, propiedades premium",
  openGraph: {
    title: "DobleM Diseño y Construcción",
    description: "Construimos el hogar de tus sueños en Chihuahua, México.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Fonts loaded via <link> for compatibility; in production consider next/font/google for automatic optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <VirtualAssistant />
      </body>
    </html>
  );
}
