/**
 * Submit URLs to IndexNow. Usage: `npm run indexnow`
 * Env: INDEXNOW_KEY, INDEXNOW_HOST (default https://taskgate.co), INDEXNOW_URLS (space/comma separated)
 */

import { readdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

function discoverKeyFromPublic() {
  const files = readdirSync(publicDir).filter(
    (f) => /^[a-f0-9]{32}\.txt$/i.test(f)
  );
  if (files.length === 0) return null;
  return files[0].replace(/\.txt$/i, "");
}

const key = process.env.INDEXNOW_KEY || discoverKeyFromPublic();
const host = (process.env.INDEXNOW_HOST || "https://taskgate.co").replace(
  /\/$/,
  ""
);

if (!key) {
  console.error(
    "INDEXNOW_KEY missing and no public/<32-hex>.txt found. Set INDEXNOW_KEY."
  );
  process.exit(1);
}

const { getResourceSlugs } = await import("../lib/resourceArticles.js");
const resourceUrls = getResourceSlugs().map(
  (slug) => `${host}/resources/${slug}`
);

const defaultUrls = [
  `${host}/`,
  `${host}/features`,
  `${host}/premium`,
  `${host}/download`,
  `${host}/resources`,
  `${host}/partnership`,
  `${host}/about-us`,
  ...resourceUrls,
];

const urls = process.env.INDEXNOW_URLS
  ? process.env.INDEXNOW_URLS.split(/[\s,]+/).filter(Boolean)
  : defaultUrls;

const hostname = new URL(host).hostname;

const body = {
  host: hostname,
  key,
  keyLocation: `${host}/${key}.txt`,
  urlList: urls,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

if (!res.ok) {
  const text = await res.text();
  console.error("IndexNow failed:", res.status, text);
  process.exit(1);
}

console.log("IndexNow OK:", urls.length, "URLs");
