// src/ui/area/AreaContents.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div.InterestAndPrincipal {
    flex: 1;

    > div.Round {
      color: ${theme.color.black};
      font-size : 14px;
      margin-bottom : 4px;
    }
    > div.Interest {
      font-size : 12px;
      color: ${theme.color.gray3};
    }

    > div.Principal {
      font-size : 12px;
      color: ${theme.color.gray3};
    }
  }

  & > div.TotalRepayment {
    color: ${theme.color.primary};
  }
`

export default Wrapper
