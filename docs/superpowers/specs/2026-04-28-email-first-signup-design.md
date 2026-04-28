# Email-first redesign — design spec

**Date:** 2026-04-28
**Author:** Martin Ibsen + Claude
**Status:** Approved, in implementation

## Why

Wardrobe's signup is currently a small block per page. We want email to be a real distribution channel for theme drops + builder content. Email is post-value-add — nothing is gated.

## Goals

- Signup visible on every page in multiple natural moments
- Hero on forsiden becomes email-first (CTA = "Get drops"), themes drop below
- Distinct touchpoints per session: hero, sticky-on-scroll, post-install, footer
- Sticky must be polite (one-click dismiss persists for the session)
- Theme-consistent: forsiden = neutral, /hyper/* = Hyper tokens, /system/* = System tokens

## Non-goals

- No gating, no paywalls, no premium tier
- No signup form embedded in the demo experiences (Marathon Club, Sequence) — would break immersion
- No Toast component dependency (would couple neutral chrome to a theme)

## Architecture

### Single shared component: `src/components/shared/EmailSignup.astro`

Used everywhere. Props:

```ts
type EmailSignupProps = {
    variant: "neutral" | "hyper" | "system";
    size: "compact" | "default" | "hero";
    placement: "hero" | "sticky" | "install" | "footer";
    heading?: string;
    subheading?: string;
    helper?: string;
    ctaLabel?: string;
    placeholder?: string;
    id?: string; // for #anchor jumps
};
```

Internals:
- Form posts to `/api/signup` (existing endpoint; no changes needed)
- Inline success state — replaces form with confirmation, no toast
- All instances on a page wired by one `is:inline` script that finds `[data-signup-form]`
- PostHog `wardrobe_signup` event with `placement` property

### Sticky CTA — owned by `Layout.astro`

Conditional on route: shown only on `/hyper`, `/system`, `/hyper/install`, `/system/install`.
Variant matches route: hyper or system.
Becomes visible at 50% scroll. Dismissible (X). `sessionStorage["wardrobe-sticky-dismissed"]` persists dismiss for the session.

### Footer signup — owned by `Layout.astro`

Compact form added at top of `<footer>`. Visible on neutral/hyper/system chrome. Skipped on `chrome="hidden"` (demo immersion).

### Demo "get drops" link

`chrome="hidden"` pages already render a "Built with Hyper" / "BUILT WITH SYSTEM" pill top-right. We extend the pill copy to include "· get drops →" (Hyper) / "/ GET DROPS" (System), linking to the parent system page anchor `#signup`.

### Anchor targets

- `/` — footer signup gets `id="signup"`
- `/hyper` — footer signup gets `id="signup"`
- `/system` — footer signup gets `id="signup"`

## Touchpoints per page

| Page                       | Hero | Inline | Sticky | Footer | Pill link |
|----------------------------|------|--------|--------|--------|-----------|
| `/`                        | ✓    |        |        | ✓      |           |
| `/hyper`                   |      |        | ✓      | ✓      |           |
| `/system`                  |      |        | ✓      | ✓      |           |
| `/hyper/install`           |      | ✓      | ✓      | ✓      |           |
| `/system/install`          |      | ✓      | ✓      | ✓      |           |
| `/hyper/marathon-club/*`   |      |        |        |        | ✓         |
| `/system/sequence/*`       |      |        |        |        | ✓         |

## Copy

- **Hero label:** "Get theme drops + builder notes."
- **Hero CTA:** "Get drops"
- **Hero helper:** "No spam. ~1 email per theme drop. Maybe one extra when I ship something interesting."
- **Sticky:** "Liked this? Get the next theme drop →"
- **Install heading:** "Got it working?"
- **Install subhead:** "Drop your email — I'll send the next theme + occasional builder notes."
- **Footer heading:** "Get notified"
- **Footer helper:** "Theme drops + builder notes."
- **Success:** "✓ You're in. Check your inbox for a hello."

## Trade-offs accepted

1. Forsiden's old bottom-page signup-block is removed — hero + footer cover it. Avoids 3 signup forms on one short page.
2. Both sticky bar AND inline post-install signup block coexist on `/hyper/install` and `/system/install`. Sticky is dismissible per session, so it only competes with the inline block until first dismiss.
3. Inline confirmation, not toast — removes Toast coupling from neutral sphere.
4. Demo pages get a copy bump on the existing "Built with…" pill rather than a separate element. Keeps demo immersion intact.

## Quality gates before commit

1. `npm run build` clean
2. Forsiden hero shows email-first CTA primary, "or browse themes →" secondary
3. `/hyper`, `/system`, `/hyper/install`, `/system/install` show sticky bar after 50% scroll
4. Sticky dismiss persists in sessionStorage and stays dismissed on reload
5. Both install pages show the post-copy signup block in theme style
6. Footer compact form on every non-demo page
7. Demo pages: only the modified pill — no signup form
8. Mobile (375px): sticky doesn't cover content; layout doesn't break
