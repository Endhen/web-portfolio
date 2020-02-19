
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
                test: /\.(svg|png)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name]-[hash].[ext]",
                        outputPath: "assets",
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