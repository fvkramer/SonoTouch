const path = require('path');

module.exports = {
  entry: './src/keyboard.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  target: 'node',
};
