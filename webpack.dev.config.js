var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // 页面入口文件配置
    entry : [
        'webpack/hot/dev-server',
        "webpack-hot-middleware/client?reload=true",
        './app/App.js'
    ],
    // 入口文件输出配置
    output : {
        publicPath : "http://localhost:4000/dist/",
        filename : 'index.bundle.js'
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
    plugins: [
        new ExtractTextPlugin("app.css"),
        new webpack.HotModuleReplacementPlugin(),
        // 引入了html-webpack-plugin自动生成html
        new HtmlWebpackPlugin({
            filename: "index.ejs",
            template: './app/views/temp.ejs', // Load a custom template 
            inject: 'body' // Inject all scripts into the body 
        })

    ]
}