/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.s3.**.amazonaws.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
