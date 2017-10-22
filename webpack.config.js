var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    filename: 'index.js',
    library: 'LogicRender',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: __dirname + '/src'
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      var: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
    refast: {
      root: 'Refast',
      var: 'Refast',
      commonjs: 'refast',
      commonjs2: 'refast',
      amd: 'refast',
    }
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
