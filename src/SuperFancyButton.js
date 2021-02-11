import styled from 'styled-components/macro'
import {css} from 'styled-components'


export const SuperFancyButton = styled.button`
background-color: hotpink;
border-radius: 12px;

  ${props => props.primary && css`
  background-color: deeppink;
  border-radius: 12px;

`}
`
