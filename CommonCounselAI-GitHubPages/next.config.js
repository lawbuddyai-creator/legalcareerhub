/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = process.env.NEXT_PUBLIC_REPO_NAME || ""; // e.g. "commoncounsel-ai"
const basePath = isProd && repo ? `/${repo}` : "";

module.exports = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  trailingSlash: true
};
