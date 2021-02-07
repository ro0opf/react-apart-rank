// src/ui/calendar/CalendarContents.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

interface iProps {
  typeColor: string
}

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;

  & > div.Year {
    margin-top: 16px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    height: 24px;

    > img {
      height: 16px;
      cursor: pointer;
    }

    > img.ButtonDown {
      margin-left: 8px;
      height: 8px;
    }
  }

  & > div.Months {
    flex: 1;
    margin-top: 12px;
    width: 100%;
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    align-items: center;

    > div {
      cursor: pointer;
      > span.SelectedMonth {
        font-weight: bold;
      }
      > div {
        margin-top: 2px;
      }
      > div.SelectedMonth {
        background-color: ${theme.color.normalUnderLine};
        border-radius: 10px;
        border: 1.5px solid ${theme.color.normalUnderLine};
      }
    }
  }

  & > div.Types {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    align-content: space-around;
    height: 68px;
    margin-top: 8px;
  }
`

export default Wrapper
