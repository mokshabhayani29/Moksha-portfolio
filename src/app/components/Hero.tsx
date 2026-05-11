"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#111111] overflow-hidden flex items-center pt-24">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#82ff1f]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#82ff1f]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-[#82ff1f] uppercase tracking-[6px] mb-4 text-sm">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            MOKSHA
            <br />

            <span className="bg-gradient-to-r from-[#82ff1f] to-white text-transparent bg-clip-text">
              BHAYANI
            </span>
          </h1>

          {/* Roles */}
          <div className="mt-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
              Web Developer | UI/UX Designer | AI Builder
            </h2>
          </div>

          {/* Description */}
          <p className="mt-8 text-gray-400 leading-8 max-w-xl text-lg">
            I’m a Computer Engineering student specializing in frontend
            development, UI/UX design, and AI-powered web applications.
            I design and build modern digital products with clean user
            experiences and intelligent features.
          </p>

          
          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-2xl">

            <a
              href="https://github.com/mokshabhayani29"
              target="_blank"
              className="hover:text-[#82ff1f] hover:scale-125 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/moksha-bhayani-6764b0317"
              target="_blank"
              className="hover:text-[#82ff1f] hover:scale-125 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className="hover:text-[#82ff1f] hover:scale-125 transition duration-300"
            >
              <HiOutlineMail />
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-[40px] bg-[#82ff1f]/20 blur-3xl"></div>

            {/* Profile Card */}
            <div className="relative w-[320px] md:w-[400px] h-[420px] md:h-[500px] rounded-[40px] border border-[#82ff1f]/30 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(130,255,31,0.2)]">

              <img
                src="/profile.jpg"
                alt="Moksha"
                className="w-full h-full object-cover"
              />

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;