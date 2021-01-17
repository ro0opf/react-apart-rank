// src/ui/area/AreaContents.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  & > div.InputAndTitle {
    margin-top: 20px;
    display: flex;
    height: 80px;
    width: 100%;
    align-items: center;
    flex-direction: column;
    font-size: 12px;

    > div.Title {
      display: flex;
      width: 100%;
      align-items: flex-start;
      > span {
        color: ${theme.color.calculatorInputTitle};
      }
    }

    > div.Input {
      margin-top: 12px;
      display: flex;
      width: 100%;
      height: 40px;
      align-items: center;
      color: ${theme.color.black};
      padding-left: 8px;
      padding-right: 8px;
      > input {
        flex: 1;
        height: 100%;
        border: none;
        border-width: 0;
        box-shadow: none;
        outline: 0;
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }
      }
      > span {
        width: auto;
        font-size: 16px;
        font-weight: bold;
      }
    }

    > div.Border {
      width: 100%;
      height: 1px;
      background-color: ${theme.color.gray1};
    }
  }
`

export default Wrapper
