import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sergiorobayo.github.io",
  assetPrefix: "/sergiorobayo.github.io",
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
