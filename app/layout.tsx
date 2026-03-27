import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heilmasseur Domenic Hacker | Heilmassage Wien 1080",
  description:
    "Diplomierter Heilmasseur in Wien 1080 (Josefstadt). Heilmassage, Lymphdrainage & Klassische Massage. Termine online buchen. Krankenkasse erstattet.",
  openGraph: {
    title: "Heilmasseur Domenic Hacker | Heilmassage Wien 1080",
    description:
      "Diplomierter Heilmasseur in Wien 1080. Heilmassage, Lymphdrainage & Klassische Massage. Jetzt Termin buchen.",
    url: "https://heilmasseur-domenic.at",
    siteName: "Heilmasseur Domenic Hacker",
    locale: "de_AT",
    type: "website",
  },
  alternates: {
    canonical: "https://heilmasseur-domenic.at",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col">
        <Theme style={{ background: "transparent" }}>{children}</Theme>
        <Analytics />
      </body>
    </html>
  );
}
