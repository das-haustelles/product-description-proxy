const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, '/client'),
  // entry: `${__dirname  }/client/index.js`,
  module: {
    rules: [{
      test: [/\.(js|jsx)$/],
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
    }],
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
