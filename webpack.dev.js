const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './frontend/src/index.js',
    store: './frontend/src/components/store/Store.js',
    cart: './frontend/src/components/cart/Cart.js',
    home: './frontend/src/components/common/Home.js',
  },
  output: {
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, './frontend/static/frontend'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
};
