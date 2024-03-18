/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default nextConfig({
  eslint: {
    dirs: ["."],
  },
  images: {
    remotePatterns: [
      {
        hostname: "www.facebook.com",
      },
    ],
  },
  redirects: async () => [
    {
      source: "/services/:slug*",
      destination: "/",
      permanent: false,
    },
  ],
  poweredByHeader: false,
  trailingSlash: true,
  basePath: "",
  // output: "export",
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
});
