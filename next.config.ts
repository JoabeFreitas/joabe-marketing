import type { NextConfig } from "next";

const isExport = process.env.NEXT_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isExport && {
    output: "export",
    basePath: "/joabe-marketing",
    assetPrefix: "/joabe-marketing",
  }),
  images: {
    unoptimized: isExport, // only skip optimization on static export
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1200],
    minimumCacheTTL: 3600,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: false,
};

export default nextConfig;
