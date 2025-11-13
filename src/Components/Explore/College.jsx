import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import bgImg from "./../../assets/About/college.jpg"; // replace with your actual image

const CollegeHero = () => {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center flex items-center text-white"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-40"></div>

      {/* Content Section */}
      <div className="relative z-10 container mx-auto px-16 flex justify-between items-center">
        {/* LEFT TEXT */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-semibold leading-tight mt-20">
            This Is More <br /> Than Just a <br /> College
          </h1>
          <p className="text-lg  text-[14px] leading-relaxed text-gray- mt-35">
            At Pixla Academy, we believe higher education should go beyond
            traditional classrooms. We are a new kind of institution—one that
            blends global perspective, modern technology, and real-world
            experience to prepare students for the challenges of tomorrow.
          </p>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex flex-col items-center space-y-4">
          <button className="bg-white text-gray-900 p-3 rounded-full shadow-md hover:bg-gray-200 transition">
            <ChevronUp size={24} />
          </button>
          <button className="bg-white text-gray-900 p-3 rounded-full shadow-md hover:bg-gray-200 transition">
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollegeHero;
