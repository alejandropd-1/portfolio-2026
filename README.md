# The Compiled Soul // Portfolio 2026

![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink?style=for-the-badge&logo=sass&logoColor=white)
![MDX](https://img.shields.io/badge/MDX-black?style=for-the-badge&logo=mdx&logoColor=white)

> Una pieza editorial digital donde la precisión del código se encuentra con la profundidad del diseño atmosférico.

---

## 🌌 Visión General

**The Compiled Soul** no es simplemente un sitio web de portfolio; es una experiencia digital de alta gama diseñada bajo una estética editorial técnica. Inspirado en la interfaz de una terminal de desarrollo sofisticada, el proyecto busca romper con los "templates" genéricos mediante el uso de asimetría intencional, tipografía dramática y una profundidad tonal que emula un vacío digital iluminado por saturaciones vibrantes.

### Filosofía de Diseño
- **Profundidad Atmosférica**: Capas que flotan mediante desenfoques y sombras difusas.
- **Regla de "No-Líneas"**: Las secciones se definen por cambios tonales y espacios negativos, prohibiendo el uso de bordes sólidos de 1px.
- **Jerarquía Técnica**: Tipografía **Inter** escalada drásticamente para guiar la lectura.

---

## 🛠️ Stack Tecnológico

El proyecto utiliza las últimas tecnologías para garantizar un rendimiento excepcional y una mantenibilidad robusta:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: SASS/SCSS con arquitectura de Módulos.
- **Contenido**: [MDX](https://mdxjs.com/) con `next-mdx-remote` y `gray-matter`.
- **Animaciones**: [Motion](https://motion.dev/) (Framer Motion).
- **Iconografía**: [Lucide React](https://lucide.dev/).
- **IA**: Integración con el SDK de Google Generative AI para el chat inteligente.

---

## ✨ Características Principales

### 💎 Glassmorphism 2.0
Sistema global de superficies esmeriladas que incluye:
- Backdrop blur de 12px.
- Textura de grano dinámico (grain texture) para dar organicidad.
- Adaptabilidad tonal inteligente para modos Claro y Oscuro.

### 📟 Navegación Estilo Terminal
Menú móvil offcanvas diseñado como una terminal interactiva (`>_`), con efectos de desenfoque y transiciones suaves que mantienen la inmersión del usuario.

### 📂 CMS Basado en Archivos
Toda la data del sitio vive en archivos `.mdx`. La lógica de filtrado separa automáticamente la "Experiencia Profesional" de los "Proyectos Independientes" basándose en el metadata del archivo.

### 🎨 Títulos con Gradientes Dinámicos
Implementación de headers con gradientes Verde-Cian optimizados para evitar el clipping de texto y asegurar legibilidad en todos los tamaños de pantalla.

---

## 📂 Estructura del Proyecto

```text
src/
├── app/                # Rutas y lógica de servidor (App Router)
├── components/         # Componentes React (UI Atomizada)
├── content/            # Base de datos .mdx (Proyectos, Resume, About)
├── helpers/            # Utilidades de sistema de archivos y parsing
├── hooks/              # Hooks personalizados (Theme, Scroll, etc.)
└── styles/             # Sistema de diseño (Mixins, Variables, Modules)
```

---

## ✍️ Gestión de Contenido

Para añadir nuevo contenido, simplemente crea un archivo en `src/content/projects/nombre-del-proyecto.mdx`:

```markdown
---
title: "Senior Product Designer"
company: "Tech Innovators"
category: "employment"
showInResume: true
showInPortfolio: true
order: 1
date: "2024 - Present"
---

Aquí va el contenido detallado del proyecto usando componentes React dentro de MDX.
```

---

## 🚀 Instalación y Desarrollo

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/portfolio-2026.git
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env.local` con tu `GEMINI_API_KEY`.

4. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

---

## 📄 Licencia

© 2026 ALE_DESIGN // ALL RIGHTS RESERVED
Este proyecto está diseñado para uso personal como portfolio. Queda prohibida la reproducción total o parcial del diseño sin atribución.
