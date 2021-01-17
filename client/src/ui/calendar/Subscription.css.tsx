// src/ui/calendar/Subscription.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

const Wrapper = styled.div`
  border: 1px solid ${theme.color.gray1};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  height: 96px;
  margin-left: 8px;
  margin-top: 4px;
  margin-bottom: 4px;

  & > div.Color {
    background-color: ${theme.color.gray1};
    width: 8px;
    height: 100%;
  }

  & > div.Contents {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    padding-left: 8px;
    padding-right: 8px;

    > div.NameAndType {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    > div.Price {
      font-size: 12px;
      color: ${theme.color.gray3};
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`

export default Wrapper
