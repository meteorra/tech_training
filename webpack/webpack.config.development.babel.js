import webpack from 'webpack';
import baseConfig from './webpack.config.base.babel';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'

const config = Object.create(baseConfig);

config.plugins.push(...[new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/'
    })]);

config.devServer = {
    inline: true,
    contentBase: './dist'
};

config.devtool = "cheap-module-source-map";

export default config;
