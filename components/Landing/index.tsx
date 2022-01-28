import React from 'react';
import { useRouter } from 'next/router';

import Header from '../common/Header';
import Categories from '../common/Categories';
import Cards from '../common/Cards';
import SocialMedia from '../common/SocialMedia';
import * as Reusable from '../../styles/Reusable';
import Footer from '../common/Footer';
import PostId from '../../pages/[postid]';

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
