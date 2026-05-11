"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 bg-[#111111] overflow-hidden"
    >

      {/* Glow Effects */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#82ff1f]/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* CTA BOX */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[40px] border border-[#82ff1f]/20 bg-white/5 backdrop-blur-xl p-10 md:p-16 text-center shadow-[0_0_40px_rgba(130,255,31,0.1)]"
        >

          <p className="uppercase tracking-[5px] text-[#82ff1f] text-sm mb-4">
            Ready To Work Together?
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Let’s Build Something
            <span className="text-[#82ff1f]"> Amazing</span>
          </h2>

          <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            I design and develop modern digital products, responsive web
            applications, and AI-powered experiences that combine creativity
            with functionality.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="https://calendly.com/mokshabhayani/30min"
              target="blank"
              className="inline-block px-8 py-4 rounded-full bg-[#82ff1f] text-black font-semibold hover:scale-105 transition duration-300 shadow-[0_0_30px_#82ff1f]"
            >
              Schedule a Consultation
            </a>
          </div>

        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* Email */}
          <motion.a
            whileHover={{ y: -8 }}
            href="mailto:mmbart89@gmail.com"
            className="p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#82ff1f]/40 transition duration-300"
          >
            <HiOutlineMail className="text-4xl text-[#82ff1f]" />

            <h3 className="mt-6 text-2xl font-bold">
              Email
            </h3>

            <p className="mt-3 text-gray-400 break-all">
              mmbart89@gmail.com
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ y: -8 }}
            href="https://www.linkedin.com/in/moksha-bhayani-6764b0317"
            target="_blank"
            className="p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#82ff1f]/40 transition duration-300"
          >
            <FaLinkedin className="text-4xl text-[#82ff1f]" />

            <h3 className="mt-6 text-2xl font-bold">
              LinkedIn
            </h3>

            <p className="mt-3 text-gray-400">
              Connect Professionally
            </p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ y: -8 }}
            href="https://github.com/mokshabhayani29"
            target="_blank"
            className="p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#82ff1f]/40 transition duration-300"
          >
            <FaGithub className="text-4xl text-[#82ff1f]" />

            <h3 className="mt-6 text-2xl font-bold">
              GitHub
            </h3>

            <p className="mt-3 text-gray-400">
              Explore My Code
            </p>
          </motion.a>

        </div>

        {/* Footer */}
        <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">

          <h2 className="text-2xl font-bold">
            MOKSHA
            <span className="text-[#82ff1f]">.</span>
          </h2>

          <p className="text-gray-500 text-center">
            © 2026 Moksha Bhayani. Crafted with creativity & modern web technologies.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Contact;