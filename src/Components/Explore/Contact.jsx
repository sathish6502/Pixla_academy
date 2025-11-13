import React from "react";
import bgImage from "./../../assets/Explore/Contact.jpg";

const ContactForm = () => {
  return (
    <section
      className="relative min-h-screen py-16 px-6 md:px-20 flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Yellow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/90 to-yellow-100/80"></div>

      {/* Title */}
      <div className="relative z-10 text-center mb-6 px-4 sm:px-0">
        <p className="text-lg sm:text-lg text-black font-md">Contact Us</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-black">Get In Touch</h2>
      </div>

      {/* Contact Form Card */}
      <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md">
        <form className="space-y-3 sm:space-y-4">
          {/* Name fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                className="mt-1 w-full border border-gray-300 rounded-md px-2 py-1.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                className="mt-1 w-full border border-gray-300 rounded-md px-2 py-1.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full border border-gray-300 rounded-md px-2 py-1.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Program */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">
              Program
            </label>
            <select className="mt-1 w-full border border-gray-300 rounded-md px-2 py-1.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option>Choose a Program</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="3"
              placeholder="Write your message"
              className="mt-1 w-full border border-gray-300 rounded-md px-2 py-1.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-gray-700 text-xs sm:text-sm">
            <label className="flex items-center space-x-1">
              <input type="checkbox" className="accent-yellow-400" />
              <span>Online</span>
            </label>
            <label className="flex items-center space-x-1">
              <input type="checkbox" className="accent-yellow-400" />
              <span>Offline</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-1.5 px-4 sm:px-5 rounded-full text-sm shadow-md transition"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
