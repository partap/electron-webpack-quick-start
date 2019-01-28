#!/usr/bin/env node

const { inspect } = require('util')

const webpackRenderer = require('electron-webpack/webpack.renderer.config.js')
webpackRenderer().then(config => {
  console.log('\nwebpack.renderer.config.js:')
  console.log(inspect(config, {
    showHidden: false,
    depth: null,
    colors: true
  }))
})

