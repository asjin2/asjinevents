/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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