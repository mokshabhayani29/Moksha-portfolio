"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Engineering",
    institute: "MBIT College Anand",
    year: "2023 - Present",
    cgpa:"8.76",    
    description:
      "Focused on full stack development development, UI/UX design, AI-powered applications, and software engineering concepts while building modern digital products and real-world projects.",
  },

  {
    degree: "Higher Secondary Education",
    institute: "Tata Chem DAV Public School,Mithapur",
    year: "2021 - 2023",
    Percentage:"80%",
    description:
      "Completed higher secondary education with focus on science and technology fundamentals, problem solving, and analytical thinking.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-28 bg-[#111111] overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute left-1/2 top-0 w-[400px] h-[400px] bg-[#82ff1f]/10 blur-[140px] rounded-full -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[5px] text-[#82ff1f] text-sm mb-3">
            Education
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Academic
            <span className="text-[#82ff1f]"> Journey</span>
          </h2>

        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-[#82ff1f]/20 ml-4 md:ml-0">

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-16 ml-8"
            >

              {/* Dot */}
              <div className="absolute w-4 h-4 bg-[#82ff1f] rounded-full -left-2 shadow-[0_0_20px_#82ff1f]"></div>

              {/* Card */}
              <div className="p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#82ff1f]/40 transition duration-300">

                <span className="text-[#82ff1f] text-sm tracking-widest uppercase">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-3">
                  {item.degree}
                </h3>

                <h4 className="text-lg text-gray-400 mt-2">
                  {item.institute}
                </h4>
                <h5 className="text-lg text-gray-400 mt-2">
                  {item.cgpa}
                </h5>

                <p className="mt-5 text-gray-400 leading-8">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;