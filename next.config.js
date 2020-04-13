const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack(config, { isServer }) {
    config.module.rules[0].use = [
      config.module.rules[0].use,
      {
        loader: "linaria/loader",
        options: {
          sourceMap: process.env.NODE_ENV !== "production",
        },
      },
    ];

    const testPattern = /\.(woff|woff2|eot|ttf|otf)$/;

    config.module.rules.push({
      test: testPattern,
      use: [
        {
          loader: require.resolve("url-loader"),
          options: {
            limit: 8192,
            fallback: require.resolve("file-loader"),
            publicPath: `/_next/static/chunks/fonts/`,
            outputPath: `${isServer ? "../" : ""}static/chunks/fonts/`,
            name: "[name]-[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
});
