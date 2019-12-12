const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

const server = {
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new NodemonPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

const client = {
  target: 'web',
  entry: path.join(__dirname, 'src/client.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.js',
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader','sass-loader']
      },
      { 
        test: /\.css$/, 
        include: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'] 
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|webp|ico)$/,
        use: [
            {
                loader: "file-loader",
                options: {
                    outputPath: './images',
                    name: "[name].[ext]",
                },
            },
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = [server, client];
