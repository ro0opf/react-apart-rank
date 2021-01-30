// src/ui/calendar/SubscriptionList.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

const Wrapper = styled.div`
  margin-top: 12px;

  & > div.SubsParent {
    > div.SubsData {
      display: flex;

      > span.Date {
        font-size: 12px;
        font-weight: bold;
      }

      > div.Data {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
    }

    > div.Dotted {
      width: 100%;
      margin-top: 8px;
      margin-bottom: 8px;
      height: 1px;
      border-bottom: 1px dotted ${theme.color.gray1};
    }
  }
`

export default Wrapper
