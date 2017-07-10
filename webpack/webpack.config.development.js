'use strict';

var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var config = Object.create(baseConfig);

Array.prototype.push.apply(config.plugins, [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/'
    })
]);

config.devServer = {
    inline: true,
    contentBase: './dist'
};

config.devtool = "cheap-module-source-map";

module.exports = config;
