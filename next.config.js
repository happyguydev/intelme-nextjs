/* eslint-disable no-undef */
module.exports = {
  basePath: '/frontend-dev',

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
