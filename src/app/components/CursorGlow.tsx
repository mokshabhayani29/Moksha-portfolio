"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 100,
        y: position.y - 100,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full bg-[#82ff1f]/10 blur-[90px] pointer-events-none z-[9999]"
    />
  );
};

export default CursorGlow;