"use client";

import dynamic from "next/dynamic";

const isConfigured = !!(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_DATASET
);

// Lazy-load the studio to avoid config errors when Sanity is not set up
const Studio = dynamic(
  () =>
    Promise.all([
      import("next-sanity/studio").then((m) => m.NextStudio),
      import("@/sanity.config").then((m) => m.default),
    ]).then(([NextStudio, config]) => {
      const C = () => <NextStudio config={config} />;
      C.displayName = "SanityStudio";
      return C;
    }),
  { ssr: false }
);

export default function StudioPage() {
  if (!isConfigured) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#101010] text-white p-8">
        <div className="max-w-lg text-center">
          <h1 className="text-2xl font-bold mb-4">Sanity Studio</h1>
          <p className="text-white/70 mb-6">
            Um das Studio zu nutzen, müssen die Sanity-Umgebungsvariablen gesetzt sein.
          </p>
          <ol className="text-left text-sm text-white/60 space-y-2 mb-6">
            <li>
              1. Führen Sie{" "}
              <code className="bg-white/10 px-1 rounded">npx sanity init</code>{" "}
              aus, um ein Sanity-Projekt zu erstellen
            </li>
            <li>
              2. Tragen Sie Ihre{" "}
              <code className="bg-white/10 px-1 rounded">
                NEXT_PUBLIC_SANITY_PROJECT_ID
              </code>{" "}
              in <code className="bg-white/10 px-1 rounded">.env.local</code>{" "}
              ein
            </li>
            <li>3. Starten Sie den Dev-Server neu</li>
          </ol>
          <a
            href="https://sanity.io/manage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-bold px-6 py-2 rounded-full hover:bg-white/90"
          >
            sanity.io/manage öffnen →
          </a>
        </div>
      </div>
    );
  }

  return <Studio />;
}
