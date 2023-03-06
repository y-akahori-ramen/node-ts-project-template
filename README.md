# node-ts-project-template
Template project for Node.js + TypeScript


# プロジェクト構築手順メモ
毎回忘れるためメモを残す

## 初期化と必要なパッケージのインストール

基本
```sh
npm init
npm install --save-dev typescript
npm install --save-dev @types/node
```

ESLint
```
npm install --save-dev eslint
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint
```

UnitTest
```
npm install --save-dev jest
npm install --save-dev ts-jest
npm install --save-dev @jest/globals
```

Utility
```
npm install --save-dev rimraf
```

## tsconfig.json
`npx tsc --init` を実行して初期化。

デフォルトでは無効となっている以下のプロパティをtrueにする。

```
declaration
sourceMap
noUnusedLocals
noUnusedParameters
noImplicitReturns
noFallthroughCasesInSwitch
```

調整箇所
- target: `ES2022` に設定。
- lib: `["ES2022"]` に設定。ブラウザ向けではないためDOM向けの定義がないことを明示指定する。
- outDir: `./dist` に設定。
- include: `["./src/**/*"]` に設定。
- exclude: `["**/*.spec.ts", "**/*.test.ts",]` に設定し、JESTのテストコードを除外する。


## .eslintrc.js
以下の内容に合わせる。
https://typescript-eslint.io/getting-started

調整
- Node.jsのグローバルオブジェクトの未定義エラー解消のためenvでnodeをtrueにする。
- excludeでnode_modulesとdistを対象外に設定

## .editorconfig
以下のNode.jsリポジトリの内容を使用する。
https://github.com/nodejs/node/blob/main/.editorconfig

## package.json

調整箇所
- main: `./dist/index.js` に設定。

script
```json
"scripts": {
    "prebuild": "rimraf dist",
    "build": "tsc",
    "test": "jest"
},
```

## jest.config.js
`npx ts-jest config:init` で作成したものを使用する。
