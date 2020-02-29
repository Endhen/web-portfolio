const common = require('./webpack.common');
const merge= require('webpack-merge');
const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge( common, {
    mode: "production",
    watchOptions: {
        ignored: /node_modules/
    },
    output: {
        filename: "main-[contentHash].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
        }}),
        new MiniCssExtractPlugin({ filename: "[name]-[contentHash].css"}),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin()
        ],
    },
    module: {
        rules: [
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
        ],
    },
});