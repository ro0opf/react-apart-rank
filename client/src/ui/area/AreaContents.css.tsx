// src/ui/area/AreaContents.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'
import DownArrowUrl from '../../image/icon/ic_down_arrow.svg'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.color.white};
  display: flex;
  flex-direction: column;

  & > div.SelectGroup {
    margin-top: 6px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    height: 80px;
    align-items: center;
    flex-direction: column;
    font-size: 12px;

    > div.SelectRow1 {
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > select {
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

    > div.SelectRow2 {
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      > div {
        padding: 5px;
        margin-right: 5px;
        cursor: pointer;
        border-bottom: 5px solid transparent;
      }

      > div.SelectedYear {
        padding: 5px;
        margin-right: 5px;
        cursor: pointer;
        border-bottom: 5px solid ${theme.color.normalUnderLine};
      }
    }
  }

  & > div.ChartTitle {
    margin-top: 16px;
  }

  & > div.PriceChart {
    width: 100%;
    margin-top : 16px;
    margin-bottom : 16px;
    > div#chartdiv{
      height : 400px;
    }
  }

  & > div.ApartVolumeRank {
    margin-top: 5px;
  }

  & > div.SubTitle {
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
`

export default Wrapper
