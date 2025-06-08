'use client';
import { motion } from 'framer-motion';

export default function CreatePage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-4 neon-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Create with <span className="text-gradient">AI</span>
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-300 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Apply your skills to real-world projects, access powerful tools, and see your ideas come to life.
      </motion.p>
      
      <motion.div
        className="glass-card p-8 max-w-lg mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-6">Project Incubator</h2>
        <p className="text-gray-400">Our project showcase and collaboration tools are launching soon. Get ready to build!</p>
      </motion.div>
    </div>
  );
} 