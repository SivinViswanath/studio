import React from 'react';
import card1 from '../../assets/card1.jpg';
import card2 from '../../assets/card2.jpg';

const AboutUs = () => {
  return (
    <>
      <section>
        <div className='container'>
          <div className='text-center my-10 overflow-y-hidden p-0 m-0'>
            <p className='text-3xl  font-[tourney] 2xl:text-4xl'>What we do</p>
            <h1 className='font-[poppins] font-bold 2xl:text-6xl'>
              Studio Services
            </h1>
          </div>
          <div className='flex md:justify-around flex-col md:flex-row gap-4 px-5 md:px-2'>
            <div class='w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 '>
              <a href='#'>
                <img class='rounded-t-lg' src={card1} alt='' />
              </a>
              <div class='p-5'>
                <a href='#'>
                  <h5 class='mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Voice Recording
                  </h5>
                </a>
                <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href='#'
                  class='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fa5c6f] rounded-full hover:bg-[#fa5c6f] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#fa5c6f] dark:hover:bg-[#fa5c6f] dark:focus:ring-[#fa5c6f]'
                >
                  Read more
                  <svg
                    class='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class='w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <a href='#'>
                <img class='rounded-t-lg' src={card2} alt='' />
              </a>
              <div class='p-5'>
                <a href='#'>
                  <h5 class='mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Sound Mixing
                  </h5>
                </a>
                <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href='#'
                  class='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fa5c6f] rounded-full hover:bg-[#fb7d8c] focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-[#fa5c6f] dark:hover:bg-[#fa5c6f]0 dark:focus:ring-[#98464f]'
                >
                  Read more
                  <svg
                    class='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
