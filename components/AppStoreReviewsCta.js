import Link from "next/link";

const IOS_APP =
  "https://apps.apple.com/app/id6755723338";
const PLAY_APP =
  "https://play.google.com/store/apps/details?id=com.tkg.taskgate";

export default function AppStoreReviewsCta() {
  return (
    <section className="relative z-10 border-t border-border bg-bg-secondary py-14">
      <div className="container mx-auto max-w-3xl px-5 text-center md:px-[5%] 2xl:px-0">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Community feedback
        </p>
        <h2 className="mt-2 text-xl font-bold text-primary md:text-2xl">
          See TaskGate on the stores
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-secondary">
          Read ratings and reviews on the App Store and Google Play. We will add
          embedded highlights here when we surface verified storefront reviews on
          the site.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <Link
            href={IOS_APP}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent hover:underline"
          >
            App Store →
          </Link>
          <Link
            href={PLAY_APP}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent hover:underline"
          >
            Google Play →
          </Link>
        </div>
      </div>
    </section>
  );
}
