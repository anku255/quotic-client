module.exports = {
  async redirects() {
    return [
      {
        source: "/show/:showId/series",
        destination: "/show/:showId/series/s/1/e/1",
        permanent: true,
      },
    ];
  },
};
