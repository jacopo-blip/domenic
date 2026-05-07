const BASE_URL = "https://heilmasseur-domenic.at";

const SERVICE_DATA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Heilmassage & Sportmassage Wien 1080",
  description:
    "Diplomierte Heilmassage und Sportmassage in Wien 1080 (Josefstadt). Heilmassage, Lymphdrainage, Klassische Massage, Sportmassage — individuell auf den Bedarf abgestimmt.",
  serviceType: "Massage",
  priceRange: "€55–€85",
  areaServed: {
    "@type": "City",
    name: "Wien",
  },
  provider: {
    "@type": "LocalBusiness",
    name: "Heilmasseur Domenic Hacker",
    url: BASE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Feldgasse 3/20",
      addressLocality: "Wien",
      postalCode: "1080",
      addressCountry: "AT",
    },
  },
};

export function JsonLdService() {
  return (
    <script type="application/ld+json" suppressHydrationWarning>
      {JSON.stringify(SERVICE_DATA).replace(/</g, "\\u003c")}
    </script>
  );
}
