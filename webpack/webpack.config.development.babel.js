import webpack from 'webpack';
import baseConfig from './webpack.config.base.babel';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const config = Object.create(baseConfig);

config.entry = [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    ...baseConfig.entry
];

config.plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
    }),
    ...baseConfig.plugins
];

config.devServer = {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true
};

config.devtool = "cheap-module-source-map";

export default config;
