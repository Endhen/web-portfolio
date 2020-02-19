const common = require('./webpack.common');
const merge= require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge( common, {
    mode: "developpment",
    output: {
        filename: "main.[ext]",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
    ],
    module: {
        rules: [
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
        ],
    },
});