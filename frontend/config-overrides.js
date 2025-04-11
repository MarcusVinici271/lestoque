// const webpack = require('webpack');

// module.exports = function override(config, env) {
//   config.resolve = {
//     ...config.resolve,
//     fallback: {
//       ...config.resolve?.fallback,
//       path: require.resolve('path-browserify'),
//       os: require.resolve('os-browserify/browser'),
//       crypto: require.resolve('crypto-browserify'),
//       process: require.resolve('process/browser.js'),
//       buffer: require.resolve('buffer'),
//       stream: require.resolve('stream-browserify'),
//       vm: require.resolve('vm-browserify'),
//     },
//   };

//   config.plugins = [
//     ...(config.plugins || []),
//     new webpack.ProvidePlugin({
//       process: 'process/browser.js',
//       Buffer: ['buffer', 'Buffer'],
//     }),
//   ];

//   return config;
// };
