const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://camdan.me/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
