// src/ui/MainContents.css.tsx
import styled from 'styled-components'
import theme from '../styles/theme'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.color.background};
  display: flex;
  flex-direction: column;

  & > div.PopularApart {
    color: ${theme.color.normalText};
    margin-top: 24px;
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    > span {
      margin-bottom: 8px;
    }
  }
`

export default Wrapper
