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
  title: "AleDesign | Alejandro Delgado",
  description: "Multimedia Designer Portfolio",
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
