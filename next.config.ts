import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media-production.lp-cdn.com",
      },
      {
        protocol: "https",
        hostname: "www.cbhomes.com",
      },
      {
        protocol: "https",
        hostname: "joevelascogroup.com",
      },
      {
        protocol: "https",
        hostname: "www.joevelascogroup.com",
      },
    ],
  },
};

export default nextConfig;
