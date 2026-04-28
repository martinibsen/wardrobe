# Wardrobe — designsystem-showcase

Wardrobe er **personality for vibe-coded apps** — temaer til folk der bygger med Claude Code, Cursor, v0, Lovable.

Pitch til besøgende: *"Stop building purple-gradient apps. Drop one of these into your AI session and ship something with character."*

Wardrobe konkurrerer ikke med shadcn — det er et lag oven på shadcn. Vi sælger karakter, ikke komponenter.

Denne build dækker **kun det første tema: Hyper**. De øvrige tilføjes senere ved at gentage processen.

Mål for besøgende:
1. Se Hyper i sin naturlige habitat (Marathon Club demo)
2. Få Hyper ind i deres eget projekt på under 30 sekunder via en AI-prompt de paster i Claude Code/Cursor
3. Optionelt skrive sig op til "next theme drop"

**Voice & tone på Wardrobe-sider:** Direct, lowercase-friendly, peer-to-peer dev sprog. Ikke "professional design system". Ikke "elevate your product". Mere "stop shipping the same purple landing page", "drop this in your claude code session", "your shadcn but loud". Den her copy må gerne være lidt fræk.

---

## Standalone-kontekst

Dette repo er **standalone**. Det blev migreret ud af `martinibsen.dk`-repoet til at leve på sin egen GitHub-repo og sit eget domæne:

- **Repo:** https://github.com/martinibsen/wardrobe
- **Domain:** https://wardrobeui.com (custom domain peger på Netlify)
- **Netlify-site:** stupendous-mousse-3b2b1e.netlify.app
- **Deploy:** Netlify auto-deployer fra `main` branch
- **License:** MIT (LICENSE i repo-root)

Wardrobe lever på root af wardrobeui.com (uden `/wardrobe`-prefix). Ruter:

- `/` — neutral overview-side med tema-grid
- `/hyper` — Hyper system-side (komponenter, tokens, install)
- `/hyper/install` — one-paste install-prompt for Claude Code, Cursor, v0, Lovable
- `/hyper/marathon-club` — homepage demo
- `/hyper/marathon-club/events` — events demo
- `/hyper/marathon-club/membership` — signup form demo
- `/hyper/marathon-club/leaderboard` — leaderboard demo
- `/api/signup` — Loops email signup endpoint (Netlify serverless function)

---

## Wardrobe — house style — KRITISK LÆSEREGEL

Wardrobe har TO designsfærer. Bland dem aldrig.

### Sfære A — Wardrobe chrome (minimalistisk, kedeligt-elegant)

Gælder:
- `/` (overview-side)
- Wrappers/headers/footers omkring system-sider
- Navigation mellem systemer
- Email-signup-form på overview
- Eventuelle "info"-sider

Krav til Wardrobe chrome:
- **Baggrund**: hvid (`#FFFFFF`) eller meget lys grå (`#FAFAFA`)
- **Tekst**: sort/mørk grå (`#0A0A0A` headings, `#525252` body)
- **Font**: system-ui stack — `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. Ingen Google Fonts importeret til chrome.
- **Ingen**: gradienter, shadows, ikoner ud over funktionelle (chevron, copy-icon, external-link), animations, farvede knapper, custom radius (kun 0 eller 8px max)
- **Knapper og links**: tekst-baserede underline-on-hover. Hvis en knap er nødvendig: sort fill + hvid tekst, 8px radius, intet andet.

Reference: Stripe Press, Linear changelog, Pirsch Analytics. "Boringly elegant."

### Sfære B — Wardrobe system-rum (fuld karakter)

Gælder:
- `/hyper` (system-side med komponentliste)
- `/hyper/install` (one-prompt-side)
- `/hyper/marathon-club/*` (demo-sider)

Her er det HYPER, hele vejen ned. `<body data-system="hyper">` aktiverer alle tokens.

---

## Tech stack

- **Framework:** Astro 5
- **Output:** static (`output: 'static'` i astro.config.mjs)
- **Adapter:** `@astrojs/netlify` (kun for at gøre `/api/signup` til en Netlify serverless function — alle pages er prerendered)
- **TypeScript + React** for komponenter (.tsx) — det er hvad vibe-coders bruger
- **Vanilla CSS** for tokens og layout (INGEN Tailwind)
- **shiki** for syntax highlighting på copy-blocks

---

## File structure

```
src/
  components/
    hyper/
      Button.tsx
      Input.tsx
      Textarea.tsx
      Select.tsx
      Card.tsx
      Badge.tsx
      Dialog.tsx
      Tabs.tsx
      Switch.tsx
      Toast.tsx
      tokens.css
      globals.css
      cn.ts
      demos.tsx
    shared/
      CopyBlock.astro
      ComponentShowcase.astro
  layouts/
    Layout.astro              (én layout, neutral + hyper + hidden chrome)
  pages/
    index.astro               (overview, neutral chrome)
    hyper/
      index.astro             (system-side)
      install.astro           (one-prompt-install)
      marathon-club/
        index.astro
        events.astro
        membership.astro
        leaderboard.astro
    api/
      signup.ts               (Loops endpoint, Netlify function)
  utils/
    generate-prompts.ts
public/
  (tomt for nu)
wardrobe-references/          (gitignored — visuel reference fra Variant)
  hyper/
    *.html
```

---

## Token system

Hvert system scoper tokens via `data-system`-attribute:

```css
:where([data-system="hyper"]) {
  --color-bg: #EFFF71;
  /* osv. */
}

[data-system="hyper"] {
  background: var(--color-bg);
  color: var(--color-fg);
  font-family: var(--font-body);
}
```

Brug `:where()` for low-specificity. Komponenter må KUN referere CSS-variables — aldrig hex direkte.

---

## Component contract (gælder alle systemer)

Alle 10 komponenter SKAL have identisk TypeScript-API på tværs af systemer.

```ts
type ButtonProps = {
  variant?: "primary" | "secondary" | "destructive";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type InputProps = {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "error";
  label?: string;
  hint?: string;
  numericBadge?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

type CardProps = {
  variant?: "default" | "pink" | "blue" | "green";
  numericBadge?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

type BadgeProps = {
  variant?: "default" | "filled";
  children: React.ReactNode;
};

type SwitchProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
};

type TabsProps = {
  tabs: Array<{ id: string; label: string }>;
  activeId: string;
  onTabChange: (id: string) => void;
};

type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
};

type ToastProps = {
  title: string;
  description?: string;
  variant?: "default" | "success" | "error";
};

type SelectProps = {
  options: Array<{ value: string; label: string }>;
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange">;

type TextareaProps = {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "error";
  label?: string;
  hint?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
```

### A11y baseline

- Synlig focus-ring på alle interaktive elementer
- Logisk tab-rækkefølge
- Dialogs trapper focus, lukkes med Escape
- Switches/Tabs er keyboard-navigerbare
- WCAG AA kontrast på almindelig brødtekst

---

## Hyper — system-specifikke tokens

Se `src/components/hyper/tokens.css` for den komplette token-liste.

Highlights:
- `--color-bg: #EFFF71` (acid yellow)
- `--color-fg: #3A1E1E` (deep brown)
- `--font-display: "Anton"` (CAPS forever)
- `--font-body: "Georgia", serif`
- `--shadow-hard: 4px 4px 0px var(--color-fg)` (hard offset, ingen soft shadows)
- `--radius-pill: 32px`

`globals.css` importerer Anton fra Google Fonts.

### Visuel reference — KALIBRERINGS-INPUT

I mappen `wardrobe-references/hyper/` ligger HTML-filer eksporteret fra Variant. **Læs mindst 3 af dem før du bygger nye komponenter eller patterns.** De viser Hyper's faktiske karakter: spacing-rytme, hvordan komponenter relaterer sig til hinanden, hvilke proportioner der virker.

HTML-filerne er IKKE kode der skal kopieres direkte — de er reference-materiale. Mappen er gitignored.

---

## Hyper — 7 signature patterns

1. **Tynd brun border på alt**: `1px solid var(--color-fg)`. Aldrig shadows til afgrænsning.
2. **Hard offset shadow på active state**: `box-shadow: var(--shadow-hard)`. Aldrig soft shadows på interaktion.
3. **Numeric badges**: 24×24 hvide cirkler, brun border, `position: absolute; top: -10px; right: 20px;` — lapper over kant.
4. **Section titles med horizontal line via `::after`**.
5. **Display-tekst i ALL CAPS**, line-height 0.85, letter-spacing -0.02em, op til 120px. Anton.
6. **Periode efter heading-titel** ("STAY MOVING.", "MARATHON CLUB.").
7. **Bottom nav**: dark pille (32px radius), active item = acid-yellow cirkel.

---

## Distribution: tre måder at få Hyper ind i sit projekt

Wardrobe distribuerer ikke via download. Vi distribuerer via **copy-paste der matcher hvordan vibe-coders rent faktisk arbejder**.

### Copy-block-komponent

`src/components/shared/CopyBlock.astro` — kopier-blok med 3 tabs øverst:

1. **Code** — råt TSX
2. **Prompt** — formuleret AI-prompt klar til paste i Claude Code/Cursor
3. **Theme** — bare CSS-variables (relevant for shadcn-folk der bare vil re-themes)

Visuelt: tabs i Hyper-stil (brun/acid), syntax-highlighted kode (shiki), "Copy" knap der skifter til "Copied ✓" i 2 sek.

### Prompt-format pr. komponent

Genereres ved build via `src/utils/generate-prompts.ts`.

### `/hyper/install` — one-prompt-install side

Dedikeret route. Tre tabs: Claude Code/Cursor, v0, Lovable. Hver tab har én kæmpe paste-prompt der installerer hele Hyper i ét hug — tokens, font import, alle 10 komponenter, cn-utility, globals.css, og aktiveringseksempel.

Én "COPY ENTIRE PROMPT" knap øverst. Genererer prompten ved build-time fra de samme komponentfiler.

---

## Demo: Marathon Club

Habitat for Hyper. Fiktiv running club. Viser systemet i et website-format (ikke app).

### Brand
- Navn: **MARATHON CLUB.**
- Tagline: *"Every street is a track."*
- Etableringsår fiktion: 2019

### Sider (i `src/pages/hyper/marathon-club/`)
- `index.astro` — homepage (hero card, stats grid, upcoming events, top runners, CTA)
- `events.astro` — filterbar events list med 8 events
- `membership.astro` — 3 tier cards + komplet form (name, email, tier, longest run, why-textarea, switch, submit)
- `leaderboard.astro` — sortable board, 20 runners, hero card med totaltal

### Footer på alle Marathon Club-sider

```
MARATHON CLUB. — Every street is a track. © 2026
[Built with Wardrobe / Hyper] — link til /hyper
```

Pillen øverst-højre: "← Built with Hyper" (chrome="hidden" mode i Layout.astro).

---

## Loops integration

`src/pages/api/signup.ts`:

- `POST /api/signup` — body: `{ email: string }`
- Validerer email format
- Sender til Loops `https://app.loops.so/api/v1/contacts/update` med `mailingLists: { wardrobe: true }`
- Kræver `LOOPS_API_KEY` i env (se `.env.example`)
- `export const prerender = false;` så Astro behandler den som server-route → bygges til Netlify function via adapteren

**Husk** at oprette mailing list `wardrobe` i Loops dashboard før første signup.

---

## PostHog events

| Event | Hvor | Properties |
|---|---|---|
| `wardrobe_view` | / overview | – |
| `wardrobe_system_view` | /hyper | `system: "hyper"` |
| `wardrobe_install_view` | /hyper/install | `system: "hyper"` |
| `wardrobe_demo_view` | /hyper/marathon-club/* | `system: "hyper"`, `page` |
| `wardrobe_copy_code` | "Copy" i Code-tab | `component`, `system` |
| `wardrobe_copy_prompt` | "Copy" i Prompt-tab | `component`, `system` |
| `wardrobe_copy_theme` | "Copy" i Theme-tab | `system` |
| `wardrobe_copy_install_full` | "Copy entire install" på /hyper/install | `system`, `target: "claude-code" \| "v0" \| "lovable"` |
| `wardrobe_signup` | Email signup | `source: "wardrobe"` |
| `wardrobe_github_click` | Klik på GitHub-link | `system` |

PostHog tracker via `window.wardrobeTrack(event, props)` der wrapper `window.posthog.capture` (no-op hvis posthog ikke er loaded).

---

## Quality checks (efter ændringer, FØR commit)

1. **Wardrobe sammenhæng**: Scroll /hyper. Føles alle 10 komponenter som samme system?
2. **Differentiation**: Sammenlign med standard shadcn-knap. Mærkbart anderledes?
3. **A11y**: Tab gennem Marathon Club. Fuld keyboard-nav. Focus-ring synlig.
4. **Responsive**: 375 / 768 / 1280 px.
5. **Copy actually copies**: Test alle 3 copy-modes (code/prompt/theme) faktisk lægger korrekt indhold på clipboard.
6. **Install-prompt virker**: Smoke-test ved at åbne en tom Vite + React sandbox, paste install-prompten i Claude Code, og se om Hyper renderer.
7. **Build**: `npm run build` skal gennemføre uden errors.

---

## Local development

```bash
npm install
npm run dev   # → http://localhost:4321
npm run build # → static site i dist/ + Netlify functions i .netlify/
```

For email-signup endpoint at virke lokalt: kopier `.env.example` til `.env` og udfyld `LOOPS_API_KEY`.

---

## License

MIT — see LICENSE file in repo root.
