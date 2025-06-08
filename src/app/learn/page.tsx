'use client';
import { motion } from 'framer-motion';
import { SiOpenai, SiGooglegemini, SiGooglecloud, SiGoogle } from 'react-icons/si';
import { FaRobot, FaBookReader, FaSearchengin } from 'react-icons/fa';
import Link from 'next/link';

export default function LearnPage() {
  const aiTools = [
    {
      name: 'ChatGPT',
      icon: SiOpenai,
      url: 'https://chat.openai.com',
      description: [
        'Your versatile AI assistant for daily tasks',
        'Summarize research papers and create literature reviews',
        'Draft professional emails and correspondence',
        'Create patient education materials',
        'Help with personal tasks like meal planning and event organization'
      ],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      name: 'Google Gemini',
      icon: SiGooglegemini,
      url: 'https://gemini.google.com',
      description: [
        'Advanced AI with powerful visual analysis capabilities',
        'Review and analyze medical imaging',
        'Understand complex lab results and data',
        'Help children with homework and educational tasks',
        'Assist with visual projects like home renovation planning'
      ],
      color: 'from-blue-400 to-cyan-300'
    },
    {
      name: 'Claude',
      icon: FaRobot,
      url: 'https://claude.ai',
      description: [
        'Exceptional at detailed analysis and ethical reasoning',
        'Analyze complex medical cases and scenarios',
        'Review and improve research protocols',
        'Draft detailed grant proposals',
        'Assist with personal financial planning'
      ],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      name: 'OpenEvidence',
      icon: FaSearchengin,
      url: 'https://openevidence.com',
      description: [
        'Specialized medical research and evidence synthesis',
        'Quick access to relevant clinical studies',
        'Stay updated on latest medical guidelines',
        'Support evidence-based decision making',
        'Perfect for time-constrained clinicians'
      ],
      color: 'from-blue-400 to-cyan-300'
    },
    {
      name: 'Google AI Studio',
      icon: SiGooglecloud,
      url: 'https://makersuite.google.com',
      description: [
        'Create custom AI tools without coding',
        'Build automated patient FAQ systems',
        'Develop clinical calculators and tools',
        'Design personal productivity assistants',
        'Streamline repetitive tasks in your practice'
      ],
      color: 'from-blue-400 to-cyan-300'
    },
    {
      name: 'NotebookLM',
      icon: FaBookReader,
      url: 'https://notebooklm.google.com',
      description: [
        'Your intelligent research companion',
        'Analyze and extract key findings from documents',
        'Generate comprehensive research summaries',
        'Organize continuing education materials',
        'Track and synthesize medical literature'
      ],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      name: 'Google Learn',
      icon: SiGoogle,
      url: 'https://cloud.google.com/learn',
      description: [
        'Comprehensive AI learning platform',
        'Master AI fundamentals at your own pace',
        'Learn advanced healthcare AI applications',
        'Enhance your clinical practice with AI',
        'Improve personal productivity through AI'
      ],
      color: 'from-blue-400 to-cyan-300'
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-glow">
          AI <span className="text-gradient">Tools</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore workshops, tutorials, and learning resources curated by the HMS Homies AI Collective. Master new skills with friends.
        </p>
      </div>

      {/* AI Tools Grid */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {aiTools.map((tool) => (
            <motion.a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 flex flex-col items-center text-center group hover:bg-white/5 no-underline"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`w-96 h-96 rounded-full flex items-center justify-center mb-12 bg-gradient-to-r ${tool.color} group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                <tool.icon className="w-72 h-72 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-gradient neon-glow">{tool.name}</h3>
              <ul className="text-left space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tool.description.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#60A5FA] mr-2">•</span>
                    <span className="leading-relaxed text-[#60A5FA] no-underline">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
} 