/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // (Leave Image Optimization on; if you ever export static only,
    // flip to: unoptimized: true)
  },
};

module.exports = nextConfig;
