import React from 'react';
import Headphone from '../../assets/headphone.png';
import mic from '../../assets/m7pjpl9h-removebg-preview.png';
import Audio from '../AudioList/Audio';
import sample from '../../assets/sample.mp3';

const Portfolio = () => {
  return (
    <>
      <div className='text-center my-4 overflow-y-hidden p-0 m-0'>
        <p className='text-3xl  font-[tourney] 2xl:text-4xl'>Our Portfolio</p>
        <h1 className='font-[poppins] font-bold 2xl:text-6xl'>Recent Tracks</h1>
      </div>
      <div className='md:grid grid-cols-6 gap-4 overflow-hidden '>
        <div className='col-span-2'>
          <img
            src={Headphone}
            alt=''
            className='translate-x-[-47%] scale-110 2xl:scale-125'
          />
        </div>
        <div className='col-span-2'>
          <div className='w-[100] flex md:flex-row flex-col justify-center md:justify-between gap-10 my-10 items-center border-b-2 pb-7'>
            <h1 className='text-xl text-nowrap font-[poppins]'>Audio 1</h1>
            <div className='"col-start-3 col-span-3'>
              <Audio audioFile={sample} />
            </div>
          </div>
          <div className='w-[100] flex md:flex-row flex-col justify-center md:justify-between gap-10 my-10 items-center  border-b-2 pb-7'>
            <h1 className='text-xl text-nowrap font-[poppins]'>Audio 2</h1>
            <div className='"col-start-3 col-span-3'>
              <Audio audioFile={sample} />
            </div>
          </div>
          <div className='w-[100] flex md:flex-row flex-col justify-center md:justify-between gap-10 my-10 items-center  border-b-2 pb-7'>
            <h1 className='text-xl text-nowrap font-[poppins]'>Audio 3</h1>
            <div className='"col-start-3 col-span-3'>
              <Audio audioFile={sample} />
            </div>
          </div>
          <div className='text-center'>
            <button class='bg-[#fa5c6f] hover:bg-[#f17684] text-white font-bold py-2 px-4 rounded-full text-center w-fit'>
              Show More
            </button>
          </div>
        </div>

        <div className='col-span-2'>
          <img
            src={mic}
            alt=''
            className='transform scale-x-[-1] md:translate-x-[40%]  xl:translate-x-[55%] translate-x-[40%] -rotate-6'
          />
        </div>
      </div>
    </>
  );
};
export default Portfolio;
