var webpack = require('webpack');


module.exports = {
  entry: './main.js',
  output: {
    path: '.',
    filename: 'index.js',
  },
  devServer: {
    inline: true,
    port: 3000
  },
  plugins: [
   new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jsPDF:"jspdf/dist/jspdf.amd.min.js"
        })
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
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
      { test: /\.css$/,   loader: 'style!css' },
      { test: /\.png$/,  loader: "url-loader?limit=100000" },
      { test: /\.eot$/, loader: "url-loader?limit=100000" },
      { test: /\.svg$/, loader: "url-loader?limit=100000" },
      { test: /\.woff$/, loader: "url-loader?limit=100000" },
      { test: /\.woff2$/, loader: "url-loader?limit=100000" },
      { test: /\.ttf$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  }
}