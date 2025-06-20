'use client'
import { motion } from 'framer-motion'
import { ArrowRight, BrainCircuit, Users, Bot, Sparkles } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'

const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex flex-col justify-center items-center text-center pt-20 pb-10 relative overflow-hidden"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="mb-6">
            <Sparkles className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4 neon-glow"
            variants={itemVariants}
          >
            The future of AI is <span className="text-gradient">collaborative.</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            HMS Homies AI Collective is where Harvard alumni connect, create, and redefine the boundaries of artificial intelligence.
          </motion.p>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 neon-glow">
            Built for the <span className="text-gradient">AI-curious.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <Link href="/learn" className="no-underline">
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-card p-6 h-full"
              >
                <div className="flex flex-col items-center text-center text-[#60A5FA]">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 relative">
                    <span className="absolute inset-0 rounded-full bg-[#60A5FA]/20 animate-pulse" />
                    <span className="relative z-10">
                      <BrainCircuit size={40} className="text-[#60A5FA]" />
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Learn Together</h3>
                  <p className="opacity-80">Master AI fundamentals and advanced concepts with friends.</p>
                </div>
              </motion.div>
            </Link>
            <Link href="/community" className="no-underline">
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-card p-6 h-full"
              >
                <div className="flex flex-col items-center text-center text-[#60A5FA]">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 relative">
                    <span className="absolute inset-0 rounded-full bg-[#60A5FA]/20 animate-pulse" />
                    <span className="relative z-10">
                      <Users size={40} className="text-[#60A5FA]" />
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Build Community</h3>
                  <p className="opacity-80">Connect with a passionate network of Harvard innovators.</p>
                </div>
              </motion.div>
            </Link>
            <Link href="/create" className="no-underline">
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-card p-6 h-full"
              >
                <div className="flex flex-col items-center text-center text-[#60A5FA]">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 relative">
                    <span className="absolute inset-0 rounded-full bg-[#60A5FA]/20 animate-pulse" />
                    <span className="relative z-10">
                      <Bot size={40} className="text-[#60A5FA]" />
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Create with AI</h3>
                  <p className="opacity-80">Apply your skills to real-world projects and see your ideas come to life.</p>
                </div>
              </motion.div>
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Content Showcase Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
            <div className="max-w-md mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden animated-border"
              >
                <Image
                  src="/community-photo.jpg"
                  alt="A group of friends enjoying their time together"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover w-full h-full"
                />
              </motion.div>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4 neon-glow">
                The Homies AI <span className="text-gradient">Community</span>
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                More than a network&mdash;it&apos;s a family of innovators, thinkers, and friends, learning and building together.
              </p>
              <Link href="/community" className="group inline-flex items-center gap-2 relative">
                <span className="text-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                  Explore the community
                </span>
                <ArrowRight size={20} className="text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all" />
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-24 px-4">
            <div className="md:order-2 max-w-md mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden animated-border"
              >
                <Image
                  src="/team-photo.jpg"
                  alt="A team of professionals in a futuristic medical environment"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover w-full h-full"
                />
              </motion.div>
            </div>
            <div className="md:order-1">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 neon-glow">
                Daily AI <span className="text-gradient">Insights</span>
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                Get ahead with curated tips and tricks from AI experts in the Harvard community, delivered daily.
              </p>
              <Link href="/insights" className="group inline-flex items-center gap-2 relative">
                <span className="text-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                  Read the latest insights
                </span>
                <ArrowRight size={20} className="text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all" />
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <AnimatedSection className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 neon-glow">
            Ready to <span className="text-gradient">join?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">Become part of the HMS Homies AI Collective network.</p>
        </AnimatedSection>
      </section>
    </div>
  )
}
