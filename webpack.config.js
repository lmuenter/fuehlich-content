const path = require("path");

module.exports = {
    mode: "development",
    entry: ["./attila/static/js/jquery.fitvids.js", "./attila/static/js/script.js", "./attila/static/css/style.css"],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './attila/static/dist'),
        filename: 'bundle.js'
    }
};