import { NextFederationPlugin } from "@module-federation/nextjs-mf";
import type { NextConfig } from "next";
import path from "path";

const REMOTE_MEMORIES =
  process.env.NEXT_PUBLIC_MEMORIES_REMOTE_URL || "http://localhost:3001";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname, "../.."),
  webpack(config, { isServer }) {
    process.env.NEXT_PRIVATE_LOCAL_WEBPACK = "true";
    config.plugins.push(
      new NextFederationPlugin({
        name: "main-app",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          memories: `memories-app@${REMOTE_MEMORIES}/_next/static/${
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
