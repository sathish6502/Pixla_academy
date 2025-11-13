import React from "react";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import logo from "./../../assets/Footer/Footer.png"; // replace with your actual logo path

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-8 md:px-20">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 border-b border-gray-700 pb-10">
        {/* Left - Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Pixla Academy Logo" className="w-[250px] md:w-[450px] h-70 mt-10" />
        </div>

        {/* Right - Contact & Locations */}
        <div className="space-y-4 ml-30 ">
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Contact</h3>
            <p className="flex items-center gap-2 text-lg">
              <Phone size={18} className="text-yellow-400" /> 
              <strong>Phone:</strong> +91 93421 17110 / 87785 84566
            </p>
            <p className="flex items-center gap-2 text-lg mt-4">
              <Mail size={18} className="text-yellow-400" /> 
              <strong>Email:</strong> contact@pixlaacademy.com
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Locations</h3>
            <p className="text-lg">
              <strong>1. Bengaluru (Main HQ)</strong><br />
              Electronic City, Bengaluru, Karnataka 560100
            </p>
            <p className="text-lg mt-4">
              <strong>2. Chennai (Campus)</strong><br />
              Siruseri, Tamil Nadu 603103
            </p>
            <p className="text-lg mt-4">
              <strong>3. Krishnagiri (Campus)</strong><br />
              Periyapanamutlu, Krishnagiri, Tamil Nadu 635001
            </p>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid md:grid-cols-3 gap-8 py-10 border-b border-gray-700 text-lg">
        {/* Column 1 */}
        <div className="space-y-9">
          <ul className="space-y-4">
            <li className="hover:text-yellow-400 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-yellow-400 cursor-pointer">Privacy & Policy</li>
          </ul>
          <ul className="space-y-4 mt-20">
            <li className="hover:text-yellow-400 cursor-pointer">Campus Life</li>
            <li className="hover:text-yellow-400 cursor-pointer">Student & Support</li>
            <li className="hover:text-yellow-400 cursor-pointer">Sports</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col md:flex-row ml-[420px] gap-4 md:gap-15 justify-center md:justify-start items-center md:items-start">
          <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Programs</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">College</a>
        </div>

        {/* Column 3 */}
        <div className="space-y-4 mt-30">
          <h3 className="text-xl font-semibold text-yellow-400">Quick Menu</h3>
          <ul className="space-y-2">
            <li className="flex justify-between hover:text-yellow-400 cursor-pointer transition-colors">
              <span>About</span>
              <span className="text-gray-400 group-hover:text-yellow-400">→</span>
            </li>
            <li className="flex justify-between mt-4 hover:text-yellow-400 cursor-pointer transition-colors">
              <span>Career Help</span>
              <span className="text-gray-400 group-hover:text-yellow-400">→</span>
            </li>
            <li className="flex justify-between mt-4 hover:text-yellow-400 cursor-pointer transition-colors">
              <span>Major Program</span>
              <span className="text-gray-400 group-hover:text-yellow-400">→</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center py-6 text-lg text-gray-400">
        <div className="flex gap-4 mb-4 md:mb-0">
          <Linkedin size={20} className="hover:text-yellow-500 cursor-pointer" />
          <Instagram size={20} className="hover:text-yellow-500 cursor-pointer" />
        </div>
        <p>© 2025 Pixla Academy Website.</p>
      </div>
    </footer>
  );
};

export default Footer;
