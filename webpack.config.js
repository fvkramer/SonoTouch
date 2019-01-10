const path = require('path');

module.exports = {
  entry: './src/keyboard.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
