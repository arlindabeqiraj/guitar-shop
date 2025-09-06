// next.config.js
/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
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

  async redirects() {
    return [
      {
        source: "/", // çdo vizitë te root
        destination: "/brands", // ridrejtohet te /brands
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
