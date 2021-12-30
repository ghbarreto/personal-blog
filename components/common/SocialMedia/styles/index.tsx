import styled from 'styled-components';
import * as utilities from '../../../../styles/utilities';

export const DisplayInline = styled.li`
  display: inline;
  margin: 30px;
  color: ${utilities.highlight};
  &:hover {
    cursor: pointer;
    color: ${utilities.yellow};
    transition: 0.1s color;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
