"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "IntelliHelp AI Chatbot",
    description:
      "AI-powered chatbot with intelligent knowledge retrieval and context-aware responses for modern support systems.",
    tech: ["React", "Python", "AI", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Hostel Management Website",
    description:
      "Dynamic hostel platform with fee payment integration, student management, announcements, and responsive UI.",
    tech: ["Next.js", "MongoDB", "Tailwind", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Suraksha Yatra",
    description:
      "Safety-focused travel app with panic alerts, emergency support, and location-based protection features.",
    tech: ["React", "Firebase", "Maps API", "UI/UX"],
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Pothole Detection System",
    description:
      "AI-based pothole detection system using image processing and machine learning techniques for automated road damage recognition and smart transportation monitoring.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  },
  {
  title: "Ionosphere Learning App",
  description:
    "Interactive learning platform designed for GD & PI preparation with structured learning resources, practice modules, and engaging user experience.",
  tech: ["React", "UI/UX", "Frontend", "Education"],
  image:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
 },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-28 bg-[#111111] overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#82ff1f]/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[5px] text-[#82ff1f] text-sm mb-3">
            Featured Work
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Selected
            <span className="text-[#82ff1f]"> Projects</span>
          </h2>

        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group rounded-[35px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#82ff1f]/40 transition duration-500 shadow-[0_0_30px_rgba(130,255,31,0.05)]"
            >

              {/* Image */}
              <div className="overflow-hidden h-[260px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#82ff1f] transition duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full text-sm border border-[#82ff1f]/20 bg-[#82ff1f]/10 text-[#82ff1f]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-5 mt-8">

                  <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#82ff1f] text-black font-semibold hover:scale-105 transition duration-300">
                    <FiExternalLink />
                    Live Demo
                  </button>

                  <button className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 hover:border-[#82ff1f] hover:text-[#82ff1f] transition duration-300">
                    <FaGithub />
                    GitHub
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;