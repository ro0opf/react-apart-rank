// src/ui/apartinfo/ShareSNS.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

interface iProps {
  rankColor: string
}

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;

  & > div.Share {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    font-size: 12px;
    color: ${theme.color.normalText};

    > div.ShareImg {
      width: auto;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        width: auto;
        height: 28px;
        margin: 8px;
        cursor: pointer;
      }
    }
  }
`

export default Wrapper
