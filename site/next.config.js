/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Oji Kasm Workspaces',
    description: 'My private kasm workspace.',
    icon: '/img/logo.svg',
    listUrl: 'https://momoji123.github.io/workspaces_registry/',
    contactUrl: 'https://github.com/momoji123/workspaces_registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/workspaces_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
