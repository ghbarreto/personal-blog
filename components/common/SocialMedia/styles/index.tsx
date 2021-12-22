import styled from 'styled-components'
import * as utilities from '../../../../styles/utilities'

export const DisplayInline = styled.li`
  display: inline;
  margin: 30px;
  color: ${utilities.highlight};
  &:hover{
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: inherit;
  }
`