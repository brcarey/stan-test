const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js']
    },

    devtool: 'source-map',

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader',  exclude: /node_modules/ },
            { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'less-loader') }
        ],

        preLoaders: [
            { test: /\.js$/, loader: 'source-map-loader' }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({ template: 'index.html' }),
        new ExtractTextPlugin('styles.css')
    ]
};