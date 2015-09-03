var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",

  entry: {
    main: "./main",
    css: "./index.css",
    html: "./index-hot.html"
  },

  output: {
    filename: "[name].js",
    path: __dirname + "/app",
    publicPath: 'http://localhost:3000/app/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel"]
      },
      {
        test: /\.(html|css)$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  }
};
