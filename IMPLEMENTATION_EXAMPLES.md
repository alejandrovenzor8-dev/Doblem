# 🎯 Ejemplos de Implementación - DobleM

Guía práctica para implementar animaciones premium en los componentes existentes.

---

## 📋 TABLA DE CONTENIDOS

1. [Navbar Premium](#navbar-premium)
2. [Hero Section Mejorado](#hero-section-mejorado)
3. [PropertiesSection con Animaciones](#propertiessection-con-animaciones)
4. [ServicesSection Scroll Reveal](#servicessection-scroll-reveal)
5. [Cards de Propiedades Premium](#cards-de-propiedades-premium)
6. [Formularios Elegantes](#formularios-elegantes)
7. [Comparador de Propiedades](#comparador-de-propiedades)

---

## 1. NAVBAR PREMIUM

### Mejoras Sugeridas para `Navbar.tsx`

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { TIMING, EASING } from "@/lib/animation-config";

// ... tus navLinks existentes ...

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar mejorado con animación de entrada */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: TIMING.slow,
          ease: EASING.entrance,
          delay: 0.1,
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl shadow-lg border-b border-[#d4d4d4]"
            : "bg-transparent"
        }`}
        style={{
          height: scrolled ? '70px' : '80px',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-[#1a1a1a]" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                Doble<span className="text-[#c9a96e]">M</span>
              </motion.span>
              <span
                className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                  scrolled ? "text-[#6b7280]" : "text-white/80"
                }`}
              >
                Diseño y Construcción
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group"
                >
                  <span
                    className={`text-sm font-medium transition-colors duration-200 ${
                      scrolled
                        ? "text-[#1a1a1a] hover:text-[#c9a96e]"
                        : "text-white hover:text-[#c9a96e]"
                    }`}
                  >
                    {link.label}
                  </span>
                  
                  {/* Underline animado premium */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-[#c9a96e] to-[#d4af6a]"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: EASING.premium }}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Premium */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop con blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{
                duration: TIMING.slow,
                ease: EASING.premium,
              }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl z-50 p-8 pt-24"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.08,
                    duration: TIMING.normal,
                    ease: EASING.entrance,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-lg font-medium text-[#1a1a1a] hover:text-[#c9a96e] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
```

---

## 2. HERO SECTION MEJORADO

### Mejoras para `Hero.tsx`

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { 
  TIMING, 
  EASING, 
  staggerContainer, 
  fadeInBlur,
  buttonPrimary 
} from "@/lib/animation-config";

const stats = [
  { value: "70", label: "Proyectos Realizados" },
  { value: "10", label: "Años de Experiencia" },
  { value: "200+", label: "Clientes Satisfechos" },
  { value: "Chihuahua", label: "México" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background con parallax sutil */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: EASING.cinematic }}
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a2744 50%, #0a0a0a 100%)",
        }}
      />

      {/* Grid overlay con fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full"
      >
        {/* Badge Premium */}
        <motion.div
          variants={fadeInBlur}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-[#c9a96e]/20 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#c9a96e] animate-pulse" />
          <span className="text-sm text-white/80">Premium Real Estate</span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          variants={fadeInBlur}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          style={{ fontFamily: "var(--font-playfair, serif)" }}
        >
          Construimos{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a96e] to-[#d4af6a]">
            Espacios
          </span>
          <br />
          que Inspiran
        </motion.h1>

        {/* Descripción */}
        <motion.p
          variants={fadeInBlur}
          className="text-lg md:text-xl text-white/70 max-w-2xl mb-10"
        >
          10 años de experiencia y 70 proyectos realizados en Chihuahua.
          Diseño, construcción y remodelación con los más altos estándares.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInBlur}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <motion.div
            variants={buttonPrimary}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="/propiedades"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#c9a96e] to-[#d4af6a] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Ver Propiedades
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              Contactar
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats con stagger */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInBlur}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#c9a96e] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-[#c9a96e]" size={32} />
      </motion.div>
    </section>
  );
}
```

---

## 3. PROPERTIESSECTION CON ANIMACIONES

```tsx
"use client";

import { motion } from "framer-motion";
import { AnimatedSection, AnimatedGrid, AnimatedGridItem } from "@/components/AnimatedSection";
import { cardHover, imageZoom } from "@/lib/animation-config";
import { properties } from "@/data/properties";

export default function PropertiesSection() {
  return (
    <AnimatedSection blur className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Propiedades <span className="text-[#c9a96e]">Destacadas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600"
          >
            Descubre nuestras propiedades premium
          </motion.p>
        </div>

        {/* Grid con stagger */}
        <AnimatedGrid
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.15}
        >
          {properties.slice(0, 6).map((property) => (
            <AnimatedGridItem key={property.id}>
              <motion.div
                variants={cardHover}
                initial="initial"
                whileHover="hover"
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-400"
              >
                {/* Imagen con zoom */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    variants={imageZoom}
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Badge premium */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4 px-3 py-1 bg-[#c9a96e] text-white text-sm font-semibold rounded-full"
                  >
                    Premium
                  </motion.div>

                  {/* Overlay al hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6"
                  >
                    <button className="text-white font-semibold">
                      Ver detalles →
                    </button>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <div className="text-2xl font-bold text-[#c9a96e]">
                    ${property.price.toLocaleString()}
                  </div>
                </div>
              </motion.div>
            </AnimatedGridItem>
          ))}
        </AnimatedGrid>
      </div>
    </AnimatedSection>
  );
}
```

---

## 4. SERVICESSECTION SCROLL REVEAL

```tsx
"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useScrollReveal } from "@/hooks/useAnimations";
import { Home, Hammer, Paintbrush, Building } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Diseño Arquitectónico",
    description: "Proyectos personalizados que reflejan tu estilo",
  },
  {
    icon: Building,
    title: "Construcción",
    description: "Construcción de alta calidad con acabados premium",
  },
  {
    icon: Hammer,
    title: "Remodelación",
    description: "Transformamos espacios existentes",
  },
  {
    icon: Paintbrush,
    title: "Interiorismo",
    description: "Diseño de interiores elegante y funcional",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection blur className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nuestros <span className="text-[#c9a96e]">Servicios</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para todos tus proyectos
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const { ref, inView, variants } = useScrollReveal(0.2, true, index * 0.15);
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative p-8 bg-gray-50 rounded-xl group hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                {/* Borde animado */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c9a96e] to-[#d4af6a] origin-left"
                />

                {/* Icono con animación */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-[#c9a96e]/10 rounded-xl flex items-center justify-center mb-6"
                >
                  <Icon className="text-[#c9a96e]" size={32} />
                </motion.div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

---

## 5. FORMULARIOS ELEGANTES

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";
import { TIMING, EASING } from "@/lib/animation-config";

export default function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className="max-w-2xl mx-auto space-y-6">
      {/* Input con animación premium */}
      <div className="relative">
        <motion.input
          type="text"
          onFocus={() => setFocused('name')}
          onBlur={() => setFocused(null)}
          animate={{
            borderColor: focused === 'name' ? '#c9a96e' : 'rgba(212, 212, 212, 0.5)',
            boxShadow: focused === 'name' 
              ? '0 0 0 3px rgba(201, 169, 110, 0.1)'
              : '0 0 0 0 rgba(201, 169, 110, 0)',
          }}
          transition={{ duration: TIMING.fast, ease: EASING.premium }}
          className="w-full px-4 py-3 border-2 rounded-lg outline-none transition-all"
          placeholder="Nombre completo"
        />

        {/* Success icon */}
        <AnimatePresence>
          {focused === 'name' && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <Check className="text-green-500" size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Submit button con estados */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        animate={{
          backgroundColor: submitted ? '#10b981' : '#c9a96e',
        }}
        className="w-full py-4 bg-[#c9a96e] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        {submitted ? (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2"
          >
            <Check size={20} />
            Enviado con éxito
          </motion.span>
        ) : (
          "Enviar mensaje"
        )}
      </motion.button>
    </form>
  );
}
```

---

## 6. SCROLL PROGRESS BAR

```tsx
// src/components/ScrollProgress.tsx
"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c9a96e] to-[#d4af6a] origin-left z-50"
      style={{ scaleX }}
    />
  );
};
```

**Uso en layout:**
```tsx
import { ScrollProgress } from "@/components/ScrollProgress";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
```

---

## 7. PAGE TRANSITIONS

```tsx
// src/components/PageTransition.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageVariants, pageTransition } from "@/lib/animation-config";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

**Uso en layout:**
```tsx
import PageTransition from "@/components/PageTransition";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
```

---

## 🚀 CHECKLIST DE IMPLEMENTACIÓN

### Paso 1: Instalar dependencias (ya tienes todo)
- [x] framer-motion
- [x] react-intersection-observer

### Paso 2: Agregar archivos creados
- [x] `src/lib/animation-config.ts`
- [x] `src/hooks/useAnimations.ts`
- [x] `src/components/AnimatedSection.tsx`

### Paso 3: Implementar gradualmente
1. [ ] Actualizar Navbar con animaciones de entrada
2. [ ] Mejorar Hero con blur effects
3. [ ] Agregar AnimatedSection a secciones principales
4. [ ] Implementar card hover effects en propiedades
5. [ ] Añadir scroll reveal a servicios
6. [ ] Mejorar formularios con focus states
7. [ ] Agregar PageTransition al layout
8. [ ] Implementar ScrollProgress

### Paso 4: Testing
- [ ] Probar en desktop
- [ ] Probar en mobile
- [ ] Verificar rendimiento (60fps)
- [ ] Testear con `prefers-reduced-motion`
- [ ] Validar en diferentes navegadores

---

## 💡 TIPS FINALES

1. **Empezar simple**: Implementa animaciones básicas primero (fade in, hover)
2. **Medir rendimiento**: Usa Chrome DevTools Performance para verificar 60fps
3. **Respetar accesibilidad**: Siempre usar `usePrefersReducedMotion()`
4. **Ser consistente**: Usa los mismos timings en todo el sitio
5. **No exagerar**: Menos animaciones = más impacto

**El objetivo es que el usuario sienta la calidad premium, no que note las animaciones.**

