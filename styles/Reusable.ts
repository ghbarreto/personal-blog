import styled from 'styled-components';
import * as utilities from './utilities';

interface ButtonProps {
  padding?: string;
  fontSize?: string;
  paddingLeft?: string;
  margin?: string;
  hoverBg?: string | undefined;
}

export const Container = styled.body`
  background-color: ${utilities.lightblue};
  height: 100vh;
  font-family: 'Fira Code', monospace;
  color: white;
`;

export const Button = styled.a<ButtonProps>`
  background-color: ${utilities.lightblue};
  border-radius: 120px;
  padding: ${props => props.padding || '15px'};
  font-size: ${props => props.fontSize || '16px'};
  padding-left: ${props => props.paddingLeft || '0px'};
  margin: ${props => props.margin || '0px'};

  &:hover{
    background-color: ${props => props.hoverBg || null};
    cursor: ${props => props.hoverBg && 'pointer'};
  }
`;

export const Tags = styled.span<ButtonProps>`
  color: ${utilities.yellow};
  font-size: ${props => props.fontSize || '16px'};
`;
