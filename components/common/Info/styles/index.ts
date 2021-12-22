import styled from 'styled-components';
import * as utilities from '../../../../styles/utilities';

export const Container = styled.div`
  text-align: center;
  margin-top: -100px;

  img {
    border-radius: 140px;
  }
`;

export const InfoHeader = styled.div`
  margin-top: 20px;
  font-family: Fira Code Regular;
  letter-spacing: 2px;
  font-size: 40px;
`;

export const Tags = styled.span`
  color: ${utilities.highlight};
  font-family: Fira Code Regular;
`;
