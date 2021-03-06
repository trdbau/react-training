const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootDir = path.resolve(process.cwd())
const assetsPath = path.resolve(rootDir, 'assets')
const srcPath = path.resolve(rootDir, 'src')
const buildPath = path.resolve(rootDir, 'build')

module.exports = {
  mode: 'development',
  entry: {
    app: `${srcPath}/app.js`,
  },
  output: {
    publicPath: '/',
    path: buildPath,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: srcPath,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [srcPath, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${assetsPath}/template.html`,
      favicon: `${assetsPath}/favicon.ico`,
    }),
  ],
  devServer: {
    contentBase: '/',
    compress: true,
    port: 6969,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  target: 'web',
}
