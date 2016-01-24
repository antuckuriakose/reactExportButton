var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: '.',
    filename: 'index.js',
	libraryTarget: 'umd',
	library: 'takaslib'
  },
  devServer: {
    inline: true,
    port: 3000
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
    }),
  ],
  externals: {
    react: 'react',
    'react/addons': 'react',
    'react-modal':'react-modal'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        noParse: /node_modules/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
           "presets": ["react", "stage-2", "es2015"]
        }
      },
      {test: /\.css$/, loader: 'style!css' }
    ]
  }
}