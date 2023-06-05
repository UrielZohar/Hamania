const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV==='production';

module.exports = {
    entry: './src/js/index.js',
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'index.js',
        filename: '[name].bundle.js',
        publicPath: '/clientapp/dist/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        ...(isProduction ? [new HtmlWebpackPlugin({
            template: './src/public/index.html'
        })] : []),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, './src/public'),
        },
        compress: true,
        port: 9000,
    }
};