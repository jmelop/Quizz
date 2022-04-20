export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/no-inferrable-types": "off",
        "max-len": ["error", { "code": 80 }],
        "space-before-function-paren": ["error", "never"],
        "space-before-blocks": "error",
        "keyword-spacing": ["error", { "before": true , "after": true }],
        "no-multiple-empty-lines": ["error", { "max": 1 }]
    }
}
