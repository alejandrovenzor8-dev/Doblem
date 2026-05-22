/**
 * 📊 Scroll Progress Bar
 * 
 * Barra de progreso premium que muestra el avance de lectura
 * Aparece en la parte superior de la página
 * 
 * Uso: Agregar en layout.tsx para que aparezca en todas las páginas
 */

"use client";

import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressProps {
  color?: string;
  height?: number;
  showOnScroll?: boolean; // Mostrar solo después de hacer scroll
}

export default function ScrollProgress({ 
  color = "linear-gradient(90deg, #c9a96e, #d4af6a)",
  height = 3,
  showOnScroll = true,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  
  // Spring para suavizar el movimiento
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] origin-left"
      style={{
        height: `${height}px`,
        background: color,
        scaleX: scaleX,
        opacity: showOnScroll ? scrollYProgress : 1,
      }}
    />
  );
}

/**
 * Variante con gradiente dorado premium
 */
export function ScrollProgressGold() {
  return (
    <ScrollProgress 
      color="linear-gradient(90deg, #c9a96e 0%, #d4af6a 50%, #c9a96e 100%)"
      height={2}
    />
  );
}

/**
 * Variante con efecto glow
 */
export function ScrollProgressGlow() {
  return (
    <motion.div className="fixed top-0 left-0 right-0 z-[100]">
      <ScrollProgress height={3} />
      <motion.div
        className="absolute top-0 left-0 right-0 h-6 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(201,169,110,0.2) 0%, transparent 100%)",
          scaleX: useSpring(useScroll().scrollYProgress, {
            stiffness: 100,
            damping: 30,
          }),
          originX: 0,
        }}
      />
    </motion.div>
  );
}
