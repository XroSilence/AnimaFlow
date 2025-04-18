const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'animaflow.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'AnimaFlow',
      type: 'umd',
      export: 'default',
    },
    globalObject: 'this',
  },
  mode: 'production',
};