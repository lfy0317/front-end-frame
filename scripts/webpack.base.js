const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "../src/index.tsx"),
    output: {
        filename: "[name].[contenthash].js",
    },
    resolve: {
        extensions: [".mjs", ".js", ".json", ".jsx", ".ts", ".tsx"],
        alias: {
            "@": path.resolve(__dirname, "../src"),
        },
    },
    module: {
        rules: [
            {
                test: /.(jsx?)|(tsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets:
                                        "iOS 9, Android 4.4, last 2 versions, > 0.2%, not dead", // 根据项目去配置
                                    useBuiltIns: "usage", // 会根据配置的目标环境找出需要的polyfill进行部分引入
                                    corejs: 3, // 使用 core-js@3 版本
                                },
                            ],
                            ["@babel/preset-typescript"],
                            ["@babel/preset-react"],
                        ],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 25 * 1024, // 25kb
                    },
                },
                generator: {
                    filename: "assets/images/[name].[hash:8][ext]",
                },
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/i,
                type: "asset/resource", // 字体图标不能转化为base64, 这里使用 asset/resource
                // parser: {
                //   dataUrlCondition: {
                //     maxSize: 25 * 1024, // 25kb
                //   },
                // },
                generator: {
                    filename: "assets/fonts/[name].[contenthash][ext]",
                },
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            // 它可以帮助我们将一些现代的 CSS 特性，转成大多数浏览器认识的 CSS，并且会根据目标浏览器或运行时环境添加所需的 polyfill；
                            // 也包括会自动帮助我们添加 autoprefixer
                            postcssOptions: {
                                plugins: ["postcss-preset-env"],
                            },
                        },
                    }
                ],
                // 排除 node_modules 目录
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        // 自动引入打包之后的资源
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
        }),
    ],
};
