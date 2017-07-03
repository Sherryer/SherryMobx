var webpack = require('webpack');

module.exports = {
    entry: {
        learn: './Demos/learn/test.jsx',
        autorunAsync: './autorunAsync/',
        atom: './atom/'
    },
    output: {
        path: "./compress/",
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            }
        ]
    },
    plugins: []
};
