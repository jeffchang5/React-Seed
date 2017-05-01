const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist/public'),
  },

  devtool: 'source-map',
  target: 'web',
  devServer: {
    contentBase: './dist/public',
    disableHostCheck: true,
    port: 8080,
  },

  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
    extensions: ['.js', '.jsx', '.js', '.json'],
  },

  module: {
    rules: [
      { test: /\.jsx$/, enforce: 'pre', loader: 'eslint-loader', options: { emitWarning: true } },
      { test: /\.jsx?$/, loader: 'babel-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },

  externals: {
    'react': 'React',
    'redux': 'Redux',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
    'react-redux': 'ReactRedux',
  },
};
