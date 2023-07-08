/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.swell.store",
        pathname: "/fem-audiophile/**",
      },
    ],
  },
};

module.exports = nextConfig;
