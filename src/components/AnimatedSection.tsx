/**
 * 🎨 Componente AnimatedSection
 * 
 * Wrapper reutilizable para secciones con scroll reveal
 * Aplica animaciones premium automáticamente
 */

'use client';

import { motion, type Variants } from 'framer-motion';
import { useScrollReveal, useScrollRevealSimple, usePrefersReducedMotion } from '@/hooks/useAnimations';
import { type ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  blur?: boolean; // Si usar efecto blur (más premium pero más pesado)
}

/**
 * Sección con scroll reveal automático
 * 
 * @example
 * <AnimatedSection blur delay={0.2}>
 *   <h2>Título</h2>
 *   <p>Contenido...</p>
 * </AnimatedSection>
 */
export const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.2,
  triggerOnce = true,
  blur = false,
}: AnimatedSectionProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  
  // Elegir hook según si queremos blur o no
  const { ref, inView, variants } = blur 
    ? useScrollReveal(threshold, triggerOnce, delay)
    : useScrollRevealSimple(threshold, triggerOnce, delay);

  // Si el usuario prefiere movimiento reducido, no animar
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Grid con stagger animation
 * Ideal para cards, propiedades, galería, etc.
 */
interface AnimatedGridProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
}

export const AnimatedGrid = ({
  children,
  className = '',
  staggerDelay = 0.1,
  threshold = 0.1,
}: AnimatedGridProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, inView } = useScrollRevealSimple(threshold, true);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      }
    }
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Item individual para AnimatedGrid
 * Se debe usar como hijo directo de AnimatedGrid
 */
interface AnimatedGridItemProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedGridItem = ({
  children,
  className = '',
}: AnimatedGridItemProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }
    }
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
