import type { NextConfig } from "next";

const isExport = process.env.NEXT_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isExport && {
    output: "export",
    basePath: "/joabe-marketing",
    assetPrefix: "/joabe-marketing",
  }),
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: false,
};

export default nextConfig;
