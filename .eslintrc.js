module.exports = {
  root: true,
  plugins: ["@html-eslint"],
  overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
      extends: ["plugin:@html-eslint/recommended"],
      rules: {
        "@html-eslint/indent": "off",
        "@html-eslint/require-closing-tags": "off",
      },
    },
  ],
};
