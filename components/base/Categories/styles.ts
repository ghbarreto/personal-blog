import styled from 'styled-components';
import { lightblue, highlight, bgColor, yellow } from '../../../styles/utilities';

export const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    position: relative;
    justify-content: space-between;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 4%;
    margin-bottom: 2%;
    font-family: Fira Code, monospace;
    a {
        text-align: center;
        flex: 1 1 15%;
    }
`;

export const CategorySelected = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2px 25px;
    text-align: center;
    text-transform: uppercase;
    background: rgb(253, 58, 140, 0.2);
    border-radius: 15px;
    width: 150px;
    margin: 90px auto;

    &:hover {
        background-color: ${highlight};
        cursor: pointer;
        transition: 0.4s background-color;
    }
`;

export const CategoryText = styled.div`
    text-align: center;
    text-transform: uppercase;
    color: white;
    font-family: Fira Code Medium, monospace;
    padding: 10px;
`;

export const Icon = styled.div`
    display: inline;
    color: white;
    opacity: 1;
    margin-top: -202px;
    &:hover {
        color: ${bgColor};
        transition: 0.3s color ease-out;
    }
`;
