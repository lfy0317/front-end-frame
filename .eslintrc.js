// const globals = require("globals");
// const pluginJs = require("@eslint/js");
// const tseslint = require("typescript-eslint");
// const pluginReact = require("eslint-plugin-react");

// module.exports = [
//     {
//         files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}", "postcss.config.ts"],
//         ignores: ["eslint.config.mjs", "node_modules/**", "dist/**", "config/**"],
//         settings: {
//             react: {
//                 pragma: "React",
//                 version: "detect"
//             }
//         },
//         rules: {
//             semi: "error",
//             "prefer-const": "error",
//             "no-unused-vars": "warn",
//             "no-undef": "warn"
//         }
//     },
//     { languageOptions: { globals: globals.browser } },
//     pluginJs.configs.recommended,
//     ...tseslint.configs.recommended,
//     pluginReact.configs.flat.recommended
// ];

// .eslintrc.js
module.exports = {
    // 设定当前目录为eslint根目录
    root: true,
    // 设定eslint的env
    env: {
        es6: true,
        browser: true,
        node: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        jsx: true
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    plugins: ["@typescript-eslint"],
    rules: {
        //暂时不写
        semi: "error",
        "prefer-const": "error",
        "no-unused-vars": "warn",
        "no-undef": "warn"
    }
};
