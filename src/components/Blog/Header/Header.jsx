import React from 'react';
import logo from '../../../assets/images/logo.png';
import userProfile from '../../../assets/images/userprofile.png';

const Header = () => {
  return (
    <header className="bg-[#00395D] h-[5.625rem] w-full mx-auto shadow-md flex justify-between items-center px-4">

      <div className="logo">
        <img
          src={logo}
          alt="Logo"
          className="h-[2.438rem] w-[15.813rem] p-[0.625rem]"
        />
      </div>

      <div className="flex items-center gap-x-4">

        <div className="flex bg-[#5C8CAA] items-center border-2 border-[#5C8CAA] rounded-[0.75rem] p-2 space-x-2 space-x-reverse">
          <img
            src={userProfile}
            alt="userProfile"
            className="w-10 h-10 m-1 rounded-full"
          />
          <div className="text-sm">
            <p className="font-semibold text-[#FFFFFF] text-center">ملورین عزیز</p>
            <p className="text-[#FFFFFF] text-center text-[23px]">+905412482882</p>
          </div>
        </div>


        <div className="flex items-center gap-x-3">
          <button className="text-[#FFFFFF] hover:text-green-500 transition-transform duration-200 hover:scale-110">
            <svg className="w-8 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405M9 17H4l1.405-1.405M12 3a5 5 0 00-5 5v8h10V8a5 5 0 00-5-5zm0 18v1" />
            </svg>
          </button>

          <button className="text-[#FFFFFF] hover:text-blue-500 transition-transform duration-200 hover:scale-110">
            <svg className="w-8 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>

          <button className="text-[#FFFFFF] hover:text-red-500 transition-transform duration-200 hover:scale-110">
            <svg className="w-8 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
