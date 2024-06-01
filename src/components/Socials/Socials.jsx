import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaSpotify,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';

const Socials = () => {
  return (
    <section>
      <div className="my-4 md:my-52 bg-gray-900 grid grid-cols-3 md:grid-cols-6 justify-items-center items-center p-7 md:p-20 gap-6">
        <FaFacebookSquare
          cursor="pointer"
          className="w-12 h-16 md:w-24 md:h-24 hover-bounce  text-indigo-300"
        />
        <FaInstagram
          className="w-12 h-16 md:w-24 md:h-24 hover-bounce text-indigo-300"
          cursor="pointer"
        />
        <FaYoutube
          className="w-12 h-16 md:w-24 md:h-24 hover-bounce  text-indigo-300"
          cursor="pointer "
        />
        <FaSpotify
          className="w-12 h-16 md:w-24 md:h-24 hover-bounce  text-indigo-300"
          cursor="pointer"
        />
        <FaTwitter
          className="w-12 h-16 md:w-24 md:h-24 hover-bounce  text-indigo-300"
          cursor="pointer"
        />
        <SiYoutubemusic
          className="w-12 h-16 md:w-24 md:h-24 hover-bounce  text-indigo-300"
          cursor="pointer"
        />
      </div>
    </section>
  );
};

export default Socials;
