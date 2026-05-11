"use client";

import { motion } from "framer-motion";

const techStack = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "UI/UX Design",
  "JavaScript",
  "Python",
  "AI Integration",
  "Machine Learning",
  "Framer Motion",
  "Responsive Design",
  "API Development",
  "Frontend Development",
];

const TechMarquee = () => {
  return (
    <section className="relative py-10 overflow-hidden border-y border-white/10 bg-black">

      {/* Glow */}
      <div className="absolute inset-0 bg-[#82ff1f]/5 blur-3xl"></div>

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="flex gap-8 whitespace-nowrap"
      >

        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="px-6 py-3 rounded-full border border-[#82ff1f]/20 bg-white/5 backdrop-blur-xl text-[#82ff1f] font-medium text-lg shadow-[0_0_20px_rgba(130,255,31,0.08)]"
          >
            {tech}
          </div>
        ))}

      </motion.div>
    </section>
  );
};

export default TechMarquee;