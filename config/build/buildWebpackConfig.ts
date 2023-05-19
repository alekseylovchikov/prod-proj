import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    module: {
      // обрабатывается все что не .js
      rules: buildLoaders(options),
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    // ['.tsx', '.ts', '.js']
    // для импорта без разширения
    resolve: buildResolvers(options),
    output: {
      filename: '[name].[contenthash].js', // будет генерироваться хэш и если файл изменился браузер обновит кэш
      path: paths.build,
      clean: true, // чтобы чистить папку с файлами сборки [build]
    },
    stats: 'errors-warnings',
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
