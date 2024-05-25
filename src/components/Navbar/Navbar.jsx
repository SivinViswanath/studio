import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`font-[poppins] p-4 fixed top-0 z-50 w-full transition-all duration-500  ${
          scrolling ? 'bg-gray-800' : 'bg-transparent'
        }`}
        style={{ opacity: scrolling ? '1' : '0.8' }}
      >
        <div className='container mx-auto flex justify-between items-center md:h-16 h-5 my-4 md:my-1'>
          <a href='#' className='text-white text-4xl font-bold md:text-3xl'>
            Studio
          </a>
          {/* Hamburger Icon */}
          <button
            className={`md:hidden ${menuOpen ? 'hidden' : ''}`}
            onClick={toggleMenu}
          >
            <GiHamburgerMenu />
          </button>
          {/* Close Button */}

          {/* Navbar Links */}
          <div
            className={`${
              menuOpen ? 'fixed' : 'hidden'
            } top-0 left-0 w-full h-full bg-gray-800 flex flex-col items-center justify-center md:static md:flex md:flex-row md:h-auto md:space-x-12 md:bg-transparent md:translate-x-0 md:items-center`}
          >
            <div
              className={`md:hidden ${
                menuOpen ? '' : 'hidden'
              } absolute top-0 right-0 m-4`}
            >
              <button onClick={closeMenu}>
                <IoMdClose />
              </button>
            </div>
            <a
              href='#'
              className={`text-gray-300 hover:text-white my-4 md:my-0 ${
                menuOpen ? 'text-2xl' : 'text-sm 2xl:text-2xl'
              }`}
            >
              Home
            </a>
            <a
              href='#'
              className={`text-gray-300 hover:text-white my-4 md:my-0 ${
                menuOpen ? 'text-2xl' : 'text-sm 2xl:text-2xl'
              }`}
            >
              About
            </a>
            <a
              href='#'
              className={`text-gray-300 hover:text-white my-4 md:my-0 ${
                menuOpen ? 'text-2xl' : 'text-sm 2xl:text-2xl'
              }`}
            >
              Blog
            </a>
            <a
              href='#'
              className={`text-gray-300 hover:text-white my-4 md:my-0 ${
                menuOpen ? 'text-2xl' : 'text-sm 2xl:text-2xl'
              }`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;