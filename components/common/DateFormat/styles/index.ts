import styled from 'styled-components';
import { bgColor } from '../../../../styles/utilities';

interface Props{
  fontSize?: string;
}

export const FormatDate = styled.div<Props>`
  font-family: Fira Code;
  color: ${bgColor};
  margin-bottom: 5px;
  font-size: ${(props) => props.fontSize || null}
`;
