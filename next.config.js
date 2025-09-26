/** @type {import("next").NextConfig} */
const nextConfig = {
  // Keep export mode only if you need it; comment in if desired:
  // output: "export",

  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

module.exports = nextConfig;
