
import webpack from 'webpack';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import dotenv from 'dotenv';
import ESLintPlugin from 'eslint-webpack-plugin';

const env = dotenv.config({path: __dirname + '/.env'});

const config =
{
  entry: './src/main.tsx',
  output:
  {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve:
  {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
    modules: 
    [
      path.resolve(__dirname, './src/'),
      path.resolve(__dirname, './node_modules'),
    ],
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
          'babel-loader',
          'ts-loader',
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: 
  [
    new HTMLWebpackPlugin(
      {
        template: 'public/index.html',
        filename: 'index.html',
      }
    ),
    new ESLintPlugin(
      {
        extensions: ['ts', 'tsx'],
      }
    ),
    new webpack.DefinePlugin(
      {
        'process.env': env.parsed,
      }
    ),
  ],
};

export default config;
