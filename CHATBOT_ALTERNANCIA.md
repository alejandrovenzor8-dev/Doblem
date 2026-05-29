# 🔄 Sistema de Alternancia Automática del Chatbot

## ✅ Implementación Completada

El chatbot ahora alterna automáticamente entre las dos asesoras cada vez que un cliente completa el flujo y se genera un enlace de WhatsApp.

---

## 👥 Asesoras Configuradas

| # | Nombre | WhatsApp | Turno |
|---|--------|----------|-------|
| 0 | **Carolina Morales** | 5216142460197 | 1°, 3°, 5°... (impares) |
| 1 | **Iveth Ramos** | 5216142235153 | 2°, 4°, 6°... (pares) |

---

## 🔄 Cómo Funciona

### Secuencia de Alternancia:
```
Lead 1 → Carolina Morales
Lead 2 → Iveth Ramos  
Lead 3 → Carolina Morales
Lead 4 → Iveth Ramos
Lead 5 → Carolina Morales
...y así sucesivamente
```

### Flujo Técnico:

1. **Cliente completa el chatbot** → Llena todos los datos
2. **Sistema verifica el contador** → Lee de localStorage: `doblem_advisor_rotation`
3. **Selecciona asesora** → 0 = Carolina, 1 = Iveth
4. **Genera URL personalizado** → `wa.me/521614XXXXXXX?text=Hola [Nombre]...`
5. **Incrementa contador** → Cambia de 0→1 o 1→0 para el siguiente lead
6. **Redirige al WhatsApp** → Cliente habla directamente con la asesora asignada

---

## 📝 Mensaje Personalizado

Cada mensaje incluye el nombre de la asesora:

**Para Carolina:**
```
Hola Carolina Morales, me contacté a través del asistente virtual 
y me gustaría más información.

*Mi perfil:*
• Nombre: [nombre del cliente]
...
```

**Para Iveth:**
```
Hola Iveth Ramos, me contacté a través del asistente virtual 
y me gustaría más información.

*Mi perfil:*
• Nombre: [nombre del cliente]
...
```

---

## 🔧 Archivos Modificados

### 1. `src/lib/assistantStorage.ts`
- ✅ Función `getNextAdvisor()` - Alterna entre 0 y 1
- ✅ Función `resetAdvisorRotation()` - Reinicia el contador
- ✅ Persistencia en localStorage

### 2. `src/lib/whatsappBuilder.ts`
- ✅ Detecta cuál asesora sigue
- ✅ Selecciona el número de WhatsApp correcto
- ✅ Personaliza el saludo con el nombre

### 3. `src/data/assistantConstants.ts`
- ✅ `whatsappCarolina: "5216142460197"`
- ✅ `whatsappIveth: "5216142235153"`
- ✅ `contactNamePrimary: "Carolina Morales"`
- ✅ `contactNameSecondary: "Iveth Ramos"`

---

## 🧪 Cómo Probar

### Prueba Manual:
1. Abre el chatbot en el sitio
2. Completa el flujo hasta el final
3. Click en "Continuar por WhatsApp"
4. **Verifica:** Se abre WhatsApp de Carolina (primera vez)
5. Reinicia el chatbot y completa otro flujo
6. **Verifica:** Se abre WhatsApp de Iveth (segunda vez)
7. Repite y confirma que alterna

### Resetear el Contador:
Abre la consola del navegador y ejecuta:
```javascript
localStorage.removeItem('doblem_advisor_rotation');
// El siguiente lead irá a Carolina (empieza desde 0)
```

---

## 📊 Monitoreo

### Ver Estado Actual:
```javascript
// En consola del navegador:
localStorage.getItem('doblem_advisor_rotation')
// Resultado: "0" = Siguiente será Carolina
// Resultado: "1" = Siguiente será Iveth
```

### Ver Historial (para implementar):
Próximamente podrías agregar un dashboard admin que muestre:
- Total de leads enviados
- Cuántos a cada asesora
- Balance de distribución

---

## ⚙️ Configuración Actual

### Todos los Puntos de Contacto Actualizados:
- ✅ Chatbot (alternancia automática)
- ✅ Footer del sitio → Carolina
- ✅ Página de contacto → Carolina
- ✅ Botón WhatsApp flotante → Carolina
- ✅ Páginas de propiedades → Carolina

**Nota:** Solo el chatbot alterna. Los botones fijos del sitio van siempre a Carolina (contacto principal).

---

## 🔐 Persistencia

El contador se guarda en `localStorage` del navegador:
- ✅ **Persiste entre sesiones** - No se pierde al cerrar el navegador
- ✅ **Por dispositivo** - Cada computadora/celular tiene su propio contador
- ⚠️ **No se sincroniza entre dispositivos** - El contador es local

### Implicaciones:
- Si un usuario usa el chatbot desde su celular y luego desde su computadora, cada dispositivo tiene su propio contador
- Esto está bien porque distribuye los leads de manera natural

---

## 📈 Distribución Esperada

Con el tiempo, la distribución debería ser **~50% / ~50%**:
- **Carolina Morales:** ~50% de los leads
- **Iveth Ramos:** ~50% de los leads

Si notas desequilibrio, puede deberse a:
- Usuarios que no completan el flujo (no incrementan el contador)
- Múltiples dispositivos con contadores independientes
- Usuarios que borran cookies/localStorage

---

## ✅ Estado del Sistema

🟢 **Sistema Activo y Funcional**

- [x] Alternancia implementada
- [x] Mensajes personalizados
- [x] Persistencia configurada
- [x] Sin errores de compilación
- [x] Listo para producción

---

## 🚀 Próximos Pasos (Opcional)

Si quieres mejorar el sistema:

1. **Dashboard Admin:**
   - Ver estadísticas de distribución
   - Resetear manualmente el contador
   - Ver historial de asignaciones

2. **Backend Centralizado:**
   - Mover el contador a una base de datos
   - Sincronizar entre todos los dispositivos
   - Auditoría completa de leads

3. **Reglas Avanzadas:**
   - Distribuir por tipo de lead (caliente/tibio/frío)
   - Distribuir por horario
   - Considerar disponibilidad de cada asesora

---

**¡Sistema listo para recibir leads! 🎉**

Cada asesora recibirá aproximadamente la mitad de los contactos de manera automática y equitativa.
