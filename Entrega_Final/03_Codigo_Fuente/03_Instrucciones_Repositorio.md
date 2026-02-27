# Instrucciones del Código Fuente y Repositorio
**Proyecto:** Electriobras S.A.S.

## Información General
Este directorio (o repositorio asociado) contiene el código fuente completo e íntegro de la plataforma web corporativa de Electriobras S.A.S. El código ha sido estructurado siguiendo buenas prácticas, "Zero Trust Architecture" para la seguridad, y modularidad escalable.

## Estructura del Código
La aplicación está construida sobre **Next.js 15 (App Router)**. Las carpetas principales son:

*   `/src/app`: Rutas del aplicativo, incluyendo la página de inicio, secciones legales y configuraciones de metadatos/SEO.
*   `/src/components`: Componentes visuales y lógicos del sistema.
    *   `/layout`: Envolventes globales como Menu de Navegación (Navbar) y Pie de página (Footer).
    *   `/sections`: Diferentes bloques visuales de la web (Hero, Servicios, Clientes, etc).
    *   `/ui`: Componentes estéticos base o botones reutilizables.
*   `/public`: Archivos estáticos como imágenes consolidadas, iconos, fuentes y el video `hero.mp4`.
*   `/PROJECT_DOC.md`: Documento vivo de la arquitectura técnica, mantenido como referencia para los desarrolladores.

## Comandos para Desarrolladores

Si en el futuro algún ingeniero de software o equipo de soporte técnico necesita intervenir el sitio web, estos son los comandos que debe conocer.

**A. Instalación de Dependencias**
```bash
npm install
```
*(Requiere Node.js versión 18 o superior)*

**B. Entorno de Desarrollo Local**
```bash
npm run dev
```
Levantará un servidor de prueba en `http://localhost:3000`.

**C. Producción (Build)**
```bash
npm run build
npm start
```
Crea una versión optimizada del sitio para subir a producción.

## Recomendaciones
*   El código se ha documentado. Siga los lineamientos descritos en `PROJECT_DOC.md`.
*   Si se agrega una nueva imagen al proyecto, verifique que su tamaño y formato (Preferible WebP) esté optimizado para mantener la alta velocidad de la página.
