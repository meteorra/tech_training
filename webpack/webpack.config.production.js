'use strict';

var baseConfig = require('./webpack.config.base');
var webpack = require('webpack');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var config = Object.create(baseConfig);

Array.prototype.push.apply(config.plugins, [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        },
        include: /\.js$/,
        minimize: true
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /tech-training.css$/,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
            discardDuplicates: { removeAll: true },
            discardComments: {removeAll: true }
        },
        canPrint: true
    })]);

config.devtool = "source-map";

module.exports = config;

