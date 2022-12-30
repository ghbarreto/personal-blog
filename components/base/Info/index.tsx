import Image from 'next/image';
import styled from 'styled-components';

import SocialMedia from '../SocialMedia';
import * as utilities from '../../../styles/utilities';
import { PostContext } from '../../../context/PostContext';
import { useContext } from 'react';

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

const Info: React.FC = () => {
    const { githubInfo } = useContext(PostContext);

    return (
        <Container>
            {githubInfo ? (
                <Image src={githubInfo.avatar} width={'120px'} height={'120px'} alt={'g-hub'} />
            ) : (
                <div>TODO LOADING</div>
            )}
            <InfoHeader>
                <Tags>{'</'}</Tags>Gabriel Barreto <Tags>{'//'}</Tags> Personal Blog
                <Tags>{'/>'}</Tags>
            </InfoHeader>

            <SocialMedia />
        </Container>
    );
};

export default Info;
