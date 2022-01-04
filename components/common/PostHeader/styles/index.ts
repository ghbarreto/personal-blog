import styled from 'styled-components'

interface Props {
  bgColor?: string;
}

export const Container = styled.div<Props>`
  padding: 0px;
  margin: 0px;
  height: 200px;
  margin-left: -20px;
  margin-top: -30px;  
  width: 102.5%;
  overflow: none !important;
  background-color: ${props => props.bgColor || 'transparent'};

  div{
  }
`