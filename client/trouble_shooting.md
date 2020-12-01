## React 17 JSX, react-scripts with TypeScript (CRA ERROR)

아래와 같은 Error 발생
```
.../node_modules/react-scripts/scripts/utils/verifyTypeScriptSetup.js:239
      appTsConfig.compilerOptions[option] = value;
                                          ^

TypeError: Cannot assign to read only property 'jsx' of object '#<Object>'
    at verifyTypeScriptSetup (.../node_modules/react-scripts/scripts/utils/verifyTypeScriptSetup.js:239:43)
    at Object.<anonymous> (.../node_modules/react-scripts/scripts/start.js:31:1)
...
```

change this code block in node_modules/react-scripts/scripts/utils/verifyTypeScriptSetup.js
```
    let result;
    parsedTsConfig = immer(readTsConfig, config => {
      result = ts.parseJsonConfigFileContent(
        config,
        ts.sys,
        path.dirname(paths.appTsConfig)
      );
    });
```
Like this : 
```
    parsedTsConfig = {...readTsConfig};

    const result = ts.parseJsonConfigFileContent(
      parsedTsConfig,
      ts.sys,
      path.dirname(paths.appTsConfig)
    );
```

## React 17 version issue (CRA ERROR)
react 17버전에 따른 jsx Error 발생 (원인불명)
tsconfig.json내 아래와 같이 변경 필요

```
"isolatedModules": false,
"jsx": "react"
```

## Custom font size exceed the recommended size limit (244kb)
Local Font는 크기가 커서 로딩시간이 김, 따라서 Google font 이용 
```
<!-- font -->
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet">
```

## React SPA - routing client side / server side rendering issue
React SPA 앱 특징으로 https://baseURL/에서 https://baseURL/a로 접속 시 정상적으로 작동하나
https://baseURL/a에서 새로고침을 할 경우 서버사이드 렌더링이 이루어지므로 404 에러 발생

[관련 stackoverflow](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually)  
[hashrouter를 사용하지 않고 해결하는 방법](https://github.com/rafgraph/spa-github-pages)