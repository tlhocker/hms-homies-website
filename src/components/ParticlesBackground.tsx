"use client";
import { Particles } from "@tsparticles/react";

export default function ParticlesBackground() {
  const particlesOptions: any = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 60,
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#60A5FA" },
      links: { enable: true, color: "#60A5FA", opacity: 0.2, distance: 120 },
      move: { enable: true, speed: 0.5, outModes: { default: 'out' } },
      opacity: { value: 0.2 },
      size: { value: 2 },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 80, duration: 0.4 } },
    },
    detectRetina: true,
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles id="tsparticles" options={particlesOptions} className="w-full h-full" />
    </div>
  );
} 