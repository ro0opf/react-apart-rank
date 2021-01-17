// src/ui/calendar/CalendarContents.css.tsx
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

  > div.Year {
    margin-top : 16px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  > div.Month {
    flex: 1;
    margin-top : 12px;
    width: 100%;
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    align-items: center;

    > div {
      cursor: pointer;
      padding-bottom: 3px;
      border-bottom: 3px solid transparent;
    }

    > div.SelectedMonth {
      border-bottom: 3px solid ${theme.color.normalUnderLine};
    }
  }
`

export default Wrapper
