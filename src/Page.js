import React from 'react';
import Column from './components/Column';
import Footer from './components/Footer';
import Header from './components/Header';

const Page = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Column />
      <Footer />
    </div>
  );
};

export default Page;
