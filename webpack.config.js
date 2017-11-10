/**
 * webpack 开发环境配置
 **/
var path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(path.join(__dirname, 'public'))
 module.exports = {
	// 项目入口文件
	entry: path.join(__dirname, 'app', 'main.js'),
	// 打包文件存储位置
  output: {
    path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	// 映射 （方便调试）
	devtool: 'eval-source-map',
	// 定义解析
	resolve: {
		alias: {
			Image: path.resolve(__dirname, 'assets/images'),
			Css: path.resolve(__dirname, 'assets/css')
		},
		extensions: ['.js', '.jsx', '.json', '.css']
	},
	// 构建本地服务器
	devServer: {
		contentBase: './public',
		historyApiFallback: true,
		inline: true,
		hot: true
	},
	// 定义加载器（不使用.balelrc）
	module: {
		rules: [
			// es6 + react
			{	
				test:  /(\.jsx|\.js)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['latest', 'react']
					}
				},
				// 使用绝对路径（相对路径对不同的环境会认不出）
				exclude: path.join(__dirname, 'node_modules')
			},
			// let use import or url() to deal with css 
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					}, {
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			},
			{
				test: /\.(png|jpg|jpeg|ico|gif|woff|woff2|ttf|eot|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192,
						name: 'images/[hash:8].[name].[ext]'
					}
				}
			}
		]
	},
	// 使用插件
	plugins: [
		new webpack.BannerPlugin('版权所有，翻版必究'),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'assets', 'index.html')
		}),
		new webpack.HotModuleReplacementPlugin()
	],
 }