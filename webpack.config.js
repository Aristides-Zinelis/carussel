const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	// devtool: 'eval-source-map',
	// devtool: false,
	output: { filename: 'bundle.js', path: path.join(__dirname, 'dist'), publicPath : '/' },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: [path.join(__dirname, 'src')],
				use: [{
					loader: 'babel-loader'
				}],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Carrusel',
			template: './src/main.html',
		  }),
		new webpack.SourceMapDevToolPlugin({
				filename: '[file].map'
			}),
			new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		hot: true,
		inline: true,
		stats: 'errors-only',
	}
};
