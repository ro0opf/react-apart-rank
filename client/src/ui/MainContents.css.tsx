// src/ui/MainContents.css.tsx
import styled from 'styled-components'
import theme from '../styles/theme'

interface IProps {
  isClick: Boolean
}

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.color.background};
  display: flex;
  flex-direction: column;

  & > div.PopularApart {
    color: ${theme.color.main};
    margin-top : 6px;
    font-size: 14px;
    font-weight: bold;
    height: 32px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    align-items : center;
  }

  & > div.PopularApartRank {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  & > div.PopularApartRank > div {
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;

    > div.ApartRank {
      flex: 1;
      color: ${theme.color.main};
      text-align: center;
      font-size: 16px;
      font-weight: bold;
    }

    > div.ApartNameAndAddress {
      flex: 3;
      color: ${theme.color.third};
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
      color: ${theme.color.main};
    }
  }

  & > div.PopularApartRank > div.ApartBorder {
    height: 1px;
    width: 90%;
    background-color: ${theme.color.sub};
  }
`

export default Wrapper
