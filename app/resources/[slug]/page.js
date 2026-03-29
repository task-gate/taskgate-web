import { notFound } from "next/navigation";
import Link from "next/link";
import {
  resourceArticles,
  getResourceSlugs,
} from "@/lib/resourceArticles";

export function generateStaticParams() {
  return getResourceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = resourceArticles[slug];
  if (!article) return {};
  return {
    title: `${article.title} | TaskGate Resources`,
    description: article.description,
    alternates: {
      canonical: `/resources/${params.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://taskgate.co/resources/${slug}`,
      siteName: "TaskGate",
      locale: "en_US",
      type: "article",
      publishedTime: article.published,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ResourceArticlePage({ params }) {
  const { slug } = await params;
  const article = resourceArticles[slug];
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    author: { "@type": "Organization", name: "TaskGate" },
    publisher: {
      "@type": "Organization",
      name: "TaskGate",
      url: "https://taskgate.co",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="min-h-screen bg-black pb-28 pt-28 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-10 text-xs text-white/40" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="hover:text-white/70">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/resources" className="hover:text-white/70">
                  Resources
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/60">Article</li>
            </ol>
          </nav>

          <header className="mb-12 border-b border-white/[0.08] pb-10">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/35">
              Resource · {article.published}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              {article.description}
            </p>
          </header>

          <div className="prose prose-invert prose-p:leading-relaxed max-w-none space-y-12">
            {article.sections.map((section) => (
              <section key={section.h2}>
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  {section.h2}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p
                    key={`${section.h2}-${i}`}
                    className="mt-4 text-base leading-relaxed text-white/70"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4 border-t border-white/[0.08] pt-10">
            <Link
              href="/download"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              Download TaskGate
            </Link>
            <Link
              href="/resources"
              className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 hover:bg-white/[0.05]"
            >
              All resources
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
