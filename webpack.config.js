const path = require('path');
const webpack = require('webpack');


module.exports = {
  devtool: 'cheap-module-source-map',

  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: __dirname + "/public/assets",
    publicPath: "/assets/",
    // filename
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]git 
      }, {
        test: /\.md$/,
        use: [
          'html-loader',
          'markdown-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 7777,
    host: '0.0.0.0',
    hot: true,
    inline: true,
    contentBase: __dirname + "/public",
    watchOptions: {
      poll: true
    }
  }
};