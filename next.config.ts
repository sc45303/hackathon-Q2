/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    turbo: {}, // Disable Turbopack
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    // domains: ['cdn.sanity.io'],
  },
  
};
module.exports = nextConfig