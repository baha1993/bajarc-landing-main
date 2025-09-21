import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
});

const integralCFFont = localFont({
  src: [
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-regularoblique.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-mediumoblique.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-demibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-demiboldoblique.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-boldoblique.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-extraboldoblique.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-heavy.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-heavyoblique.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-integral",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BajaRC.me",
  description: "BajaRC.me - Real-time FPV Racing and Live Streams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-background font-satoshi ${satoshi.variable} ${integralCFFont.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
