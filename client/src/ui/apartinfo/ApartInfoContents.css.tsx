// src/ui/ApartInfoContents.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;

  & > div.ApartName {
    color: ${theme.color.normalText};
    margin-top: 16px;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    height: 32px;
    text-align: center;
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

  & > div.ApartVolumeRank {
    margin-top: 5px;
  }

  & > div.SubTitle {
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
`

export default Wrapper
