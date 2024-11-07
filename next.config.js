/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'joy1.videvo.net',
      },
    ],
  },
  eslint: {
    // 在生产构建时禁用 ESLint
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 