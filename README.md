APT_Server
===========

* [아파트매매 실거래 상세 자료](https://www.data.go.kr/data/15057511/openapi.do)

- Description : 아파트매매 상세자료	지역코드와 기간을 이용하여 해당기간, 해당지역의 아파트 매매 신고자료를 제공하는 아파트 매매 신고 정보 조회	
- Traffic restrict : 1,000

## Request Parameter:

항목명(영문)		|항목크기	|항목구분	|샘플데이터	|항목설명
|-----------|-------|-------|-------|------------------|	
ServiceKey	|20		|필수		|-		|공공데이터포털에서 받은 인증키
pageNo		|4		|옵션		|1		|페이지번호
numOfRows	|4		|옵션		|10		|한 페이지 결과 수
LAWD_CD		|5		|필수		|11110	|지역코드
DEAL_YMD	|6		|필수		|201512	|계약월

## Response Parameter:

항목명(영문)		|항목크기	|항목구분	|샘플데이터				|항목설명
|-----------|-------|-------|-------------------|------------------|
resultCode	|2		|필수		|0					|결과코드
resultMsg	|50		|필수		|OK					|결과메시지
numOfRows	|4		|필수		|10					|한 페이지 결과 수
pageNo		|4		|필수		|1					|페이지번호
totalCount	|4		|필수		|3					|전체 결과 수
거래금액		|40		|필수		|82,500				|거래금액
건축년도		|4		|필수		|2008				|건축년도
년			|4		|필수		|2015				|년
도로명			|40		|필수		|사직로8길				|도로명
도로명건물본번호코드	|5		|필수		|4					|도로명건물본번호코드
도로명건물부번호코드	|5		|필수		|0					|도로명건물부번호코드
도로명시군구코드	|5		|필수		|11110				|도로명시군구코드
도로명일련번호코드	|2		|필수		|3					|도로명일련번호코드
도로명지상지하코드	|1		|필수		|0					|도로명지상지하코드
도로명코드		|7		|필수		|4100135			|도로명코드
법정동			|40		|필수		|사직동				|법정동
법정동본번코드	|4		|필수		|9					|법정동본번코드
법정동부번코드	|4		|필수		|0					|법정동부번코드
법정동시군구코드	|5		|필수		|11110				|법정동시군구코드
법정동읍면동코드	|5		|필수		|11500				|법정동읍면동코드
법정동지번코드	|1		|필수		|1					|법정동지번코드
아파트			|40		|필수		|광화문풍림스페이스본(9-0)	|아파트
월			|2		|필수		|12					|월
일			|6		|필수		|1~10				|일
일련번호		|14		|필수		|11110-2203			|일련번호
전용면적		|20		|필수		|94.51				|전용면적
지번			|10		|필수		|9					|지번
지역코드		|5		|필수		|11110				|지역코드
층			|4		|필수		|11					|층


* [공동주택 기본 정보제공 서비스](https://www.data.go.kr/data/15058453/openapi.do)

- Description : 부동산 거래신고에 관한 법률에 따라 신고된 주택의 실거래 자료를 제공
- Traffic restrict : 1,000,000 

## Request Parameter:

항목명(영문)		|항목크기	|항목구분	|샘플데이터	|항목설명
|-----------|-------|-------|-------|------------------|
ServiceKey	|20		|필수		|-		|공공데이터포털에서 받은 인증키
pageNo		|4		|옵션		|1		|페이지번호
numOfRows	|4		|옵션		|10		|한 페이지 결과 수
LAWD_CD		|5		|필수		|11110	|지역코드
DEAL_YMD	|6		|필수		|201512	|계약월

## Response Parameter:

항목명(영문)		|항목크기	|항목구분	|샘플데이터				|항목설명
|-----------|-------|-------|-------------------|------------------|
resultCode	|2		|필수		|0					|결과코드
resultMsg	|50		|필수		|OK					|결과메시지
numOfRows	|4		|필수		|10					|한 페이지 결과 수
pageNo		|4		|필수		|1					|페이지번호
totalCount	|4		|필수		|3					|전체 결과 수
거래금액		|40		|필수		|82,500				|거래금액
건축년도		|4		|필수		|2008				|건축년도
년			|4		|필수		|2015				|년
도로명			|40		|필수		|사직로8길				|도로명
도로명건물본번호코드	|5		|필수		|4					|도로명건물본번호코드
도로명건물부번호코드	|5		|필수		|0					|도로명건물부번호코드
도로명시군구코드	|5		|필수		|11110				|도로명시군구코드
도로명일련번호코드	|2		|필수		|3					|도로명일련번호코드
도로명지상지하코드	|1		|필수		|0					|도로명지상지하코드
도로명코드		|7		|필수		|4100135			|도로명코드
법정동			|40		|필수		|사직동				|법정동
법정동본번코드	|4		|필수		|9					|법정동본번코드
법정동부번코드	|4		|필수		|0					|법정동부번코드
법정동시군구코드	|5		|필수		|11110				|법정동시군구코드
법정동읍면동코드	|5		|필수		|11500				|법정동읍면동코드
법정동지번코드	|1		|필수		|1					|법정동지번코드
아파트			|40		|필수		|광화문풍림스페이스본(9-0)	|아파트
월			|2		|필수		|12					|월
일			|6		|필수		|1~10				|일
일련번호		|14		|필수		|11110-2203			|일련번호
전용면적		|20		|필수		|94.51				|전용면적
지번			|10		|필수		|9					|지번
지역코드		|5		|필수		|11110				|지역코드
층			|4		|필수		|11					|층

---

APT_Client
===========


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
