import type { Metadata } from "next";
import { Jost, Roboto_Mono } from "next/font/google";
import "@/styles/main.scss";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
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
      <body className={`${jost.variable} ${robotoMono.variable}`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
