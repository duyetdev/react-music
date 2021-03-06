var webpack = require('webpack');
var path = require('path')
module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        // 'webpack-hot-middleware/client',
        'whatwg-fetch',
        './container/container.js'
    ],
    output: {
        path: require("path").resolve("./public/"),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }, {
                test: /\.css$/,
                exclude: /(s-alert-default.css|s-alert-css-effects|normalize.css|audioplayer.css)/,
                loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
            }, {
                test: /\.css$/,
                include: /(s-alert-default.css|s-alert-css-effects|normalize.css|audioplayer.css)/,
                loader: 'style-loader!css-loader?sourceMap'
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            }, {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            { test: /\.jpg$/, loader: "url-loader" }
        ]
    }
}
