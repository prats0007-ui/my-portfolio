import type { Metadata, Viewport } from "next";
import { Anton, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "Pratik Vimalbalaji · Software Engineer | Full-Stack, AI & Testing",
  description:
    "Pratik Vimalbalaji, MS Information Systems at Northeastern. Software engineer building full-stack and AI-powered products, with SDET experience and two IEEE ML papers. Open to Summer 2027 SDE and AI/ML internships.",
  openGraph: {
    title: "Pratik Vimalbalaji · Portfolio",
    description: "Software engineer building full-stack and AI-powered products. Open to Summer 2027 SDE and AI/ML internships.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#070606",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body className="font-sans leading-relaxed">{children}</body>
    </html>
  );
}
