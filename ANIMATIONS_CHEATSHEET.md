# 🎯 CHEATSHEET - Animaciones Premium DobleM

Guía rápida de referencia para implementar animaciones.

---

## 📦 IMPORTS ESENCIALES

```tsx
// Configuración y presets
import { 
  fadeIn, fadeInUp, fadeInBlur,
  buttonPrimary, cardHover, imageZoom,
  TIMING, EASING 
} from '@/lib/animation-config';

// Hooks personalizados
import { 
  useScrollReveal, 
  usePrefersReducedMotion,
  useAnimatedCounter 
} from '@/hooks/useAnimations';

// Componentes listos
import { 
  AnimatedSection, 
  AnimatedGrid, 
  AnimatedGridItem 
} from '@/components/AnimatedSection';

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion';
```

---

## 🚀 CASOS DE USO RÁPIDOS

### 1️⃣ Fade In al Scroll (MÁS COMÚN)

```tsx
<AnimatedSection blur>
  <h2>Mi contenido</h2>
</AnimatedSection>
```

### 2️⃣ Botón con Hover Elegante

```tsx
<motion.button
  variants={buttonPrimary}
  initial="initial"
  whileHover="hover"
  whileTap="tap"
  className="..."
>
  Click me
</motion.button>
```

### 3️⃣ Card con Hover (Propiedades)

```tsx
<motion.div
  variants={cardHover}
  initial="initial"
  whileHover="hover"
  className="card"
>
  <motion.img variants={imageZoom} src="..." />
  {/* Contenido */}
</motion.div>
```

### 4️⃣ Grid con Stagger (Lista de Items)

```tsx
<AnimatedGrid staggerDelay={0.15}>
  {items.map(item => (
    <AnimatedGridItem key={item.id}>
      <Card {...item} />
    </AnimatedGridItem>
  ))}
</AnimatedGrid>
```

### 5️⃣ Modal/Lightbox

```tsx
<AnimatePresence>
  {showModal && (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={close}
        className="backdrop"
      />
      <motion.div
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="modal"
      >
        {/* Contenido */}
      </motion.div>
    </>
  )}
</AnimatePresence>
```

### 6️⃣ Contador Animado

```tsx
const { ref, count } = useAnimatedCounter(150, 2000);

<div ref={ref}>
  <span className="text-4xl">{count}+</span>
  <span>Proyectos</span>
</div>
```

### 7️⃣ Input con Focus Elegante

```tsx
const [focused, setFocused] = useState(false);

<motion.input
  onFocus={() => setFocused(true)}
  onBlur={() => setFocused(false)}
  animate={{
    borderColor: focused ? '#c9a96e' : '#d4d4d4',
    boxShadow: focused 
      ? '0 0 0 3px rgba(201,169,110,0.1)' 
      : '0 0 0 0 rgba(201,169,110,0)',
  }}
  transition={{ duration: TIMING.fast }}
/>
```

### 8️⃣ Lista con Entrada Progresiva

```tsx
<motion.div variants={staggerContainer} initial="hidden" animate="visible">
  {items.map((item, i) => (
    <motion.div key={i} variants={staggerItem}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### 9️⃣ Tooltip Premium

```tsx
<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 8 }}
  className="tooltip"
>
  Tooltip text
</motion.div>
```

### 🔟 Badge/Tag Animado

```tsx
<motion.span
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{
    type: "spring",
    stiffness: 400,
    damping: 20,
  }}
  className="badge"
>
  Nuevo
</motion.span>
```

---

## ⏱️ TIEMPOS RECOMENDADOS

```tsx
import { TIMING } from '@/lib/animation-config';

TIMING.instant   // 150ms - Feedback inmediato
TIMING.fast      // 200ms - Hover, botones
TIMING.normal    // 300ms - Transiciones estándar
TIMING.slow      // 400ms - Cards, modals
TIMING.lazy      // 600ms - Scroll reveals
TIMING.cinematic // 800ms - Hero, efectos especiales
```

**Uso:**
```tsx
transition={{ duration: TIMING.fast }}
```

---

## 📈 EASING CURVES

```tsx
import { EASING } from '@/lib/animation-config';

EASING.premium   // [0.4, 0, 0.2, 1] - Principal
EASING.entrance  // [0, 0, 0.2, 1]   - Entradas
EASING.exit      // [0.4, 0, 1, 1]   - Salidas
EASING.smooth    // [0.43, 0.13, 0.23, 0.96] - Ultra suave
EASING.cinematic // [0.25, 0.46, 0.45, 0.94] - Cinematográfico
```

**Uso:**
```tsx
transition={{ 
  duration: TIMING.slow, 
  ease: EASING.premium 
}}
```

---

## 🎨 PRESETS DISPONIBLES

### Fade Animations
```tsx
fadeIn           // Simple fade
fadeInUp         // Fade desde abajo
fadeInBlur       // Fade con blur (premium)
fadeInScale      // Fade con zoom
slideInLeft      // Slide desde izquierda
slideInRight     // Slide desde derecha
```

### Interactions
```tsx
buttonPrimary    // Hover para botones
cardHover        // Hover para cards
imageZoom        // Zoom de imagen
modal            // Modal/lightbox
pulse            // Pulse suave
glowPulse        // Glow pulsante
```

### Containers
```tsx
staggerContainer // Container con stagger
staggerItem      // Item hijo del container
```

**Uso:**
```tsx
<motion.div variants={fadeInUp} initial="hidden" animate="visible">
  Contenido
</motion.div>
```

---

## 🔧 PATRONES COMUNES

### Scroll Reveal Simple
```tsx
const { ref, inView, variants } = useScrollReveal();

<motion.div
  ref={ref}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={variants}
>
  Contenido
</motion.div>
```

### Hover con Estado
```tsx
const [isHovered, setIsHovered] = useState(false);

<motion.div
  onHoverStart={() => setIsHovered(true)}
  onHoverEnd={() => setIsHovered(false)}
  animate={{ scale: isHovered ? 1.05 : 1 }}
>
  Hover me
</motion.div>
```

### Loading State
```tsx
<AnimatePresence mode="wait">
  {loading ? (
    <motion.div
      key="loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Spinner />
    </motion.div>
  ) : (
    <motion.div
      key="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Contenido
    </motion.div>
  )}
</AnimatePresence>
```

### Condicional Premium
```tsx
const prefersReducedMotion = usePrefersReducedMotion();

{!prefersReducedMotion && (
  <motion.div animate={{ y: [0, -10, 0] }}>
    Animado
  </motion.div>
)}
```

---

## 📱 RESPONSIVE

```tsx
import { useMediaQuery } from '@/hooks/useAnimations';

const isMobile = useMediaQuery('(max-width: 768px)');

<motion.div
  animate={{
    scale: isMobile ? 1.02 : 1.05,
    duration: isMobile ? TIMING.fast : TIMING.slow,
  }}
>
  Contenido
</motion.div>
```

---

## ✅ CHECKLIST RÁPIDO

Antes de implementar una animación:

- [ ] ¿Tiene un propósito claro?
- [ ] ¿Mejora la UX?
- [ ] ¿Es sutil y profesional?
- [ ] ¿Respeta `prefers-reduced-motion`?
- [ ] ¿Usa `transform` u `opacity`? (rendimiento)
- [ ] ¿Duración entre 200-600ms?
- [ ] ¿Es consistente con el resto del sitio?

---

## 🚫 EVITAR

```tsx
// ❌ MAL - Animar propiedades pesadas
<motion.div animate={{ width: '500px', marginTop: '20px' }}>

// ✅ BIEN - Animar transform y opacity
<motion.div animate={{ scale: 1.1, opacity: 1 }}>

// ❌ MAL - Duraciones largas
transition={{ duration: 2 }}

// ✅ BIEN - Duraciones moderadas
transition={{ duration: TIMING.slow }}

// ❌ MAL - Ignorar preferencias
<motion.div animate={{ ... }}>

// ✅ BIEN - Respetar preferencias
{!prefersReducedMotion && <motion.div animate={{ ... }}>}
```

---

## 🔗 RECURSOS RÁPIDOS

- **Guía completa**: `ANIMATIONS_GUIDE.md`
- **Ejemplos prácticos**: `IMPLEMENTATION_EXAMPLES.md`
- **Configuración**: `src/lib/animation-config.ts`
- **Hooks**: `src/hooks/useAnimations.ts`
- **Componentes**: `src/components/AnimatedSection.tsx`
- **Demo visual**: `/animation-demo`

---

## 💡 TIPS FINALES

1. **Menos es más** - Pocas animaciones excelentes > muchas mediocres
2. **Consistencia** - Usa los mismos timings en todo el sitio
3. **Performance first** - 60fps es obligatorio
4. **Accesibilidad** - Siempre respeta `prefers-reduced-motion`
5. **Mobile-friendly** - Reduce complejidad en móvil
6. **Propósito claro** - Cada animación debe tener una razón

---

**🎨 DobleM Diseño y Construcción**
*Elegancia en movimiento*
