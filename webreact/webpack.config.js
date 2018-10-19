const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },
    optimization: {
        splitChunks:{
            cacheGroups: {
                node_vendors:{
                    test:/[\\/]node_modules[\\/]/,
                    name:'vendor',
                    chunks: "all"
                }
            }
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./index.html'})
    ]

}