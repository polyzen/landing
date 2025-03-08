import css from '@eslint/css';
import html from '@html-eslint/eslint-plugin';
import js from '@eslint/js';

/** @type { import('eslint').Linter.Config[] } */
const config = [
  {
    files: ['**/*.css'],
    plugins: {
      css,
    },
    language: 'css/css',
    rules: {
      'css/require-baseline': 'off',
    },
  },
  {
    ...html.configs['flat/recommended'],
    files: ['**/*.html'],
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
    files: ['**/*.js'],
    ...js.configs.recommended,
  },
];

export default config;
