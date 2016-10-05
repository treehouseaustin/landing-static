const JTS = require('jts');
const path = require('path');
const webpack = require('webpack');

// Plugins being used in the webpack build process.
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var plugins = [
  new CleanWebpackPlugin(['dist']),
  new CopyWebpackPlugin([
    { context: 'src/assets', from: '**/*', to: 'assets' }
  ]),
  new ExtractTextPlugin('[name].css'),
  new JTS({ from: 'src/index.html', to: 'index.html' }),
  new webpack.optimize.DedupePlugin(),
  new webpack.NoErrorsPlugin()
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/,
    cssProcessorOptions: { discardComments: { removeAll: true } }
  }));
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    }
  }));
}

module.exports = {
  entry: {
    'assets/app': './src'
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' },
      { test: /\.s?css$/, loader: ExtractTextPlugin.extract(['css?-minimize', 'sass']) },
      { test: /\.html$/, loader: 'html' },
      { test: /\.svg$/, loader: 'svg-inline' }
    ]
  },
  plugins,
  resolve: {
    alias: {
      'animate.css': path.resolve(__dirname, './node_modules/animate.css/source')
    }
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/@treehouse/ui/src'),
      path.resolve(__dirname, './node_modules/foundation-sites/scss'),
      path.resolve(__dirname, './node_modules/motion-ui')
    ],
    outputStyle: 'expanded'
  }
};
