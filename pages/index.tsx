import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';

import * as Styled from '../styles';
import Landing from '../components/Landing';
import { PostContext } from '../context/PostContext';
import { bgColor } from '../styles/utilities';
import { initProps } from '../utils/init';
import styled from 'styled-components';

interface Values {
    value: {
        err?: string;
        posts: any;
    };
}

const PortfolioButton = styled(Styled.Button)`
    font-size: 26px;
    padding-left: 250px;
    margin: -100px;
`;

const Home: NextPage<Values | any> = ({ value }) => {
    const { addingPosts, openedPost, setGithubInfo } = useContext(PostContext);
    const [hover, setHover] = useState<boolean>(false);

    useEffect(() => {
        if (value) {
            addingPosts(value);
        }
    }, [value, addingPosts]);

    return (
        <>
            <Head>
                <title>Gabriel Barreto</title>
                <meta name="description" content="Gabriel Barreto's blog." />
                <link rel="icon" href="/logo.png" />
            </Head>
            <Styled.Container bodyScroll={openedPost}>
                <Link href="https://www.ghbarreto.dev" passHref>
                    <PortfolioButton
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        bgColor={hover ? bgColor : 'transparent'}
                        color={hover ? 'white' : bgColor}
                    >
                        <Styled.Tags fontSize={'29px'}>《&#123;</Styled.Tags>Portfolio
                        <Styled.Tags fontSize={'29px'}>&#125;</Styled.Tags>
                    </PortfolioButton>
                </Link>

                <Styled.Component>
                    <Landing />
                </Styled.Component>
            </Styled.Container>
        </>
    );
};

Home.getInitialProps = async () => initProps();

export default Home;
