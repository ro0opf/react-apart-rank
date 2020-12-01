import styled from 'styled-components'
import theme from '../styles/theme'

interface IProps {
  isClick: Boolean
}

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 180px;
  background-color: ${theme.color.background};
  display: flex;
  flex-direction: column;
  position: relative;

  & > div.Logo {
    flex: 3;
    display: flex;
    align-items: center;
  }

  & > div.Logo > img {
    position: absolute;
    width: 16px;
    height: 16px;
    margin-left: 16px;
  }

  & > div.Logo > div.Title {
    width: 100%;
    height: 100%;
    display: flex;
    color: ${theme.color.main};
    justify-content: center;
    align-items: center;

    > a {
      text-decoration: none;
      color: inherit;
    }
  }

  & > div.SearchApart {
    flex: 4;
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
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;

    > a {
      text-decoration: none;
      > div {
        border-radius: 10px;
        border: 1.5px solid ${theme.color.sub};
        height: 70px;
        width: 70px;
        font-size: 12px;
        cursor: pointer;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        > img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 8px;
          width: 30%;
          height: auto;
        }

        > div {
          color: ${theme.color.sub};
        }
      }

      > div.OnNav {
        border-radius: 10px;
        border: 1.5px solid ${theme.color.main};
        height: 70px;
        width: 70px;
        font-size: 12px;
        display: flex;
        cursor: pointer;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        > img {
          display: block;
          margin-left: auto;
          filter: invert(55%) sepia(69%) saturate(888%) hue-rotate(179deg) brightness(96%) contrast(91%);
          margin-right: auto;
          margin-bottom: 8px;
          width: 30%;
          height: auto;
        }

        > div {
          color: ${theme.color.main};
        }
      }
    }
  }
`

export default Wrapper
