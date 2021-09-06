# F2E Library

![workflow](https://github.com/YogaPan/f2e-library/actions/workflows/publish.yml/badge.svg) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lerna.js.org/) [![browserslist-config](https://img.shields.io/npm/v/@galtz-library/browserslist-config.svg?label=browserslist-config&style=flat-square)](https://www.npmjs.com/package/@galtz-library/browserslist-config) [![eslint-config](https://img.shields.io/npm/v/@galtz-library/eslint-config.svg?label=eslint-config&style=flat-square)](https://www.npmjs.com/package/@galtz-library/eslint-config) [![prettier-config](https://img.shields.io/npm/v/@galtz-library/prettier-config.svg?label=prettier-config&style=flat-square)](https://www.npmjs.com/package/@galtz-library/prettier-config)

前端專案通常都會有 Webpack、ESLint、Prettier、Browserslist 等設定，當專案開始大量增加時，這些重複的設定會散落在各個專案，導致後續維護和修改的困難。本專案集合這些通用的設定並發布成 npm package 使用，增強各專案一致性，減少後續維護成本。

## How to Use

### ESLint

Install npm package:

```shell
npm install @galtz-library/eslint-config --save-dev
```

於專案根目錄下新增 `.eslintrc`：

```json
{
  "extends": ["@galtz-library/eslint-config/lib/react"]
}
```

有兩種 ESLint config 可供選擇：

1. [Vanilla](./packages/eslint-config/lib/vanilla.js)：通用性的 Javascript 規則。
2. [React](./packages/eslint-config/lib/react.js)：基於 Vanilla 設定加上針對 React 應用程式的規則。

### Prettier

Install npm package:

```shell
npm install @galtz-library/prettier-config --save-dev
```

於專案根目錄下新增 `.prettierrc`：

```prettierrc
"@galtz-library/prettier-config"
```

詳細規則在 [./packages/prettier-config/index.js](./packages/prettier-config/index.js)。

### Browserslist

Install npm package:

```shell
npm install @galtz-library/browserslist-config --save-dev
```

於專案根目錄下新增 `.browserslistrc`：

```browserslistrc
extends @galtz-library/browserslist-config
```

詳細規則在 [./packages/browserslist-config/index.js](./packages/browserslist-config/index.js)。

## Development Workflow

1. 執行 `npx lerna bootstrap` 安裝 dependencies。
2. 開啟 branch 進行開發，branch 名稱使用 `build|ci|docs|feat|fix|perf|refactor|test` 開頭並加上斜線 `/`，例如：`feat/add-react-eslint-config`。
3. 修改程式並 commit，commit message 遵守 [Angular Convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md)。
4. 執行 `npx lerna version`， Lerna 會為修改過的 package 進版，接著 commit、上 tag。
5. push 至 Github，發起 merge request。
6. 自動觸發 Github Actions 的 test job，運行腳本確認程式碼品質正常後手動 merge 進 master branch。
7. 自動觸發 Github Actions 的 publish job，運行腳本確認程式碼品質正常後自動發布至 npm。

參考我的 Blog 文章：[用 Lerna 管理共同前端設定，並透過 Github Actions 自動發布至 npm](https://galtz.netlify.app/f2e-common-config/)。

## License

[![Licence](https://img.shields.io/github/license/YogaPan/f2e-library?style=for-the-badge)](./LICENSE)
