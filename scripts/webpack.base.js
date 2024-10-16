const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const PROJECT_NAME = 'lfy';

module.exports = {
    entry: path.resolve(__dirname, "../src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "../dist"), // 打包后的代码放在dist目录下
        filename: "[name].[hash:8].js", // 打包的文件名
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../src"),
        },
        // 配置 extensions 来告诉 webpack 在没有书写后缀时，以什么样的顺序去寻找文件
        extensions: [".mjs", ".js", ".json", ".jsx", ".ts", ".tsx"], // 如果项目中只有 tsx 或 ts 可以将其写在最前面
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
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            defaultExport: true,
                        },
                    },
                    // MiniCssExtractPlugin.loader, // 使用 MiniCssExtractPlugin.loader 代替 style-loader
                    {
                        loader: "css-loader",
                        options: {
                            esModule: true,
                            modules: {
                                namedExport: true,
                                localIdentName: PROJECT_NAME + "__[name]__[local]",
                            },
                        },
                    },
                    // css-loader
                    {
                        loader: "postcss-loader",
                        options: {
                            // 它可以帮助我们将一些现代的 CSS 特性，转成大多数浏览器认识的 CSS，并且会根据目标浏览器或运行时环境添加所需的 polyfill；
                            // 也包括会自动帮助我们添加 autoprefixer
                            postcssOptions: {
                                plugins: [["postcss-preset-env", {}]],
                            },
                        },
                    },
                    "less-loader",
                ],
                // 排除 node_modules 目录
                exclude: /node_modules/,
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
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 25 * 1024, // 25kb
                    },
                },
                generator: {
                    filename: "assets/fonts/[name].[hash:8][ext]",
                },
            },
        ],
    },
    optimization: {
        minimizer: [
            // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
            // `...`,
            new CssMinimizerPlugin({
                // 默认开启
                // parallel true:  // 多进程并发执行，提升构建速度 。 运行时默认的并发数：os.cpus().length - 1
            }),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"), // 使用自定义模板
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/[hash:8].css", // 将css单独提测出来放在assets/css 下
        }),
    ],
};
