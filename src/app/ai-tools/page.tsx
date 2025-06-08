'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SiOpenai, SiGoogle, SiAnthropic, SiGooglescholar } from 'react-icons/si';
import { BrainCircuit, BookOpen } from 'lucide-react';

const tools = [
  {
    category: 'Large Language Models',
    items: [
      { name: 'ChatGPT', icon: <SiOpenai size={48} className="text-white" />, href: 'https://chat.openai.com/' },
      { name: 'Google Gemini', icon: <SiGoogle size={48} className="text-white" />, href: 'https://gemini.google.com/' },
      { name: 'Claude', icon: <SiAnthropic size={48} className="text-white" />, href: 'https://claude.ai/' },
    ],
  },
  {
    category: 'AI Research & Productivity Tools',
    items: [
      { name: 'NotebookLM', icon: <BookOpen size={48} className="text-white" />, href: 'https://notebooklm.google.com/' },
      { name: 'Google Learn About', icon: <SiGoogle size={48} className="text-white" />, href: 'https://learning.google.com/experiments/learn-about' },
      { name: 'OpenEvidence', icon: <SiGooglescholar size={48} className="text-white" />, href: 'https://www.openevidence.com/' },
      { name: 'Google AI Studio', icon: <BrainCircuit size={48} className="text-white" />, href: 'https://aistudio.google.com/prompts/new_chat' },
    ],
  },
];

const ToolCard = ({ name, icon, href }: { name: string; icon: React.ReactNode; href: string }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      className="glass-card p-6 h-40 flex flex-col justify-center items-center gap-4 transition-all duration-300"
    >
      {icon}
      <p className="text-lg font-semibold text-gray-200">{name}</p>
    </motion.div>
  </Link>
);

export default function AIToolsPage() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-center mb-12 neon-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Essential <span className="text-gradient">AI Tools</span>
      </motion.h1>
      
      {tools.map((section, index) => (
        <div key={section.category} className="mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-left border-b border-gray-700 pb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
          >
            {section.category}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {section.items.map((tool, toolIndex) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + toolIndex * 0.1 }}
              >
                <ToolCard {...tool} />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 