import { NextFederationPlugin } from "@module-federation/nextjs-mf";
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname, "../.."),
  webpack(config) {
    process.env.NEXT_PRIVATE_LOCAL_WEBPACK = "true";
    config.plugins.push(
      new NextFederationPlugin({
        name: "memories-app",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./CouplesPanel": "./src/components/CouplesPanel.tsx",
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
