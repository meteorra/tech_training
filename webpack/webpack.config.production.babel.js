import baseConfig from './webpack.config.base.babel';
import webpack from 'webpack';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

const config = Object.create(baseConfig);

config.plugins.push(...[
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
    })
]);

config.devtool = "source-map";

export default config;

