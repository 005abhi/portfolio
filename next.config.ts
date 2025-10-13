import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },

  eslint: {
    // ✅ Ignore ESLint errors during production builds
    ignoreDuringBuilds: true,
  },

  typescript: {
    // ✅ Ignore TypeScript type-checking errors during production builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
