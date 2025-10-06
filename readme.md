/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2025-10-06 18:45:49
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2025-10-06 21:44:56
 * @FilePath: \monorepo-project\readme.txt
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
1. 告诉pnpm子包位置 （哪些是需要管理的）

2. pnpm --workspace-root [...] or pnpm -w (根工程执行命令)

path -> /monorepo-project

```cmd
pnpm -w init
```

3. 构建目录和生成子包下的package.json 并改名 指定 type 为module

4. 在root目录的package.json锁定版本 engines 如果需要严格锁定版本可以使用 .npmrc

```.npmrc
engine-strict=true
```

5. 在root目录装typescript 和 @types/node

```cmd
pnpm i -Dw typescript @types/node
```

6. 在root目录编写公共tsconfig配置

path -> /monorepo-project/tsconfig.json

7. 为每个子包配置响应的tsconfig继承和重写 比如 node环境无window 浏览器环境 dom有window这些

```json
types: ["node"] // node环境
```

8. 代码风格和质量检查 prettier 和 eslint
   一个是命令检查 一个是编辑器自带的检查， 命令检查好处是后面提交代码时可以通过cicd等方式 husky githook （注意编辑器检查format on save、和formatter格式化程序）

```cmd
pnpm -Dw add prettier
```

path -> /monorepo-project/prettier.config.js

9. 配置eslint

```cmd
pnpm -Dw add eslint@latest @eslint/js globals typescript-eslint eslint-plugin-prettier eslint-config-prettier eslint-plugin-vue @types/node

```

类别 库名

核心引擎 eslint
官方规则集 @eslint/js
全局变量支持 globals
ts支持 typescript-eslint
类型定义（辅助） @types/node
prettier集成 eslint-plugin-prettier eslint-config-prettier
vuejs支持 eslint-plugin-vue

path -> eslint.config.js

10. 拼写检查

```cmd
pnpm -Dw add cspell @cspell/dict-lorem-ipsum
```

11. 提交规范
    git init

.gitignore 的配置

1. commitizen

```cmd
pnpm -Dw add @commitlint/cli @commitlint/config-conventional commitizen cz-git

```

2. husky

```cmd
pnpm -Dw add husky

pnpx husky init
```

可以自定义些脚本

```pre-commit
#!/usr/bin/env sh

pnpm lint:prettier && pnpm lint:eslint && pnpm lint:spellcheck && node ./scripts/xxx.js
```

3. lint-staged

```cmd
pnpm -Dw add lint-staged

```

path -> /monorepo-project/.lintstagedrc.js

```js
// "node ./scripts/xxx.js" 如果有脚本需要处理可写
export default {
  '*.{js,ts,mjs,cjs,json,tsx,jsx,css,less,scss,vue,html,md}': ['cspell lint'],
  '*.{js,ts,vue,md}': ['prettier --write', 'eslint', 'node ./scripts/xxx.js']
};
```

.husky
pre-commit

1. git commit .
2. pnpm commit
   2.1 -> precommit

windows可能不支持，需要换另外的校验写法

```
#!/usr/bin/env sh

# pnpm lint:prettier && pnpm lint:eslint && pnpm lint:spellcheck
# pnpm precommit
```
