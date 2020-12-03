// src/ui/AreaContents.css.tsx
import styled from 'styled-components'
import theme from '../styles/theme'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.color.background};
  display: flex;
  flex-direction: column;

  & > div.Combo {
    margin-top: 6px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    height: 80px;
    align-items: center;
    flex-direction: column;
    font-size: 12px;

    > div.ComboRow1 {
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      > div.Quarter {
        border-radius: 15px;
        border: solid 1px ${theme.color.main};
        background-color: ${theme.color.main};
        color: white;
        padding: 5px;
        margin-right: 10px;
        cursor: pointer;
      }
      > div.Annual {
        border-radius: 15px;
        border: solid 1px ${theme.color.sub};
        background-color: ${theme.color.sub};
        color: white;
        padding: 5px;
        cursor: pointer;
      }
    }

    > div.ComboRow2 {
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > div {
        border-radius: 15px;
        border: solid 1px ${theme.color.sub};
        padding: 5px;
      }

      > select {
        padding: 5px;
        background: url() no-repeat 95% 50%;
        border-radius: 15px;
        border: solid 1px ${theme.color.main};
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    }
  }
`

export default Wrapper
