const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const commonConfig = require('./webpack.config.common');

const config = {
	mode: 'production',
    devtool: 'source-map',
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};

const resultConfig = Object.assign({}, commonConfig, config);

module.exports = resultConfig;