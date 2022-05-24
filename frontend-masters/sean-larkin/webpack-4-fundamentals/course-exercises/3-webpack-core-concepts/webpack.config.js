const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const { merge } = require('webpack-merge');
const loadPresets = require('./build-utils/loadPresets');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  console.log('🤗', mode, presets);
  return merge(
    {
      mode,
      output: {
        filename: 'bundle.js',
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode),
    loadPresets(presets)
  );
};
