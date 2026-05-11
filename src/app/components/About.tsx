"use client";

import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "UI/UX Design",
  "JavaScript",
  "Python",
  "AI Integration",
  "API Development",
  "Responsive Design",
  "Frontend Development",
];

const stats = [
  { number: "5+", label: "Projects Built" },
  { number: "10+", label: "Technologies" },
  { number: "100%", label: "Responsive Designs" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#111111] overflow-hidden"
    >

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#82ff1f]/10 blur-[120px] rounded-full"></div>

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
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Building Modern Digital
            <span className="text-[#82ff1f]"> Experiences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-gray-400 leading-8 text-lg">
              I’m Moksha Bhayani, a Computer Engineering student passionate
              about frontend development, UI/UX design, and AI-powered
              applications. I enjoy creating visually engaging and highly
              functional digital products that deliver smooth user experiences.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6">
              My focus is on building responsive web applications, modern
              interfaces, and intelligent systems that combine creativity
              with technical innovation.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-4 mt-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08 }}
                  className="px-5 py-3 rounded-full border border-[#82ff1f]/30 bg-white/5 backdrop-blur-lg text-sm hover:bg-[#82ff1f] hover:text-black transition duration-300 cursor-pointer"
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* Resume Button */}
            <div className="mt-10">
              <a
                href="https://drive.google.com/drive/folders/16EE2LAcOaRHCIoknbrI8QkrB4qXH14WL"
                target="_blank"
                className="inline-block px-8 py-4 rounded-full bg-[#82ff1f] text-black font-semibold hover:scale-105 transition duration-300 shadow-[0_0_25px_#82ff1f]"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="p-8 rounded-[30px] border border-[#82ff1f]/20 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(130,255,31,0.1)]"
              >

                <h3 className="text-5xl font-black text-[#82ff1f]">
                  {stat.number}
                </h3>

                <p className="mt-3 text-gray-400 text-lg">
                  {stat.label}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;