// src/ui/ranking/RankingContents.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'
import DownArrowUrl from '../../image/icon/ic_down_arrow.svg'

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

    > ul.SelectType {
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      > li {
        border-radius: 15px;
        border: solid 1px transparent;
        background-color: ${theme.color.selectBackground};
        padding: 7px 12px 7px 12px;
        color: ${theme.color.black};
        font-size: 13px;
        margin-right: 5px;
        cursor: pointer;
      }

      > li.Clicked {
        border-radius: 15px;
        border: solid 1px transparent;
        background-color: ${theme.color.primary};
        padding: 7px 12px 7px 12px;
        color: ${theme.color.white};
        font-size: 13px;
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
        padding: 7px 27px 7px 12px;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url(${DownArrowUrl});
        background-size: 8px;
        background-position-y: 50%;
        background-repeat: no-repeat;
        background-position-x: 85%;
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

  & > div.NoData {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
    align-items: center;
    > img {
      width: 50%;
      height: auto;
    }
  }
`

export default Wrapper
