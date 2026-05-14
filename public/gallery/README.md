# Imágenes de Galería

Esta carpeta contiene las imágenes que se mostrarán en la galería de proyectos.

## Formato recomendado:
- **Formato**: JPG o PNG
- **Tamaño**: 500-1000px de ancho (se optimizarán automáticamente)
- **Nombres sugeridos**: 
  - `house-1.jpg`, `house-2.jpg`, etc.
  - `exterior-1.jpg`, `interior-1.jpg`, etc.

## Para usar imágenes locales:

1. Coloca tus imágenes de casas en esta carpeta
2. Actualiza el array `galleryImages` en `src/app/galeria/page.tsx`
3. Cambia las URLs de `src` por rutas locales como: `/gallery/house-1.jpg`

Ejemplo:
```typescript
const galleryImages = [
  {
    id: 1,
    src: "/gallery/house-1.jpg",
    alt: "Casa moderna con diseño minimalista",
    height: "h-64",
  },
  // ... más imágenes
];
```
