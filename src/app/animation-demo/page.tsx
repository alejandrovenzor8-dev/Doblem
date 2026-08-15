/**
 * 🎨 Página de Demostración de Animaciones Premium
 * 
 * Esta página muestra todos los patrones de animación implementados
 * Útil para testing y como referencia visual
 * 
 * Para ver: Navega a /animation-demo
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  fadeIn,
  fadeInUp,
  fadeInBlur,
  fadeInScale,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
  buttonPrimary,
  cardHover,
  imageZoom,
  modal,
  pulse,
  glowPulse,
  shakeError,
  checkmarkPath,
  spinner,
  TIMING,
  EASING,
} from "@/lib/animation-config";
import { 
  useScrollReveal, 
  usePrefersReducedMotion,
  useAnimatedCounter,
} from "@/hooks/useAnimations";
import { AnimatedSection, AnimatedGrid, AnimatedGridItem } from "@/components/AnimatedSection";
import { Check, X, Star, Heart, Zap } from "lucide-react";

export default function AnimationDemo() {
  const [showModal, setShowModal] = useState(false);
  const [buttonState, setButtonState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref: counterRef, count } = useAnimatedCounter(70, 2000);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-32">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: TIMING.lazy, ease: EASING.cinematic }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">
            🎨 Animation <span className="text-[#c9a96e]">Showcase</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Demostración de todas las animaciones premium implementadas
          </p>
          {prefersReducedMotion && (
            <motion.div
              variants={fadeIn}
              className="mt-4 p-4 bg-blue-50 text-blue-700 rounded-lg"
            >
              ⚠️ Tienes activado "Reducir movimiento". Las animaciones están deshabilitadas.
            </motion.div>
          )}
        </motion.div>

        {/* 1. Fade Variants */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Fade Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 bg-white rounded-xl shadow-md"
            >
              <h3 className="font-bold mb-2">Fade In</h3>
              <p className="text-gray-600 text-sm">Simple opacity fade</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 bg-white rounded-xl shadow-md"
            >
              <h3 className="font-bold mb-2">Fade In Up</h3>
              <p className="text-gray-600 text-sm">Con movimiento desde abajo</p>
            </motion.div>

            <motion.div
              variants={fadeInBlur}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 bg-white rounded-xl shadow-md"
            >
              <h3 className="font-bold mb-2">Fade In Blur</h3>
              <p className="text-gray-600 text-sm">Con efecto blur premium</p>
            </motion.div>

          </div>
        </section>

        {/* 2. Stagger Animations */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Stagger Effects</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                variants={staggerItem}
                className="p-6 bg-gradient-to-br from-[#c9a96e] to-[#d4af6a] text-white rounded-lg text-center font-bold text-2xl"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 3. Button Interactions */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Button Interactions</h2>
          <div className="flex flex-wrap justify-center gap-4">
            
            {/* Primary Button */}
            <motion.button
              variants={buttonPrimary}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-4 bg-[#c9a96e] text-white font-semibold rounded-lg shadow-lg"
            >
              Primary Button
            </motion.button>

            {/* Button with Glow */}
            <motion.button
              variants={glowPulse}
              animate="animate"
              className="px-8 py-4 bg-gradient-to-r from-[#c9a96e] to-[#d4af6a] text-white font-semibold rounded-lg"
            >
              Pulsing Glow
            </motion.button>

            {/* Loading States */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setButtonState('loading');
                setTimeout(() => setButtonState('success'), 2000);
                setTimeout(() => setButtonState('idle'), 4000);
              }}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {buttonState === 'idle' && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Click Me
                  </motion.span>
                )}
                {buttonState === 'loading' && (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      variants={spinner}
                      animate="animate"
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Loading...
                  </motion.span>
                )}
                {buttonState === 'success' && (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check size={20} />
                    Success!
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

          </div>
        </section>

        {/* 4. Card Hover Effects */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Card Hover Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                variants={cardHover}
                initial="initial"
                whileHover="hover"
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-400"
              >
                {/* Image with zoom */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#c9a96e]/20 to-[#d4af6a]/20">
                  <motion.div
                    variants={imageZoom}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <Star className="text-[#c9a96e]" size={64} />
                  </motion.div>
                  
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6"
                  >
                    <span className="text-white font-semibold">Ver más →</span>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Card Premium {item}</h3>
                  <p className="text-gray-600">
                    Hover para ver el efecto de elevación y zoom
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* 5. Scroll Reveals with AnimatedSection */}
        <AnimatedSection blur>
          <h2 className="text-3xl font-bold mb-8 text-center">Scroll Reveal Components</h2>
          <AnimatedGrid className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[Heart, Star, Zap, Check].map((Icon, i) => (
              <AnimatedGridItem key={i}>
                <div className="p-8 bg-white rounded-xl text-center">
                  <Icon className="mx-auto mb-4 text-[#c9a96e]" size={48} />
                  <h3 className="font-bold">Item {i + 1}</h3>
                </div>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>
        </AnimatedSection>

        {/* 6. Modal */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Modal Transition</h2>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-[#c9a96e] text-white font-semibold rounded-lg"
            >
              Abrir Modal Premium
            </motion.button>
          </div>

          <AnimatePresence>
            {showModal && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowModal(false)}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
                >
                  {/* Modal */}
                  <motion.div
                    variants={modal}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold">Modal Premium</h3>
                      <button
                        onClick={() => setShowModal(false)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X size={24} />
                      </button>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Este modal usa animaciones suaves con backdrop blur para un efecto premium.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowModal(false)}
                      className="w-full py-3 bg-[#c9a96e] text-white font-semibold rounded-lg"
                    >
                      Entendido
                    </motion.button>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </section>

        {/* 7. Animated Counter */}
        <section ref={counterRef}>
          <h2 className="text-3xl font-bold mb-8 text-center">Animated Counter</h2>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block p-12 bg-gradient-to-br from-[#c9a96e] to-[#d4af6a] rounded-2xl text-white"
            >
              <div className="text-6xl font-bold mb-2">{count}</div>
              <div className="text-xl">Proyectos Realizados</div>
            </motion.div>
          </div>
        </section>

        {/* 8. SVG Path Animation */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">SVG Path Animation</h2>
          <div className="flex justify-center">
            <motion.svg
              width="100"
              height="100"
              viewBox="0 0 50 50"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.circle
                cx="25"
                cy="25"
                r="20"
                stroke="#c9a96e"
                strokeWidth="2"
                fill="none"
                variants={{
                  hidden: { pathLength: 0 },
                  visible: { 
                    pathLength: 1,
                    transition: { duration: 2, ease: "easeInOut" }
                  }
                }}
              />
              <motion.path
                d="M15 25l7 7 13-13"
                fill="none"
                stroke="#c9a96e"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={checkmarkPath}
              />
            </motion.svg>
          </div>
        </section>

        {/* 9. Micro-interactions */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Micro-interactions</h2>
          <div className="flex justify-center gap-6">
            
            {/* Icon hover */}
            <motion.div
              whileHover={{ 
                scale: 1.2, 
                rotate: 10,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-[#c9a96e]/10 rounded-xl flex items-center justify-center cursor-pointer"
            >
              <Heart className="text-[#c9a96e]" size={32} />
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.2, 
                rotate: -10,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-[#c9a96e]/10 rounded-xl flex items-center justify-center cursor-pointer"
            >
              <Star className="text-[#c9a96e]" size={32} />
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.2, 
                rotate: 10,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-[#c9a96e]/10 rounded-xl flex items-center justify-center cursor-pointer"
            >
              <Zap className="text-[#c9a96e]" size={32} />
            </motion.div>

          </div>
        </section>

        {/* 10. Timing Comparison */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Timing Variations</h2>
          <div className="space-y-4">
            {[
              { label: 'Instant (150ms)', duration: TIMING.instant },
              { label: 'Fast (200ms)', duration: TIMING.fast },
              { label: 'Normal (300ms)', duration: TIMING.normal },
              { label: 'Slow (400ms)', duration: TIMING.slow },
              { label: 'Lazy (600ms)', duration: TIMING.lazy },
              { label: 'Cinematic (800ms)', duration: TIMING.cinematic },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: item.duration, ease: EASING.premium }}
                className="p-4 bg-white rounded-lg shadow-md"
              >
                <span className="font-semibold">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center py-12 border-t"
        >
          <p className="text-gray-600">
            🎨 Sistema de animaciones premium para DobleM Diseño y Construcción
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Scroll para ver más animaciones en acción
          </p>
        </motion.div>

      </div>
    </div>
  );
}
