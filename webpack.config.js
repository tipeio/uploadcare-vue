const webpack = require('webpack');
const path = require('path');

var ROOT = path.resolve(__dirname)
var root = path.join.bind(path, ROOT)

const create = (filename, output, external) => {
  return {
    entry: './src/Uploadcare.vue',
    output: {
      path: output,
      filename: filename,
      libraryTarget: 'umd',
      library: 'uploadcare-vue',
      umdNamedDefine: true
    },
    externals: {
      'uploadcare-widget': external
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: __dirname,
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-env']
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!less-loader!css-loader'
        }
      ]
    }
  }
}
module.exports = [
  create('index.js', root('./dist'), 'uploadcare-js'),
  create('uploadcare-vue.js', root('./example'), 'uploadcare')
];
