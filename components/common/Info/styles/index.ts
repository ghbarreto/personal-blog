import styled from 'styled-components';
import * as utilities from '../../../../styles/utilities';

export const Container = styled.div`
  text-align: center;
  margin-top: -10px;

  img {
    border-radius: 140px;
  }
`;

export const InfoHeader = styled.div`
  margin-top: 20px;
  font-family: 'Fira Code', monospace;
  letter-spacing: 2px;
  font-size: 40px;
  font-weight: 300;
`;

export const Tags = styled.span`
  color: ${utilities.highlight};
  font-family: 'Fira Code', monospace;
  font-weight: 300;
`;
