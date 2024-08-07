import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import logo from '../../assets/logo.png';
import dolby from '../../assets/dolby.png';
import { Link } from 'react-scroll';

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
        className={`font-[poppins] md:p-4 p-6 fixed top-0 z-50 w-full transition-all duration-500  ${
          scrolling ? 'bg-gray-800' : 'bg-transparent'
        }`}
        style={{ opacity: scrolling ? '1' : '0.8' }}
      >
        <div className="container mx-auto flex  justify-between items-center md:h-16 h-5 my-4 md:my-4 p-0">
          <div className="logo">
            <a
              href="#"
              className="text-white md:w-32 w-28 font-bold md:text-3xl flex flex-col items-center gap-2 "
            >
              <img src={logo} alt="logo" />
              <img src={dolby} width={100} alt="dolby" />

              {/* <h1 className="text-base">
                SILENCE <br />
                Audio Post
              </h1> */}
            </a>
          </div>
          {/* Hamburger Icon */}
          <div className="">
            <button
              className={`md:hidden bg-transparent ${menuOpen ? 'hidden' : ''}`}
              onClick={toggleMenu}
            >
              <GiHamburgerMenu size={30} />
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
                } absolute top-0 right-0 m-6 px-2 `}
              >
                <button className="bg-transparent" onClick={closeMenu}>
                  <IoMdClose size={30} />
                </button>
              </div>
              <a
                href="#"
                className={`text-gray-300 hover:text-white my-4 md:my-0 ${
                  menuOpen ? 'text-2xl' : 'text-sm 2xl:text-xl'
                }`}
              >
                Home
              </a>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className={`cursor-pointer text-gray-300 hover:text-white my-4 md:my-0 ${
                  menuOpen ? 'text-2xl' : 'text-sm 2xl:text-xl'
                }`}
                onClick={closeMenu}
              >
                About
              </Link>{' '}
              <Link
                to="works"
                smooth={true}
                duration={500}
                className={`cursor-pointer text-gray-300 hover:text-white my-4 md:my-0 ${
                  menuOpen ? 'text-2xl' : 'text-sm 2xl:text-xl'
                }`}
                onClick={closeMenu}
              >
                Works
              </Link>
              <Link
                to="contact_us"
                smooth={true}
                duration={500}
                className={`cursor-pointer text-gray-300 hover:text-white my-4 md:my-0 ${
                  menuOpen ? 'text-2xl' : 'text-sm 2xl:text-xl'
                }`}
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
