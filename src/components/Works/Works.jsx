import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Poster1 from '../../assets/posters/Churuli-min.jpg';
import Poster2 from '../../assets/posters/ThinkalaychaNischayam.jpg';
import Poster3 from '../../assets/posters/Ajagajantharam.jpg';
import Poster4 from '../../assets/posters/SubashChandraBoss.jpg';
import Poster5 from '../../assets/posters/SimonDaniel-min.jpg';
import Poster6 from '../../assets/posters/Pyali.jpg';
import Poster7 from '../../assets/posters/Nanpakal_Poster.jpg';
import Poster8 from '../../assets/posters/OITO_poster.jpg';
import Poster9 from '../../assets/posters/Manjummal Boys.jpg';

import 'swiper/css';
import 'swiper/css/navigation';

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
      src: Poster1,
      title: 'Churuli',
      year: '2021',
    },
    {
      src: Poster2,
      title: 'Thinkalazhcha Nishchayam',
      year: '2021',
    },
    {
      src: Poster3,
      title: 'Ajagajantharam',
      year: '2021',
    },
    {
      src: Poster4,
      title: 'Sabaash Chandra Bose',
      year: '2022',
    },
    {
      src: Poster5,
      title: 'Simon Daniel',
      year: '2022',
    },
    {
      src: Poster6,
      title: 'Pyali',
      year: '2022',
    },

    {
      src: Poster7,
      title: 'Nanpakal Nerathu Mayakkam',
      year: '2022',
    },
    {
      src: Poster8,
      title: 'Oridathumillathoridam',
      year: '2024',
    },
    {
      src: Poster9,
      title: 'Manjummel Boys',
      year: '2024',
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
    <section id="works">
      <div className="container">
        <div className="text-center my-10 p-0 m-0">
          <p className="text-3xl font-[tourney] 2xl:text-4xl">Clients</p>
          <h1 className="font-[poppins] font-bold 2xl:text-6xl">
            Films We Worked
          </h1>
        </div>
        <div className="">
          <div className="">
            <Swiper
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper filmslider"
              loop={true}
              slidesPerView={5}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
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
                  <div className="w-full md:w-56 flex-shrink-0">
                    <div>
                      <figure className="relative  pb-[160%]">
                        <img
                          src={image.src}
                          alt={`Slide ${index}`}
                          className=" md:h-80 object-cover absolute top-0 left-0 w-full h-full "
                        />
                      </figure>
                    </div>
                    <div className="text-center mt-1  overflow-hidden">
                      {' '}
                      {/* Add title container */}
                      <span className="font-[poppins] text-2xl md:text-lg text-indigo-200 font-bold">
                        {image.title}
                      </span>
                      <br />
                      <span className="font-[poppins] text-2xl md:text-sm text-white">
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
