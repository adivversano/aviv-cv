import type { NextConfig } from "next";
import path from "path";

// const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: "/aviv-cv",
  // assetPrefix: "/aviv-cv",
  output: 'export',
  // distDir: 'dist',
  images: {
    unoptimized: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

export default nextConfig;
