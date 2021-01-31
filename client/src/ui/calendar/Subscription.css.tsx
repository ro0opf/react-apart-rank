// src/ui/calendar/Subscription.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

interface iProps {
  color: string
}

const Wrapper = styled.div`
  border: 1px solid ${theme.color.gray1};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  height: 100px;
  margin-left: 8px;
  margin-top: 4px;
  margin-bottom: 4px;
  cursor: pointer;

  & > div.Color {
    background-color: ${(props: iProps) => props.color};
    width: 8px;
    height: 100%;
    border-radius: 5px 0px 0px 5px;
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
      align-items: center;

      > span.Name {
        color: ${(props: iProps) => props.color};
        font-weight: bold;
        font-size : 14px;
      }

      > div {
        font-size: 12px;

        span.Dot {
          color: ${(props: iProps) => props.color};
        }

        span.Type {
          color: ${theme.color.gray3};
        }
      }
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
