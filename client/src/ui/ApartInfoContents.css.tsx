// src/ui/ApartInfoContents.css.tsx
import styled from 'styled-components'
import theme from '../styles/theme'

const Wrapper = styled.div`
  width: 100%;
  background-color: ${theme.color.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;

  & > div.ApartName {
    color: ${theme.color.inputBackground};
    margin-top: 6px;
    font-size: 14px;
    font-weight: bold;
    height: 32px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    position: relative;
  }

  & > div.BgApart {
    position: relative;
    margin-top: 6px;
    width: 100%;
    height: 140px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  & > div.ApartRank {
    position: relative;
    width: 100%;
    margin-top: -15px;
    height: 200px;
    display: flex;

    > div.national {
      flex: 1;
      margin-left: 10px;
      border-radius: 5px;
      border: 2px solid black;
      background-color: white;
    }

    > div.local {
      flex: 1;
      margin-left: 10px;
      margin-right: 10px;
      border-radius: 5px;
      border: 2px solid black;
      background-color: white;
    }
  }
`

export default Wrapper
