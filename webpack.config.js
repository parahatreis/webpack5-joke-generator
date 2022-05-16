const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // mode
  mode: 'development',
  // entry file
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  // output file
  output: {
    path: path.resolve(__dirname, 'dist'),
    // [name] comes from 'entry.bundle' , [contenthash] generates hash name for our .js file
    filename: '[name]-[contenthash].js',
    // it keeps one bundle file
    clean: true,
    // set to an empty string for the assets built from data URI replacements.
    assetModuleFilename: '[name][ext]',
  },
  // 
  devtool: 'source-map',
  devServer: {
    // the file to be served
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    // port
    port: 3000,
    // automatically opens the project
    open: true,
    // hot reload
    hot: true,
    // compress files
    compress: true,
    // the index.html page will likely have to be served in place of any 404 responses
    historyApiFallback: true,
  },
  // modules
  module: {
    // module rules
    rules: [
      // test-1 (sass)
      {
        // All scss files use the installers we have added to 'use' value.
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // test-2 (babel)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // test-3 (images)
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // sets the type for a matching module
        type: 'asset/resource'
      }
    ]
  },
  // Plugins
  plugins: [
    // Html plugin to generate .html file
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      // Initially uses this template when index.html is generated
      template: 'src/template.html'
    }),
    // Bundle analyzer for entire projects (includes sizes and etc.)
    new BundleAnalyzerPlugin(),
  ]
}