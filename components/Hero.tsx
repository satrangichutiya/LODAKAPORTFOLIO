"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown, Github, ExternalLink, Terminal } from 'lucide-react'

export default function Hero() {
  console.log("Hero component rendered")
  
  return (
    <section className="min-h-screen bg-gradient-dark relative overflow-hidden flex items-center justify-center">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric-blue rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-dark-gray/50 backdrop-blur-sm border border-electric-blue/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-success-green rounded-full animate-pulse-glow"></div>
            <span className="text-crisp-white text-sm font-mono">AVAILABLE FOR DEPLOYMENT</span>
          </motion.div>

          {/* Main heading with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-crisp-white mb-4">
              AAYUSH
              <span className="bg-gradient-primary bg-clip-text text-transparent"> X </span>
              DEPLOYER
            </h1>
            <div className="text-xl md:text-2xl text-light-gray font-mono">
              <span className="animate-typing border-r-2 border-electric-blue animate-blink">
                Full-Stack Developer & Deployment Specialist
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-light-gray max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Transforming ideas into scalable applications with modern tech stacks.
            Specializing in seamless deployments, CI/CD pipelines, and cloud infrastructure.
          </motion.p>

          {/* Terminal command showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-rich-black/80 backdrop-blur-sm border border-electric-blue/20 rounded-lg p-4 max-w-md mx-auto mb-8 font-mono text-left"
          >
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4 text-success-green" />
              <span className="text-success-green text-sm">aayush@deployer:~$</span>
            </div>
            <div className="text-crisp-white text-sm">
              <span className="text-deep-purple">git</span> push origin <span className="text-success-green">main</span>
              <br />
              <span className="text-light-gray">✓ Deployment successful!</span>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-crisp-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View Projects
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-crisp-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://github.com/ayushboyofficia', '_blank')}
            >
              <Github className="mr-2 w-4 h-4" />
              GitHub
            </Button>
          </motion.div>

          {/* Anime Character Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="relative mx-auto w-80 h-80 mb-8"
          >
            <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-2 border-electric-blue/30 shadow-2xl shadow-electric-blue/20">
              <img 
                src="https://assets.macaly-user-data.dev/iigi7lqdkaxxl7hauba793jw/m0kmypwknggi6kax4791wyx9/RBhX7jxj46RhKS4-Kvqnk/tmpzvumbwj6.webp" 
                alt="Aayush X Deployer - Anime Character"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-space/80 via-transparent to-transparent"></div>
              
              {/* Floating Code Elements */}
              <div className="absolute top-4 left-4 bg-electric-blue/20 backdrop-blur-sm border border-electric-blue/40 rounded-lg px-2 py-1">
                <span className="text-electric-blue font-mono text-xs">DEV MODE</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-accent-pink/20 backdrop-blur-sm border border-accent-pink/40 rounded-lg px-2 py-1">
                <span className="text-accent-pink font-mono text-xs">ONLINE</span>
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="inline-flex flex-col items-center text-light-gray"
          >
            <span className="text-sm font-mono mb-2">SCROLL TO EXPLORE</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}