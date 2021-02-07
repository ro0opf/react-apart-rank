// src/ui/ApartInfoContents.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'
import DownArrowUrl from '../../image/icon/ic_down_arrow.svg'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;

  & > div.ApartName {
    color: ${theme.color.black};
    margin-top: 16px;
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    > div.Name {
      width : 180px;
      font-size: 20px;
      font-weight: bold;
      text-align : center;
    }

    > div.SelectSize {
      position: absolute;
      right: 0;
      margin-right: 16px;
      > select {
        font-size: 12px;
        background-color: ${theme.color.selectBackground};
        padding: 7px 27px 7px 12px;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url(${DownArrowUrl});
        background-size : 8px;
        background-position-y : 50%;
        background-repeat: no-repeat;
        background-position-x: 85%;
        border-radius: 15px;
        border: solid 1px transparent;
        outline: none !important;
        box-shadow: none !important;
      }
    }
  }

  & > div.RankAndPrice {
    display: flex;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 16px;
    align-items: center;
    height: auto;
    > img {
      margin: 8px;
      height: 48px;
    }

    > div.Price {
      display: flex;
      flex-direction: column;
      > span.Title {
        color: ${theme.color.gray2};
        font-size: 12px;
      }

      > span.Price {
        margin-top: 8px;
        font-size: 18px;
        color: ${theme.color.darkGray};
        font-weight: bold;
      }
    }
  }

  & > div.AllAndArea {
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & > div.ApartVolumeRank {
    margin-top: 16px;
  }

  & > div.SubTitle {
    margin-left: 16px;
    margin-right: 16px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
`

export default Wrapper
