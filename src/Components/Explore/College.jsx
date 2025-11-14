import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import bgImg from "./../../assets/About/college.jpg"; // replace with your actual image

const CollegeHero = () => {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center flex items-center text-white"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/70 bg-opacity-40"></div>

      {/* Content Section */}
      <div className="relative z-10 container px-6 sm:px-10 md:px-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
        {/* LEFT TEXT */}
        <div className="max-w-lg -mt-20 -md:mt-25">
          <h1 className="text-3xl sm:text-4xl font-semibold leading-snug py-28 sm:leading-tight mb-8">
            This Is More <br className="hidden sm:block" /> Than Just a <br className="hidden sm:block" /> College
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-gray-200">
            At Pixla Academy, we believe higher education should go beyond
            traditional classrooms. We are a new kind of institution—one that
            blends global perspective, modern technology, and real-world
            experience to prepare students for the challenges of tomorrow.
          </p>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex md:flex-col flex-row md:space-y-8 space-x-4 md:space-x-0">
          <button className="bg-white text-gray-900 p-3 rounded-full shadow-md hover:bg-gray-200 transition">
            <ChevronUp size={18} />
          </button>
          <button className="bg-white text-gray-900 p-3 rounded-full shadow-md hover:bg-gray-200 transition">
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollegeHero;
