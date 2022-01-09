import styled from 'styled-components';
import * as utilities from '../../../../styles/utilities'

interface Props {
  bgColor?: string;
}

export const Container = styled.div<Props>`
  height: 200px;
  margin-left: -20px;
  margin-top: -30px;
  width: 104.5%;
  overflow: none !important;
  background-color: ${props => props.bgColor || 'transparent'};
`;

export const InlineContainer = styled.span`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

export const DisplayInline = styled.span`
  display: inline-flex;
  align-items: center;

  font-family: Fira Code;
`;

export const FormatCategories = styled.div`
  background-color: white;
  padding: 10px 15px 10px 15px;
  border-radius: 50px;
  margin-left: 40px;
  color: ${utilities.bgColor};

  font-size: 20px;
  text-transform: uppercase;
`;

export const FormatDate = styled.span`
  margin-right: 20px;
  font-family: Fira Code;
  font-size: 20px;
  color: ${utilities.bgColor};
`;

export const ContainerTitle = styled.div`
  padding-left: 4%;
  padding-top: 30px;
  font-family: 'Fira Code', monospace;
  font-size: 40px;
  font-weight: 600;
  color: ${utilities.bgColor};

  text-transform: uppercase;
  
  span{
    color: white;
  }
`;
