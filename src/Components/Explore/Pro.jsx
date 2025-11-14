import React, { useState, useEffect } from "react";

const cards = [
  {
    title: "Pixla Spark",
    img: "https://via.placeholder.com/400x400/222/fff?text=Pixla+Spark",
  },
  {
    title: "Pixla Learn",
    img: "https://via.placeholder.com/400x400/333/fff?text=Pixla+Learn",
  },
  {
    title: "Pixla Elevate",
    img: "https://via.placeholder.com/400x400/444/fff?text=Pixla+Elevate",
  },
  {
    title: "Pixla Deploy",
    img: "https://via.placeholder.com/400x400/555/fff?text=Pixla+Deploy",
  },
  {
    title: "Pixla Edge",
    img: "https://via.placeholder.com/400x400/666/fff?text=Pixla+Edge",
  },
];

const backCourses = [
  "MERN Full Stack",
  "MEAN Full Stack",
  "AI Full Stack",
  "Flutter Full Stack",
  "Java Full Stack",
  "Python Full Stack",
  "DevOps",
  "Software Testing",
  "UI/UX Design",
  "Digital Marketing",
];

const ProgramsSection = () => {
  const [flipped, setFlipped] = useState(Array(cards.length).fill(false));

  // Auto move animation logic
  useEffect(() => {
    const scrollContainer = document.getElementById("autoScroll");
    let scrollAmount = 0;
    let direction = 1; // 1 = right, -1 = left

    const scroll = setInterval(() => {
      if (!scrollContainer) return;
      scrollAmount += direction * 1.2; // speed
      scrollContainer.scrollLeft = scrollAmount;

      // reverse direction when reaching edges
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth - 2
      ) {
        direction = -1;
      } else if (scrollContainer.scrollLeft <= 0) {
        direction = 1;
      }
    }, 20);

    return () => clearInterval(scroll);
  }, []);

  const handleFlip = (index) => {
    const updated = [...flipped];
    updated[index] = !updated[index];
    setFlipped(updated);
  };

  return (
    <section className="bg-gray-50 text-black px-6 md:px-20 py-20">
      {/* Section Title */}
      <div className="mb-12 text-center md:text-left">
        <p className="text-lg text-gray-700 mb-2 font-medium">Programs</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Innovative Programs <br /> Designed For Future
        </h2>
      </div>

      {/* Cards Row */}
      <div
        id="autoScroll"
        className="flex gap-8 overflow-x-auto pb-8 no-scrollbar justify-start"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[400px] cursor-pointer perspective flex-shrink-0"
            onClick={() => handleFlip(index)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flipped[index] ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div className="absolute w-full h-full bg-gray-200 rounded-2xl shadow-lg flex flex-col justify-end items-center overflow-hidden backface-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                <h3 className="text-white font-bold text-2xl mb-6 relative z-10">
                  {card.title}
                </h3>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full bg-black text-white rounded-2xl shadow-lg rotate-y-180 backface-hidden flex flex-col justify-center items-center p-6">
                <h3 className="text-xl font-semibold mb-4 underline decoration-yellow-400">
                  Courses Offered
                </h3>
                <ul className="text-sm space-y-2 text-gray-300 text-center">
                  {backCourses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
