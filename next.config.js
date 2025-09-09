/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
  i18n,
};

const nextConfig = {
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ibanez.com",
      },
      {
        protocol: "https",
        hostname: "www.gibson.com",
      },
      {
        protocol: "https",
        hostname: "www.taylorguitars.com",
      },
      {
        protocol: "https",
        hostname: "www.fmicassets.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
