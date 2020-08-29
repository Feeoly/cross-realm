const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.js', './src/symbol.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my.bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            hash: false,
        }),
        new HtmlWebpackPlugin({
            filename: 'symbol.html',
            template: './src/symbol.html',
            hash: false,
        }),
        new CopyWebpackPlugin({
            patterns:[
                { from: 'static/pdfjs', to: 'assets/pdfjs' },
            ]
        }),
    ],
    module:{
        rules: [// loader执行顺序从右到左，从下到上
            {
                test:/.\js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            ["@babel/preset-env", {
                                "targets": {
                                    "ie" : "11"
                                },
                            }]
                        ],
                        plugins: [
                          "@babel/plugin-transform-modules-commonjs",
                          [
                            "@babel/plugin-transform-runtime",
                            {
                              helpers: false,
                              regenerator: true,
                            },
                          ],
                        ],
                    },
                },
                //include: path.resolve(__dirname, 'src'), // include js
                exclude: /node_modules/, // exclude js
            },
        ]
    }
};