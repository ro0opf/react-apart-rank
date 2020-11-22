import styled from 'styled-components';
import theme from '../styles/theme';

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
    flex: 1;
    display: flex;
    align-items: center;
  }

  & > div.Logo > svg {
    position: absolute;
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
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div.SearchApart > input {
    border: ${theme.color.main} 1px solid;
    border-radius: 12px;
    flex: 1;
    height: 60%;
    margin-left: 16px;
    margin-right: 16px;
  }

  & > div.TopNav {
    flex: 2.5;
    background-color: yellow;
  }
`;

export default Wrapper;
