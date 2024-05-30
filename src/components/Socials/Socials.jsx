import React from 'react'
import { FaFacebookSquare, FaInstagram, FaSpotify, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

const Socials = () => {
  return (
    <section>
    <div className='my-4 md:my-52 bg-[#fa5c6f] grid grid-cols-3 md:grid-cols-6 justify-items-center items-center p-7 md:p-20 gap-6'>
    <FaFacebookSquare className='w-12 h-16 md:w-24 md:h-24' cursor='pointer'/>
    <FaInstagram className='w-12 h-16 md:w-24 md:h-24' cursor='pointer'/>
    <FaYoutube className='w-12 h-16 md:w-24 md:h-24' cursor='pointer'/>
    <FaSpotify className='w-12 h-16 md:w-24 md:h-24' cursor='pointer'/>
    <FaTwitter className='w-12 h-16 md:w-24 md:h-24' cursor='pointer'/>
    <SiYoutubemusic className='w-12 h-16 md:w-24 md:h-24' cursor='pointer'/>
    </div>
  </section>
  )
}

export default Socials
