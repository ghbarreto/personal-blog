import React from 'react';
import Header from '../common/Header';
import Categories from '../common/Categories';
import Cards from '../common/Cards';

const Landing: React.FC = () => {
  return (
    <>
      <Header />
      <Categories />
      <Cards />
    </>
  );
};

export default Landing;
