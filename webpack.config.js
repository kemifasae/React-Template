const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname +'/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const config = {
  entry: SRC_DIR + '/app/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: SRC_DIR,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  devServer: {
    stats: 'errors-only',
  },
  plugins: [HtmlWebpackPluginConfig]
};

module.exports = config;
