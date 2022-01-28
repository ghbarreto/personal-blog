import styled from 'styled-components'
import {bgColor, lightblue} from '../../../../../styles/utilities'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;

  .post_title-name {
    font-weight: 600;
    color: ${bgColor};
  }
  
  .post_email-post{
    font-size: 20px;
    color: ${lightblue};
  }
`