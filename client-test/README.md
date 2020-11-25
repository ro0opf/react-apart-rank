# 프로젝트 Set-up

## 기본 설정
```
yarn init -y

yarn add react react-dom

yarn add -D typescript ts-loader webpack webpack-cli @types/react @types/react-dom @types/webpack
```

- package.json

```
{
...
"scripts": {
    "start": "webpack serve --mode development --env development --progress",
    "build": "webpack --mode production --env production --progress",
    "lint": "eslint '*/**/*.{js,ts,tsx}' --quiet --fix"
  }
...
}
```


- tsconfig.json

```
{
  "compilerOptions": {
    "outDir": "./dist",
    "target": "es5",
    "module": "esnext",
    "jsx": "react",
    "noImplicitAny": true,
    "allowSyntheticDefaultImports": true,
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true
  },
  "include": ["src"]
}

```
- webpack install
```
yarn add -D html-webpack-plugin
yarn add -D clean-webpack-plugin
yarn add -D webpack-dev-server
yarn add -D webpack-serve
yarn add -D file-loader @svgr/webpack
```

- webpack.config.js

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]?[hash]',
            },
          },
        ],
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      templateParameters: {
        env: process.env.NODE_ENV === 'production' ? '' : '[DEV]',
      },
      minify:
        process.env.NODE_ENV === 'production'
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
    new CleanWebpackPlugin(),
  ],
};

```

- .eslintrc.js
```
/* eslint-disable prettier/prettier */
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};


```

- .prettierrc.js
```
module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  endOfLine:"auto",
};
```

## Extension 설치 (VSCODE)
- Prettier (사용자가 지정한 Format으로 코드를 자동으로 변경해주는 Extension)
- ESLint (문제가 있는 코드나 안티 패턴을 찾기 위해 사용하는 Javascript linter)
- vscode-styled-components (Syntax highlighting for styled-components)
- Color Highlight (Highlight web colors in editor)

## Chrome Extension
- React Developer Tools (react 개발자 도구)
- Redux Dev Tools (redux 개발자 도구)

## Settings.json
```
{
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
}
```

## dependency
```
// styled-components
yarn add styled-components 
yarn add -D @types/styled-components
```

```
// styled-normalize
yarn add styled-normalize
```

```
// react-router-dom
yarn add react-router-dom 
yarn add -D @types/react-router-dom
```