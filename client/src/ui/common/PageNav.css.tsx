// src/ui/common/PageNav.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    height: 8px;
    width: auto;
  }

  & > img.Left {
    margin-left: 8px;
    margin-right: 4px;
  }

  & > img.Right {
    margin-right: 8px;
    margin-left: 4px;
  }

  & > ul {
    height: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > li {
      width: 16px;
      height: 100%;
      color: ${theme.color.inputText};
      font-size: 12px;
      text-align: center;
      cursor: pointer;
    }
  }
`

export default Wrapper
