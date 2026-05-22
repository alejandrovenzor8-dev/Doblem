/**
 * 🎨 EJEMPLO: Layout con Sistema de Animaciones Premium
 * 
 * Este es un ejemplo de referencia mostrando cómo integrar
 * el sistema completo de animaciones en tu layout principal.
 * 
 * Características incluidas:
 * - Scroll Progress Bar
 * - Page Transitions
 * - WhatsApp Button Premium
 * - Configuración de fuentes optimizada
 * - Meta tags para SEO
 * 
 * NOTA: Esto es un EJEMPLO, no reemplaces tu layout directamente.
 * Copia solo las partes que necesites.
 */

import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Componentes de animación
import { ScrollProgressGold } from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import WhatsAppButtonPremium from "@/components/WhatsAppButtonPremium";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configuración de fuentes con display optimizado
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap", // Mejor performance
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Metadata para SEO
export const metadata: Metadata = {
  title: "DobleM Diseño y Construcción | Arquitectura Premium en Chihuahua",
  description: "Más de 15 años creando proyectos arquitectónicos de lujo. Diseño, construcción y remodelación con los más altos estándares.",
  keywords: ["arquitectura", "construcción", "diseño", "chihuahua", "bienes raíces", "propiedades premium"],
  openGraph: {
    title: "DobleM Diseño y Construcción",
    description: "Proyectos arquitectónicos de lujo en Chihuahua",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="es" 
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect para optimizar carga de fuentes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Viewport optimizado para mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Theme color para navegadores móviles */}
        <meta name="theme-color" content="#c9a96e" />
      </head>
      
      <body 
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        {/* 📊 Scroll Progress Bar */}
        <ScrollProgressGold />

        {/* 🧭 Navbar (siempre visible) */}
        <Navbar />

        {/* 🎬 Page Transitions */}
        <PageTransition>
          <main className="min-h-screen">
            {children}
          </main>
        </PageTransition>

        {/* 🦶 Footer */}
        <Footer />

        {/* 📱 WhatsApp Button */}
        <WhatsAppButtonPremium
          phoneNumber="5216141234567"
          message="Hola DobleM, me interesa obtener más información sobre sus servicios"
          position="bottom-right"
          showTooltip={true}
        />

        {/* Script para smooth scroll (opcional) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Smooth scroll para links internos
              document.addEventListener('click', (e) => {
                const target = e.target.closest('a[href^="#"]');
                if (target) {
                  e.preventDefault();
                  const element = document.querySelector(target.getAttribute('href'));
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}

/**
 * VARIANTES DE LAYOUT SEGÚN NECESIDADES:
 */

// 1. Con Page Transition más dramática (blur effect)
/*
import { PageTransitionBlur } from "@/components/PageTransition";

<PageTransitionBlur>
  <main>{children}</main>
</PageTransitionBlur>
*/

// 2. Con Scroll Progress simple (sin gradiente)
/*
import ScrollProgress from "@/components/ScrollProgress";

<ScrollProgress 
  color="#c9a96e"
  height={2}
  showOnScroll={true}
/>
*/

// 3. Sin WhatsApp button en ciertas páginas
/*
<WhatsAppButtonPremium
  phoneNumber="5216141234567"
  // Solo mostrar en páginas específicas
  {pathname !== '/contacto' && (
    <WhatsAppButtonPremium ... />
  )}
/>
*/

// 4. Con loading state global (opcional)
/*
'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const [isLoading, setIsLoading] = useState(false);
const pathname = usePathname();

useEffect(() => {
  setIsLoading(true);
  const timeout = setTimeout(() => setIsLoading(false), 500);
  return () => clearTimeout(timeout);
}, [pathname]);

{isLoading && <LoadingSpinner />}
*/
