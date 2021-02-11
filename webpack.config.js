
const webpack           = require('webpack');
const path              = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const dotenv            = require('dotenv').config({path: __dirname + '/.env'});


module.exports = 
{
  entry: './src/main.tsx',
  output:
  {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: 
  {
    rules: 
    [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 
        [
          {
            loader: 'babel-loader',
            options: 
            {
              presets: 
              [
                '@babel/preset-react',
                '@babel/preset-env',
                '@babel/typescript'
              ],
              plugins: 
              [
                '@babel/plugin-transform-react-jsx',
                '@babel/plugin-transform-runtime',
                '@babel/proposal-class-properties',
                '@babel/proposal-object-rest-spread'
              ]
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: 
  [
    new HTMLWebpackPlugin(
      {
        template: 'dist/index.html',
        filename: 'index.html'
      }
    ),
    new webpack.DefinePlugin(
      {
          "process.env": dotenv.parsed
      }
    ),
  ]
}