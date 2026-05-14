<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
Bitte sieh dir immer zuerst die @package.json    an, bevor du irgendwas implementierst, damit wir die richtigen Pakete verwenden, die wir schon installiert haben.

## Deploy-Workflow & Branches

Vercel-Projekt `domenic` (Team `josefs-projects-3ccea825`):

- **`main`** → Production-Deploy. Auto-deployed zu `heilmasseur-domenic.at` + `www.heilmasseur-domenic.at`.
- **`preview`** → Vercel Preview-Deploy. Auto-deployed zu `domenic-snowy.vercel.app` (Custom Alias der Preview-Domain). **Branch NICHT löschen** — er ist die fest verlinkte Staging-URL und wird laufend für Reviews vor Production-Merge genutzt.

Üblicher Flow: feature work → push to `preview` → review auf `domenic-snowy.vercel.app` → PR `preview → main` → merge → Production-Deploy.

Wegen `preview`'s Custom-Alias-Domain greift Vercels automatischer `x-robots-tag: noindex` (der nur auf `*-git-*-josefs-projects-*.vercel.app` Defaults gesetzt wird) NICHT. Stattdessen setzen wir noindex/nofollow für alle Nicht-Production-Deployments via `next.config.ts → headers()` basierend auf `process.env.VERCEL_ENV !== "production"`. Wenn die Preview-Domain umgezogen wird, diesen Mechanismus checken.