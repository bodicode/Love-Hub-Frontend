import { NextFederationPlugin } from "@module-federation/nextjs-mf";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "memories-app",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          main: `main-app@http://localhost:3000/_next/static/${
            options.isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        exposes: { "./CouplesPanel": "./src/components/CouplesPanel.tsx" },
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
