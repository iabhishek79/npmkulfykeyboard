var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            {
                loader: 'url-loader',
                options:{
                    fallback: "file-loader",
                    name: "[name][md5:hash].[ext]",
                    outputPath: 'Assets/',
                    publicPath: '/Assets/'
                }
            }
        ]
    },
    ]
  },
  externals: {
    react: "react"
  }
};
