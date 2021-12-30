import styled from 'styled-components';
import { bgColor } from '../../../../styles/utilities';

interface CardsColumn {
  bgColor?: string;
  hoverColor?: string;
}

interface Tags extends CardsColumn {
  color?: string;
}

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  
  
`;

export const CardsColumn = styled.div<CardsColumn>`
  border-radius: 50px;
  background-color: ${props => props.bgColor || null};
  margin: 25px;
  max-width: 380px;
  margin-top: 50px;
  flex: 1 0 25%;
  &:hover{
    box-shadow: ${props => `18px 18px 12px ${props.hoverColor}` || null};
    cursor: pointer;
    transition: .2s box-shadow;
  }
`;

export const CardsTitle = styled.div`
  margin-top: 30px;
  margin-left: 10%;
  font-family: Fira Code Medium, monospace;
  font-size: 25px;
  text-transform: uppercase;
  color: ${bgColor};
`;

export const Tags = styled.span<Tags>`
  font-size: 25px !important;
  color: ${props => props.color || null};
`;

export const Paragraph = styled.div`
  color: ${bgColor};
  margin-left: 10%;
  font-family: Fira Code Regular, monospace;
  margin-bottom: 40px;
  font-size: 18px;
  margin-top: 30px;
`;

export const Categories = styled.div`
  margin-left: 10%;
  display: flex;
  margin-top: -15px;
`;
export const CategoriesButton = styled.div<Tags>`
  margin-right: 15px;
  font-size: 15px;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${bgColor};
  border-radius: 120px;
  background-color: ${props => props.bgColor || null};

  &:hover {
    color: ${props => props.hoverColor || null};
    background-color: ${bgColor};
    transition: 0.2s background-color;
    cursor: pointer;
  }
`;

export const CardsFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
  margin-right: 30px;
  align-items: center;

  span {
    height: 8px;
    width: 8px;
    background-color: ${bgColor};
    opacity: 0.9;
    border-radius: 120px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 2px;
  }
`;
