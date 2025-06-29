/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // disables Image Optimization for static export
  },
};

module.exports = nextConfig;