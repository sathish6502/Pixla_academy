import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import hero1 from "./../../assets/Explore/hero1.jpg";
import hero2 from "./../../assets/Explore/hero2.jpg";

const slides = [
  {
    id: 1,
    image: hero1,
    title: "From Skills to Career Success with Pixla Academy",
    subtitle:
      "India’s largest skill training and placement platform – learn, intern, and get placed with industry-ready expertise",
  },
  {
    id: 2,
    image: hero2,
    title: "From Learning to Earning – Real Projects, Real Experience",
    subtitle:
      "Gain hands-on experience with live client projects. Build a portfolio that makes you job-ready or freelance-ready",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[700px] sm:h-[600px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Hero ${slide.id}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* ✅ Content */}
      <div className="relative z-20 flex flex-col items-center text-center text-white px-4 sm:px-6 md:px-20 pt-[150px] sm:pt-[180px] md:pt-[210px] pb-[80px] sm:pb-[100px] md:pb-[120px]">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug sm:leading-tight max-w-[90%] sm:max-w-3xl mb-6 sm:mb-8 drop-shadow-md">
          {slides[current].title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl font-medium sm:font-bold max-w-[90%] sm:max-w-2xl opacity-90 mb-8 sm:mb-12">
          {slides[current].subtitle}
        </p>

        {/* Button */}
        <button className="bg-yellow-500 text-black font-semibold px-4 sm:px-4 py-2 sm:py-2 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition-all duration-300 mb-10 sm:mb-16 text-sm sm:text-base">
          Explore Program <ArrowRight size={18} className="sm:w-5 sm:h-5" />
        </button>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
          {["500+ Students", "100+ Internships", "5 Campuses"].map((stat, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-md text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold shadow-sm"
            >
              {stat}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-yellow-400 scale-110" : "bg-white/70"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
