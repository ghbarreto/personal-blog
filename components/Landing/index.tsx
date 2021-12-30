import React from 'react';

import Header from '../common/Header';
import Categories from '../common/Categories';
import Cards from '../common/Cards';
import SocialMedia from '../common/SocialMedia';
import * as Reusable from '../../styles/Reusable';
import Footer from '../common/Footer'

const Landing: React.FC = () => {
  return (
    <>
      <Header />
      <Categories />
      <Cards />
      <Reusable.FlexCenter>
        <SocialMedia />
      </Reusable.FlexCenter>
      <Footer/>
    </>
  );
};

export default Landing;
