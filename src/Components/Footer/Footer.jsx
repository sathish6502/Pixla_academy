import React from "react";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import logo from "./../../assets/Header/Header.png"; // replace with your actual logo path

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-6 md:px-20">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 border-b border-gray-700 pb-8">
        {/* Left Section - Logo */}
        <div>
          <img src={logo} alt="Pixla Academy Logo" className="w-[450px] h-60 mt-20 mb-4" />
        </div>

        {/* Right Section - Contact & Locations */}
        <div className="text-xl space-y-4 ml-30">
          <h3 className="text-2xl font-semibold text-yellow-400">Contact</h3>
          <p className="flex items-center gap-2">
            <Phone size={16} className="text-yellow-400" /> 
            <strong>Phone :</strong>
           +91 93421 17110 / 87785 84566
          </p>
          <p className="flex items-center gap-2">
            <Mail size={16} className="text-yellow-400" /> 
            <strong>E-mail :</strong>
           contact@pixlaacademy.com
          </p>

          <div className="mt-4 space-y-4">
            <h3 className="text-2xl font-semibold text-yellow-400">Location</h3>
            <p>
              <strong>1. Bengaluru (Main Headquarters)</strong><br />
              Electronic City, Bengaluru, Karnataka 560100
            </p>
            <p>
              <strong>2. Chennai (Campus)</strong><br />
              Siruseri, Tamil Nadu 603103
            </p>
            <p>
              <strong>3. Krishnagiri (Campus)</strong><br />
              Periyapanamutlu, Krishnagiri, Tamil Nadu 635001
            </p>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid md:grid-cols-3 gap-8 py-8 text-xl border-b border-gray-700">
        {/* Column 1 */}
        <div>
          <ul className="space-y-2">
            <li>Terms & Conditions</li>
            <li>Privacy & Policy</li>
          </ul>
          <ul className="space-y-3 mt-16">
            <li>Campus Life</li>
            <li>Student & Support</li>
            <li>Sports</li>
          </ul>
        </div>

        <div className="flex gap-10 ml-[440px]">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">Programs</a>
          <a href="#" className="hover:text-yellow-400">College</a>
        </div>

        {/* Column 3 */}
<div className="text-left md:mt-20">
  <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Menu</h3>
  <ul className="space-y-3">
    <li className="flex items-center  gap-68 hover:text-yellow-400 transition-colors cursor-pointer">
      <span>About</span>
      <span className="text-gray-400 group-hover:text-yellow-400">→</span>
    </li>
    <li className="flex items-center  gap-60 hover:text-yellow-400 transition-colors cursor-pointer">
      <span>Career Help</span>
      <span className="text-gray-400 group-hover:text-yellow-400">→</span>
    </li>
    <li className="flex items-center gap-50 hover:text-yellow-400 transition-colors cursor-pointer">
      <span>Major Program</span>
      <span className="text-gray-400 group-hover:text-yellow-400">→</span>
    </li>
  </ul>
</div>

      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm">
        {/* Social Icons */}
        <div className="flex gap-4">
          <Linkedin size={18} className="hover:text-yellow-400 cursor-pointer" />
          <Instagram size={18} className="hover:text-yellow-400 cursor-pointer" />
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-lg">
          © 2025 Pixla Academy website.
        </p>

        {/* Bottom Nav */}
      </div>
    </footer>
  );
};

export default Footer;
