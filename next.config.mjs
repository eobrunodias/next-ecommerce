/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["store.storeimages.cdn-apple.com"],
  },
  compiler: {
    styledComponents: true,
  },
  pageExtensions: [
    "page.tsx",
    "page.ts",
    "page.jsx",
    "page.js",
    "api.tsx",
    "api.ts",
  ],
};

export default nextConfig;
