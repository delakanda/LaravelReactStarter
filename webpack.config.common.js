const path = require('path');

const config = {
    entry: './webapp/index.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "file?name=[name].[ext]"
                    }
                ]
            },
            {
                test: /\.css$/,
                include: /client/,
                use: [
                    "style-loader",
                    "css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]"
                ]
            },
            {
                test: /\.css$/,
                exclude: /client/,
                use: [
                    "style!css"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    "file?hash=sha512&digest=hex&name=Content/img/flags.[ext]",
                    "image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false"
                ]
            },
            // {
            //     test: /\.tsx?$/,
            //     include: path.resolve("app"),
            //     use: [
            //         "babel-loader"//,
            //         //"ts-loader"
            //     ]
            // }
        ]
    }
};

module.exports = config;