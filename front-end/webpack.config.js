const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[contenthash].bandle.js',
        clean: true
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: [
                    {
                        loader:'babel-loader',
                        options:{
                            presets:[
                                '@babel/preset-react'
                            ]
                        }
                    },
                ]
            },
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use:['file-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
    ],
    devServer:{
        compress: true,
        port: process.env.PORT || 3000,
        historyApiFallback: true,
        hot: true,
        host: '0.0.0.0'
    },
    watchOptions: {
        poll: 200
    }
}