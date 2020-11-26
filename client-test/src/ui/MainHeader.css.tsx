import styled from 'styled-components'
import theme from '../styles/theme'

interface IProps {
  isClick: Boolean
}

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background-color: ${theme.color.background};
  display: flex;
  flex-direction: column;
  position: absolute;

  & > div.Logo {
    flex: 2;
    display: flex;
    align-items: center;
  }

  & > div.Logo > img {
    position: absolute;
    width: 16px;
    height: 16px;
    margin-left: 16px;
  }

  & > div.Logo > div {
    width: 100%;
    height: 100%;
    display: flex;
    color: ${theme.color.main};
    justify-content: center;
    align-items: center;
  }

  & > div.SearchApart {
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div.SearchApart > input {
    border: 1.5px solid ${theme.color.main};
    border-radius: 12px;
    flex: 1;
    height: 60%;
    margin-left: 16px;
    margin-right: 16px;
    padding-left: 16px;
    padding-right: 16px;
    line-height: normal;
    outline-style: none;
    box-shadow: none;
    ::placeholder {
      color: ${theme.color.main};
      font-size: 12px;
    }
  }

  & > div.TopNav {
    flex: 5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;

    > div {
      border-radius: 10px;
      border: 1.5px solid ${theme.color.sub};
      padding: 20px;
      height: 60px;
      width: 70px;
      font-size: 9px;
      cursor: pointer;
      > img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 60%;
        height: auto;
      }
    }

    > div.onNav {
      border-radius: 10px;
      border: 1.5px solid ${theme.color.main};
      padding: 20px;
      height: 60px;
      width: 70px;
      font-size: 9px;
      cursor: pointer;

      > img {
        display: block;
        margin-left: auto;
        filter: invert(55%) sepia(69%) saturate(888%) hue-rotate(179deg) brightness(96%) contrast(91%);
        margin-right: auto;
        width: 60%;
        height: auto;
      }
    }
  }
`

export default Wrapper
