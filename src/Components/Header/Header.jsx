import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./../../assets/Header/Header.png"; // your logo image

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-4 md:top-10 left-0 w-full z-20 px-6 md:px-20 ">
      <div className="flex  justify-between items-center text-white w-full">
        
        {/* 🔹 Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Pixla Academy" className="h-10 md:h-12 w-auto" />
        </div>

        {/* 🔹 Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-lg font-semibold">
          <div className="flex items-center space-x-1 hover:text-yellow-400 cursor-pointer transition">
            <span>Programs</span>
            <ChevronDown size={18} />
          </div>

          <div className="flex items-center space-x-1 hover:text-yellow-400 cursor-pointer transition">
            <span>Onboarding</span>
            <ChevronDown size={18} />
          </div>

          <div className="flex items-center gap-10">
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

        {/* 🔹 Enroll Button (Desktop Only) */}
        <button className="hidden md:block bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition">
          Enroll Now
        </button>

        {/* 🔹 Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔹 Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black/95 text-white flex flex-col items-center justify-center space-y-6 text-lg font-semibold z-30">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={30} />
          </button>

          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-1 hover:text-yellow-400 cursor-pointer transition">
              <span>Programs</span>
              <ChevronDown size={18} />
            </div>

            <div className="flex items-center space-x-1 hover:text-yellow-400 cursor-pointer transition">
              <span>Onboarding</span>
              <ChevronDown size={18} />
            </div>

            <a href="#" className="hover:text-yellow-400 transition">
              Franchise
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              Hires from us
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              About
            </a>

            <button className="mt-4 bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
