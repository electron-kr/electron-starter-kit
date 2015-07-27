module.exports = {
  context: __dirname + "/src",

  entry: {
    main: "./main.jsx",
    css: "./index.css",
    html: "./index.html"
  },

  output: {
    filename: "[name].js",
    path: __dirname + "/app"
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
