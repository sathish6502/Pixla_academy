import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import cityImg from "./../../assets/About/location1.png"; // image path

const locations = [
  {
    city: "Bengaluru",
    address: [
      "Pixla Academy",
      "1. Bengaluru (Main Headquarters)",
      "2nd Floor, Reliance Smart Bazaar Building, Hosur Rd, Opp. E City Bus Stop, Phase II, Electronic City",
      "Bengaluru, Karnataka 560100",
    ],
  },
  {
    city: "Chennai",
    address: [
      "Pixla Academy",
      "2. Chennai Campus",
      "No. 18, SIPCOT IT Park, Tech Park A-29,",
      "3rd Cross Road, Siruseri, Tamil Nadu – 603103",
    ],
  },
  {
    city: "Krishnagiri",
    address: [
      "Pixla Academy",
      "3. Krishnagiri Campus",
      "Opp. St Joseph’s Polytechnic College & 1, NH-44",
      "Krishnagiri, Tamil Nadu - 635001",
    ],
  },
];

const CampusLocation = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % locations.length);
  const prev = () => setIndex((i) => (i - 1 + locations.length) % locations.length);
  const current = locations[index];

  return (
    <section className="flex flex-col md:flex-row w-full h-[600px]">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col justify-between relative text-white bg-black/60">
        <div className="flex justify-center items-center flex-1">
          <img
            src={cityImg}
            alt="City Illustration"
            className="max-w-[90%] h-70 opacity-80 ml-110"
          />
        </div>

        <div className="p-19">
          <h2 className="text-3xl font-semibold mb-2">{current.address[0]}</h2>
          <p className="font-semibold text-xl">{current.address[1]}</p>
          <p className="text-gray-200 text-xl leading-relaxed mt-1">
            {current.address[2]}
          </p>
          <p className="text-gray-200 text-xl leading-relaxed mt-1">
            {current.address[3]}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-start p-20 relative">
        <div>
          <p className="text-sm text-white/60 mb-4 uppercase font-semibold">Location</p>
          <h3 className="text-4xl font-semibold leading-snug">
            Explore Our <br />
            Campuses{" "}
            <span className="text-yellow-400 font-semibold">Location</span>
          </h3>

          {/* ✨ Animated City Name */}
          <div className="mt-20 relative h-[90px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={current.city}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute text-3xl md:text-6xl font-bold tracking-wide"
              >
                {current.city}
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-20 right-80 flex space-x-8">
          <button
            onClick={prev}
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CampusLocation;
