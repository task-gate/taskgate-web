# TaskGate — Full SEO Audit Report
**Date:** 2026-03-28
**Production URL:** https://taskgate.co
**Framework:** Next.js 15 App Router
**Business Type:** Mobile App (SaaS/Consumer) — iOS & Android

---

## SEO Health Score: 49 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 25% | 61/100 | 15.3 |
| Content Quality / E-E-A-T | 25% | 41/100 | 10.3 |
| On-Page SEO | 20% | 55/100 | 11.0 |
| Schema / Structured Data | 10% | 35/100 | 3.5 |
| Performance (Core Web Vitals) | 10% | 40/100 | 4.0 |
| Images | 5% | 55/100 | 2.8 |
| AI Search Readiness | 5% | 52/100 | 2.6 |
| **Total** | 100% | | **49 / 100** |

---

## Top 5 Critical Issues

1. **Fabricated testimonials presented without adequate disclosure** — `reviews.js` reviews appear on /features, /about-us, /premium with no disclaimer, in violation of Google's trust guidelines.
2. **Homepage is fully client-side rendered** — `app/page.js` uses `"use client"`, meaning Googlebot sees an empty shell on first parse. LCP is delayed 1–1.5s by opacity:0 animation.
3. **No security headers** — No CSP, HSTS, X-Frame-Options, or X-Content-Type-Options anywhere in the codebase. Critical security and trust signal failure.
4. **Premium page has wrong product copy** — "manifestation practice," "Law of Attraction journey," and "attract your desires faster" are completely misaligned with TaskGate's actual product positioning.
5. **No founder identity anywhere on the site** — Zero E-E-A-T Experience signals. No names, photos, or bios on any page.

## Top 5 Quick Wins

1. Fix `height={10}` → `height={45}` in `AppStoreDownloadButton.js` — eliminates CLS, 5-minute fix.
2. Populate `sameAs` array in `app/layout.js` JSON-LD with App Store, Play Store, and social URLs.
3. Add `FAQPage` JSON-LD to homepage — FAQ content already exists, just needs a `<script>` tag.
4. Add security headers block to `next.config.mjs` — a single config addition.
5. Remove developer planning note from `ResourcesContent.js` — one line deletion.

---

## 1. Technical SEO — 61/100

### 1.1 Crawlability — PASS (with caveats)
- ✅ `robots.txt` correctly allows all crawlers and references sitemap
- ✅ `/admin` and `/partner` correctly disallowed
- ⚠️ **Medium:** `/developers` route exists in filesystem but missing from `app/sitemap.js`
- ⚠️ **Medium:** `Disallow: /partner` in robots.txt also blocks `/partnership` by prefix match — a public indexable page

### 1.2 Indexability — PARTIAL PASS
- ✅ `metadataBase` set to `https://taskgate.co` in `layout.js`
- ✅ All server-rendered pages have `alternates.canonical` set
- ✅ Open Graph tags present on server-rendered pages
- 🔴 **High:** `/download/page.js` uses `"use client"` with **no `metadata` export** — no title, description, canonical, or OG tags on this page
- ⚠️ **Medium:** `sameAs: []` in Organization JSON-LD is empty — no Knowledge Graph connections

### 1.3 Security — FAIL
- ✅ HTTPS enforced (Vercel default)
- 🔴 **Critical:** No `Content-Security-Policy` — XSS vulnerability with inline scripts + third-party SDKs
- 🔴 **Critical:** No `X-Frame-Options` — clickjacking risk
- 🔴 **Critical:** No `Strict-Transport-Security` — no HSTS max-age
- 🔴 **High:** No `X-Content-Type-Options: nosniff`
- 🔴 **High:** No `Referrer-Policy` — leaks URL paths to Meta Pixel and Firebase
- 🔴 **High:** No `Permissions-Policy`

**Fix — add to `next.config.mjs` headers():**
```js
{ key: "X-Frame-Options", value: "DENY" },
{ key: "X-Content-Type-Options", value: "nosniff" },
{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
{ key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
```

### 1.4 URL Structure — PASS
- ✅ Clean URL slugs, no `.html` extensions
- ✅ www → non-www 301 redirect via `middleware.js`
- ⚠️ **Low:** Redundant www redirect also in `next.config.mjs` (middleware fires first, config rule never reached)

### 1.5 Mobile — PASS
- ✅ Responsive Tailwind breakpoints
- ✅ Mobile nav menu implemented
- ⚠️ **Medium:** Navbar hamburger button has no `aria-label` or `aria-expanded`
- ⚠️ **Medium:** Google Fonts loaded via render-blocking CSS `@import` (affects mobile especially)
- ⚠️ **Low:** `min-h-screen` in hero — should use `min-h-dvh` for iOS Safari

### 1.6 Core Web Vitals — AT RISK

**LCP — Needs Improvement**
- 🔴 Hero `<motion.section initial={{ opacity: 0 }}>` delays LCP by ~1000–1500ms
- 🔴 Google Fonts `@import` in `globals.css` adds 2–3 render-blocking round trips
- 🔴 `quality={100}` on hero image bypasses Next.js compression
- 🔴 No `sizes` prop on hero image (1500px image served at ~384px display)

**INP — Needs Improvement**
- ⚠️ `window.addEventListener("scroll", handleScroll)` in MetaPixelEvents.js runs synchronously
- ⚠️ All 34 components are `"use client"` — large JS parse budget on main thread
- ⚠️ Framer Motion manages simultaneous animations across all sections

**CLS — Needs Improvement**
- 🔴 `AppStoreDownloadButton` has `height={10}` but CSS renders it at `h-[45px]` — aspect ratio mismatch causes layout shift
- ⚠️ Footer year uses `useState(null)` — blank renders then shifts to year on hydration
- ⚠️ Tiempos Fine loaded via `@font-face` OTF with `font-display: swap` and no `<link rel="preload">`

### 1.7 Structured Data — PARTIAL PASS
- ✅ `Organization` JSON-LD present in `layout.js`
- 🔴 `sameAs: []` empty — no entity connections
- ⚠️ **Medium:** Missing `SoftwareApplication` schema (most impactful for an app site)
- ⚠️ **Medium:** Missing `FAQPage` schema despite 10 complete Q&A pairs in codebase
- ⚠️ **Medium:** Missing `WebSite` schema

### 1.8 JavaScript Rendering — FAIL
- 🔴 **Critical:** `app/page.js` is `"use client"` — homepage renders zero meaningful HTML on first response
- 🔴 **Critical:** 34 of 37 components use `"use client"` — near-total CSR architecture
- 🔴 **High:** `LayoutClient.js` wraps all children in a client boundary
- 🔴 **High:** `/download/page.js` is `"use client"` with no metadata export

### 1.9 IndexNow — FAIL
- ❌ No IndexNow key file in `/public/`
- ❌ No IndexNow API calls anywhere

---

## 2. Content Quality / E-E-A-T — 41/100

### Experience — 15/20
- ✅ Product mechanics described with technical precision (deep links, callbacks)
- ✅ Philosophy section shows genuine product thinking
- 🔴 No founder names, photos, or bios anywhere on the site
- 🔴 No specific origin story with personal experience
- 🔴 No launch dates, user counts, or company milestones

### Expertise — 14/25
- ✅ FAQ answers on partner integration are technically accurate (app links, universal links, callback mechanism)
- ✅ Feature descriptions are coherent and accurate
- 🔴 **Critical:** About page says "applies behavioral science" but cites no research, model, or explanation
- 🔴 No named author attribution on any content
- 🔴 Resources page contains a developer planning note visible to users: _"This section is for discoverable, SEO-friendly content around app blocking..."_

### Authoritativeness — 8/25
- ✅ Organization schema exists
- 🔴 `sameAs: []` empty — no social/external authority anchors
- 🔴 No press mentions, media coverage, or "as seen in"
- 🔴 "Join thousands who are using TaskGate" — unverified claim with no data
- 🔴 5 of 6 partner apps show "Coming Soon" — partner ecosystem is aspirational, not active
- 🔴 Only partner link goes to a Vercel preview URL, not production

### Trustworthiness — 17/30
- ✅ Privacy policy, terms, and contact pages exist
- ✅ HTTPS, OG tags, Twitter cards configured
- 🔴 **Critical:** `reviews.js` testimonials on /features, /about-us, /premium appear as genuine reviews with no disclaimer — potential deceptive content per Sept 2025 QRG
- 🔴 **Critical:** `UserTestimonials.js` has a disclaimer but visual design is indistinguishable from real reviews
- 🔴 Premium page copy references "Law of Attraction" and "manifestation" — off-brand content from a different product entirely
- 🔴 `Legacy.js` on About page says "capturing your life story" — copy from a different product

### Content Depth
- ⚠️ Homepage: ~600–700 words. Passes floor but lacks statistical depth
- 🔴 Features page: ~500–600 words vs 800-word minimum for service pages
- ⚠️ About page: ~700–800 words but no real team information
- 🔴 Resources page: Zero original editorial content — a link directory only

### Duplicate Content
- 🔴 **High:** Identical FAQ content duplicated across 4+ pages (homepage, features, about, premium)
- ⚠️ Identical testimonial carousel on features, about, premium
- ⚠️ Near-identical download CTA section repeated across all pages
- ⚠️ Same `/og.png` across all pages

### Keyword Gaps
- Missing: "how to reduce screen time" (high-volume informational)
- Missing: "app blocker for iPhone" / "app blocker for Android" (platform-specific)
- Missing: Any comparison content vs. Screen Time, Freedom, Opal
- Missing: Behavioral science content (habit loops, friction design, dopamine)
- Missing: Persona-based landing pages (students, remote workers, parents)

---

## 3. Schema / Structured Data — 35/100

### Existing Implementation
```json
// app/layout.js — only schema on site
{ "@type": "Organization", "sameAs": [] }
```

### Issues
| Severity | Issue |
|----------|-------|
| High | No `MobileApplication` schema — the core product has no rich result eligibility |
| High | No `FAQPage` schema — 10 real Q&A pairs exist but have no structured data |
| Medium | No `WebSite` schema |
| Low | `sameAs: []` is empty |
| Low | `logo` is a bare URL string, not an `ImageObject` with width/height |

### Generated Recommendations

#### MobileApplication (add to `app/page.js`)
```json
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "TaskGate",
  "description": "TaskGate prevents impulsive app opens by requiring you to complete a quick task first.",
  "applicationCategory": "LifestyleApplication",
  "operatingSystem": "iOS, Android",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "installUrl": [
    "https://apps.apple.com/app/id6755723338",
    "https://play.google.com/store/apps/details?id=com.tkg.taskgate"
  ],
  "publisher": { "@type": "Organization", "name": "TaskGate", "url": "https://taskgate.co" }
}
```

#### FAQPage (add to `app/page.js`)
Full 10-question JSON-LD sourced directly from `components/data/faqs.js` — production-ready, matches on-page content exactly.

#### WebSite (add to `app/layout.js`)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TaskGate",
  "url": "https://taskgate.co",
  "publisher": {
    "@type": "Organization",
    "name": "TaskGate",
    "logo": { "@type": "ImageObject", "url": "https://taskgate.co/favicon/android-chrome-512x512.png", "width": 512, "height": 512 }
  }
}
```

---

## 4. Sitemap — 100% Coverage, Quality Issues

- ✅ All 12 public pages included
- ✅ Private routes (`/admin`, `/partner`) excluded
- ✅ Sitemap referenced in `robots.txt`
- 🔴 **High:** `lastModified: new Date()` — stamps every URL with build time on every deploy, trains Googlebot to distrust lastmod
- ⚠️ **Medium:** `Disallow: /partner` in robots.txt blocks `/partnership` by prefix
- ℹ️ `changeFrequency` and `priority` included — Google ignores both

---

## 5. Performance — Needs Improvement (All 3 CWV)

| Metric | Status | Primary Cause |
|--------|--------|---------------|
| LCP | Needs Improvement | Google Fonts @import + hero opacity:0 animation + quality:100 |
| INP | Needs Improvement | 34 "use client" components + scroll listener without rAF |
| CLS | Needs Improvement | AppStoreButton height:10 bug + Tiempos Fine font swap + Footer year |

**Top performance fixes by effort:**
1. `height={10}` → `height={45}` in AppStoreDownloadButton — trivial
2. Remove Open Sans `@import` (appears unused) — trivial
3. Move Google Fonts to `next/font/google` — low effort, highest LCP impact
4. Remove `initial={{ opacity: 0 }}` from hero `motion.section` — low effort
5. Fix `@font-face` Tiempos Fine into two rules by weight; add preload

---

## 6. Visual / Mobile

| Check | Status |
|-------|--------|
| H1 above fold desktop | ✅ Pass (after 0.5s delay) |
| CTA above fold mobile | ⚠️ Likely fail — 0.9s delay + long description |
| Text contrast (body) | ❌ Fail — `text-white/45` ≈ 3.4:1, below WCAG AA 4.5:1 |
| Text contrast (card desc) | ❌ Fail — `text-white/35` ≈ 2.7:1 |
| Base font size mobile | ❌ Fail — 14px body (should be 16px) |
| Hero image efficiency | ⚠️ 1500px served at ~384px, no `sizes` prop |
| xs breakpoint gap | ⚠️ `xs: 400px` misses 375px iPhones |

---

## 7. AI Search Readiness — 52/100

**Working:**
- FAQ Q&A format is ideal for AI extraction
- "How TaskGate Works" 5-step sequence is structured and quotable
- Core value prop is clearly defined and attributable

**Missing:**
- No `FAQPage` schema — AI cannot reliably extract accordion FAQ
- No `SoftwareApplication` schema — app not eligible for AI-generated app cards
- No statistics or research citations that an AI could quote back to TaskGate
- No expert quotes or third-party validation
- `sameAs` empty — brand entity not anchored in Knowledge Graph

---

*Report generated 2026-03-28 | 6 specialized subagents | ~450 files analyzed*
