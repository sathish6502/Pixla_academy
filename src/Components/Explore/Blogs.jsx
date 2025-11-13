import React from "react";
import blog1 from "./../../assets/Explore/Blog1.jpg"; // replace with your actual image path
import blog2 from "./../../assets/Explore/Blog2.jpg";
import blog3 from "./../../assets/Explore/Blog3.jpg";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      title: "Student Startup Wins National Tech Award",
      description:
        "What I love Meet is the diversity– people from different background, Cultures, and perspectives. It’s not just a university.",
    },
    {
      id: 2,
      image: blog2,
      title: "Global Partnership With Seoul Tech Announced",
      description:
        "What I love Meet is the diversity– people from different background, Cultures, and perspectives. It’s not just a university.",
    },
    {
      id: 3,
      image: blog3,
      title: "Graduation Ceremony Celebrates Over 2,000 Alumni",
      description:
        "What I love Meet is the diversity– people from different background, Cultures, and perspectives. It’s not just a university.",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-20 bg-white">
      <h2 className="text-4xl font-semibold mb-12">Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogPosts.map((blog) => (
          <div key={blog.id} className="flex flex-col">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-50 object-cover mb-6 "
            />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {blog.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {blog.description}
            </p>
            <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full w-fit hover:bg-yellow-500 transition-all duration-300 shadow-md">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
