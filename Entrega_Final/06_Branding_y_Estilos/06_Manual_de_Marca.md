# Manual Básico de Branding y Estilos (UI Kit)
**Proyecto:** Plataforma Web Corporativa Electriobras S.A.S.
**Versión de UI:** 1.0 (PRODUCCIÓN)

Este documento detalla los lineamientos visuales aplicados en el frontend técnico del proyecto. Funciona como una guía de estilo *(Style Guide)* para futuros desarrollos, rediseños o mantenimientos de la plataforma por parte de cualquier equipo de diseño o ingeniería.

---

## 1. Paleta de Colores (Cromatismo Corporativo)
La interfaz gráfica de Electriobras S.A.S. se ha construido utilizando una paleta sobria, premium y orientada al sector industrial, donde el naranja corporativo actúa como color de acento principal.

### Colores Principales
*   **Naranja Corporativo (Brand/Primary):** `#FF6B00`
    *   *Uso:* Botones principales (CTAs), acentos gráficos, iconos activos, textos destacados y logotipos monolíticos.
    *   *Significado psicológico:* Energía, acción, dinamismo eléctrico e ingeniería.
*   **Naranja Corporativo (Hover/Interaction):** `#e65c00`
    *   *Uso:* Estado interactivo secundario cuando el mouse pasa por encima de un botón o enlace. Otorga respuesta visual al usuario.

### Colores Neutros y Estructurales
*   **Fondo Claro Estructural (Background Light):** `#F8F9FA`
    *   *Uso:* Fondos de secciones para separar áreas de contenido de los fondos blancos puros (ej. se usa en tarjetas de contacto o fondos de sección de servicios técnicos).
*   **Blanco Puro (Base Background):** `#FFFFFF`
    *   *Uso:* Fondo base del lienzo del sitio.
*   **Texto Oscuro Primario (Foreground):** `#171717` (y variaciones como `#1A1A1A`)
    *   *Uso:* Color principal de lectura para títulos, encabezados y textos. Se utiliza un negro ligeramente suavizado para mejorar la ergonomía visual y evitar el esfuerzo visual excesivo al contrastar con pantallas brillantes.

---

## 2. Tipografía Institucional
Para mantener una identidad visual robusta, corporativa, limpia y de "gran escala", se han inyectado tipografías desde los recursos oficiales de Google Fonts. Ambas fuentes han sido optimizadas sin impactar la velocidad del sitio.

### Tipografía Principal (Headings)
*   **Fuente:** Montserrat
*   *Uso:* Aplicada en todos los títulos primarios (H1, H2, H3), nombres técnicos de secciones ("Nuestros Servicios", "Quiénes Somos") y números métricos de impacto.
*   *Justificación:* Es una fuente sans-serif geométrica que proyecta fuerza, modernidad y solidez, atributos ideales para empresas constructoras y de desarrollo eléctrico.

### Tipografía Secundaria (Cuerpo de texto / Body)
*   **Fuente:** Inter
*   *Uso:* Párrafos de texto, descripciones de tarjetas, formularios de contacto e información legal.
*   *Justificación:* Altamente legible en distintos tamaños (especialmente para móviles). Inter está diseñada específicamente para optimizar la lectura prolongada en pantallas gráficas UI.

---

## 3. Comportamiento Visual e Interacciones (Tailwind & Framer)
La plataforma no es plana; se siente viva gracias a micro-interacciones sutiles que aportan fluidez sin distraer de los servicios ofertados.

### Animaciones (UI Motion)
*   **Scroll Reveal (Slide Up & Fade In):** Los elementos técnicos, fotos y tarjetas aparecen deslizados con una suave curva de deceleración a medida que el visitante los requiere en pantalla (con una transición estándar de ~0.5s ease-out). Esto denota sofisticación "Premium".
*   **Scrollbar Personalizado:** Barra de navegación lateral de estilo delgado y minimalista. Fondo `f1f1f1` y manipulador gris (`#ccc`) que muta hacia Naranja Corporativo (`#FF6B00`) en interacción.

### Tratamiento de Imágenes
*   **Estética Premium:** Las imágenes de proyecto y "Quiénes Somos" evitan el englobe tradicional. Fueron transformadas utilizando redondeo y sobreados de profundidad discretos (Box-shadows limpios, no agresivos) que se elevan interactivamente para simular que interactúan con el espacio físico.

### Botonología y Cursos de Acción
De acuerdo a las reglas estrictas de accesibilidad y "Gobernanza UX":
*   Todos los botones (Submit, Ver más, Flotante de WhatsApp) utilizan el Naranja Corporativo. 
*   Para evitar confusión en escritorio, se estandarizó en el sitio que todos los espacios cliqueables asuman cursores en formato de "manito" (`pointer`).

---
> *Nota Técnica:* Todos estos estilos globales han sido tokenizados centralmente en el archivo código fuente `/src/app/globals.css`. Todo nuevo componente del Framework Next.js debe hacer referenica a las variables nativas (ej. `var(--corporate-orange)`) y no implementar colores arbitrariamente.
