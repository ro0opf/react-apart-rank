# 프로젝트 Set-up

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


## create-react-app 생성
```
yarn create react-app my-app --template typescript
```

## eslint 설정
```
yarn add --dev eslint-config-airbnb-typescript
```

package.json 안에 있는 eslintConfig 수정

```
"eslintConfig": {
   "extends": ["react-app", "airbnb-typescript"],
   "parserOptions": {
   "project": "./tsconfig.json"
   },
   "rules": { # 윈도우에서 개행문자가 \n이 아니라 \r\n 인 것 때문에 에러막기 위한 옵션 
      "linebreak-style": 0
   }
},
```


## dependency
```
// styled-components
yarn add styled-components @types/styled-components
```

```
// styled-normalize
yarn add styled-normalize
```


```
// react-router-dom
yarn add react-router-dom @types/react-router-dom
```