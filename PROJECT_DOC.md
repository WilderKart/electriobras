# Documentación del Proyecto: Electriobras

## 1. Visión del Producto
Plataforma web corporativa de alto impacto para Electriobras S.A.S., enfocada en transmitir solidez técnica, confianza corporativa y experiencia en ingeniería eléctrica y civil. El diseño prioriza una estética "premium" industrial, con animaciones fluidas y una estructura clara de servicios y proyectos.

## 2. Stack Tecnológico
- **Frontend:** Next.js 15 (App Router), React, TypeScript.
- **Estilos:** Tailwind CSS.
- **Animaciones:** Framer Motion (Scroll animations, parallax, micro-interactions).
- **Iconos:** Lucide React.
- **Despliegue:** Vercel (previsto).

## 3. Arquitectura y Estructura
El proyecto sigue una arquitectura basada en componentes reutilizables dentro de `src/components`, divididos en:
- `layout/`: Navbar, Footer.
- `sections/`: Hero, About, gallery, Sectors, Services, Testimonials, Portfolio, etc.
- `ui/`: Botones, elementos interactivos (WhatsApp).

## 4. Features Implementados

### 🟢 Etapa Inicial / Media

- **Hero Section:** Integración de video de fondo dinámico (`hero.mp4`) para mayor impacto visual. Se eliminó el "Kicker" de texto.
- **About Us:**
  - Se reemplazó la galería de múltiples imágenes por una única **Imagen Principal Integrada** (`quienes_somos.png`) con diseño limpio y sin bordes.
- **Servicios:** Rediseño de tarjetas utilizando **imágenes reales** de alta calidad de la carpeta `/servicios/` en lugar de iconos, con estética premium y efectos hover.
- **Capacidad Operativa (Métricas):** Contadores animados refactorizados para mostrar:
  - +150 Proyectos Ejecutados.
  - **+7 Años de Experiencia** (Soluciones integrales).
  - 45+ Profesionales Activos.
  - **+6 Etapas de Control Técnico** (Desde diagnóstico hasta entrega).
- **Testimonios & Clientes:**
  - Ampliación de la marquesina de clientes para incluir: **Cerámica Italia, Kimberly Clark y Constructora Cairo**, además de Corona y Celsia.
- **CTA Final:** Llamado a la acción para cotizar.
- **Contacto:** Formulario y datos de contacto.
- **Botón Flotante:** WhatsApp para contacto directo.

## 5. Historial de Cambios Recientes
- **Actualización Visual y Multimedia (Feb 2026):** 
  - Implementación de video en Hero y cambio a imágenes reales en Servicios.
  - Simplificación de sección "Quiénes Somos" hacia una imagen única integrada.
  - Refactorización de componentes de métricas para admitir información mixta (números/texto).
- **Actualización Corporativa Global:** Se sincronizaron todos los contenidos con el archivo `info.md`, incluyendo misión, visión, valores y servicios específicos.
- **Optimización SEO Local:** Ajuste de metadatos y textos para posicionamiento en Cali y el Valle del Cauca.
- **Corrección de Terminología de Seguridad:** Se reemplazó "Seguridad Industrial" por "Seguridad y Salud en el Trabajo" en todo el sitio por requerimiento normativo.
- **Ajuste de Contacto Institucional:** Se integró la información legal (NIT, Dirección, Teléfono Fijo 602) y se ocultó el número móvil en texto plano, manteniendo solo el acceso vía botón de WhatsApp.
- **Optimización de Performance:** Mejora en la estrategia de carga de imágenes (LCP) y optimización de metadatos en `layout.tsx`.

## 6. Estado Actual
El proyecto está optimizado y alineado con la identidad corporativa de Electriobras SAS. Listo para pruebas de rendimiento finales en PageSpeed Insights.
