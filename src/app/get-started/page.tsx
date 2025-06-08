'use client';
import { motion } from 'framer-motion';

export default function GetStartedPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-4 neon-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Join the <span className="text-gradient">Collective</span>
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-300 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Ready to connect, learn, and build with fellow Harvard innovators? Fill out the form below to join our waitlist and get notified about upcoming events.
      </motion.p>
      
      {/* Placeholder for a signup form */}
      <motion.div
        className="glass-card p-8 max-w-lg mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-6">Coming Soon</h2>
        <p className="text-gray-400">Our sign-up form is under construction. Please check back later!</p>
      </motion.div>
    </div>
  );
} 