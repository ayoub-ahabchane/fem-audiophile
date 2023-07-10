// @ts-check
/** @type {import('next').NextConfig} */

import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  transpilePackages: ["@plaiceholder/ui"],
  images: {
    domains: ["cdn.swell.store", "raw.githubusercontent.com"],
  },
};

export default withPlaiceholder(nextConfig);
