# CLAUDE.md — Real Estate Website Skill (Frontend + Anti-Slop + SEO)

Single-file skill for building real estate agent / agency websites that do not read as AI-generated. Merges: frontend build rules, anti-AI-slop design discipline (Hallmark-derived), anti-slop content discipline, real-estate-specific UI patterns, and real-estate SEO. Drop this file at the project root as `CLAUDE.md` (or `.claude/skills/real-estate/SKILL.md`).

## Response Style
No explanations unless asked. Code only. Action → what's next.
State assumptions in one line, then build. Never pad with meta-commentary ("I'll now create...", "Let's dive into...").

## Session Start — always invoke in this order
1. `frontend-design` skill (or equivalent design-token guidance) before any frontend code.
2. `gsap-lenis` skill when adding animations or scroll effects.
3. `premium-ui-components` skill when building Next.js landing pages.
4. Run the **Pre-flight scan** (below) before touching code.
5. Run the **Discovery gate** (below) before picking a macrostructure.
6. Hold every layout and color decision to the **Design Excellence Bar** and **Palette Construction** process (§3) — award-tier is the floor, not the ceiling.
Commit to ONE aesthetic direction before the first line. Execute without compromise.

## Project Type
Set at project level: `HTML` | `NEXTJS`
- HTML: single `index.html` per page, Tailwind CDN, all styles inline `<style>`, mobile-first.
- NEXTJS: component files, Tailwind via config, CSS vars in `globals.css`.

---

## 0. Pre-flight scan
If the project already has code, read it before writing anything: existing font stack, palette (`:root` tokens, `tailwind.config`), motion libraries in `package.json`, spacing scale, framework. State findings in 3–5 lines: what's preserved, what's introduced. Skip silently on an empty project.

## 1. Discovery gate — ask once, briefly
Before building, get:
1. **Typ klienta** — indywidualny agent / biuro (multi-agent) / deweloper (nowe inwestycje)?
2. **Rynek** — miasto/region, segment (mieszkania, domy, luksus, komercyjne, inwestycje)?
3. **Jedna rzecz do zapamiętania** — co ma zostać w głowie odwiedzającego po 5 sekundach?
If the person says "rób" / doesn't answer, infer from the brief, state the inference in one line, and proceed. Do not loop follow-ups.

---

## 2. Anti-Slop Discipline — non-negotiable

The single biggest tell of an AI-built real estate site is genericness: the same hero → 3-feature-cards → testimonial-carousel → footer rhythm every template ships. Refuse it structurally, not just visually.

### Structural variety
- Pick a **macrostructure** deliberately before writing code — not the reflexive hero/features/testimonials/CTA/footer stack. For real estate, credible alternatives: **Listing-Led** (search bar dominates hero, listings grid below the fold), **Portfolio-Grid** (agent's closed deals as the hero proof), **Editorial-Local** (long-form neighborhood storytelling, listings woven in), **Map-First** (interactive map as hero, list view secondary), **Single-Property Showcase** (one flagship listing as a full landing page — for a featured/luxury property).
- Vary nav and footer shape too. Default away from "logo + 4 links + button" nav and "4-column footer + social row" — the two most recognizable AI fingerprints.
- If building multiple pages (home, listing detail, about, contact) for the same client, they should share a design system (tokens) but each page's *section rhythm* should fit its actual content, not a copy-pasted shell.

### Honest content — never fabricate
- **Never invent**: testimonials, review counts/stars, "closed X transactions", "trusted by Y families", years of experience, team size, or awards, unless the client supplied the real number. Use a labelled placeholder (`— liczba do potwierdzenia`) or omit the section entirely.
- Never invent property data (price, m², rok budowy, liczba pokoi) — pull from what the client provided or leave an explicit placeholder field, never a plausible-looking fake number.
- Never fabricate agent credentials, licence numbers, or company history.
- Copy: avoid stock real-estate marketing sludge — "Twój wymarzony dom czeka", "Odkryj idealne miejsce do życia", "Zaufaj ekspertom" — write specific, concrete copy tied to the actual client and market instead.

### Visual slop to refuse
- No generic purple/blue gradient backgrounds. No glassmorphism-everywhere. No floating 3D shapes with no purpose.
- No stock photography of anonymous smiling people shaking hands in suits — if the client has no real photos yet, use the client's actual property photos, architectural/interior placeholders, or clean typographic hero instead of stock-photo cliché.
- No re-drawn fake browser chrome, fake phone frames, or fake map screenshots — embed the real map (Google Maps / OpenStreetMap) or use a real screenshot in a plain `<figure>`.
- Every card/section must earn its place from actual content — don't wrap unrelated content in cards "because that's what templates do."

### Locked design tokens
Once a palette + type pairing is chosen, every color and font reference in the codebase must use a named CSS custom property (`var(--color-accent)`, `var(--font-display)`). No inline hex/OKLCH, no ad-hoc `font-family` declarations mid-file. If a new value is needed, add it to the token block first.

### Pre-ship self-check
Before handing back output, verify: does this look like *this specific client's* site, or could the copy/structure be swapped onto any other agent's site with a find-and-replace? If the latter — revise.

---

## 3. Design Direction

Pick an extreme and commit — for real estate the credible range is narrower than generic brutalist/retro-futuristic, but still requires a real choice:
- **Boutique/editorial** — restrained, generous whitespace, serif display, muted natural palette. Best for individual agents, luxury, boutique studios.
- **Modern-minimal** — Stripe/Linear-adjacent, geometric sans, high contrast, tight grid. Best for tech-forward agencies, new-build developers.
- **Warm/local** — organic textures, warm neutrals, humanist type. Best for neighborhood-focused or family-oriented agents.
- **Architectural/luxury** — high-contrast black/white/stone, oversized imagery, minimal chrome. Best for premium/luxury segment.

Ask: what should someone remember after 5 seconds — the agent's name, the neighborhood, the price point, the design quality itself? Build the hero around that answer.

### Design Excellence Bar
The target is award-tier, not template-adequate — hold every layout decision to this, not just "looks fine."
- **Benchmark against the best, not other agents.** Before committing to a direction, hold it against Awwwards Site of the Day / SiteInspire / Land-book architecture-and-real-estate entries — not competing agent sites, which are almost all mediocre. The bar is "would this get featured," not "does this look professional."
- **Hierarchy over decoration.** One dominant focal point per screen — the price, the photo, the headline, pick one. If three elements compete for attention, the layout has failed regardless of how polished each one is individually.
- **Whitespace is a decision, not empty space.** Generous negative space around a hero photo reads as luxury; cramped spacing reads as budget, independent of the palette. When in doubt, remove an element rather than shrink it to fit.
- **One consistent spacing rhythm** across the whole page (e.g. 4/8/16/32/64/128px scale) — no arbitrary one-off margins. Sections should read as one composition, not stitched-together blocks.
- **Restraint is the luxury signal.** For boutique, architectural, and luxury segments especially: fewer, better-considered elements read as more expensive than more of them. Resist adding another card, badge, or gradient "to fill space" — a confident empty section beats a busy average one.
- **Micro-details separate good from forgettable:** consistent icon stroke-weight matched to type weight, optical (not just mathematical) alignment on buttons/badges, custom focus rings styled to the palette instead of left as browser-default blue.
- **One deliberate "hero move" per page** — the single thing a visitor would screenshot: an oversized asymmetric price, a full-bleed property photo with type overlay, a sticky key-facts panel. Not five competing tricks at once.

### Typography
- Google Fonts only. Never Inter, Roboto, Arial, or system fonts as the deliberate choice.
- Pair: display/serif (headings) + humanist sans or mono (body). Polish diacritics (ą ć ę ł ń ó ś ź ż) must render correctly — verify the chosen font ships full Latin Extended-A.
- Headings: `letter-spacing:-0.03em`, `line-height:1.1`, `font-weight:700+`.
- Body: `line-height:1.75`, max `68ch`.
- Key headings: `clamp()` fluid sizing. Scale ratio 1.25 or 1.333 — no arbitrary sizes.

### Color System — Palette Construction
CSS custom properties in `:root`, using **OKLCH** (preferred — perceptually uniform, so tints/shades derived from the same hue stay visually consistent) or HSL. Required tokens: `--bg` `--surface` `--primary` `--accent` `--text` `--muted`, plus `--success`/`--warning` only if status badges are used.

**Derive the palette, don't guess it:**
1. Pick ONE harmony model deliberately, matched to the Design Direction chosen above:
   - **Monochromatic + single sharp accent** — one hue at varying lightness, one complementary accent reserved for CTAs/key numbers. Safest for boutique/editorial and architectural/luxury — reads controlled and expensive.
   - **Analogous** (adjacent hues, e.g. terracotta → amber → gold) — cohesive, warm, low visual tension. Fits warm/local direction.
   - **Split-complementary** — a base hue + the two hues flanking its complement. More energy than monochromatic without the harshness of a straight complementary pair. Fits modern-minimal when the brand wants one confident pop of color.
   - Avoid a straight complementary (opposite-hue) pair at full saturation — reads sporty/consumer, rarely premium real estate.
2. Apply **60-30-10**: 60% dominant/background, 30% secondary/surface, 10% accent. If the accent covers more than ~15% of any given screen it stops reading as an accent and starts reading as noise.
3. **Never default to navy-and-gold** unless it's in the client's actual brand assets — it's the single most recognizable real-estate template cliché. Deliberately test one alternative direction first: warm stone/terracotta, deep forest/sage, charcoal/warm-white, clay/cream.
4. Derive hover/disabled/focus states by shifting lightness/chroma of the *same* hue in OKLCH rather than introducing new hues per state — keeps the palette coherent under every UI state.

**Accessibility is not optional:** body text on background ≥ 4.5:1 contrast (WCAG AA), large text/headings ≥ 3:1. Check `--muted` on `--surface` specifically — it's the pairing most likely to fail. Never encode meaning (status, price change, availability) in color alone — pair it with an icon or label.

**Tools:** build and eyeball the palette in oklch.com or coolors.co before writing a line of CSS; verify contrast with an actual WCAG checker, not by eye.

### Depth
- Backgrounds: layered gradient or subtle noise — never flat, never a loud gradient.
- Shadows: color-tinted, minimum 2 levels, low opacity.
- Cards: `1px solid hsl(var(--text)/0.08)` + inner highlight.
- Property photos: `from-black/50` gradient overlay on hero images for text legibility; never over interior detail shots where the photo itself is the content.

### Spatial
- Asymmetry over centered-everything.
- Hero: one element breaks the grid (oversized price/type, offset property photo).
- Vary section rhythm: full-bleed alternates with contained.
- Negative space: generous OR dense — never average.

---

## 4. Real Estate Components

### Listing / property card
- Photo (real, correct aspect ratio, `loading="lazy"`), price, key facts (m², pokoje, piętro/kondygnacje, lokalizacja) — as a compact fact row, not paragraph text.
- Hover state required: lift + shadow deepen, or photo crossfade to a second image.
- Status badge only if real (Nowość / Zarezerwowane / Obniżka ceny) — never a fake urgency badge ("Ostatnia szansa!") unless factually true.
- Link the whole card, not just a "Zobacz więcej" text link.

### Search & filters
- Above-the-fold on listing-led homepages: lokalizacja, typ (mieszkanie/dom/działka/lokal), zakres ceny, liczba pokoi/m².
- Filters must be usable one-handed on mobile — bottom sheet or full-screen overlay, not a cramped inline row.
- Persist filter state in the URL query string so listings are shareable/bookmarkable and crawlable.

### Property detail page
- Photo gallery: real lightbox, swipe on mobile, no fake browser-style chrome around it.
- Key facts table above the fold: cena, cena/m², powierzchnia, liczba pokoi, piętro, rok budowy, forma własności, ogrzewanie, stan.
- Map with the actual pin (approximate location if the client wants street-level privacy) — real embedded map, not a static screenshot styled to look interactive.
- Clear primary CTA: kontakt / umów prezentację / zadzwoń — sticky on mobile scroll for long detail pages.
- Similar/nearby listings section at the bottom, real data only.

### Agent / agency trust section
- Real photo, real license/licence number if applicable, real years active if supplied, real specialization/area.
- Do not synthesize a "meet the team" grid with placeholder headshots presented as real people — use initials/monogram placeholders explicitly, or omit until real photos exist.

### Lead capture
- Short form: imię, telefon/email, wiadomość (optional). Every extra field costs conversions.
- Explicit consent checkbox + link to privacy policy — required under RODO for storing contact data.
- Confirm submission state clearly (inline success, not just a silent form reset).
- Never dark-pattern the consent checkbox (pre-checked, hidden, or worded to discourage unchecking).

### Neighborhood / location content
- Real, specific detail about the area (transit, schools, amenities) beats generic "great neighborhood" copy — but keep it factual, not fabricated proximity claims.

---

## 5. SEO for Real Estate

The goal: rank for `[typ nieruchomości] [miasto/dzielnica]` queries and be crawlable/indexable by default — build this in from the first commit, not bolted on later.

### Technical foundation
- Semantic HTML: one `<h1>` per page, logical `<h2>`/`<h3>` hierarchy, `<nav>`/`<main>`/`<footer>` landmarks.
- Every listing gets its own indexable URL (`/nieruchomosci/mieszkanie-3-pokoje-mokotow-12345`), not a JS-only client-rendered route with no server-rendered content — use SSR/SSG (Next.js) so crawlers see full content without executing JS.
- `sitemap.xml` auto-generated, including every listing URL; regenerate on listing add/remove.
- `robots.txt` allowing crawl of listing pages, disallowing filter-permutation URLs that create duplicate-content bloat (or use `rel=canonical` on filtered views pointing to the base listing page).
- Canonical tags on every page.
- 404 handling for removed/sold listings: either a friendly 410/redirect to similar active listings, not a dead link.

### Structured data (JSON-LD) — required
Add per page type:

```html
<!-- Property detail page -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "url": "https://example.pl/nieruchomosci/...",
  "name": "Mieszkanie 3-pokojowe, Mokotów",
  "description": "...",
  "image": ["https://example.pl/photos/1.jpg"],
  "datePosted": "2026-08-01",
  "offers": {
    "@type": "Offer",
    "price": "850000",
    "priceCurrency": "PLN"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Warszawa",
    "addressRegion": "Mazowieckie",
    "streetAddress": "ul. Przykładowa 1",
    "addressCountry": "PL"
  }
}
</script>

<!-- Agency / agent page -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Nazwa Biura",
  "image": "https://example.pl/logo.png",
  "telephone": "+48...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Warszawa",
    "addressCountry": "PL"
  },
  "areaServed": "Warszawa",
  "url": "https://example.pl"
}
</script>
```
Add `BreadcrumbList` on listing/category pages, `FAQPage` only if real FAQ content exists (never fabricated Q&A to farm a rich result).

### Local SEO
- NAP consistency (Nazwa, Adres, telefon) identical across the site footer, contact page, and Google Business Profile.
- City/district-specific landing pages only when there's real distinct content per area — thin duplicate location pages hurt more than they help.
- Embed the real Google Maps location on the contact page.

### Meta & content
- Unique `<title>` and `meta description` per listing: `[Typ] [pokoje]-pokojowe [dzielnica] — [cena] zł | [Biuro]`, under ~60/155 chars.
- `og:image`/`twitter:card` using the listing's actual hero photo, not a generic site-wide banner, for shareability.
- `alt` text on every property photo: descriptive, not keyword-stuffed (`"Salon z tarasem, mieszkanie Mokotów"`, not `"mieszkanie warszawa tanie mieszkanie sprzedam"`).

### GEO — optimization for AI search (ChatGPT, Perplexity, Google AI Overviews, Gemini)
Traditional SEO gets you ranked; GEO gets you *cited* when someone asks an AI assistant "polecisz agenta nieruchomości na Mokotowie?" or "ile kosztuje mieszkanie 3-pokojowe w [dzielnica]?". AI answer engines favor pages that are easy to extract clean facts from.
- **Answer the question in the first 1–2 sentences of every page/section** — AI crawlers extract the most direct statement, not the most persuasive one. Lead with the fact (cena, lokalizacja, typ), not a marketing hook.
- **Structure content as extractable Q&A/fact blocks** where natural: a real, non-fabricated FAQ section per listing type or neighborhood ("Ile kosztuje mieszkanie w [dzielnica]?", "Jakie są opłaty przy zakupie?") — pairs with `FAQPage` JSON-LD from the Structured Data section above.
- **Keep JSON-LD complete and accurate** (`RealEstateListing`, `RealEstateAgent`, `FAQPage`, `BreadcrumbList`) — AI systems parse structured data more reliably than prose, so it's the highest-leverage GEO investment on the page.
- **`llms.txt` at the site root** — a plain-text summary (who the agent/agency is, service area, specializations, contact) that AI crawlers can read without rendering JS. Optional but cheap:
```
# [Nazwa Biura/Agenta]
Agent/biuro nieruchomości w [miasto]. Specjalizacja: [mieszkania/domy/luksus/komercyjne].
Obszar działania: [dzielnice/miasta].
Kontakt: [telefon], [email]
Oferty: https://example.pl/nieruchomosci
```
- **Author/entity clarity** — a real, named agent with a bio and licence number (not "Zespół") is more likely to be surfaced as a credible source than an anonymous corporate voice; ties directly to the "no fabricated credentials" rule above, in reverse — real credentials help GEO, fake ones are both dishonest and eventually detected.
- **Freshness signals** — visible "Zaktualizowano [data]" on listings and market-content pages; AI answer engines weight recency for price-sensitive queries.
- **Avoid JS-only rendering for factual content** (same requirement as classic SEO above) — an AI crawler that can't execute JS sees an empty page and cites nothing.
- GEO is additive to SEO, never a replacement — every technical/structured-data requirement in the SEO section above is a GEO requirement too.

### Performance (ranking factor + conversion factor)
- Images: modern formats (`avif`/`webp` with fallback), responsive `srcset`, `loading="lazy"` below the fold, `loading="eager"`/`fetchpriority="high"` on the LCP hero image only.
- Fonts preloaded: `<link rel="preload" as="font">`.
- Target Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms — test with real property photo weights, not placeholder lorem-image sizes.
- No render-blocking third-party scripts above the fold (chat widgets, analytics) — defer/async load.

---

## 6. Motion
- Prefer GSAP over CSS transitions for anything beyond simple hover states.
- Only `transform` and `opacity` — never `transition-all`.
- Load: GSAP stagger 0 / 0.12 / 0.24s with `expo.out`.
- Scroll: GSAP ScrollTrigger `start: 'top 85%'` → y:40 opacity:0 → y:0 opacity:1.
- Hover: `translateY(-2px)` + shadow deepen, 180ms.
- Wrap all in `@media (prefers-reduced-motion: no-preference)`.
- Cut motion before adding it — a listings grid with 20 cards all staggering on scroll is noise, not delight; stagger the first row only.

### Parallax & other scroll effects — use only when requested or when the aesthetic calls for it
Parallax is easy to overdo on a real estate site — it fights with legible listing data. Reach for it in the hero or a full-bleed neighborhood/property showcase section, never on cards, price tables, or forms.

**Layered parallax (hero photo + foreground text), GSAP + Lenis:**
```js
gsap.to('[data-parallax-bg]', {
  yPercent: 20,
  ease: 'none',
  scrollTrigger: { trigger: '[data-parallax-section]', start: 'top bottom', end: 'bottom top', scrub: true }
})
gsap.to('[data-parallax-fg]', {
  yPercent: -10,
  ease: 'none',
  scrollTrigger: { trigger: '[data-parallax-section]', start: 'top bottom', end: 'bottom top', scrub: true }
})
```
Rules: background layer moves slower than scroll (`yPercent` 15–25), foreground content moves opposite/faster or stays static for readability. Always `will-change: transform` on the moving layer only. Disable entirely under `prefers-reduced-motion` and on touch devices below 768px where parallax reads as jank, not polish — swap to a static image.

**Other scroll effects worth reaching for on real estate sites:**
- **Horizontal scroll-snap gallery** for property photos on desktop (`scroll-snap-type: x mandatory`), native browser API — no GSAP needed, works better on trackpads than a JS-driven horizontal scroller.
- **Sticky scroll-reveal** for a property's key-facts panel staying pinned while photos scroll past (`position: sticky` + `ScrollTrigger.pin`) — good for single-property showcase pages.
- **Number counters** (e.g. "X ofert w portfolio", only with real numbers) on scroll-into-view using `gsap.to` on a numeric value with `snap: { value: 1 }`.
- **Image reveal masks** (clip-path wipe on scroll) for hero property photos — more distinctive than a plain fade, still cheap on performance.
Do not stack more than one of these per page — pick the one that fits the macrostructure, not all of them.

## 7. Components
- Buttons: `0.65em 1.5em` padding, hover lifts + shadow deepens.
- Inputs: CSS var borders, accent focus ring, no browser defaults.
- Cards: hover state required (lift / glow / border reveal).
- Nav sticky: `backdrop-filter:blur` on scroll.

## 8. Reference Images
Match exactly — layout, spacing, colors, typography. No unrequested improvements. Screenshot → compare → fix. Min 2 rounds until no visible diff.

## 9. Server & Screenshots
Serve: `node serve.mjs` port 3000. Never `file:///`.
Screenshot: `node screenshot.mjs http://localhost:3000` → `./temporary screenshots/screenshot-N.png`

## 10. Brand Assets
Check `brand_assets/` first. Real client assets (logo, photos, licence numbers) override all placeholders.

---

## Hard Rules
- No content not in the brief/reference.
- Never `transition-all`.
- Never: purple gradients on white, generic navy-and-gold real-estate cliché as a default, cookie-cutter "hero/3-features/testimonials/footer" layout, fabricated stats/testimonials/reviews, stock handshake photos, fake browser/map chrome.
- Every listing page must be server-rendered/crawlable — no client-only rendering for indexable content.
- Every form collecting contact data needs an explicit RODO consent checkbox.

---

## Libraries & Stack

### Core — install on EVERY project

**HTML (CDN, paste in `<head>` before `</body>`):**
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@latest/dist/lenis.min.js"></script>
```

**Next.js (npm):**
```bash
npm i gsap @studio-freight/lenis motion
npx shadcn@latest init
```

### Standard GSAP Setup

**HTML:**
```js
gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)

gsap.utils.toArray('[data-reveal]').forEach(el => {
  gsap.from(el, {
    y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 85%' }
  })
})

gsap.from('[data-hero] > *', {
  y: 32, opacity: 0, duration: 1.1, ease: 'expo.out',
  stagger: 0.12, delay: 0.15
})
```

**Next.js (`app/layout.tsx` or per-page `useEffect`):**
```ts
import { useGSAP } from '@gsap/react'
import Lenis from '@studio-freight/lenis'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger, useGSAP)

useGSAP(() => {
  const lenis = new Lenis()
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
})
```

### Component Libraries — Next.js landing pages
Use after `npx shadcn@latest init`. Pick ONE per project — don't mix.

| Library | Install | Best for |
|---|---|---|
| Aceternity UI | copy-paste from site | Hero sections, spotlight, 3D cards, beams |
| Magic UI | copy-paste from site | Animated text, bento grids, shimmer buttons |
| Motion Primitives | copy-paste from site | Text reveals, magnetic buttons, stagger lists |

### Maps
- `react-leaflet` + OpenStreetMap for a lightweight, no-API-key map, or `@vis.gl/react-google-maps` if the client already has a Google Maps API key.
- Cluster markers on multi-listing map views (`react-leaflet-markercluster` or Google Maps `MarkerClusterer`).

### CSS Effects Library (HTML only, no npm)
- UIVerse → https://uiverse.io — buttons, loaders, cards, inputs, checkboxes.

### Reference Repositories
| Repo | Why it matters |
|---|---|
| `darkroomengineering/satus` | Gold-standard Next.js starter: GSAP, Lenis, R3F, Sanity baked in |
| `pmndrs/react-three-next` | Minimal Next.js + R3F starter (only if a 3D hero is genuinely warranted) |

---

## Anti-Slop Copy Checklist (run before shipping any written content)
- No "delve into", "navigate the complexities", "in today's fast-paced world", "it's important to note that".
- No invented metrics, testimonials, or review counts.
- No generic CTA without context ("Zobacz więcej" everywhere) — use specific action text ("Zobacz mieszkanie", "Umów prezentację").
- Vary sentence structure; write in the client's actual voice, not corporate-generic Polish real-estate boilerplate.

## Pre-Ship Checklist
- [ ] Lenis smooth scroll initialized and synced with ScrollTrigger
- [ ] GSAP ScrollTrigger on reveal elements, not everything
- [ ] Hero: staggered load animation on entry
- [ ] Nav: `backdrop-blur` + `bg-opacity` on scroll
- [ ] Every card/button has a real hover state
- [ ] Fonts preloaded, Polish diacritics verified
- [ ] Images: `loading="lazy"` below fold, `avif`/`webp`, `srcset`
- [ ] `prefers-reduced-motion` wraps all JS animations
- [ ] No horizontal overflow on mobile (320/375/414/768px checked)
- [ ] Background has depth (noise, gradient mesh, or layered gradients)
- [ ] JSON-LD present on listing + agent/agency pages
- [ ] `sitemap.xml` + `robots.txt` + canonical tags in place
- [ ] Every listing server-rendered/crawlable
- [ ] RODO consent checkbox on every lead-capture form
- [ ] No fabricated stats, testimonials, or reviews anywhere on the site
