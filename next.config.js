const TerserPlugin = require("terser-webpack-plugin");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  images: {
    unoptimized: true,
  },
  // 其他配置项
  webpack(config, { dev }) {
    if (dev) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // 去除 console.log
              drop_debugger: true, // 去除 debugger
            },
            output: {
              comments: false, // 去除注释
              beautify: false, // 使代码压缩为单行
            },
          },
          extractComments: false, // 不提取注释
        })
      );

      config.optimization.minimize = true;
      config.devtool = "hidden-source-map";
    }

    return config;
  },
});
