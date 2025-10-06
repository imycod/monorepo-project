import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

const ignores = ['**/dist/**', '**/node_modules/**', '.*', 'scripts/**', '**/*.d.ts'];

export default defineConfig(
  // 通用配置
  {
    ignores,
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier],
    // 集成规则
    plugins: {
      prettier: eslintPluginPrettier
    },
    languageOptions: {
      ecmaVersion: 'latest', // 语法支持版本
      sourceType: 'module', // 模块化类型
      parser: tseslint.parser
    },
    // 自定义
    rules: {
      'no-var': 'error'
    }
  },
  // 前端配置
  {
    ignores,
    files: ['apps/frontend/**/*.{js,jsx,ts,tsx,vue}', 'packages/components/*.{js,jsx,ts,tsx,vue}'],
    extends: [...eslintPluginVue.configs['flat/recommended'], eslintConfigPrettier],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  },
  // 后端配置
  {
    ignores,
    files: ['apps/backend/**/*.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }
);
