/**
 * 🎬 Page Transition Component
 * 
 * Transiciones suaves entre páginas en Next.js
 * Fade in/out elegante al cambiar de ruta
 * 
 * Uso: Envolver {children} en layout.tsx
 */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { TIMING, EASING } from "@/lib/animation-config";
import { usePrefersReducedMotion } from "@/hooks/useAnimations";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Transición básica - Fade
 */
export default function PageTransition({ 
  children,
  className = "",
}: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Si el usuario prefiere movimiento reducido, no animar
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: TIMING.slow,
          ease: EASING.premium,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Transición con movimiento vertical
 */
export function PageTransitionSlide({ 
  children,
  className = "",
}: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: TIMING.slow,
          ease: EASING.premium,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Transición premium con blur
 */
export function PageTransitionBlur({ 
  children,
  className = "",
}: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ 
          opacity: 0, 
          filter: "blur(10px)",
          scale: 0.98,
        }}
        animate={{ 
          opacity: 1, 
          filter: "blur(0px)",
          scale: 1,
        }}
        exit={{ 
          opacity: 0, 
          filter: "blur(10px)",
          scale: 0.98,
        }}
        transition={{
          duration: TIMING.slow,
          ease: EASING.cinematic,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Transición con scale (zoom sutil)
 */
export function PageTransitionScale({ 
  children,
  className = "",
}: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{
          duration: TIMING.slow,
          ease: EASING.premium,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
