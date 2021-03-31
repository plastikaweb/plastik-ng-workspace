# Coding Standards

- [Coding Standards](#coding-standards)
  - [Style Guide](#style-guide)
  - [Visual Studio Code](#visual-studio-code)
    - [Mandatory extensions](#mandatory-extensions)
    - [Minimal configuration settings](#minimal-configuration-settings)
  - [Prettier auto formatter](#prettier-auto-formatter)
  - [Links](#links)

## Style Guide

All code must follow the styles dictated by the official [Angular Style Guide](https://angular.io/styleguide).  
As long as you use Angular CLI and don't skip the git hooks, we shouldn't need to worry about missing something.
Angular projects created using Angular CLI (like this) include [Codelyzer](https://github.com/mgechev/codelyzer) as a dependency.  
`Codelyzer` will check your code against the Angular tslint rules every time you run `ng lint` or commit your changes.

## Visual Studio Code

### Mandatory extensions

- **TSLint** (ms-vscode.vscode-typescript-tslint-plugin): TSLint support for Visual Studio Code.
- **Prettier - Code formatter** (esbenp.prettier-vscode): VS Code plugin for prettier/prettier.
- **ESLint** (dbaeumer.vscode-eslint): Integrates ESLint JavaScript into VS Code.
- **markdownlint** (davidanson.vscode-markdownlint): Markdown linting and style checking for Visual Studio Code.
- **TypeScript Import Sorter** (mike-co.import-sorter): Extension sorts TypeScript imports according to the configuration provided. The configuration defaults follow ESLint sort-imports rule.

### Minimal configuration settings

For an integrated and aligned developer experience and code formatting, we must add the following settings to our vscode settings.js file.

```json
{
  "npm.packageManager": "yarn",
  "npm.scriptExplorerAction": "run",
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.organizeImports": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.mouseWheelZoom": true,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false,
  "editor.formatOnType": false,
  "editor.minimap.enabled": false,
  "editor.multiCursorModifier": "alt",
  "editor.tabSize": 2,
  "eslint.packageManager": "yarn",
  "files.trimTrailingWhitespace": true,
  "files.autoSave": "onFocusChange",
  "[markdown]": {
    "files.trimTrailingWhitespace": false
  },
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/.js": {
      "when": "$(basename).ts"
    },
    "**/.js.map": {
      "when": "$(basename)"
    }
  },
  "javascript.implicitProjectConfig.checkJs": true,
  "javascript.implicitProjectConfig.experimentalDecorators": true,
  "prettier.arrowParens": "avoid",
  "prettier.bracketSpacing": true,
  "prettier.disableLanguages": [],
  "prettier.printWidth": 140,
  "prettier.proseWrap": "preserve",
  "prettier.semi": true,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "es5",
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "prettier.configPath": ".prettierrc",
  "prettier.packageManager": "yarn",
  "prettier.jsxSingleQuote": true,
  "window.zoomLevel": 0,
  "editor.autoClosingQuotes": "always",
  "javascript.preferences.quoteStyle": "single",
  "typescript.preferences.quoteStyle": "single",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "importSorter.sortConfiguration.removeUnusedDefaultImports": true,
  "importSorter.generalConfiguration.sortOnBeforeSave": true,
  "importSorter.importStringConfiguration.numberOfEmptyLinesAfterAllImports": 1,
  "importSorter.sortConfiguration.customOrderingRules.defaultOrderLevel": 50,
  "importSorter.sortConfiguration.customOrderingRules.rules": [
    {
      "type": "importMember",
      "regex": "^$",
      "orderLevel": 10,
      "disableSort": false
    },
    {
      "regex": "@app",
      "orderLevel": 50
    },
    {
      "regex": "^[@]",
      "orderLevel": 30
    },
    {
      "regex": "rxjs",
      "orderLevel": 35
    },
    {
      "regex": "lodash",
      "orderLevel": 40
    },
    {
      "regex": "^[.]",
      "orderLevel": 60
    }
  ],
  "tsimporter.preferRelative": true,
  "jest.enableInlineErrorMessages": true,
  "jest.autoEnable": false
}
```

## Prettier auto formatter

We use prettier for automatic code formatting on save. The minimal configuration lives in .prettierrc and .prettierignore project root files.

```json
// .prettierrc

{
  "semi": true,
  "trailingComma": "all",
  "useTabs": false,
  "tabWidth": 2,
  "singleQuote": true,
  "printWidth": 140,
  "arrowParens": "avoid"
}
```

## Links

- [Angular Style Guide](https://angular.io/guide/styleguide/)
- [ng lint](https://github.com/angular/angular-cli/wiki/lint)
- [prettier](<[prettier](https://prettier.io/)>)
