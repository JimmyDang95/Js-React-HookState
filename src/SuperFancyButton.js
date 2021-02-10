import styled from 'styled-components/macro'
import {css} from 'styled-components'


export const SuperFancyButton = styled.button`
background-color: hotpink;

  ${props => props.primary && css`
  background-color: deeppink;

`}
`
