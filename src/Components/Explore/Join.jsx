import React from "react";
import bgImage from "./../../assets/Explore/Campus.jpg"; // replace with your actual background image path

const JoinCommunity = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for dim effect */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Join Our Growing <br /> Community
        </h2>
        <p className="text-lg md:text-xl text-white font-semibold mb-10 leading-relaxed">
          Be a part of Pixla Academy’s vibrant network of learners, mentors, and innovators. <br />
          Collaborate, grow, and unlock endless opportunities
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-10 py-3 rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-lg">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default JoinCommunity;
