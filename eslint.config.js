// @ts-check

import eslint from '@eslint/js'
import gitignore from 'eslint-config-flat-gitignore'
import prettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'
import typescript from 'typescript-eslint'

export default typescript.config(
  gitignore(),
  { ignores: ['**/*.config.js'] },
  eslint.configs.recommended,
  ...typescript.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: ['.svelte'],
      },
    },
  },
  // @ts-expect-error TODO
  ...svelte.configs['flat/recommended'],
  ...svelte.configs['flat/prettier'],
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: typescript.parser,
      },
    },
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
    },
  },
  prettier,
)
