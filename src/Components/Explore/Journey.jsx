import React from 'react';
import universityBg from './../../assets/Explore/Contact.jpg'; // image path

const UniversityHero = () => {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${universityBg})` }}
      >
        <div className="absolute inset-0 bg-black/90 opacity-50"></div> {/* Dark Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-8 max-w-2xl sm:max-w-3xl mx-auto sm:mx-0 text-center sm:text-left">
          Inside One <br /> Of Tomorrow's <br /> Leading Universities
        </h1>

        {/* Button */}
        <div className="flex justify-center sm:justify-end mt-30">
          <button className="bg-yellow-400  hover:bg-yellow-400 text-black text-xl font-semibold py-3 px-8 rounded-full flex items-center space-x-2 transition duration-300 ease-in-out">
            <span>Start Your Journey</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniversityHero;
