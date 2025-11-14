import React from "react";
import { ArrowRight } from "lucide-react";
import founderImg from "./../../assets/Jo/founder.png";
import logo1 from "./../../assets/Jo/logo1.png";
import logo2 from "./../../assets/Jo/logo2.png";
import logo3 from "./../../assets/Jo/logo3.png";
import logo4 from "./../../assets/Jo/logo4.png";
import logo5 from "./../../assets/Jo/logo5.png";

const steps = [
  "Apply easily through our portal.",
  "Pick the program that matches your career goals.",
  "Hands-on training, real projects, and mentorship.",
  "Internships, freelance opportunities, or placements.",
];

const JourneySection = () => {
  return (
    <section className="relative bg-black text-white px-6 md:px-20 py-20 overflow-hidden">
      {/* 🔹 Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gray-800"></div>

      {/* 🔹 Center Vertical Divider */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-[320px] w-px bg-gray-800"></div>

      {/* 🔹 Middle Line Above Logos */}
      <div className="absolute left-0 w-full h-px bg-gray-800 bottom-[180px] md:bottom-[320px]"></div>

      {/* 🔹 Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-800"></div>

      {/* 🔹 Main Content */}
      <div className="grid md:grid-cols-2 gap-12 relative z-10 pb-12">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-snug">
            Start Your Journey At <br />
            <span className="text-white">Pixla Academy</span>
          </h2>

          {/* 🔹 Timeline */}
          <div className="relative mt-4 ml-2">
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-start mb-14 z-10">
                {/* Circle */}
                <div className="flex flex-col items-center mr-4 relative">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold text-sm z-10 ${
                      i === 0
                        ? "bg-yellow-400 text-black"
                        : "border border-gray-500 text-white"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Line connecting to next circle */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-[40px] w-px h-16 bg-gray-600"></div>
                  )}
                </div>

                {/* Text */}
                <p className="text-[16px] text-gray-300 leading-relaxed pt-2">
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* 🔹 Button */}
          <button className="mt-8 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-yellow-500 transition">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center md:ml-10 mb-16">
          <p className="text-gray-300 text-[13px] leading-relaxed mb-6">
            Welcome to Pixla Academy! Our mission is to empower every student
            and job seeker with the skills, confidence, and opportunities needed
            to excel in today’s fast-evolving world. At Pixla Academy, we go
            beyond traditional learning—we combine hands-on training,
            mentorship, real-world projects, and career support to make you
            truly job-ready.
          </p>
          <p className="text-gray-300 text-[13px] leading-relaxed mb-6">
            Whether you’re aiming to kickstart your career, grow as a freelancer,
            or land your dream job, our programs are designed to guide you every
            step of the way. We believe in your potential and are committed to
            providing the tools, exposure, and network to help you succeed.
          </p>
          <p className="text-gray-300 text-[13px] leading-relaxed">
            Join us, learn with purpose, build your portfolio, and launch a
            professional journey that sets you apart. The future belongs to
            those who prepare for it today, and at Pixla Academy, we are here to
            ensure you’re ready.
          </p>

          {/* 🔹 Founder */}
          <div className="mt-8 flex flex-col items-center text-center">
            <img
              src={founderImg}
              alt="Founder"
              className="w-44 h-auto rounded-lg object-cover mb-3"
            />
            <p className="text-white font-semibold text-lg">
              - Rajasekar Sundaresan
            </p>
            <p className="text-gray-400 text-sm">Founder of Pixla Academy</p>
          </div>
        </div>
      </div>

      {/* 🔹 Logos Row (Bigger + Wider Spread) */}
      <div className="relative z-10 flex justify-between items-center flex-wrap gap-12 mt-16 mb-8 px-10 md:px-32">
        {[logo1, logo2, logo3, logo4, logo5].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Logo ${i}`}
            className="h-28 md:h-32 opacity-95 transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </section>
  );
};

export default JourneySection;
