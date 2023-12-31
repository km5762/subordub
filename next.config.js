/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["argon2"],
  },
  images: {
    domains: [
      "www.google.com",
      "assets.teenvogue.com",
      "m.media-amazon.com",
      "cdn.vox-cdn.com",
      "upload.wikimedia.org",
      "gogocdn.net",
      "static.tvmaze.com",
      "static.thenounproject.com",
    ],
  },
};

module.exports = nextConfig;
