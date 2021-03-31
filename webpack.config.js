module.exports = {
  mode: "production",
  entry: "./src/cms/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js|jsx)$/,
        use: [{ loader: "ts-loader" }],
        include: `${__dirname}/src`,
        exclude: /node_modules/,
      },
    ],
    loaders: [{ test: /\.d.ts$/, loader: "ignore-loader" }],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"],
  },
  target: ["web", "esnext"],
  settings: {
    "import/resolver": "webpack",
  },
};
