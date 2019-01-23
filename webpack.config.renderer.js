const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src','renderer'),
  // entry: './index.ts',
  // stats: 'verbose',
  // stats: {
  //   maxModules: Infinity,
  //   optimizationBailout: true
  // },
  // output: {
  //   path: path.join(__dirname, 'dist', 'renderer'),
  //   filename: 'bundle.js'
  // },
  // resolve: {
  //   // extensions:  [ '.js', '.ts', '.tsx', '.json', '.node', '.css', '.vue', '.pug' ]
  //   // alias: {
  //   //   '@': path.join(__dirname, 'src','renderer')
  //   // }
  // },
  module: {
    // rules: [
    //   {
    //     test: /\.pug$/,
    //     oneOf: [
    //       {
    //         resourceQuery: /^\?vue/,
    //         use: ['pug-plain-loader']
    //       },
    //       // this applies to pug imports inside JavaScript
    //       {
    //         // use: ['raw-loader', '!!pug-plain-loader']
    //         use: ['pug-loader']
    //       }
    //     ]
    //   },

    // ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: "index.html",
    //   template: 'index.pug',
    //   title: 'Dynamic Title',
    // }),
  ]
}
