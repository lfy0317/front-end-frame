const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
	mode: "development", // 开发模式
	devServer: {
		static: path.resolve(__dirname, "../dist"),
		historyApiFallback: true,
		open: true, // 编译完自动打开浏览器
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							// 启用 CSS Modules
							modules: {
								namedExport: true,
								localIdentName: "lfy__[name]__[local]"
							}
						}
					},
					{
						loader: "postcss-loader",
						options: {
							// 它可以帮助我们将一些现代的 CSS 特性，转成大多数浏览器认识的 CSS，并且会根据目标浏览器或运行时环境添加所需的 polyfill；
							// 也包括会自动帮助我们添加 autoprefixer
							postcssOptions: {
								plugins: ["postcss-preset-env"]
							}
						}
					},
					"less-loader"
				],
				// 排除 node_modules 目录
				exclude: /node_modules/
			}
		]
	}
};

module.exports = merge(commonConfig, devConfig);
