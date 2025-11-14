import React from "react";
import bgImage from "./../../assets/Explore/Campus.jpg";

const JoinCommunity = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-center px-4 sm:px-6 md:px-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for dim effect */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 md:mb-6 leading-snug">
          Join Our Growing <br className="hidden sm:block" /> Community
        </h2>
        <p className="text-sm sm:text-base md:text-xl text-white font-semibold mb-6 sm:mb-8 leading-relaxed">
          Be a part of Pixla Academy’s vibrant network of learners, mentors, and innovators. <br className="hidden sm:block" />
          Collaborate, grow, and unlock endless opportunities
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-lg sm:w-auto">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default JoinCommunity;
