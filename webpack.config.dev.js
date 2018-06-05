const webpack = require('webpack');
const commonConfig = require('./webpack.config.common');

const config = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
        stats: 'minimal',
        compress: true,
        inline: true,
        port: 8080,
        hot: true,
        publicPath: '/'
    }
};

const resultConfig = Object.assign({}, commonConfig, config);

module.exports = resultConfig