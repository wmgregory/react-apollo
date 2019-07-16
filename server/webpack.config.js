const path = require('path');
const slsw = require('serverless-webpack');
const webpack = require('webpack');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');

const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  target: 'node',
  cache: false,
  devtool: 'source-map',

  externals: [nodeExternals()],
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: ['node_modules', 'shared'],
  },

  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
      },
      {
        test: /\.(graphql|gql)$/,
        loader: 'webpack-graphql-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    // @TODO: get this working again
    // new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new webpack.NamedModulesPlugin(),
    new uglifyJSPlugin({
      uglifyOptions: {
        ecma: 5,
      },
    }),
  ],
};
