import React, { useEffect, useRef } from 'react';
import './Header.css';
import header1 from '../../assets/pexels-dmitry-demidov-515774-3783471.jpg';
import header2 from '../../assets/pexels-elijahsad-8038906.jpg';
import header3 from '../../assets/pexels-www-erzetich-com-2426085.jpg';
import { gsap } from 'gsap';
import ScrambleTextPlugin from 'gsap/all';

gsap.registerPlugin(ScrambleTextPlugin);

const headers = [
  {
    image: header1,
    text1: 'Recording',
    text2: 'Studio',
  },
  {
    image: header2,
    text1: 'Vocal',
    text2: 'Recording',
  },
  {
    image: header3,
    text1: 'Audio',
    text2: 'Mastering',
  },
];

const Header = () => {
  const textRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const imageRefs = [useRef(), useRef(), useRef()];
  const containerRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, delay: 0 });

    headers.forEach((header, index) => {
      timeline
        .to(imageRefs[index].current, { opacity: 1, duration: 1 }, index * 6)
        .to(
          textRefs[index * 2].current,
          {
            opacity: 1,
            duration: 1,
            scrambleText: { text: header.text1, chars: '01', revealDelay: 0.5 },
          },
          index * 6 + 0.5
        )
        .to(
          textRefs[index * 2 + 1].current,
          {
            opacity: 1,
            duration: 1,
            scrambleText: { text: header.text2, chars: '01', revealDelay: 0.5 },
          },
          index * 6 + 1
        )
        .to(
          imageRefs[index].current,
          { opacity: 0, duration: 1 },
          index * 6 + 4.5
        )
        .to(
          textRefs[index * 2].current,
          { opacity: 0, duration: 0.5 },
          index * 6 + 4
        )
        .to(
          textRefs[index * 2 + 1].current,
          { opacity: 0, duration: 0.5 },
          index * 6 + 4.5
        );
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div
      className='header-container font-[poppins] h-[100vh] w-screen overflow-x-hidden'
      ref={containerRef}
    >
      {headers.map((header, index) => (
        <div key={index} className='absolute inset-0'>
          <div className='absolute inset-0 flex items-center justify-start p-4'>
            <h1 className=''>
              <span
                className='font-[tourney] md:text-8xl opacity-0 text-6xl 2xl:text-9xl'
                ref={textRefs[index * 2]}
              >
                {header.text1}
              </span>
              <br />
              <span
                className='md:text-8xl font-bold opacity-0 text-6xl 2xl:text-9xl'
                ref={textRefs[index * 2 + 1]}
              >
                {header.text2}
              </span>
            </h1>
          </div>
          <img
            src={header.image}
            alt={`Header ${index + 1}`}
            ref={imageRefs[index]}
            className='absolute inset-0 w-full h-full object-cover opacity-0'
          />
        </div>
      ))}
    </div>
  );
};

export default Header;
