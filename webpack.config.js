module.exports = {
  context: __dirname + "/src",

  entry: {
    main: "./main",
    css: "./index.css",
    html: "./index.html"
  },

  output: {
    filename: "[name].js",
    path: __dirname + "/app"
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.(html|css)$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  }
};
