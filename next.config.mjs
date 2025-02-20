import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname), // Adding the alias to resolve @ to the project root
    };
    return config;
  },
};

export default nextConfig;
