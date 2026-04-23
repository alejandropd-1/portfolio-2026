# AleDesign Portfolio 2026 - Project Handover

Este documento resume el estado actual del proyecto "AleDesign Portfolio 2026", la arquitectura técnica, las decisiones de diseño y el progreso realizado hasta la fecha. Está pensado para servir de contexto completo para continuar el desarrollo.

## Estado General del Proyecto
Hemos migrado y reconstruido el portfolio personal de AleDesign, pasando de una versión anterior (posiblemente en Astro) a una arquitectura moderna y robusta utilizando **Next.js 15 (App Router)**. El objetivo principal ha sido implementar pixel-perfect el sistema de diseño **"The Compiled Soul"** diseñado en Stitch/Penpot, asegurando contenido dinámico y rendimiento óptimo.

## Arquitectura Técnica
*   **Framework:** Next.js 15 (App Router). Todo el enrutamiento utiliza la nueva convención de Next.js (`src/app/page.js`, `src/app/resume/page.js`, etc.).
*   **Contenido:** Sistema basado en Markdown/MDX. Los datos de los trabajos, biografía, currículum y archivo histórico se almacenan localmente en `src/content/` (`.md` y `.mdx`).
*   **Renderizado MDX:** Utilizamos `next-mdx-remote/rsc` con soporte para GitHub Flavored Markdown (`remark-gfm` instalado) para poder renderizar tablas (vital para la página `/archive`).
*   **Estilos:** SASS modular puro (`.scss`). Se optó por SASS sobre Tailwind por flexibilidad y control total del sistema de diseño.
    *   **Estructura:** Dividido en `abstracts` (variables, tokens), `base` (resets, tipografía base), `components` (botones, tarjetas, layout) y `layout` (header, footer).
    *   **Metodología:** Uso de convenciones BEM (Block Element Modifier) para clases CSS en los componentes (ej. `.job-card__title`).
*   **Modo Oscuro (Dark Mode):** Estrategia de *Zero-FOUC* (Zero Flash of Unstyled Content) mediante Server-Side Rendering (SSR). Se lee una cookie `color-theme` en el `layout.js` principal para inyectar un atributo `data-theme` en la etiqueta `<html>`, activando así el mapa de variables `$dark` en SASS de forma instantánea.

## Diseño: "The Compiled Soul"
El sistema de diseño, alojado en Stitch/Penpot, se caracteriza por una estética "premium", enfocada en perfiles Senior/Lead Designer.
*   **Tipografía:** 
    *   Titulares y UI general: **Plus Jakarta Sans**
    *   Monospaced / Detalles técnicos: **Space Grotesk**
*   **Estética Visual:** Uso intensivo de *Glassmorphism* sutil, *ghost borders* (bordes semitransparentes), fondos oscuros azulados/grisáceos y tipografía de alto contraste.
*   **Design Tokens:** Los tokens de Stitch fueron convertidos a variables SASS en `src/styles/abstracts/_tokens.scss` y `_typography.scss`.

## Páginas y Componentes Clave
1.  **Home (`/`)**: Hero section dinámico y lista de proyectos destacados renderizados desde `src/content/jobs/`. Los trabajos se filtran semánticamente mediante etiquetas (ej. Diseño vs Desarrollo).
2.  **Resume (`/resume`)**: Renderiza `src/content/resume.mdx`. Implementa el layout `page-content` para asegurar legibilidad.
3.  **About (`/about`)**: Renderiza `src/content/about.mdx`. Biografía y filosofía de diseño.
4.  **Archive (`/archive`)**: Renderiza `src/content/archive.mdx`. Muestra el histórico completo de proyectos utilizando una tabla MDX dinámica.

## Trabajo Realizado en las Últimas Sesiones
1.  **Limpieza de Estilos Inline:** Refactorización completa del componente `Job.js` y otros elementos para eliminar estilos en línea y depender exclusivamente de clases SASS BEM.
2.  **Solución de Bugs SASS:** Corrección de la variable faltante `$font-size-200` que bloqueaba la compilación al implementar el layout de las páginas de contenido.
3.  **Contenido Dinámico Real:** Sustitución del texto falso (Lorem Ipsum) en los archivos MDX por la información profesional real de AleDesign.
4.  **Soporte de Tablas MDX:** Instalación y configuración de `remark-gfm` en `MDXRemote` para permitir el renderizado correcto de la tabla histórica en `/archive`.
5.  **Verificación Visual:** Comprobación iterativa mediante emulación de navegador y capturas de pantalla para asegurar que las páginas coincidan con las maquetas de Stitch, incluyendo la responsividad móvil.

## Próximos Pasos Sugeridos
*   **Revisión Final de Contenido:** Validar que los textos en los archivos MDX (`resume.mdx`, `about.mdx`) sean correctos y estén actualizados.
*   **Refinamiento de UX:** Evaluar la adición de micro-interacciones o animaciones sutiles (Framer Motion está en el stack si es necesario) a los elementos de navegación o a las tarjetas de trabajo en el Home.
*   **Despliegue:** Configurar el proyecto para su publicación en Vercel.
*   **Gestión de Repositorio:** Realizar el commit inicial de esta versión estable a GitHub.
