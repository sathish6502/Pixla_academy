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
    <section className="relative w-full h-[800px] overflow-hidden">
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
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* ✅ Content — control top/bottom space manually */}
      <div className="relative z-20 flex flex-col items-center text-center text-white px-6 md:px-20 pt-[210px] pb-[120px] ">
        {/* 👆 Increase/decrease pt / pb to adjust top & bottom spacing */}

        <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold leading-tight max-w-3xl mb-6 drop-shadow-md">
          {slides[current].title}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-semibold max-w-2xl opacity-90 mb-10">
          {slides[current].subtitle}
        </p>

        <button className="bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition-all duration-300 mb-10">
          Explore Program <ArrowRight size={20} />
        </button>

        <div className="flex flex-wrap justify-center gap-4 mt-30">
          {["500+ Students", "100+ Internships", "5 Campuses"].map((stat, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-md text-black px-6 py-2 rounded-full text-base md:text-lg font-semibold shadow-sm"
            >
              {stat}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-yellow-400 scale-110" : "bg-white/70"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
