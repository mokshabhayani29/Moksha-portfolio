"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

const skills = [
  {
    name: "React JS",
    icon: <FaReact />,
    percentage: 70,
    color: "text-cyan-400",
    bg: "#22d3ee",
  },

  {
    name: "Next JS",
    icon: <SiNextdotjs />,
    percentage: 70,
    color: "text-white",
    bg: "#ffffff",
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    percentage: 90,
    color: "text-cyan-300",
    bg: "#67e8f9",
  },

  {
    name: "JavaScript",
    icon: <FaJs />,
    percentage: 90,
    color: "text-yellow-300",
    bg: "#fde047",
  },

  {
    name: "Python",
    icon: <FaPython />,
    percentage: 90,
    color: "text-blue-300",
    bg: "#60a5fa",
  },

  {
    name: "Node JS",
    icon: <FaNodeJs />,
    percentage: 70,
    color: "text-green-400",
    bg: "#4ade80",
  },

  {
    name: "MongoDB",
    icon: <SiMongodb />,
    percentage: 60,
    color: "text-green-500",
    bg: "#22c55e",
  },

  {
    name: "Firebase",
    icon: <SiFirebase />,
    percentage: 60,
    color: "text-orange-300",
    bg: "#fb923c",
  },

  {
    name: "HTML5",
    icon: <FaHtml5 />,
    percentage: 80,
    color: "text-orange-500",
    bg: "#f97316",
  },

  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    percentage: 80,
    color: "text-blue-400",
    bg: "#38bdf8",
  },

  {
    name: "GitHub",
    icon: <FaGithub />,
    percentage: 80,
    color: "text-white",
    bg: "#9ca3af",
  },

  {
    name: "Figma",
    icon: <FaFigma />,
    percentage: 80,
    color: "text-pink-400",
    bg: "#f472b6",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 bg-[#111111] overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute left-1/2 top-0 w-[500px] h-[500px] bg-[#82ff1f]/10 blur-[180px] rounded-full -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <p className="uppercase tracking-[5px] text-[#82ff1f] text-sm mb-3">
            Expertise
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            
            <span className="text-[#82ff1f]"> Skills</span>
          </h2>

        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="flex flex-col items-center"
            >

              {/* Skill Name */}
              <h3 className="mb-6 text-center text-lg font-semibold">
                {skill.name}
              </h3>

              {/* Logo + Tube */}
              <div className="flex items-center gap-6">

                {/* Logo */}
                <div
                  className={`text-6xl ${skill.color}`}
                >
                  {skill.icon}
                </div>

                {/* Tube */}
                <div className="relative w-[90px] h-[240px] rounded-[60px] border border-white/20 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.05)]">

                  {/* Glass Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-20"></div>

                  {/* Liquid Fill */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{
                      height: `${skill.percentage}%`,
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 w-full"
                    style={{
                      background: skill.bg,
                      boxShadow: `0 0 30px ${skill.bg}`,
                    }}
                  >

                    {/* Wave */}
                    <div className="absolute top-0 left-0 w-[200%] h-10 bg-white/20 rounded-[40%] animate-wave"></div>

                  </motion.div>

                  {/* Percentage */}
                  <div className="absolute inset-0 flex items-center justify-center z-30">

                    <span className="text-2xl font-black text-white">
                      {skill.percentage}%
                    </span>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;