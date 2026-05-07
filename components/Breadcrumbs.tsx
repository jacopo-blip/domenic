import Link from "next/link";
import { ChevronRight } from "lucide-react";

const BASE_URL = "https://heilmasseur-domenic.at";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      item: `${BASE_URL}${item.href}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(jsonLd).replace(/</g, "\\u003c")}
      </script>
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-5 sm:px-8 pt-24 sm:pt-28"
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#555]">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {idx > 0 && (
                  <ChevronRight
                    size={14}
                    className="text-[#999] flex-shrink-0"
                    aria-hidden
                  />
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-semibold text-[#111]"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#0d4f4f] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
