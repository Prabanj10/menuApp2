import { Link } from 'react-router';
import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi"

import Logo from '../assets/Logo.png';
import { useState } from 'react';

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [mIsClicked, setMIsClicked] = useState(false);
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="flex justify-center sm:justify-normal bg-[#121618] w-100% h-[40px] sm:h-[100px] ">
      <div className=" flex items-center gap-1 mt-[40px] sm:mt-[95px] sm:ml-[168px]">
        <div>
          <img
            src={Logo}
            alt="logo"
            className=" w-[50px] h-[44px] sm:w-[86px] sm:h-[76px] "
          />
        </div>
        <h2 className="logotext  text-[#0796EF]">
          DEEP <span className="text-white">NET</span>
          <br />
          <span className="text-[#857878]">SOFT</span>
        </h2>
      </div>
      <div className=" font-[Oswald] sm:pt-16 text-[#F5F5F5] mr-15 sm:mr-25 uppercase absolute flex sm:gap-4 right-0">
        <h2 className="hidden sm:inline ">Home</h2>
        <div className="hidden sm:inline">
          <Link to="/menu/679c01eaa227e137d48d3d86">
            <h2
              className={isClicked ? 'text-[#0796EF]' : 'hover:text-[#0796EF]'}
              onClick={() => {
                setIsClicked(true);
                setMIsClicked(false);
              }}>
              {' '}
              Menu
            </h2>
          </Link>
        </div>
          <Link to="/createmenu">
            <h2
              className={mIsClicked ? 'text-[#0796EF]' : 'hover:text-[#0796EF]'}
              onClick={() => {
                setMIsClicked(true);
                setIsClicked(false);
              }}>
              {' '}
              create menu
            </h2>
          </Link>
        <h2 className="hidden sm:inline">Make a reservation</h2>
        <h2 className="hidden sm:inline">contatct us</h2>

        {/* mobile version */}

        <div className=" md:hidden mx-auto my-2 ">
        <GiHamburgerMenu className='text-xl text-gray-700' onClick={()=>{isOpen?setIsOpen(false):setIsOpen(true)}} />
        {isOpen&&(<div className='bg-[#121618] '>
          <ul>
            <li>home</li>
            <li>menu</li>
            <li>mark a reservation</li>
            <li>contact us</li>
          </ul>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default Header;
