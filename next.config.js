const withTM = require("next-transpile-modules")([
  "antd",
  "@ant-design/icons",
  "rc-util",
  "rc-pagination",
  "rc-picker",
  "rc-notification",
  "rc-tooltip",
  "rc-tree",
  "rc-table",
]);

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["next/babel"],
        },
      },
      exclude: /node_modules/,
    });
    return config;
  },
});
