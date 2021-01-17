// src/ui/calendar/SubscriptionList.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

const Wrapper = styled.div`
  & > div.SubsData {
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
`

export default Wrapper
