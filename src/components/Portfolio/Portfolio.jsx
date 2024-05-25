import React from 'react';
import Headphone from '../../assets/headphone.png';
import mic from '../../assets/m7pjpl9h-removebg-preview.png';

const Portfolio = () => {
  return (
    <>
      <div className='text-center my-10 overflow-y-hidden p-0 m-0'>
        <p className='text-3xl  font-[tourney] 2xl:text-5xl'>Our Portfolio</p>
        <h1 className='font-[poppins] font-bold 2xl:text-7xl'>Recent Tracks</h1>
      </div>
      <div className='flex md:flex-row items-center justify-between flex-col overflow-hidden my-6'>
        <img
          src={Headphone}
          alt=''
          className='translate-x-[-47%] scale-110 2xl:scale-125'
        />
        <div>
          <h3>Hello</h3>
        </div>
        <img
          src={mic}
          alt=''
          className='transform scale-x-[-1] translate-x-[40%] -rotate-6'
        />
      </div>
    </>
  );
};
export default Portfolio;
