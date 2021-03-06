
module.exports = {
    entry: {
        main: "./src/index.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use:  ["html-loader"],
            },
            {
                test: /\.(svg|png|ico)$/,
                use: 
                {
                    loader: "file-loader",
                    options: {
                        name: "[name]-[hash].[ext]",
                        outputPath: "assets",
                        esModule: false,
                    },
                },
            },
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
}