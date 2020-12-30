import styled from 'styled-components'
import theme from '../styles/theme'

const Wrapper = styled.div`
  margin-top: auto;
  background-color: ${theme.color.background};
  text-align: center;
  color: ${theme.color.inputText};

  & a {
    text-decoration: none;
    color: inherit;
  }

  & > .MobileToPc {
    cursor: pointer;
    font-size: 1em;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  & > ul {
    list-style: none;
    margin: 0 auto;
    display: block;
    text-align: center;
    padding: 0;
  }

  & > ul > li {
    display: inline-block;
    font-size: 0.8em;
  }

  & > ul > li.Seperator {
    margin-left: 15px;
    margin-right: 15px;
  }

  & > div.copyright {
    font-size: 0.8em;
    padding-bottom: 10px;
  }

  & > ul > li > div {
    cursor: pointer;
  }
`

export default Wrapper
