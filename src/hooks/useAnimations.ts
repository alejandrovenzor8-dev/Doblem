/**
 * 🎨 Hooks Personalizados para Animaciones Premium
 */

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useScroll, useTransform, type MotionValue } from 'framer-motion';
import { TIMING, EASING, type Variants } from '@/lib/animation-config';

/**
 * Hook para detectar preferencias de movimiento reducido
 * Respeta las preferencias de accesibilidad del usuario
 */
export const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
};

/**
 * Hook para scroll reveal con configuración personalizable
 * 
 * @param threshold - Porcentaje del elemento visible para activar (0-1)
 * @param triggerOnce - Si solo debe activarse una vez
 * @param delay - Delay antes de animar (segundos)
 * @returns { ref, inView, variants }
 */
export const useScrollReveal = (
  threshold = 0.2,
  triggerOnce = true,
  delay = 0
) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      filter: 'blur(10px)',
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: TIMING.lazy,
        delay,
        ease: EASING.cinematic,
      }
    }
  };

  return { ref, inView, variants };
};

/**
 * Hook para scroll reveal simple (sin blur)
 */
export const useScrollRevealSimple = (
  threshold = 0.2,
  triggerOnce = true,
  delay = 0
) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: TIMING.lazy,
        delay,
        ease: EASING.cinematic,
      }
    }
  };

  return { ref, inView, variants };
};

/**
 * Hook para parallax suave
 * 
 * @param offset - Cantidad de desplazamiento [inicio, fin]
 * @returns MotionValue para usar en style={{ y }}
 */
export const useParallax = (offset = 100): MotionValue<number> => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);
  return y;
};

/**
 * Hook para scroll progress (barra de progreso de lectura)
 */
export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
};

/**
 * Hook para detectar tamaño de pantalla
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const handler = () => setMatches(media.matches);
    media.addEventListener('change', handler);
    
    return () => media.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

/**
 * Hook para animaciones adaptativas según dispositivo
 */
export const useResponsiveAnimation = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const prefersReducedMotion = usePrefersReducedMotion();

  const getScale = (desktopScale: number, mobileScale: number) => {
    if (prefersReducedMotion) return 1;
    return isMobile ? mobileScale : desktopScale;
  };

  const getDuration = (desktopDuration: number, mobileDuration: number) => {
    if (prefersReducedMotion) return 0;
    return isMobile ? mobileDuration : desktopDuration;
  };

  return {
    isMobile,
    prefersReducedMotion,
    getScale,
    getDuration,
  };
};

/**
 * Hook para contador animado
 * Útil para stats, números, etc.
 */
export const useAnimatedCounter = (
  end: number,
  duration = 2000,
  start = 0
) => {
  const [count, setCount] = useState(start);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - start) + start));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration, start]);

  return { ref, count };
};

/**
 * Hook para stagger container dinámico
 */
export const useStaggerAnimation = (itemCount: number, staggerDelay = 0.1) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: TIMING.slow, 
        ease: EASING.premium 
      }
    }
  };

  return {
    ref,
    inView,
    containerVariants,
    itemVariants,
  };
};

/**
 * Hook para hover state con delay
 */
export const useHoverDelay = (delay = 200) => {
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => setIsHovered(true), delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsHovered(false);
  };

  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default {
  usePrefersReducedMotion,
  useScrollReveal,
  useScrollRevealSimple,
  useParallax,
  useScrollProgress,
  useMediaQuery,
  useResponsiveAnimation,
  useAnimatedCounter,
  useStaggerAnimation,
  useHoverDelay,
};
