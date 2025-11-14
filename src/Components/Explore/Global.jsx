import React from "react";
import { Globe, Briefcase, Award, Lightbulb } from "lucide-react";
import training from "./../../assets/About/training.jpg";
import internship from "./../../assets/About/internship.jpg";
import freelance from "./../../assets/About/freelance.png";
import handshake from "./../../assets/About/handshake.jpg";

const AboutPixla = () => {
  return (
    <section className="bg-white px-6 sm:px-10 md:px-20 py-16 md:py-20">
      {/* Two Column Grid: Left (Heading + Images) | Right (Content) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start mb-16 md:mb-20">
        {/* LEFT SIDE */}
        <div>
          {/* Heading */}
          <p className="text-sm font-medium text-gray-700 mb-2">
            About Pixla Academy
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-8">
            A Global University <br className="hidden md:block" /> for the Next Generation
          </h2>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={training}
              alt="Training"
              className="rounded-lg w-full h-36 sm:h-40 object-cover"
            />
            <img
              src={internship}
              alt="Internship"
              className="rounded-lg w-full h-36 sm:h-40 object-cover"
            />
            <img
              src={freelance}
              alt="Freelance"
              className="rounded-lg w-full h-36 sm:h-40 object-cover"
            />
            <img
              src={handshake}
              alt="Handshake"
              className="rounded-lg w-full h-36 sm:h-40 object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE — Text Content */}
        <div className="text-gray-800 leading-relaxed text-[15px] sm:text-[16px] md:text-[15px]">
          <p className="mb-5">
            <strong>Pixla Academy</strong> is India’s largest skill training and
            placement company, dedicated to transforming students into job-ready
            professionals. Our programs combine cutting-edge training,
            real-world projects, internships, and direct job deployment
            assistance to ensure every learner achieves career success.
          </p>

          <p className="mb-4">
            We bridge the gap between education and employment by providing:
          </p>

          <ul className="list-none mb-4 space-y-1">
            <li>
              <strong>Hands-on Training:</strong> Learn from industry experts
              with live, instructor-led sessions.
            </li>
            <li>
              <strong>Internship Opportunities:</strong> Gain real-world
              experience with our partner companies.
            </li>
            <li>
              <strong>Career Support:</strong> Resume building, interview
              preparation, and placement assistance.
            </li>
            <li>
              <strong>Direct Deployment Assistance:</strong> We help you secure
              your first job with our industry connections.
            </li>
            <li>
              <strong>Freelancing Guidance:</strong> Kickstart your freelance
              journey with mentorship and project exposure.
            </li>
          </ul>

          <p>
            <strong>Pixla Academy</strong> empowers students to acquire skills,
            gain experience, and launch successful careers in technology,
            marketing, and beyond.
          </p>
        </div>
      </div>

      {/* Bottom Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            icon: <Globe className="w-6 h-6 mb-3 text-gray-800" />,
            title: "Global Network",
            text: "Connect students with top companies, mentors, and industry professionals across India and beyond, opening doors to real opportunities.",
          },
          {
            icon: <Briefcase className="w-6 h-6 mb-3 text-gray-800" />,
            title: "Career Focus",
            text: "From Pixla Learn to Pixla Deploy, our programs ensure students gain job-ready skills, internships, and guaranteed placement support.",
          },
          {
            icon: <Award className="w-6 h-6 mb-3 text-gray-800" />,
            title: "Excellence",
            text: "High-quality training with hands-on projects, live mentoring, and continuous assessments to help students achieve professional success.",
          },
          {
            icon: <Lightbulb className="w-6 h-6 mb-3 text-gray-800" />,
            title: "Innovation",
            text: "Cutting-edge curriculum and practical exposure ensure students stay ahead in technology, freelancing, and entrepreneurship.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="border border-gray-500 rounded-xl p-6 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 bg-white cursor-pointer"
          >
            {item.icon}
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPixla;
