import type { NextConfig } from "next";
import path from "path";

// const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/aviv-cv",
  assetPrefix: "/aviv-cv",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  output: 'export',
  reactStrictMode: false,
  // distDir: 'dist',
  images: {
    unoptimized: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

};

export default nextConfig;
