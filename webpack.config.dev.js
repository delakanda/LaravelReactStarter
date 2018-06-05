const webpack = require('webpack');
const commonConfig = require('./webpack.config.common');

const config = {
	mode: 'development',
	devtool: 'inline-source-map'
};

const resultConfig = Object.assign({}, commonConfig, config);

module.exports = resultConfig;