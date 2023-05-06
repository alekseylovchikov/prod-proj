import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExctractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';

export function buildPlugins(
  options: BuildOptions
): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(), // показывает прогресс загрузки
    new HTMLWebpackPlugin({ template: options.paths.html }), // встраивает скрипты в html
    new MiniCssExctractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
}
