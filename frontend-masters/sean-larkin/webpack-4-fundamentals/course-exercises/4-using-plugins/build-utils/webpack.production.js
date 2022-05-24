const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
  devtool: 'source-map',
  output: {
    filename: '[chunkhash].js',
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
});
