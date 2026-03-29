# TaskGate — SEO Action Plan
**Generated:** 2026-03-28 | SEO Health Score: 49/100

---

## 🔴 CRITICAL — Fix Immediately

### C1. Remove or properly label fabricated testimonials
**Files:** `components/data/reviews.js`, `components/Testimonial.js`, `components/UserTestimonials.js`
**Issue:** `reviews.js` testimonials appear on /features, /about-us, /premium with no disclaimer. Per Google's Sept 2025 QRG, presenting fabricated reviews without clear disclosure is a trust violation.
**Action:** Either (a) remove the `Testimonial` component from /features, /about-us, /premium until real reviews exist, or (b) add a prominent, visually distinct notice at the top of every testimonial section. Do not rely on small-print disclaimers with standard review card layouts.

### C2. Rewrite Premium page copy
**File:** `components/PremiumContent.js`
**Issue:** Hero copy references "manifestation practice," "Law of Attraction journey," and "attract your desires faster" — from a different product entirely. This creates a brand identity fracture.
**Action:** Replace with copy matching TaskGate's actual premium features (advanced analytics, partner integrations, scheduled gating, custom tasks).

### C3. Remove developer planning note from Resources page
**File:** `components/ResourcesContent.js`
**Issue:** A planning note — "This section is for discoverable, SEO-friendly content around app blocking..." — is visible to users and crawlers.
**Action:** Delete the line. Then either add real content or leave the section as a clean navigation hub.

### C4. Remove/fix Legacy component on About page
**File:** `components/Legacy.js` (used in About page)
**Issue:** Says "TaskGate makes capturing your life story both effortless and insightful" — copy from a different product.
**Action:** Remove the component from the About page, or rewrite it to describe TaskGate's actual habit-tracking analytics.

### C5. Add security headers to next.config.mjs
**File:** `next.config.mjs`
**Issue:** No CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, or Permissions-Policy. Site is vulnerable to clickjacking and XSS.
**Action:** Add to the `headers()` function:
```js
{
  source: "/(.*)",
  headers: [
    { key: "X-Frame-Options", value: "DENY" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  ],
},
```

---

## 🔴 HIGH — Fix Within 1 Week

### H1. Fix AppStoreDownloadButton height prop (CLS fix)
**File:** `components/AppStoreDownloadButton.js`
**Issue:** `height={10}` but CSS renders it at `h-[45px]`. Causes measurable Cumulative Layout Shift.
**Action:** Change `height={10}` → `height={45}`.

### H2. Replace Google Fonts @import with next/font (LCP fix)
**File:** `app/globals.css` line 1, `app/layout.js`
**Issue:** `@import url("https://fonts.googleapis.com/...")` is render-blocking. Adds 2–3 sequential network round trips before first paint.
**Action:**
1. Delete line 1 from `globals.css`
2. In `app/layout.js`, add:
```js
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
```
3. Apply to `<html>` tag: `className={inter.variable}`
4. Remove Open Sans import entirely — it appears unused across all component files.

### H3. Remove opacity:0 from hero section (LCP fix)
**File:** `app/page.js`
**Issue:** The outermost `motion.section` starts at `opacity: 0` and fades in over 1 second, delaying LCP by ~1000–1500ms.
**Action:** Remove `initial={{ opacity: 0 }} animate={{ opacity: 1 }}` from the hero `motion.section`. Keep animations only on individual elements below the fold.

### H4. Add metadata export to /download page
**File:** `app/download/page.js`
**Issue:** Page uses `"use client"` with no `metadata` export → no title, canonical, or OG tags.
**Action:** Create a Server Component wrapper:
```js
// app/download/page.js — Server Component (no "use client")
import DownloadClient from "./DownloadClient";
export const metadata = {
  title: "Download TaskGate | App Store & Google Play",
  description: "Download TaskGate for iOS or Android. Start building intentional digital habits today.",
  alternates: { canonical: "/download" },
};
export default function DownloadPage() { return <DownloadClient />; }
```
Move the current `page.js` content into `app/download/DownloadClient.js` with `"use client"`.

### H5. Populate sameAs in Organization JSON-LD
**File:** `app/layout.js`
**Issue:** `"sameAs": []` provides no Knowledge Graph connections.
**Action:** Replace `"sameAs": []` with:
```js
"sameAs": [
  "https://apps.apple.com/app/id6755723338",
  "https://play.google.com/store/apps/details?id=com.tkg.taskgate",
  "https://twitter.com/TaskGateApp",
  // add LinkedIn, Instagram if they exist
]
```

### H6. Add FAQPage JSON-LD to homepage
**File:** `app/page.js` (or `app/layout.js` with page-specific injection)
**Issue:** 10 complete FAQ Q&A pairs exist in `components/data/faqs.js` but have no structured data. This is a direct missed opportunity for FAQ rich results and AI answer extraction.
**Action:** Add a `<script type="application/ld+json">` tag to the homepage with the FAQPage schema. All 10 questions from `faqs.js` should be included. See `FULL-AUDIT-REPORT.md` for the complete generated JSON-LD.

### H7. Add MobileApplication JSON-LD to homepage
**File:** `app/page.js`
**Issue:** The site's core product has no schema markup. MobileApplication schema enables App Store rich results in Google Search.
**Action:** Add `MobileApplication` JSON-LD with `applicationCategory: "LifestyleApplication"`, `operatingSystem: "iOS, Android"`, both `installUrl` values, and `offers.price: "0"`. See `FULL-AUDIT-REPORT.md` for complete JSON-LD.

### H8. Add founder identity to About page
**File:** `app/about-us/page.js` or `components/AboutContent.js`
**Issue:** No founder names, photos, or bios anywhere on the site. This is the single biggest E-E-A-T gap.
**Action:** Add a "Meet the Team" or "Who Built This" section with at minimum one founder's name, a brief sentence about their background, and a photo. Even minimal founder information transforms the trust signal.

### H9. Fix robots.txt to stop blocking /partnership
**File:** `public/robots.txt`
**Issue:** `Disallow: /partner` blocks `/partnership` by prefix — a public marketing page.
**Action:** Replace:
```
Disallow: /partner
```
With:
```
Disallow: /partner$
Disallow: /partner/
```

### H10. Fix Tiempos Fine @font-face — split by weight, add preload
**File:** `app/globals.css`, `app/layout.js`
**Issue:** Both Regular and Semibold defined with `font-weight: normal`. Semibold never loads. No preload hint.
**Action:**
1. Split into two separate `@font-face` rules with `font-weight: 400` and `font-weight: 600`
2. Convert OTF files to WOFF2 (30–40% smaller, universally supported)
3. Add to `app/layout.js` head: `<link rel="preload" as="font" href="/fonts/TiemposFine-Regular.woff2" crossOrigin="anonymous">`

---

## 🟡 MEDIUM — Fix Within 1 Month

### M1. Fix homepage CSR architecture (major effort)
**Files:** `app/page.js` and all section components
**Issue:** Homepage is `"use client"`, meaning Googlebot sees an empty HTML shell on first parse. All 34 content components are client-side.
**Action:** Convert `app/page.js` to a Server Component. Move `useEffect(() => window.scrollTo(0, 0), [])` and motion animations into a small `HomeHero.client.js` component. Static sections (HowItWorks, AppFeatures, etc.) should be Server Components.

### M2. Fix the sitemap lastModified
**File:** `app/sitemap.js`
**Issue:** `lastModified: new Date()` stamps every page with the build timestamp, training Googlebot to distrust your lastmod signals.
**Action:** Use hardcoded ISO date strings per page, updating only pages that actually changed on each deploy. See `FULL-AUDIT-REPORT.md` for recommended `sitemap.js`.

### M3. Add WebSite JSON-LD to layout
**File:** `app/layout.js`
**Issue:** No `WebSite` schema — prevents Sitelinks Search Box eligibility.
**Action:** Add a second `<script type="application/ld+json">` tag with `WebSite` schema including `publisher` with `ImageObject` logo. See `FULL-AUDIT-REPORT.md` for complete JSON-LD.

### M4. Add /developers to sitemap
**File:** `app/sitemap.js`
**Issue:** Route exists and is discoverable via internal links but has no sitemap priority signal.
**Action:** Add `{ path: "/developers", lastMod: "2026-03-01" }` to the routes array.

### M5. Fix text contrast ratios
**Files:** `app/page.js`, various components
**Issue:** `text-white/45` ≈ 3.4:1, `text-white/35` ≈ 2.7:1 — both fail WCAG AA (requires 4.5:1 for normal text).
**Action:**
- Raise `text-white/45` → `text-white/65` for body copy in dark sections
- Raise `text-white/35` → `text-white/55` for card secondary text
- Raise `text-white/50` → `text-white/70` for description paragraph

### M6. Fix mobile base font size
**File:** `app/globals.css`
**Issue:** `body { font-size: 0.875rem }` (14px) on mobile — below the 16px recommendation. Can trigger browser auto-zoom on inputs.
**Action:** Change to `body { font-size: 1rem }` for all viewport sizes. Use `clamp()` for fluid scaling if needed.

### M7. Fix Footer year CLS
**File:** `components/Footer.js`
**Issue:** `useState(null)` for current year renders a blank, then shifts when hydrated.
**Action:** Initialize directly: `const [currentYear] = useState(() => new Date().getFullYear())` or use `suppressHydrationWarning` on the year span.

### M8. Fix hero image efficiency
**File:** `app/page.js`
**Issues:** `quality={100}` bypasses compression; no `sizes` prop causes over-fetching.
**Action:**
- Change `quality={100}` → `quality={80}`
- Add `sizes="(max-width: 640px) 100vw, 384px"` to the Image component

### M9. Differentiate FAQ content across pages
**Files:** `components/Faqs.js`, `components/FaqsWhite.js`, `components/data/faqs.js`
**Issue:** Identical FAQ content duplicated across 4+ pages is a duplicate content risk.
**Action:** Create page-specific FAQ variants with 2–3 unique questions per page context. The homepage FAQ should cover general questions; /features FAQ should be feature-specific; /premium FAQ should address pricing and upgrade.

### M10. Wrap scroll listener in requestAnimationFrame
**File:** `components/MetaPixelEvents.js`
**Issue:** `handleScroll` runs synchronously on every scroll event — contributes to INP.
**Action:** Wrap the handler:
```js
const handleScroll = () => {
  requestAnimationFrame(() => {
    // existing scroll logic
  });
};
```

### M11. Remove duplicate www-redirect from next.config.mjs
**File:** `next.config.mjs`
**Issue:** Redundant redirect rule — `middleware.js` handles it first and the config rule never fires.
**Action:** Remove the www-redirect entry from the `redirects()` array in `next.config.mjs`. Keep `middleware.js`.

### M12. Remove console.log statements from production
**File:** `components/MetaPixelEvents.js`
**Issue:** 5 `console.log` calls leak implementation details in the production browser console.
**Action:** Delete all `console.log` statements. Use a dev-only logger (`if (process.env.NODE_ENV === "development")`) for any debugging that must remain.

### M13. Add behavioral science grounding to About page
**Issue:** About page claims to apply "behavioral science" but never explains or cites any model.
**Action:** Add one substantive paragraph referencing habit formation science (friction design, implementation intentions, or similar). Even a reference to B.J. Fogg's Tiny Habits model would lift the Expertise signal significantly.

---

## 🟢 LOW — Backlog

### L1. Implement IndexNow
**Action:** Generate a random key, create `/public/<key>.txt`, submit URLs via `https://api.indexnow.org/indexnow` when new content is published.

### L2. Add xs breakpoint fix for 375px iPhones
**File:** `tailwind.config.mjs`
**Issue:** `xs: 400px` custom breakpoint misses iPhone 12/13 at 375px.
**Action:** Lower to `xs: 375px` or remove and rely on `sm: 640px`.

### L3. Generate page-specific OG images
**Issue:** All pages share `/og.png`. Unique OG images improve social share CTR.
**Action:** Create page-specific OG images for /features, /premium, /partnership.

### L4. Remove emoji from About page H3 headings
**File:** `components/OurStory.js` or similar
**Issue:** Emoji in headings is inconsistent with site design language and renders poorly in some contexts.

### L5. Audit and remove one phone input library
**File:** `package.json`
**Issue:** Both `react-phone-number-input` and `react-international-phone` are installed simultaneously.
**Action:** Pick one and remove the other. Remove associated CSS in `globals.css`.

### L6. Audit Firebase import strategy
**Issue:** Full Firebase SDK (~400KB+) may be in the initial bundle.
**Action:** Ensure only sub-module imports are used: `import { getAuth } from "firebase/auth"` not `import firebase from "firebase/app"`.

### L7. Add `min-h-dvh` to hero section
**File:** `app/page.js`
**Issue:** `min-h-screen` uses `100vh` which includes browser chrome on iOS Safari.
**Action:** Add `min-h-dvh` as a modern alternative with `min-h-screen` as fallback.

---

## Content Roadmap (Topical Authority)

These are not bugs but strategic content investments for long-term SEO growth:

| Content | Type | Target Query | Priority |
|---------|------|-------------|----------|
| "Why small friction beats full blocking" | Resource article | "how to reduce screen time" | High |
| "App Blocker for iPhone" | Landing page | "app blocker iphone" | High |
| "App Blocker for Android" | Landing page | "app blocker android" | High |
| "TaskGate vs Screen Time" | Comparison | "screen time app comparison" | High |
| Persona: For Students | Landing page | "focus app for students" | Medium |
| Persona: For Remote Workers | Landing page | "productivity app remote work" | Medium |
| Behavioral Science explainer | Resource article | "habit formation apps" | Medium |
| Press/Media kit | Authority page | Brand queries | Medium |
| Real App Store reviews integration | Trust section | — | Critical (when available) |

---

*Action plan generated 2026-03-28 | Priority: Critical → High → Medium → Low*
