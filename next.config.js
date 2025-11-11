/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // <-- REMOVE THIS LINE
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['images.pexels.com']
  },
  trailingSlash: true,
  async generateBuildId() {
    return 'asjin-events-build'
  }
};

module.exports = nextConfig;