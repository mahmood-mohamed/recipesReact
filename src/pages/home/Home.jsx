import React from 'react';
import Category from '../../components/Category/Category';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <div className='home sm:flex flex-col sm:flex-row'>
        <Sidebar />
        <div className='p-4'>
          <h1 id='title-home' className='md:text-4xl mb-5 mt-12 px-4'>
            Learn, Cook, Eat Your Food
          </h1>
          <Category />
        </div>
      </div>
      <Footer/>
    </>
  );
}
