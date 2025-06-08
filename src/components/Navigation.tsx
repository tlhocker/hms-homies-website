'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/#features', label: 'Features' },
    { href: '/community', label: 'Community' },
    { href: '/insights', label: 'Insights' },
    { href: '/ai-tools', label: 'AI Tools' },
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'border-b border-gray-800/20 bg-black/60 backdrop-blur-xl shadow-[0_0_15px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex-shrink-0 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <Image 
                src="/hms-logo.jpg" 
                alt="HMS Homies AI Collective Logo" 
                width={100} 
                height={100} 
                className="h-16 w-auto relative border-2 border-transparent hover:border-blue-500/50 transition-all duration-300" 
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-12">
            {navLinks.map((link) => (
              <motion.div 
                key={link.href}
                whileHover={{ y: -2 }}
                className="relative group"
              >
                <Link 
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative"
                  onMouseEnter={() => setActiveLink(link.href)}
                  onMouseLeave={() => setActiveLink('')}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left transition-transform duration-300 ${
                    activeLink === link.href ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                </Link>
              </motion.div>
            ))}
            <Link href="/get-started">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Sign Up
              </motion.button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20 
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-t border-gray-800/30 shadow-lg`}
      >
        <div className="px-5 pt-5 pb-8 space-y-6">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ x: 10 }}
              className="relative group"
            >
              <Link 
                href={link.href}
                className="block text-base font-medium text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <Link href="/get-started" className="w-full">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium py-3 rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg"
            >
              Sign Up
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.header>
  )
}

export default Navigation 