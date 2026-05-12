import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "DobleM Diseño y Construcción | Inmuebles Premium en Chihuahua",
  description:
    "DobleM Diseño y Construcción: empresa líder en venta de inmuebles premium, construcción residencial y diseño personalizado en Chihuahua, México. 15 años de experiencia.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
