// src/ui/ranking/RankingContents.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  & > div.SelectGroup {
    margin-top: 6px;
    display: flex;
    height: 80px;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
    margin-right: 20px;
    margin-left: 20px;

    > div.SelectRow1 {
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      > div {
        background-color: ${theme.color.selectBackground};
        padding: 5px 10px 5px 10px;
        border-radius: 15px;
        border: solid 1px transparent;
        outline: none !important;
        box-shadow: none !important;
        margin-right: 5px;
        cursor: pointer;
      }
    }

    > div.SelectRow2 {
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      > select {
        background-color: ${theme.color.selectBackground};
        padding: 5px 25px 5px 10px;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
        background-repeat: no-repeat;
        background-position-x: 100%;
        border-radius: 15px;
        margin-right: 5px;
        border: solid 1px transparent;
        outline: none !important;
        box-shadow: none !important;
      }
    }
  }

  & > div.ChartTitle {
    margin-top: 16px;
  }

  & > div.ApartVolumeRank {
    margin-top: 4px;
  }

  & > div.SubTitle {
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
`

export default Wrapper
