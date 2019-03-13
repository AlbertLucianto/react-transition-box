import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

module.exports = {
  context: path.join(__dirname, '..'),
  devServer: {
    contentBase: 'dist',
    port: 8080,
  },
  devtool: 'inline-source-map',
  entry: './web/index.tsx',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        loader: 'url-loader',
        // Default fallback to 'file-loader'
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]',
        },
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      },
    ],
  },
  output: {
    filename: 'static/[name]-[hash].js',
    path: path.join(__dirname, '../dist/web'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.join(__dirname, '../web/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
};
