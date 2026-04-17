import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TRV Riyad | Construction et rénovation à Casablanca",
  description:
    "TRV Riyad est une entreprise spécialisée dans la construction, la rénovation, la menuiserie, le vitrage et les finitions de villas à Casablanca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[#f3f3f3] text-[#171717] antialiased">
        {children}
      </body>
    </html>
  );
}