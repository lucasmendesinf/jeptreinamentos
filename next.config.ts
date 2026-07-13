import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jeptreinamentos.com.br",
      },
    ],
  },
};

export default nextConfig;
