module.exports = {
  env: {
    USERNAME: process.env.GITHUB_USERNAME,
    ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
};
