"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[99999] bg-[#111111] flex items-center justify-center overflow-hidden"
        >

          {/* Background Glow */}
          <div className="absolute w-[400px] h-[400px] bg-[#82ff1f]/10 blur-[120px] rounded-full"></div>

          <div className="relative flex flex-col items-center">

            {/* Animated Logo */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-black tracking-wider"
            >
              MOKSHA
              <span className="text-[#82ff1f]">.</span>
            </motion.h1>

            {/* Loading Bar */}
            <div className="w-[220px] h-[5px] bg-white/10 rounded-full overflow-hidden mt-10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
                className="h-full bg-[#82ff1f]"
              />
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 text-gray-400 tracking-[5px] uppercase text-sm"
            >
              Loading Portfolio
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;