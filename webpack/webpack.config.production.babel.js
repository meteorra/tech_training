import webpack from 'webpack';
import baseConfig from './webpack.config.base.babel';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

const config = Object.create(baseConfig);

config.plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        },
        include: /\.js$/,
        minimize: true,
        comments: false
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /tech-training.css$/,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
            discardDuplicates: { removeAll: true },
            discardComments: {removeAll: true }
        },
        canPrint: true
    }),
    new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0
    }),
    ...baseConfig.plugins
];

config.devtool = "source-map";

export default config;

