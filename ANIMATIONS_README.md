# 🎨 Sistema de Animaciones Premium - DobleM

Sistema completo de animaciones elegantes, minimalistas y modernas para DobleM Diseño y Construcción.

## 📦 Archivos Creados

```
📁 Doblem/
├── 📄 ANIMATIONS_GUIDE.md          ← Guía completa teórica
├── 📄 IMPLEMENTATION_EXAMPLES.md   ← Ejemplos prácticos específicos
│
├── 📁 src/
│   ├── 📁 lib/
│   │   └── animation-config.ts     ← Configuración y presets
│   │
│   ├── 📁 hooks/
│   │   └── useAnimations.ts        ← Hooks personalizados
│   │
│   ├── 📁 components/
│   │   └── AnimatedSection.tsx     ← Componentes reutilizables
│   │
│   └── 📁 app/
│       └── 📁 animation-demo/
│           └── page.tsx            ← Página de demostración
```

## 🚀 Inicio Rápido

### 1. Ver la Demostración

```bash
npm run dev
```

Navega a: `http://localhost:3000/animation-demo`

Verás **todas las animaciones en acción** con ejemplos interactivos.

### 2. Implementar en tu Proyecto

#### Opción A: Usar Componentes Listos (Recomendado)

```tsx
import { AnimatedSection } from '@/components/AnimatedSection';

export default function MyComponent() {
  return (
    <AnimatedSection blur delay={0.2}>
      <h2>Mi Contenido</h2>
      <p>Se animará automáticamente al hacer scroll</p>
    </AnimatedSection>
  );
}
```

#### Opción B: Usar Presets Directamente

```tsx
import { motion } from 'framer-motion';
import { fadeInBlur, buttonPrimary } from '@/lib/animation-config';

export default function MyComponent() {
  return (
    <motion.div
      variants={fadeInBlur}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        variants={buttonPrimary}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className="..."
      >
        Click me
      </motion.button>
    </motion.div>
  );
}
```

#### Opción C: Usar Hooks Personalizados

```tsx
import { useScrollReveal } from '@/hooks/useAnimations';
import { motion } from 'framer-motion';

export default function MyComponent() {
  const { ref, inView, variants } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      Contenido animado
    </motion.div>
  );
}
```

## 📚 Documentación

### 1. ANIMATIONS_GUIDE.md
- Filosofía de diseño premium
- Tiempos y easing curves recomendados
- Propuestas específicas para cada sección:
  - Navbar, Hero, Cards, Formularios, etc.
- Cuándo usar/no usar animaciones
- Optimización y rendimiento
- Principios UX premium

### 2. IMPLEMENTATION_EXAMPLES.md
- Ejemplos de código real
- Implementaciones específicas para tus componentes
- Guías paso a paso
- Checklist de implementación

### 3. animation-config.ts
- Todos los presets de animación
- Tiempos estándar (TIMING)
- Easing curves (EASING)
- Variantes reutilizables:
  - `fadeIn`, `fadeInUp`, `fadeInBlur`
  - `cardHover`, `buttonPrimary`
  - `modal`, `mobileMenu`
  - Y muchos más...

### 4. useAnimations.ts
- `usePrefersReducedMotion()` - Respeta accesibilidad
- `useScrollReveal()` - Scroll animations fáciles
- `useParallax()` - Efectos parallax sutiles
- `useAnimatedCounter()` - Contadores animados
- `useResponsiveAnimation()` - Adaptación mobile

### 5. AnimatedSection.tsx
- `<AnimatedSection>` - Wrapper automático con scroll reveal
- `<AnimatedGrid>` - Grid con stagger animation
- `<AnimatedGridItem>` - Items del grid

## 🎯 Casos de Uso Comunes

### Cards de Propiedades
```tsx
<motion.div
  variants={cardHover}
  initial="initial"
  whileHover="hover"
  className="..."
>
  <motion.img variants={imageZoom} src="..." />
</motion.div>
```

### Botón Premium
```tsx
<motion.button
  variants={buttonPrimary}
  initial="initial"
  whileHover="hover"
  whileTap="tap"
>
  Click me
</motion.button>
```

### Sección con Scroll Reveal
```tsx
<AnimatedSection blur delay={0.2}>
  <h2>Título</h2>
  <p>Contenido...</p>
</AnimatedSection>
```

### Grid con Stagger
```tsx
<AnimatedGrid staggerDelay={0.15}>
  {items.map(item => (
    <AnimatedGridItem key={item.id}>
      <Card {...item} />
    </AnimatedGridItem>
  ))}
</AnimatedGrid>
```

## ⚙️ Configuración Personalizada

### Cambiar Tiempos
```ts
// src/lib/animation-config.ts
export const TIMING = {
  instant: 0.15,
  fast: 0.2,
  normal: 0.3,
  slow: 0.4,      // ← Ajusta aquí
  lazy: 0.6,
  cinematic: 0.8,
} as const;
```

### Crear Preset Personalizado
```ts
// src/lib/animation-config.ts
export const myCustomAnimation: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: TIMING.slow, 
      ease: EASING.premium 
    }
  }
};
```

## 🎨 Filosofía de Diseño

### ✅ Principios Core
- **Propósito sobre ornamento**: Cada animación debe tener una función
- **Minimalismo elegante**: Menos es más, calidad sobre cantidad
- **Fluidez natural**: Movimientos que imitan la física real
- **Velocidad premium**: Rápido pero no instantáneo (200-400ms)
- **Sutileza sofisticada**: El usuario no debe notar la animación, solo sentirla

### 🎯 Inspiración
- Apple (fluidez, sutileza)
- Zillow (profesionalismo)
- Sotheby's International Realty (elegancia)
- Arquitectura moderna (minimalismo)

## 📱 Responsive & Accesibilidad

### Todas las animaciones respetan:
- ✅ `prefers-reduced-motion`
- ✅ Rendimiento mobile
- ✅ 60fps target
- ✅ Accesibilidad WCAG

### Uso automático:
```tsx
const prefersReducedMotion = usePrefersReducedMotion();
// Las animaciones se desactivan automáticamente si el usuario lo prefiere
```

## 🔧 Troubleshooting

### Las animaciones no se ven
1. Verifica que `framer-motion` esté instalado: `npm install framer-motion`
2. Asegúrate de usar `"use client"` en componentes con animaciones
3. Revisa la consola para errores

### Animaciones lentas en mobile
1. Reduce duración: `duration: TIMING.fast` en lugar de `TIMING.lazy`
2. Deshabilita blur effects en mobile
3. Usa `useResponsiveAnimation()` para adaptar

### Animaciones no respetan scroll
1. Verifica que uses `whileInView` o `useScrollReveal()`
2. Asegúrate de tener `viewport={{ once: true }}`

## 📊 Mejores Prácticas

### ✅ Hacer
- Usar `transform` y `opacity` (mejor rendimiento)
- Respetar `prefers-reduced-motion`
- Animar solo cuando mejore UX
- Mantener duración 200-600ms
- Usar easing curves consistentes

### ❌ Evitar
- Animar `width`, `height`, `top`, `left`
- Animaciones largas (>1s)
- Muchas animaciones simultáneas
- Efectos exagerados
- Ignorar accesibilidad

## 🎓 Próximos Pasos

1. **Ver la demo**: `/animation-demo`
2. **Leer la guía**: `ANIMATIONS_GUIDE.md`
3. **Implementar gradualmente**:
   - Empezar con Navbar
   - Luego Hero
   - Después secciones principales
4. **Testear en diferentes dispositivos**
5. **Ajustar según feedback**

## 💡 Tips Finales

> **"La mejor animación es la que el usuario no nota conscientemente, pero siente subconscientemente"**

- Empieza simple
- Menos es más
- Mantén consistencia
- Prioriza rendimiento
- Respeta al usuario

## 🆘 Soporte

Si tienes dudas sobre implementación:
1. Revisa `ANIMATIONS_GUIDE.md` para teoría
2. Revisa `IMPLEMENTATION_EXAMPLES.md` para código
3. Ve a `/animation-demo` para ver ejemplos visuales
4. Inspecciona `animation-config.ts` para presets disponibles

---

**Creado para DobleM Diseño y Construcción**
*Elegancia, Minimalismo, Modernidad*
