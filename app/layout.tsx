import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/JsonLd";
import Script from "next/script";
import CookieConsentComponent from "@/components/CookieConsent";

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
        {/* Google Consent Mode v2 — must run before GTM */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;

            var analytics_storage = "denied";

            try {
              var match = document.cookie.match(/(?:^|;\\s*)cc_cookie=([^;]*)/);
              if (match) {
                var cookieValue = JSON.parse(decodeURIComponent(match[1]));
                if (cookieValue.categories && cookieValue.categories.includes("analytics")) {
                  analytics_storage = "granted";
                }
              }
            } catch (e) {
              // ignore parsing errors
            }

            gtag("consent", "default", {
              analytics_storage: analytics_storage,
              ad_storage: "denied",
              ad_user_data: "denied",
              ad_personalization: "denied",
              security_storage: "granted",
              wait_for_update: 2000,
            });
          `}
        </Script>
        {/* TODO: Replace GTM-XXXXXXX with Domenic's actual GTM container ID */}
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col">
        {/* GTM noscript fallback — TODO: Replace GTM-XXXXXXX with Domenic's actual GTM container ID */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Theme style={{ background: "transparent" }}>{children}</Theme>
        <Analytics />
        <CookieConsentComponent />
      </body>
    </html>
  );
}
