const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  entry: './src/storylines.module.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'storylines.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        enforce: 'pre',
        test: /\.ts$/,
        use: {
          loader: 'tslint-loader',
          options: {
            fix: true
          }
        }
      },
      {
        test: /\.ts$/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      },
      {
        enforce: 'post',
        test: /\.ts$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('storylines.css'),
    new HtmlWebpackPlugin({
      title: 'Storylines',
      template: 'src/storylines.ejs'
    })
  ],
  resolve: {
    extensions: ['.js', '.scss', '.ts']
  }
};
