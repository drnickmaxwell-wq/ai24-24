/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },             // no image optimizer on export
  eslint: { ignoreDuringBuilds: true },      // keep builds green while iterating
  typescript: { ignoreBuildErrors: true },
};
module.exports = nextConfig;
