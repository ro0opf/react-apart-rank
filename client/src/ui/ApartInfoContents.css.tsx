// src/ui/ApartInfoContents.css.tsx
import styled from 'styled-components'
import theme from '../styles/theme'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.color.background};
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

    > div.SelectRow2 {
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
        padding: 5px 15px 5px 5px;
        border-radius: 15px;
        border: solid 1px ${theme.color.main};

        outline: none !important;
        box-shadow: none !important;
      }
    }
  }
`

export default Wrapper
