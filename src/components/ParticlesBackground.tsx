"use client";
import { useEffect } from 'react';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(tsParticles);
      
      await tsParticles.load({
        id: 'tsparticles',
        options: {
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            color: {
              value: "#60A5FA",
            },
            links: {
              color: "#60A5FA",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            number: {
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            size: {
              value: 2,
            },
          },
        },
      });
    };

    initParticles();
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" id="tsparticles" />
  );
} 