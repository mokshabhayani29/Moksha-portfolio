"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(window.tsParticles);
      setInit(true);
    };

    initParticles();
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: {
            value: "#111111",
          },
        },

        particles: {
          number: {
            value: 50,
          },

          color: {
            value: "#82ff1f",
          },

          links: {
            enable: true,
            color: "#82ff1f",
            distance: 150,
            opacity: 0.2,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: { min: 1, max: 3 },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;