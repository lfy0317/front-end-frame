import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}", "postcss.config.ts"],
        ignores: ["eslint.config.mjs", "node_modules/**", "dist/**", "config/**"],
        settings: {
            react: {
                pragma: "React",
                version: "detect"
            }
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended
];
