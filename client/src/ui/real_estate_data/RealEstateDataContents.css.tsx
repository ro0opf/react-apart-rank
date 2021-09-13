// src/ui/real_estate_data/RealEstateDataContents.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;

  & > div.MuiFormControl-root.MuiTextField-root {
    margin-bottom: 16px;
  }

  & > div.MuiFormControl-root.MuiTextField-root:first-child {
    margin-top: 16px;
  }
`

export default Wrapper
