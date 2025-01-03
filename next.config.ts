import type { NextConfig } from "next";

// const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/aviv-cv",
  assetPrefix: "/aviv-cv",
  output: 'export',
  // distDir: 'dist',
  images: {
    unoptimized: true
  },
  env: {
    BASE_URL: 'https://adivversano.github.io/aviv-cv/',
  },
};

export default nextConfig;
