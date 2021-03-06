const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: path.join(__dirname, './client'),
  devtool: 'cheap-module-source-map',
  entry: {
    jsx: './index.js',
    html: './index.html',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux'
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/',
    filename: 'assets/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[path][name].[ext]!extract-loader!html-loader?interpolate=require'
      },
      {
        test: /\.css$/,
        include: /client/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /client/,
        loader: 'style!css'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader?limit=2048'
      }
    ]
  },
  htmlLoader: {
    ignoreCustomFragments: [/\{\{.*?}}/],
    root: path.resolve(__dirname, 'assets'),
    attrs: ['img:src', 'link:href']
},
  resolve: {
    modulesDirectories: ['node_modules', './client'],
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    require('rucksack-css')({
      autoprefixer: true
    }),
    require('postcss-normalize'),
    require('postcss-assets')({
      basePath: 'client/',
      loadPaths: ['assets/']
    })
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'assets/vendor.bundle.js'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false
      }
    })
  ],
  devServer: {
    contentBase: './client',
    hot: true
  }
}
