// src/ui/area/AreaContents.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;

  & > div.Type {
    margin-top: 8px;
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;

    > div.Title {
      display: flex;
      width: 100%;
      align-items: flex-start;
      > span {
        font-size: 12px;
        color: ${theme.color.calculatorInputTitle};
      }
    }

    > ul {
      margin-top: 8px;
      width: 100%;
      display: flex;

      > li {
        border-radius: 15px;
        border: solid 1px transparent;
        background-color: ${theme.color.selectBackground};
        padding: 5px 10px 5px 10px;
        color: ${theme.color.normalText};
        font-size: 13px;
        margin-right: 5px;
        cursor: pointer;
      }

      > li.Clicked {
        border-radius: 15px;
        border: solid 1px transparent;
        background-color: ${theme.color.skyBlue};
        padding: 5px 10px 5px 10px;
        color: ${theme.color.background};
        font-size: 13px;
        margin-right: 5px;
        cursor: pointer;
      }
    }
  }

  & > div.Result {
    margin-top: 8px;
    display: flex;
    width: 100%;
    align-items: flex-start;
    flex-direction: column;

    > div.Title {
      > span {
        font-size: 12px;
        color: ${theme.color.normalText};
      }
    }

    > div.Cost {
      margin-top: 8px;
      > span {
        font-size: 20px;
        color: ${theme.color.skyBlue};
      }
    }
  }
`

export default Wrapper
