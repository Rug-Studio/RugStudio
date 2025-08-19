import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import tailwind from 'eslint-plugin-tailwindcss'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js, react: pluginReact, tailwindcss: tailwind },
    extends: [
      'js/recommended',
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
    ],
    languageOptions: { globals: globals.browser },
    settings: {
      react: { version: 'detect' },
      tailwindcss: {
        config: 'tailwind.config.js',
        lintOnly: true, // désactive le warning de version Tailwind 4
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs', globals: globals.node },
  },
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      'src-tauri/target',
    ],
  },
])
