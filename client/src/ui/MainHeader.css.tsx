import styled from 'styled-components';
import theme from '../styles/theme';

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.color.background};
  display: flex;
  position: absolute;
  font-family: '나눔바른고딕', 'Nanum Barun Gothic', 'Noto Sans KR',
    'Malgun Gothic';

  & > div.title {
    position: relative;
    top: 50%;
    color: ${theme.color.main};
    text-align: center;
    font-size: 32px;
  }

  & svg {
    width: 51px;
    height: 43px;
    margin: 40.7px 103px 57px 59px;
    object-fit: contain;
  }
`;

export default Wrapper;
