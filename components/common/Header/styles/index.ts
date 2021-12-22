import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  padding-top: 20px;
  margin-right: 50px;
  align-items: center;
  input {
    max-height: 30px;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;

  svg:hover {
    cursor: pointer;
  }
  .svg-focused {
    color: #00c2cb;
  }
`;
