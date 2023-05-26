import MiniCssExctractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      // FOR style-loader: Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExctractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
}
