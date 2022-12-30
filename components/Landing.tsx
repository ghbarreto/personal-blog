import React from 'react';
import { useRouter } from 'next/router';

import Header from './base/Header';
import Categories from './base/Categories';
import Cards from './base/Cards';
import SocialMedia from './base/SocialMedia';
import * as Reusable from '../styles/Reusable';
import Footer from './base/Footer';
import PostId from '../pages/[postid]';

const Landing: React.FC = () => {
    const router = useRouter();
    return (
        <>
            <Header />
            <Categories />
            <Cards />
            <Reusable.FlexCenter>
                <SocialMedia />
                <PostId open={!!router.query.posts} fromLanding />
            </Reusable.FlexCenter>
            <Footer />
        </>
    );
};

export default Landing;
