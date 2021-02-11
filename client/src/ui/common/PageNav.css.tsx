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
  margin-top : 8px;
  margin-bottom : 8px;

  & > img {
    height: 8px;
    width: auto;
    cursor: pointer;
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

    > li.Selected {
      color: ${theme.color.black};
    }
  }
`

export default Wrapper
