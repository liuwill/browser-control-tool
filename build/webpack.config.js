var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var StyleExtractPlugin = new ExtractTextPlugin({
  filename: '[name].[contenthash:8].css',
  allChunks: true
})

var myConfig = {
    // entry: "./client/main.js",
  entry: {
    bundle: ['babel-polyfill', './src/app.js'],
    vendor: ['jquery', 'bootstrap', 'popper.js']
  },
  resolve: {
    extensions: ['.js', '.scss', '.css']
  },
  output: {
        // filename: "assets/bundle.js",
        // path: __dirname,
    path: path.join(__dirname, '../dist/assets/'),
    filename: '[name].[chunkhash:8].js',
        // filename: '[name].[hash:8].js',
        // filename: '[name].[contenthash:8].js',
        // filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: './assets/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(ttf|eot|svg|svg|woff|woff(2))(\?t\=[0-9]+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      // In case you imported plugins individually, you must also require them here:
      // Util: "exports-loader?Util!bootstrap/js/dist/util",
      // Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['vendor', 'bundle'],
            // Modules must be shared between all entries
      minChunks: Infinity
      // minChunks: 2 // 提取所有chunks共同依赖的模块
    }),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'bundle'],
      title: 'browser-control-tool',
      template: './index.html',
      filename: '../index.html',
      inject: true
    }),
    new OptimizeCssAssetsPlugin(),
    StyleExtractPlugin
  ]
}

module.exports = myConfig
