const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: ['./src/index.tsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    stats: {
        children: true,
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        compress: true,
        historyApiFallback: true,
        port: 3005,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: '/node_modules',
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|mp4)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
        })
    ]
}