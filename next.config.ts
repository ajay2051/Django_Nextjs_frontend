import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false, // Prevents 'fs' from being bundled on the client-side
      path: false,
    };
    return config;
  },
};

export default nextConfig;
