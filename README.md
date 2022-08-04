# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## 编译相关配置
1. 配置文件 tsconfig.json

## umi配置
1. 全局配置文件 .umirc.ts
1. 拆分配置 config/config.ts 中配置会和 .umirc.ts 中的配置合并，相同的配置会覆盖掉 .umirc.ts 中的配置
2. 本地配置 .umirc.local.ts  config/config.local.ts 中配置会覆盖 .umirc.local.ts 中的配置

## umi fabric 配置(自动格式化及规则校验)
```eslint
$ yarn add @umijs/fabric -D
```
1. 配置文件
    ```
    .eslintrc.js
    .stylelintrc.js
    .prettierrc.js
    ```
2. 忽略文件
    ```
    .stylelintignore
    .prettierignore
    .eslintignore
    ```
3. vscode 配置 eslint 参数
    ```
    .vscode/settings.json
    ```