const path = require('path')

module.exports = {
	entry: {
		app: './src/index.js',
	},
	output: {
		filename: 'main.bundle.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'commonjs2',
		libraryExport: 'default'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						'presets': ['@babel/preset-env']
					}
				}
			}
		]
	},
}