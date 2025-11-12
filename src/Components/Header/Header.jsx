import React from "react";
import { ChevronDown } from "lucide-react";
import Logo from "./../../assets/Header/Header.png"; // your logo image

const Header = () => {
  return (
    <header className="absolute top-4 md:top-10 left-0 w-full z-20 px-6 md:px-20">
      <div className="flex  justify-between items-center text-white w-full">
        
        {/* 🔹 Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Pixla Academy" className="h-10 md:h-12 w-auto" />
        </div>

        {/* 🔹 Navigation Menu */}
        <nav className="flex  items-center space-x-10 text-lg font-semibold">
          <div className="flex items-center space-x-1 hover:text-yellow-400 cursor-pointer transition">
            <span>Programs</span>
            <ChevronDown size={18} />
          </div>

          <div className="flex items-center space-x-3 hover:text-yellow-400 cursor-pointer transition">
            <span>Onboarding</span>
            <ChevronDown size={18} />
          </div>
         <div className="flex items-center gap-10 ">
          <a href="#" className="hover:text-yellow-400 transition">
            Franchise
          </a>

          <a href="#" className="hover:text-yellow-400 transition">
            Hires from us
          </a>

          <a href="#" className="hover:text-yellow-400 transition">
            About
          </a>
          </div>
        </nav>

        {/* 🔹 Enroll Button */}
        <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition">
          Enroll Now
        </button>
      </div>
    </header>
  );
};

export default Header;
