module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(woff|woff2|ttf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/fonts', // Output directory for font files
          publicPath: '/_next/static/fonts', // Public path to font files
          esModule: false, // This is important to prevent issues with CSS imports
        },
      },
    });
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // To prevent issues during client-side rendering
      };
    }
    return config;
  },
};