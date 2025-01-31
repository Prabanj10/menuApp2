import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <div className="   w-full items-center relative sm:pb-20 pt-10 sm:pt-20 flex-col sm:pl-5 sm:flex-row sm:gap-5 flex justify-center sm:h-[300px] h-[582px] bg-black">
      <div className="border border-1  rounded-2xl mt-10 border-white sm:w-80 sm:h-28 w-[85%] h-[150px]"></div>
      <div className="border border-1  rounded-2xl mt-10 border-white sm:w-80 sm:h-28 w-[85%] h-[150px]">
      </div>
      <img className='absolute top-10 left-43 sm:left-160 sm:top-20 ' src={Logo} alt="" />
      <div className="border border-1  rounded-2xl mt-10 border-white sm:w-80 sm:h-28 w-[85%] h-[150px]"></div>
    </div>
  );
};

export default Footer;
