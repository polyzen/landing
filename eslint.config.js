import css from '@eslint/css';
import html from '@html-eslint/eslint-plugin';
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import yml from 'eslint-plugin-yml';
import yamlParser from 'yaml-eslint-parser';

/** @type { import('eslint').Linter.Config[] } */
const config = [
  {
    files: ['style.css'],
    plugins: {
      css,
    },
    language: 'css/css',
    rules: {
      ...css.configs.recommended.rules,
      'css/prefer-logical-properties': 'error',
      'css/use-baseline': 'off',
    },
  },
  {
    ...html.configs['flat/recommended'],
    files: ['index.html'],
    rules: {
      ...html.configs['flat/recommended'].rules,
      '@html-eslint/attrs-newline': 'off',
      '@html-eslint/indent': 'off',
      '@html-eslint/no-extra-spacing-attrs': [
        'error',
        { enforceBeforeSelfClose: true },
      ],
      '@html-eslint/require-closing-tags': ['error', { selfClosing: 'always' }],
    },
  },
  {
    files: ['eslint.config.js'],
    ...js.configs.recommended,
  },
  {
    files: ['.gitlab-ci.yml'],
    plugins: {
      yml,
    },
    languageOptions: {
      parser: yamlParser,
    },
    rules: {
      ...yml.configs.standard.rules,
    },
  },
  prettier,
];

export default config;
