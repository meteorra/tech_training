import webpack from 'webpack';
import baseConfig from './webpack.config.base.babel';

const config = Object.create(baseConfig);

config.entry = [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    ...baseConfig.entry
];

config.plugins.push(...[
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
]);

config.devServer = {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
};

config.devtool = "cheap-module-source-map";

export default config;
