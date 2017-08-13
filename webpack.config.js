var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
    // 页面入口文件配置
    entry : {
        "index": './app/App.js'
    },
    // 入口文件输出配置
    output : {
        publicPath: '/dist/',
        path: __dirname + '/app/dist/',
        filename: '[name].bundle.js'
    },
    module: {
        // 加载器配置
        loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query:{
                presets:['es2015','react']
            }
        },
        {
            // 图片加载器
            test:/\.(png|jpg|gif|jpeg)$/,
            loader: 'url-loader?limit=2048'
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }
        ]        
    },
    // 其他解决方案配置
    // resolve: {
    //     extensions: ['', '.js', '.jsx', '.css', '.json']
    // },
    // 插件项
    plugins: [
        new ExtractTextPlugin("app.css"),
        // 引入了html-webpack-plugin自动生成html
        new HtmlWebpackPlugin({
            filename: "index.ejs",
            template: './app/views/temp.ejs', // Load a custom template 
            inject: 'body' // Inject all scripts into the body 
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}