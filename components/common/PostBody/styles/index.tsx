import styled from 'styled-components';
import * as utilities from '../../../../styles/utilities';

export const Container = styled.div`
  display: flex;
`;

export const Socials = styled.div`
  width: 10%;
  margin-left: -3%;
  margin-top: 6%;
  display: block !important;

  position: fixed;
`;

export const PostBody = styled.div`
  width: 80%;
  margin-left: 120px;

  font-family: Fira Code;
  font-size: 25px;


  p{
    text-align: left;
    word-spacing: 5px;
    letter-spacing: 2px;
  }
  a {
    text-decoration: none;
    color: ${utilities.highlight}
  }
`;

export const Subtitle = styled.div`
  margin-top: 30px;
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 50px;

  span {
    text-transform: uppercase;
    color: ${utilities.lightblue};
  }
`;
