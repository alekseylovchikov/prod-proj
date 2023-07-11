import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExctractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins: webpack.WebpackPluginInstance[] = [
    new webpack.ProgressPlugin(), // показывает прогресс загрузки
    new HTMLWebpackPlugin({
      template: options.paths.html,
      favicon: options.paths.favicon,
    }), // встраивает скрипты в html
    new MiniCssExctractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(options.isDev),
    }),
  ];

  if (options.isDev) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin(),
      // new BundleAnalyzerPlugin({ openAnalyzer: false }),
    );
  }

  return plugins;
}
