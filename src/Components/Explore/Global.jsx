import React from "react";
import { Globe, Briefcase, Award, Lightbulb } from "lucide-react";
import training from "./../../assets/About/training.jpg";
import internship from "./../../assets/About/internship.jpg";
import freelance from "./../../assets/About/freelance.png";
import handshake from "./../../assets/About/handshake.jpg";

const AboutPixla = () => {
  return (
    <section className="bg-white px-20 py-20">
      {/* Header */}
      <p className="text-sm font-medium text-gray-700 mb-2">
        About Pixla Academy
      </p>
      <h2 className="text-4xl font-bold leading-snug mb-10">
        A Global University <br /> for the Next Generation
      </h2>

      {/* Main Section */}
      <div className="flex items-start gap-12 mb-16">
        {/* Left Images */}
        <div className="grid grid-cols-2 gap-4 w-1/2">
          <img
            src={training}
            alt="Training"
            className="rounded-md w-full h-40 object-cover"
          />
          <img
            src={internship}
            alt="Internship"
            className="rounded-md w-full h-40 object-cover"
          />
          <img
            src={freelance}
            alt="Freelance"
            className="rounded-md w-full h-40 object-cover"
          />
          <img
            src={handshake}
            alt="Handshake"
            className="rounded-md w-full h-40 object-cover"
          />
        </div>

        {/* Right Text - aligned top */}
        <div className="w-1/2 text-gray-800 leading-relaxed self-start">
          <p className="mb-4">
            <strong>Pixla Academy</strong> is India’s largest skill training and
            placement company, dedicated to transforming students into
            job-ready professionals. Our programs combine cutting-edge training,
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
      <div className="grid grid-cols-4 gap-6">
        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition">
          <Globe className="w-6 h-6 mb-3 text-gray-800" />
          <h3 className="font-semibold text-lg mb-2">Global Network</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Connect students with top companies, mentors, and industry
            professionals across India and beyond, opening doors to real
            opportunities.
          </p>
        </div>

        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition">
          <Briefcase className="w-6 h-6 mb-3 text-gray-800" />
          <h3 className="font-semibold text-lg mb-2">Career Focus</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            From Pixla Learn to Pixla Deploy, our programs ensure students gain
            job-ready skills, internships, and guaranteed placement support.
          </p>
        </div>

        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition">
          <Award className="w-6 h-6 mb-3 text-gray-800" />
          <h3 className="font-semibold text-lg mb-2">Excellence</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            High-quality training with hands-on projects, live mentoring, and
            continuous assessments to help students achieve professional
            success.
          </p>
        </div>

        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition">
          <Lightbulb className="w-6 h-6 mb-3 text-gray-800" />
          <h3 className="font-semibold text-lg mb-2">Innovation</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Cutting-edge curriculum and practical exposure ensure students stay
            ahead in technology, freelancing, and entrepreneurship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPixla;
