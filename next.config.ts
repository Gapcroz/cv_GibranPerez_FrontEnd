import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "44341",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "29754",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
