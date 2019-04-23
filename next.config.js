/* eslint-disable */
const fs = require('fs')
const path = require('path')
const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')

// next.js configuration
const nextConfig = {
  // distDir: "../build", // https://github.com/zeit/next.js/issues/4789

  webpack (config, options) {
    // webpack aliases
    // config.resolve.alias['generated'] = path.join(__dirname, '/generated')
    // config.resolve.alias['layouts'] = path.join(__dirname, 'views/layouts')
    // config.resolve.alias['components'] = path.join(__dirname, 'views/components')
    // config.resolve.alias['ui'] = path.join(__dirname, 'views/ui')
    // config.resolve.alias['styled'] = path.join(__dirname, 'views/styled')

    return config
  }
};

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withPlugins([

  // add a plugin without a configuration
  withTypescript,

  // add a plugin with specific configuration
  [withLess, {
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables, // make your antd custom effective
    }
  }], 
], nextConfig);
