const path = require('path');

module.exports = {
  devtool: 'source-map',
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
    extensions: ['.js','.js', '.json'],
  },

  module: {
    rules: [
      { test: /\.js?$/, loader: 'babel-loader' },
    ],
  },
};
