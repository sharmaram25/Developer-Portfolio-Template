import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Scene3D from '../3D/Scene3D'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* 3D Background Scene */}
      <Scene3D />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-6 sm:px-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <span className="text-primary-400 text-lg font-medium tracking-wider uppercase">
            Hello, I'm
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="gradient-text">
            Your Name
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 mb-8"
        >
          Full Stack Developer & 
          <span className="text-secondary-400"> Creative Technologist</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          I craft digital experiences that blend beautiful design with powerful functionality. 
          Specializing in modern web technologies and innovative solutions that make a difference.
        </motion.p>        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-primary-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              View My Work
              <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get In Touch
          </motion.button>        </motion.div>        {/* Elegant Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 2.5,
            duration: 0.8,
            ease: "easeOut"
          }}
          whileHover={{ y: -5 }}
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          {/* Glass Morphism Container */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-3 shadow-2xl">
            {/* Animated Chevron */}
            <motion.div
              className="relative"
              animate={{
                y: [0, 4, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-white/70 group-hover:text-white transition-colors duration-300"
              >
                <motion.path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 3,
                    ease: "easeInOut"
                  }}
                />
              </svg>
            </motion.div>
            
            {/* Subtle Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20"
              animate={{
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          {/* Floating Progress Dots */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-white/30 rounded-full"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
