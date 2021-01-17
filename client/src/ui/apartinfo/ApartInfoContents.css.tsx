// src/ui/ApartInfoContents.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;

  & > div.ApartName {
    color: ${theme.color.black};
    margin-top: 16px;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    > div.SelectSize {
      position: absolute;
      right: 0;
      margin-right: 16px;
      > select {
        font-size: 12px;
        background-color: ${theme.color.selectBackground};
        padding: 5px 25px 5px 10px;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
        background-repeat: no-repeat;
        background-position-x: 100%;
        border-radius: 15px;
        border: solid 1px transparent;
        outline: none !important;
        box-shadow: none !important;
      }
    }
  }

  & > div.ApartVolumeRank {
    margin-top: 16px;
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
