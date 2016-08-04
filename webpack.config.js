var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'lib');
var APP_DIR = path.resolve(__dirname, 'app/components');

module.exports = {
  entry: APP_DIR + '/main.jsx',
  output: {
    // Output the bundled file.
    path: BUILD_DIR,
    // Use the name specified in the entry key as name for the bundle file.
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        // Test for js or jsx files.
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  },
  externals: {
    // Don't bundle the 'react' npm package with the component.
    'react': 'React'
  },
  resolve: {
    // Include empty string '' to resolve files by their explicit extension
    // (e.g. require('./somefile.ext')).
    // Include '.js', '.jsx' to resolve files by these implicit extensions
    // (e.g. require('underscore')).
    extensions: ['', '.js', '.jsx']
  }
};
