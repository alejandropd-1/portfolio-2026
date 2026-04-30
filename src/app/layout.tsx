import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "@/styles/main.scss";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aledesign.dev"),
  title: {
    default: "AleDesign | Alejandro Delgado - Multimedia Designer",
    template: "%s | AleDesign",
  },
  description:
    "Portfolio of Alejandro Delgado, a Multimedia Designer and Creative Developer specializing in high-end digital experiences, editorial design, and technical precision.",
  keywords: [
    "Multimedia Designer",
    "Creative Developer",
    "UX/UI Design",
    "Portfolio",
    "Editorial Design",
    "Alejandro Delgado",
    "AleDesign",
    "Motion Design",
    "Web Development",
  ],
  authors: [{ name: "Alejandro Delgado" }],
  creator: "Alejandro Delgado",
  publisher: "Alejandro Delgado",
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aledesign.dev",
    siteName: "AleDesign",
    title: "AleDesign | Alejandro Delgado - Multimedia Designer",
    description:
      "High-end digital experiences, editorial design, and technical precision by Alejandro Delgado.",
    images: [
      {
        url: "/banner-background.png",
        width: 1200,
        height: 630,
        alt: "AleDesign Portfolio Background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AleDesign | Alejandro Delgado",
    description:
      "Multimedia Designer and Creative Developer specializing in high-end digital experiences.",
    images: ["/banner-background.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable}`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
