import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisibleImages, setNumVisibleImages] = useState(6);

  useEffect(() => {
    // Adjust number of visible images based on screen width
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Adjust this breakpoint as needed
        setNumVisibleImages(1);
      } else {
        setNumVisibleImages(6);
      }
    };

    handleResize(); // Call on initial render
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    {
      src: 'https://picsum.photos/seed/picsum/200/300',
      title: 'Title 1',
      year: '2018',
    },
    {
      src: 'https://picsum.photos/id/237/200/300',
      title: 'Title 2',
      year: '2019',
    },
    {
      src: 'https://picsum.photos/200/300?grayscale',
      title: 'Title 3',
      year: '2016',
    },
    {
      src: 'https://picsum.photos/200/300/?blur',
      title: 'Title 4',
      year: '2015',
    },
    {
      src: 'https://picsum.photos/id/870/200/300?grayscale&blur=2',
      title: 'Title 5',
      year: '2018',
    },
    {
      src: 'https://picsum.photos/id/10/367/267',
      title: 'Title 6',
      year: '2019',
    },
    {
      src: 'https://picsum.photos/id/22/367/267',
      title: 'Title 7',
      year: '2020',
    },
    {
      src: 'https://picsum.photos/id/26/367/267',
      title: 'Title 8',
      year: '2018',
    },
    {
      src: 'https://picsum.photos/id/45/367/267',
      title: 'Title 9',
      year: '2021',
    },
    {
      src: 'https://picsum.photos/id/64/367/267',
      title: 'Title 10',
      year: '2022',
    },
  ];

  const maxIndex = images.length - numVisibleImages;

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  return (
    <section>
      <div className='container'>
        <div className='text-center my-10 p-0 m-0'>
          <p className='text-3xl font-[tourney] 2xl:text-4xl'>Clients</p>
          <h1 className='font-[poppins] font-bold 2xl:text-6xl'>
            Films We Worked
          </h1>
        </div>
        <div className=''>
          <div className=''>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className='mySwiper filmslider'
              slidesPerView={5}
              breakpoints={{
                // when window width is >= 640px
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
            >
              {' '}
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div
                    className='w-full md:w-56 flex-shrink-0'
                    style={{ margin: '0 1%' }}
                  >
                    <img
                      src={image.src}
                      alt={`Slide ${index}`}
                      className='w-full md:w-56 md:h-80'
                    />
                    <div className='text-center mt-2 overflow-hidden'>
                      {' '}
                      {/* Add title container */}
                      <span className='font-[poppins] text-2xl md:text-lg text-red-400'>
                        {image.title}
                      </span>
                      <br />
                      <span className='font-[poppins] text-2xl md:text-sm text-white'>
                        {image?.year}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* <button
          onClick={previousSlide}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg'
          disabled={currentIndex === 0}
        >
          <FaChevronLeft size={30} />
        </button> */}
      {/* <button
          onClick={nextSlide}
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg'
          disabled={currentIndex === maxIndex}
        >
          <FaChevronRight size={30} />
        </button> */}
    </section>
  );
};

export default Works;
