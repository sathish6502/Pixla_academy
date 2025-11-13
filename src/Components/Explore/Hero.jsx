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
    <section className="relative w-full h-[700px] overflow-hidden px-6 md:px-20 pb-60">
      {/* ----- Slides ----- */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={`Hero ${slide.id}`}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 mt-20 md:px-20 py-40">

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight max-w-3xl drop-shadow-md">
              {slide.title}
            </h1>

            <p className="mt-6 text-md sm:text-xl md:text-xl font-bold max-w-3xl opacity-90">
              {slide.subtitle}
            </p>

            <button className="mt-8 md:mt-17 bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition-all duration-300">
              Explore Program <ArrowRight size={20} />
            </button>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 mt-18 md:mt-28">
              {["500+ Students", "100+ Internships", "5 Campuses"].map(
                (stat, i) => (
                  <div
                    key={i}
                    className="bg-white/90 backdrop-blur-md text-black px-5 md:px-6 py-2 md:py-2 rounded-full text-sm md:text-base font-semibold shadow-sm"
                  >
                    {stat}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ))}

      {/* ----- Dots Indicator ----- */}
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
