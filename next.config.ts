import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignora erros do ESLint na build do Vercel
  },
};

export default nextConfig;
