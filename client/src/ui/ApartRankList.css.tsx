// src/ui/ApartRankList.css.tsx
import styled from 'styled-components'
import theme from '../styles/theme'

interface iProps {
  circleBackground: string
}

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.color.white};
  display: flex;
  flex-direction: column;

  & > div.PopularApartRank {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    > a {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-decoration: none;
      color: inherit;

      > div {
        height: 70px;
        width: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;

        > div.ApartRank {
          flex: 1;
          color: white;
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;

          > div {
            height: 32px;
            width: 32px;
            background: ${(props: iProps) => props.circleBackground};
            border-radius: 51px;
          }

          > span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        > div.ApartNameAndAddress {
          flex: 3;
          font-size: 14px;

          > div.ApartName {
            font-weight: bold;
          }

          > div.ApartAddress {
            font-size: 12px;
          }
        }

        > div.ApartPrice {
          flex: 1;
          font-size: 16px;
          text-align: center;
        }
      }
    }
  }
`

export default Wrapper
