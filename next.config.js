/* eslint-disable */
const fs = require('fs')
const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const withCss = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins');

// next.js configuration
const nextConfig = {};

module.exports = withPlugins([

  // add a plugin without a configuration
  withTypescript
  
], nextConfig);
