# AleDesign Portfolio 2026 - "The Compiled Soul"

Portfolio profesional de AleDesign como Senior UI/UX Architect, construido con un enfoque técnico y una estética premium.

## 🚀 Arquitectura Técnica

- **Framework:** Next.js 15 (App Router)
- **Estilos:** SASS Modular (Metodología BEM)
- **Contenido:** MDX / Markdown (`next-mdx-remote/rsc`)
- **Dark Mode:** Zero-FOUC mediante SSR y Cookies

## 📦 Estructura del Proyecto

```bash
src/
├── app/               # Rutas de Next.js 15 (page.js, layout.js)
├── components/        # Componentes UI reutilizables (BEM)
├── content/           # Archivos .md y .mdx con la data
└── styles/            # Sistema SASS modular
    ├── abstracts/     # Tokens, variables, mixins
    ├── base/          # Resets, tipografía
    ├── components/    # Estilos de bloques BEM
    └── layout/        # Estilos estructurales
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
