// src/ui/common/CircleBorder.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

interface iProps {
  borderColor: string
  innerColor: string
  isSelect: boolean
  fontSize: string
}

const Wrapper = styled.div`
  & > div {
    background-color: ${(props: iProps) => (props.isSelect ? props.innerColor : '')};
    padding: 7px 12px 7px 12px;
    border-radius: 15px;
    border: solid 1px ${(props: iProps) => props.borderColor};
    outline: none !important;
    font-size: ${(props: iProps) => props.fontSize};
    color: ${(props: iProps) => (props.isSelect ? theme.color.white : props.innerColor)};
    box-shadow: none !important;
    margin-right: 5px;
    cursor: pointer;
  }
`

export default Wrapper
