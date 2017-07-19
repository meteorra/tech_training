import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    entry: './src/index.js',
    output: {
        filename: 'tech-training.js',
        publicPath: '/assets/',
        path: path.join(__dirname, '..', 'dist')
    },
    resolve: {
        extensions: ['.js'],
        enforceExtension: false
    },
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/},
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {test: /\.(sass|scss)$/, loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React redux webpack',
            template: 'src/index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('tech-training.css')
    ]
};
