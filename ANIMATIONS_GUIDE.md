# 🎨 Guía de Animaciones Premium - DobleM Diseño y Construcción

## 📐 Filosofía de Diseño

### Principios Core
- **Propósito sobre ornamento**: Cada animación debe tener una función
- **Minimalismo elegante**: Menos es más, calidad sobre cantidad
- **Fluidez natural**: Movimientos que imitan la física real
- **Velocidad premium**: Rápido pero no instantáneo (200-400ms)
- **Sutileza sofisticada**: El usuario no debe notar la animación, solo sentirla

---

## ⚙️ Configuración Base

### Tiempos de Animación Recomendados

```typescript
// src/lib/animation-config.ts
export const TIMING = {
  instant: 150,      // Feedback inmediato
  fast: 200,         // Hover, botones
  normal: 300,       // Transiciones estándar
  slow: 400,         // Entradas cinematográficas
  lazy: 600,         // Scroll reveals, secciones grandes
} as const;

export const STAGGER = {
  fast: 0.05,        // Items rápidos
  normal: 0.1,       // Estándar
  slow: 0.15,        // Cards grandes
} as const;
```

### Easing Curves Premium

```typescript
export const EASING = {
  // Apple-style easings
  premium: [0.4, 0, 0.2, 1],           // Suave, elegante
  entrance: [0, 0, 0.2, 1],             // Entrada fluida
  exit: [0.4, 0, 1, 1],                 // Salida rápida
  
  // Easings específicos
  smooth: [0.43, 0.13, 0.23, 0.96],    // Ultra suave
  snappy: [0.34, 1.56, 0.64, 1],       // Con personalidad (usar con moderación)
  
  // Para scroll y movimientos largos
  cinematic: [0.25, 0.46, 0.45, 0.94], // Cinematográfico
} as const;
```

---

## 🧭 1. NAVBAR

### Aparición Inicial
```typescript
// Aparición al cargar - fade in desde arriba
const navbarVariants = {
  hidden: { 
    y: -100, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0, 0, 0.2, 1], // entrance easing
      delay: 0.1, // Ligero delay para que no compita con Hero
    }
  }
};
```

### Transición Sticky (Scroll)
```typescript
// Transición suave cuando hace scroll
const stickyTransition = {
  // Background
  backgroundColor: scrolled ? 'rgba(255,255,255,0.98)' : 'transparent',
  backdropFilter: scrolled ? 'blur(12px)' : 'none',
  
  // Tamaño
  height: scrolled ? '70px' : '80px',
  
  // Sombra progresiva
  boxShadow: scrolled 
    ? '0 4px 24px rgba(0,0,0,0.06)' 
    : '0 0 0 rgba(0,0,0,0)',
    
  transition: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  }
};
```

### Hover en Links - Ultra Sutil
```typescript
// Efecto underline premium
const linkVariants = {
  initial: { 
    scale: 1 
  },
  hover: { 
    scale: 1,
    transition: { duration: 0.2 }
  }
};

// CSS para underline animado
const linkStyles = `
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, #c9a96e, #d4af6a);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover::after {
    width: 100%;
  }
`;
```

### Menú Mobile Premium
```typescript
// Overlay con backdrop blur
const mobileMenuVariants = {
  closed: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1], // exit easing
    }
  },
  open: {
    opacity: 1,
    backdropFilter: 'blur(20px)',
    transition: {
      duration: 0.4,
      ease: [0, 0, 0.2, 1],
    }
  }
};

// Items con stagger
const mobileItemVariants = {
  closed: { 
    x: -20, 
    opacity: 0 
  },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.08, // Stagger rápido
      duration: 0.3,
      ease: [0, 0, 0.2, 1],
    }
  })
};
```

**Implementación Mobile:**
```tsx
<AnimatePresence>
  {mobileOpen && (
    <motion.div
      variants={mobileMenuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="fixed inset-0 bg-white/95"
      style={{ backdropFilter: 'blur(20px)' }}
    >
      {navLinks.map((link, i) => (
        <motion.div
          key={link.href}
          custom={i}
          variants={mobileItemVariants}
          initial="closed"
          animate="open"
        >
          <Link href={link.href}>{link.label}</Link>
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>
```

---

## 🎬 2. HERO SECTION

### Entrada Cinematográfica
```typescript
// Fade in suave y elegante (ya lo tienes bien, mejoramos)
const heroContainerVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // Cinematic
      staggerChildren: 0.15,
      delayChildren: 0.2, // Espera a que navbar aparezca
    }
  }
};

// Items individuales
const heroItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40, // Más sutil que 60
    filter: 'blur(8px)', // Blur effect para efecto premium
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.8, // Más lento para efecto cinematográfico
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  },
};
```

### Título con Efecto de Revelación
```typescript
// Split text animation (letra por letra o palabra por palabra)
const titleVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03, // Muy rápido pero perceptible
    }
  }
};

const letterVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0, 0, 0.2, 1],
    }
  },
};
```

### CTA Button - Hover Premium
```typescript
// Glow sutil + escala mínima
const ctaVariants = {
  initial: { 
    scale: 1,
    boxShadow: '0 4px 16px rgba(201,169,110,0.3)',
  },
  hover: { 
    scale: 1.02, // Muy sutil
    boxShadow: '0 8px 32px rgba(201,169,110,0.5)',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    }
  },
  tap: {
    scale: 0.98, // Sensación de presión
    transition: { duration: 0.1 }
  }
};
```

### Background con Parallax Sutil
```typescript
// Parallax muy ligero en scroll
const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 500], [0, 150]); // Movimiento sutil

<motion.div 
  style={{ y }}
  className="absolute inset-0 bg-gradient..."
/>
```

### Scroll Indicator Premium
```typescript
// Bounce infinito elegante
const scrollIndicatorVariants = {
  animate: {
    y: [0, 8, 0], // Bounce muy sutil
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
};

<motion.div
  variants={scrollIndicatorVariants}
  animate="animate"
  className="absolute bottom-8 left-1/2 -translate-x-1/2"
>
  <ChevronDown className="text-[#c9a96e]" />
</motion.div>
```

---

## 🏡 3. CARDS DE PROPIEDADES

### Hover Effect Premium
```typescript
const propertyCardVariants = {
  initial: { 
    scale: 1,
    y: 0,
  },
  hover: { 
    scale: 1.02, // Escalado muy sutil
    y: -8, // Levantamiento suave
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

// Sombra progresiva
const cardShadow = {
  initial: {
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
  },
  hover: {
    boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
  }
};
```

### Imagen con Zoom Sutil
```typescript
// Zoom en imagen al hacer hover en card
const imageVariants = {
  initial: { 
    scale: 1,
    filter: 'brightness(100%)',
  },
  hover: { 
    scale: 1.08, // Zoom moderado
    filter: 'brightness(105%)',
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};
```

### Overlay de Información
```typescript
// Aparición de overlay con información adicional
const overlayVariants = {
  initial: { 
    opacity: 0,
    y: 20,
  },
  hover: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1],
    }
  }
};
```

### Implementación Completa Card
```tsx
<motion.div
  variants={propertyCardVariants}
  initial="initial"
  whileHover="hover"
  className="group relative overflow-hidden rounded-lg bg-white"
>
  {/* Imagen con zoom */}
  <div className="relative h-64 overflow-hidden">
    <motion.img
      variants={imageVariants}
      src={property.image}
      alt={property.title}
      className="w-full h-full object-cover"
    />
    
    {/* Overlay premium */}
    <motion.div
      variants={overlayVariants}
      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
    >
      {/* Contenido del overlay */}
    </motion.div>
  </div>
  
  {/* Info card */}
  <div className="p-6">
    {/* ... */}
  </div>
</motion.div>
```

---

## 🛠️ 4. SECCIÓN DE SERVICIOS

### Scroll Reveal Elegante
```typescript
// Usando react-intersection-observer
import { useInView } from 'react-intersection-observer';

const ServiceItem = ({ service, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true, // Solo una vez
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.15, // Stagger
          ease: [0.25, 0.46, 0.45, 0.94],
        }
      } : {}}
    >
      {/* Contenido */}
    </motion.div>
  );
};
```

### Iconos con Micro-interacciones
```typescript
// Hover en iconos de servicio
const iconVariants = {
  initial: { 
    scale: 1,
    rotate: 0,
  },
  hover: { 
    scale: 1.1,
    rotate: 5, // Rotación muy sutil
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};
```

### Cards de Servicio con Borde Animado
```typescript
// Borde que aparece en hover
const borderVariants = {
  initial: { 
    scaleX: 0,
  },
  hover: { 
    scaleX: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

// Implementación
<motion.div
  whileHover="hover"
  className="relative"
>
  <motion.div
    variants={borderVariants}
    initial="initial"
    className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#c9a96e] to-[#d4af6a] origin-left"
  />
  {/* Contenido */}
</motion.div>
```

---

## 🖼️ 5. PORTAFOLIO/GALERÍA

### Grid Layout con Entrada Escalonada
```typescript
const galleryContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    }
  }
};

const galleryItemVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.9,
    filter: 'blur(10px)',
  },
  visible: { 
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};
```

### Hover Premium en Grid Items
```typescript
const portfolioItemVariants = {
  initial: { 
    scale: 1,
  },
  hover: { 
    scale: 1.05,
    zIndex: 10,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};
```

### Lightbox Modal Premium
```typescript
// Modal con backdrop blur
const lightboxVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    backdropFilter: 'blur(0px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    backdropFilter: 'blur(20px)',
    transition: {
      duration: 0.4,
      ease: [0, 0, 0.2, 1],
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    backdropFilter: 'blur(0px)',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    }
  }
};

// Imagen del lightbox
const lightboxImageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
      duration: 0.4,
      ease: [0, 0, 0.2, 1],
    }
  }
};
```

### Navegación en Lightbox
```typescript
// Transición entre imágenes
const imageTransitionVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    }
  })
};
```

---

## 📝 6. FORMULARIOS

### Focus States Premium
```typescript
// Input focus con animación de borde
const inputVariants = {
  initial: {
    borderColor: 'rgba(212, 212, 212, 0.5)',
    boxShadow: '0 0 0 0 rgba(201, 169, 110, 0)',
  },
  focus: {
    borderColor: '#c9a96e',
    boxShadow: '0 0 0 3px rgba(201, 169, 110, 0.1)',
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};
```

### Labels Flotantes
```typescript
// Label que sube al hacer focus o cuando hay contenido
const labelVariants = {
  floating: {
    y: -24,
    scale: 0.85,
    color: '#c9a96e',
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    }
  },
  default: {
    y: 0,
    scale: 1,
    color: '#6b7280',
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};
```

### Validación Visual Suave
```typescript
// Success state
const successVariants = {
  hidden: { 
    opacity: 0, 
    x: -10 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1],
    }
  }
};

// Error shake (muy sutil)
const errorShake = {
  shake: {
    x: [-4, 4, -4, 4, 0],
    transition: {
      duration: 0.4,
    }
  }
};
```

### Submit Button Loading
```typescript
// Estado de carga elegante
const buttonLoadingVariants = {
  initial: {
    scale: 1,
  },
  loading: {
    scale: 0.95,
    transition: {
      duration: 0.2,
    }
  },
  success: {
    scale: 1,
    backgroundColor: '#10b981', // Green
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

// Spinner
const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    }
  }
};
```

---

## ⚖️ 7. COMPARADOR DE PROPIEDADES

### Transición entre Propiedades
```typescript
// Slide lateral suave
const compareVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      },
      opacity: { duration: 0.3 }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    }
  })
};
```

### Highlight de Diferencias
```typescript
// Pulse sutil en diferencias destacadas
const highlightVariants = {
  animate: {
    backgroundColor: ['rgba(201,169,110,0)', 'rgba(201,169,110,0.15)', 'rgba(201,169,110,0)'],
    transition: {
      duration: 2,
      repeat: 2,
      ease: "easeInOut",
    }
  }
};
```

### Tabla Comparativa Responsiva
```typescript
// Fade entre vista mobile y desktop
const tableVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};
```

---

## 🔘 8. BOTONES - Sistema Completo

### Primary Button Premium
```typescript
const primaryButtonVariants = {
  initial: {
    scale: 1,
    boxShadow: '0 4px 16px rgba(201,169,110,0.3)',
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 8px 24px rgba(201,169,110,0.4)',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    }
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};
```

### Secondary Button (Outline)
```typescript
const secondaryButtonVariants = {
  initial: {
    scale: 1,
    borderColor: '#c9a96e',
  },
  hover: {
    scale: 1.02,
    backgroundColor: '#c9a96e',
    color: '#ffffff',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    }
  },
  tap: {
    scale: 0.98,
  }
};
```

### Icon Button Minimal
```typescript
const iconButtonVariants = {
  initial: {
    scale: 1,
    opacity: 0.8,
  },
  hover: {
    scale: 1.1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    }
  },
  tap: {
    scale: 0.95,
  }
};
```

### Glow Effect Sutil (Premium)
```css
/* CSS para glow effect */
.button-premium {
  position: relative;
  overflow: hidden;
}

.button-premium::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(201,169,110,0.3) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.button-premium:hover::before {
  opacity: 1;
}
```

### Ripple Effect (Optional)
```typescript
// Efecto ripple al hacer click
const createRipple = (e: React.MouseEvent) => {
  const button = e.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.classList.add('ripple');

  button.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
};

// CSS
.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: scale(0);
  animation: ripple-animation 0.6s ease-out;
  pointer-events: none;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
```

---

## 📜 9. SCROLL EXPERIENCE

### Smooth Scroll Reveal
```typescript
// Hook personalizado para scroll reveal
import { useInView } from 'react-intersection-observer';

export const useScrollReveal = (delay = 0) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
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
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    }
  };

  return { ref, inView, variants };
};

// Uso
const { ref, inView, variants } = useScrollReveal(0.2);

<motion.div
  ref={ref}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={variants}
>
  {/* Contenido */}
</motion.div>
```

### Progress Bar de Scroll
```typescript
import { useScroll, useSpring, motion } from 'framer-motion';

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

### Section Transitions (Parallax Sutil)
```typescript
// Parallax en secciones
const { scrollY } = useScroll();
const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

<motion.div style={{ y: y1 }}>
  {/* Layer de fondo */}
</motion.div>
<motion.div style={{ y: y2 }}>
  {/* Contenido principal */}
</motion.div>
```

### Scroll-Triggered Number Counter
```typescript
// Contador animado al hacer scroll
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

const Counter = ({ value, inView }) => {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const displayValue = useTransform(springValue, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  return <motion.span>{displayValue}</motion.span>;
};
```

### Infinite Scroll Marquee (Para logos/partners)
```typescript
const marqueeVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

<motion.div
  variants={marqueeVariants}
  animate="animate"
  className="flex gap-8"
>
  {/* Logos duplicados para loop seamless */}
</motion.div>
```

---

## 🦶 10. FOOTER

### Aparición Elegante
```typescript
const footerVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    }
  }
};

const footerItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0, 0, 0.2, 1],
    }
  }
};
```

### Links con Hover Minimalista
```typescript
const footerLinkVariants = {
  initial: { 
    x: 0,
    color: '#9ca3af',
  },
  hover: { 
    x: 4,
    color: '#c9a96e',
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};
```

### Social Icons Premium
```typescript
const socialIconVariants = {
  initial: {
    scale: 1,
    backgroundColor: 'transparent',
  },
  hover: {
    scale: 1.1,
    backgroundColor: 'rgba(201,169,110,0.1)',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};
```

---

## ⚡ SISTEMA DE MICROINTERACCIONES

### Tooltip Premium
```typescript
const tooltipVariants = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0, 0, 0.2, 1],
    }
  }
};
```

### Dropdown Menu Elegante
```typescript
const dropdownVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0, 0, 0.2, 1],
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: {
      duration: 0.15,
      ease: [0.4, 0, 1, 1],
    }
  }
};
```

### Badge/Tag Animations
```typescript
const badgeVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    }
  }
};
```

---

## 🎯 CUÁNDO USAR / NO USAR ANIMACIONES

### ✅ SÍ Usar Animaciones

1. **Feedback de interacción**
   - Hover en elementos clicables
   - Estados de focus en formularios
   - Confirmación de acciones

2. **Jerarquía visual**
   - Destacar contenido importante
   - Guiar la atención del usuario
   - Revelar contenido progresivamente

3. **Transiciones de estado**
   - Cambios en la UI
   - Navegación entre vistas
   - Loading states

4. **Mejora de comprensión**
   - Mostrar relaciones entre elementos
   - Indicar cambios de contexto
   - Comunicar progreso

### ❌ NO Usar Animaciones

1. **Contenido crítico**
   - Información de emergencia
   - Mensajes de error importantes
   - Datos financieros

2. **Acciones frecuentes**
   - Typing en inputs
   - Scroll continuo
   - Interacciones repetitivas

3. **Rendimiento comprometido**
   - Dispositivos lentos
   - Muchos elementos simultáneos
   - Animaciones pesadas

4. **Preferencias del usuario**
   - Respetar `prefers-reduced-motion`
   - Ofrecer opción de desactivar

---

## 🚀 OPTIMIZACIÓN Y RENDIMIENTO

### Respeta las Preferencias del Usuario
```typescript
// Hook para detectar preferencias de movimiento reducido
export const usePrefersReducedMotion = () => {
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

// Uso
const prefersReducedMotion = usePrefersReducedMotion();

<motion.div
  animate={{
    y: prefersReducedMotion ? 0 : [0, -10, 0],
  }}
/>
```

### Animaciones Performantes
```typescript
// Usar propiedades que no causan reflow
// ✅ Bueno: transform, opacity
// ❌ Malo: width, height, top, left

// Bueno
<motion.div
  animate={{ 
    scale: 1.1,  // transform
    opacity: 0.8 
  }}
/>

// Evitar
<motion.div
  animate={{ 
    width: '500px',  // causa reflow
    marginTop: '20px' 
  }}
/>
```

### Will-Change para Animaciones Complejas
```css
/* Solo cuando realmente mejore el rendimiento */
.animated-element {
  will-change: transform, opacity;
}

/* Remover después de la animación */
.animated-element.finished {
  will-change: auto;
}
```

### Lazy Loading de Animaciones
```typescript
// Cargar animaciones solo cuando sea necesario
const HeavyAnimation = dynamic(
  () => import('@/components/HeavyAnimation'),
  { ssr: false }
);
```

---

## 📱 COMPORTAMIENTO RESPONSIVE

### Animaciones Adaptativas
```typescript
// Reducir complejidad en mobile
const isMobile = useMediaQuery('(max-width: 768px)');

<motion.div
  animate={{
    scale: isMobile ? 1.02 : 1.05,
    duration: isMobile ? 0.2 : 0.4,
  }}
/>
```

### Touch Interactions
```typescript
// Gestos táctiles premium
import { PanInfo } from 'framer-motion';

const handleDragEnd = (
  event: MouseEvent | TouchEvent | PointerEvent,
  info: PanInfo
) => {
  const swipeThreshold = 50;
  
  if (info.offset.x > swipeThreshold) {
    // Swipe right
  } else if (info.offset.x < -swipeThreshold) {
    // Swipe left
  }
};

<motion.div
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  dragElastic={0.2}
  onDragEnd={handleDragEnd}
/>
```

---

## 🎨 PATRONES DE DISEÑO PREMIUM

### Loading Skeleton Premium
```typescript
const skeletonVariants = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    }
  }
};

<motion.div
  variants={skeletonVariants}
  animate="animate"
  className="h-20 rounded-lg"
  style={{
    background: 'linear-gradient(90deg, #f0f0f0 25%, #f8f8f8 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
  }}
/>
```

### Success/Error Feedback
```typescript
// Checkmark animado
const checkmarkVariants = {
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
        duration: 0.6,
        bounce: 0,
      },
      opacity: { duration: 0.2 }
    }
  }
};

<motion.svg viewBox="0 0 50 50">
  <motion.path
    d="M14 27l8 8 16-16"
    fill="none"
    stroke="#10b981"
    strokeWidth="3"
    variants={checkmarkVariants}
    initial="hidden"
    animate="visible"
  />
</motion.svg>
```

### Notification Toast Premium
```typescript
const toastVariants = {
  hidden: {
    y: -100,
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    }
  },
  exit: {
    y: -100,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    }
  }
};
```

---

## 🔧 UTILIDADES Y HELPERS

### Animation Presets
```typescript
// src/lib/animation-presets.ts
import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: [0, 0, 0.2, 1] }
  }
};

export const slideInLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};
```

### Component Wrapper
```typescript
// src/components/AnimatedSection.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp } from '@/lib/animation-presets';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection = ({ 
  children, 
  className,
  delay = 0 
}: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

---

## 📊 TIEMPOS RECOMENDADOS - RESUMEN

| Tipo de Animación | Duración | Easing |
|-------------------|----------|---------|
| Hover button | 200ms | [0.4, 0, 0.2, 1] |
| Card hover | 300-400ms | [0.4, 0, 0.2, 1] |
| Modal open/close | 300-400ms | [0, 0, 0.2, 1] / [0.4, 0, 1, 1] |
| Scroll reveal | 600ms | [0.25, 0.46, 0.45, 0.94] |
| Page transition | 400ms | [0.4, 0, 0.2, 1] |
| Micro-interaction | 150-200ms | [0.4, 0, 0.2, 1] |
| Loading spinner | 1000ms | linear |
| Skeleton loading | 2000ms | linear |

---

## 🎯 CHECKLIST FINAL

### Antes de Implementar
- [ ] La animación tiene un propósito claro
- [ ] Mejora la experiencia del usuario
- [ ] No es exagerada ni molesta
- [ ] Es consistente con el resto del sitio
- [ ] Respeta `prefers-reduced-motion`
- [ ] Funciona bien en mobile
- [ ] No afecta el rendimiento

### Testing
- [ ] Probar en diferentes dispositivos
- [ ] Verificar en navegadores principales
- [ ] Comprobar con conexión lenta
- [ ] Testear con prefers-reduced-motion
- [ ] Validar en diferentes tamaños de pantalla

---

## 🏆 PRINCIPIOS CLAVE - RECORDATORIO

1. **Sutileza es sofisticación** - Las mejores animaciones son las que casi no se notan
2. **Velocidad premium** - Rápido pero no instantáneo (200-400ms sweet spot)
3. **Propósito claro** - Cada animación debe tener una razón de ser
4. **Consistencia** - Usar los mismos timings y easings en todo el sitio
5. **Respeto al usuario** - Siempre respetar preferencias de accesibilidad
6. **Rendimiento primero** - Animar solo transform y opacity cuando sea posible
7. **Mobile-friendly** - Reducir complejidad en dispositivos móviles
8. **Menos es más** - Es mejor tener pocas animaciones excelentes que muchas mediocres

---

**Inspiración final**: Piensa en cómo se siente un producto Apple: todo es fluido, rápido, intencional y elegante. Ese es el objetivo.

