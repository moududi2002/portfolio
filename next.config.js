module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'moududi.researchustad.org' }],
        destination: 'https://moududi.researchustad.org/:path*',
        permanent: true,
      },
    ];
  },
};
