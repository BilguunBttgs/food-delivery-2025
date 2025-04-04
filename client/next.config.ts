import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/redirectRoute",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
