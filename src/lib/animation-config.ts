/**
 * 🎨 Configuración de Animaciones Premium - DobleM
 * 
 * Sistema de animaciones elegante, minimalista y moderno
 * Inspirado en: Apple, Zillow, Sotheby's International Realty
 */

import { type Variants, type Transition } from 'framer-motion';

// ⏱️ TIEMPOS DE ANIMACIÓN
export const TIMING = {
  instant: 0.15,     // Feedback inmediato (150ms)
  fast: 0.2,         // Hover, botones (200ms)
  normal: 0.3,       // Transiciones estándar (300ms)
  slow: 0.4,         // Entradas cinematográficas (400ms)
  lazy: 0.6,         // Scroll reveals, secciones grandes (600ms)
  cinematic: 0.8,    // Efectos hero premium (800ms)
} as const;

// 🎯 STAGGER (Delay entre elementos)
export const STAGGER = {
  fast: 0.05,        // Items rápidos
  normal: 0.1,       // Estándar
  slow: 0.15,        // Cards grandes
  lazy: 0.2,         // Secciones completas
} as const;

// 📈 EASING CURVES PREMIUM (Apple-style)
export const EASING = {
  // Easing principal - suave y elegante
  premium: [0.4, 0, 0.2, 1] as const,
  
  // Entradas (aparición)
  entrance: [0, 0, 0.2, 1] as const,
  
  // Salidas (desaparición)
  exit: [0.4, 0, 1, 1] as const,
  
  // Ultra suave
  smooth: [0.43, 0.13, 0.23, 0.96] as const,
  
  // Con un poco de personalidad (usar con moderación)
  snappy: [0.34, 1.56, 0.64, 1] as const,
  
  // Para movimientos largos y cinematográficos
  cinematic: [0.25, 0.46, 0.45, 0.94] as const,
} as const;

// 🎭 VARIANTES DE ANIMACIÓN - PRESETS REUTILIZABLES

/**
 * Fade In simple
 */
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: TIMING.slow, 
      ease: EASING.premium 
    }
  }
};

/**
 * Fade In desde abajo (scroll reveals)
 */
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: TIMING.lazy, 
      ease: EASING.cinematic 
    }
  }
};

/**
 * Fade In con blur (efecto premium cinematográfico)
 */
export const fadeInBlur: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: 'blur(8px)',
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: { 
      duration: TIMING.cinematic, 
      ease: EASING.cinematic 
    }
  }
};

/**
 * Fade In con escala (cards, modals)
 */
export const fadeInScale: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: TIMING.slow, 
      ease: EASING.entrance 
    }
  }
};

/**
 * Slide desde la izquierda
 */
export const slideInLeft: Variants = {
  hidden: { 
    x: -100, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: TIMING.slow, 
      ease: EASING.premium 
    }
  }
};

/**
 * Slide desde la derecha
 */
export const slideInRight: Variants = {
  hidden: { 
    x: 100, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: TIMING.slow, 
      ease: EASING.premium 
    }
  }
};

/**
 * Stagger container (para listas de items)
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.normal,
      delayChildren: 0.1,
    }
  }
};

/**
 * Stagger item (hijo del container)
 */
export const staggerItem: Variants = {
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

// 🔘 VARIANTES PARA INTERACCIONES

/**
 * Hover para botones primarios
 */
export const buttonPrimary: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: TIMING.fast,
      ease: EASING.premium,
    }
  },
  tap: {
    scale: 0.98,
    transition: { duration: TIMING.instant }
  }
};

/**
 * Hover para cards/propiedades
 */
export const cardHover: Variants = {
  initial: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      duration: TIMING.slow,
      ease: EASING.premium,
    }
  }
};

/**
 * Zoom de imagen dentro de card
 */
export const imageZoom: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.08,
    transition: {
      duration: TIMING.lazy,
      ease: EASING.premium,
    }
  }
};

/**
 * Modal/Lightbox
 */
export const modal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: TIMING.slow,
      ease: EASING.entrance,
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: TIMING.normal,
      ease: EASING.exit,
    }
  }
};

/**
 * Menú mobile
 */
export const mobileMenu: Variants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: TIMING.normal,
      ease: EASING.exit,
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: TIMING.slow,
      ease: EASING.entrance,
    }
  }
};

/**
 * Items del menú mobile (con stagger)
 */
export const mobileMenuItem = (index: number): Variants => ({
  closed: {
    x: -20,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      delay: index * STAGGER.fast,
      duration: TIMING.normal,
      ease: EASING.entrance,
    }
  }
});

// 📱 TRANSICIONES PARA NAVEGACIÓN

/**
 * Slide lateral (para comparador, galerías)
 */
export const slideTransition = (direction: number): Variants => ({
  enter: {
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      },
      opacity: { duration: TIMING.normal }
    }
  },
  exit: {
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: {
      duration: TIMING.normal,
      ease: EASING.exit,
    }
  }
});

// 🎨 EFECTOS ESPECIALES

/**
 * Pulse suave (para highlights)
 */
export const pulse: Variants = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
};

/**
 * Glow pulsante (para elementos importantes)
 */
export const glowPulse: Variants = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(201,169,110,0.3)',
      '0 0 40px rgba(201,169,110,0.5)',
      '0 0 20px rgba(201,169,110,0.3)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
};

/**
 * Shake para errores (muy sutil)
 */
export const shakeError: Variants = {
  shake: {
    x: [-4, 4, -4, 4, 0],
    transition: {
      duration: TIMING.slow,
    }
  }
};

/**
 * Success checkmark path animation
 */
export const checkmarkPath: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        type: "spring",
        duration: TIMING.lazy,
        bounce: 0,
      },
      opacity: { duration: TIMING.fast }
    }
  }
};

// 🔄 LOADING STATES

/**
 * Spinner rotation
 */
export const spinner: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    }
  }
};

/**
 * Skeleton loading shimmer
 */
export const skeletonShimmer: Variants = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    }
  }
};

// 📐 SCROLL ANIMATIONS

/**
 * Scroll reveal básico
 */
export const scrollReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: TIMING.lazy, 
      ease: EASING.cinematic 
    }
  }
};

/**
 * Scroll reveal con blur
 */
export const scrollRevealBlur: Variants = {
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
      ease: EASING.cinematic 
    }
  }
};

// 🎭 TRANSICIONES DE PÁGINA

/**
 * Page transition - fade
 */
export const pageTransition: Transition = {
  duration: TIMING.slow,
  ease: EASING.premium,
};

/**
 * Page variants
 */
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  }
};

// 🎨 UTILIDADES

/**
 * Crear delay personalizado
 */
export const withDelay = (variants: Variants, delay: number): Variants => {
  const newVariants = { ...variants };
  if (newVariants.visible && typeof newVariants.visible === 'object') {
    newVariants.visible = {
      ...newVariants.visible,
      transition: {
        ...(newVariants.visible as any).transition,
        delay,
      }
    };
  }
  return newVariants;
};

/**
 * Crear stagger personalizado
 */
export const createStaggerContainer = (staggerDelay: number): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    }
  }
});

export default {
  TIMING,
  STAGGER,
  EASING,
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
  mobileMenu,
  mobileMenuItem,
  slideTransition,
  pulse,
  glowPulse,
  shakeError,
  checkmarkPath,
  spinner,
  skeletonShimmer,
  scrollReveal,
  scrollRevealBlur,
  pageTransition,
  pageVariants,
  withDelay,
  createStaggerContainer,
};
