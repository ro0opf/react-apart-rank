// src/ui/MainContents.css.tsx
import styled from 'styled-components'
import theme from '../styles/theme'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.color.background};
  display: flex;
  flex-direction: column;

  & > div.PopularApart {
    color: ${theme.color.normalText};
    margin-top: 24px;
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    > span {
      margin-bottom: 8px;
    }
  }

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

          > img {
            height: 32px;
            width: auto;
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
          color: ${theme.color.normalText};
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
          text-align: center;
          color: ${theme.color.normalText};
        }
      }
    }
  }
`

export default Wrapper
