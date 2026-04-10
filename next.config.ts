import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/joabe-marketing",
  assetPrefix: "/joabe-marketing",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: false,
};

export default nextConfig;
