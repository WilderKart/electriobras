# ELECTRIOBRAS S.A.S - Sitio Web Corporativo

Este proyecto es la página web corporativa moderna de ELECTRIOBRAS S.A.S, desarrollada con **Next.js 14+ (App Router)**, **Tailwind CSS** y **Framer Motion**.

## 🚀 Características Principales

- **Diseño Ultra Moderno**: Estilo visual impactante con énfasis en profesionalismo e ingeniería.
- **Animaciones Avanzadas**: Scroll reveal, paralaje y micro-interacciones utilizando Framer Motion.
- **Responsive Design**: Totalmente optimizado para móviles, tablets y escritorio.
- **Performance**: Optimización de imágenes y carga diferida.

## 🛠 Stack Tecnológico

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4.0
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Formularios**: React Hook Form

## 📦 Instalación y Ejecución

1.  **Instalar dependencias**:
    Debido a la versión `beta` de React 19 en Next.js 15+, se recomienda usar `--legacy-peer-deps` si hay conflictos.

    ```bash
    npm install --legacy-peer-deps
    ```

2.  **Ejecutar servidor de desarrollo**:

    ```bash
    npm run dev
    ```

    Abre [http://localhost:5501](http://localhost:5501) en tu navegador.

3.  **Compilar para producción**:

    ```bash
    npm run build
    ```

## 📂 Estructura del Proyecto

- `src/app`: Rutas y layouts principales.
- `src/components/sections`: Secciones de la landing (Hero, Nosotros, Servicios, etc.).
- `src/components/ui`: Componentes base reutilizables (Botones, Inputs).
- `src/lib`: Utilidades y configuración.

## 🎨 Personalización

- **Colores**: Configurados en `src/app/globals.css` (variables CSS y Tailwind).
- **Fuentes**: Montserrat e Inter configuradas en `src/app/layout.tsx`.
