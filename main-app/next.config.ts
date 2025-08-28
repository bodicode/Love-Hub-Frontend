import { NextFederationPlugin } from "@module-federation/nextjs-mf";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "main-app",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          memories: `memories-app@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        shared: {
          react: { singleton: true, requiredVersion: false, eager: true },
          "react-dom": { singleton: true, requiredVersion: false, eager: true },
          next: { singleton: true, requiredVersion: false, eager: true },
          "styled-jsx": {
            singleton: true,
            requiredVersion: false,
            eager: true,
          },
          "@tanstack/react-query": { singleton: true, requiredVersion: false },
        },
        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      })
    );
    return config;
  },
};

export default nextConfig;
