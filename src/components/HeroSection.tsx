import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Bot, FileText } from 'lucide-react';
import Link from 'next/link';
import VantaBackground from './VantaBackground';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <VantaBackground>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/30 z-0" />
      </VantaBackground>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-6xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent [text-shadow:_2px_2px_20px_rgb(168_85_247_/_0.4)]">
            Career
          </span>
          <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent ml-4 [text-shadow:_2px_2px_20px_rgb(59_130_246_/_0.4)]">
            AI
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-space-grotesk text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.4)]"
        >
          Your AI-powered career partner that helps you build stunning resumes and provides expert career guidance
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 mb-16"
        >
          <Link href="/AI-counseling" className="group">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-space-grotesk text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:from-purple-500 hover:to-blue-500"
            >
              <Bot className="w-5 h-5" />
              Chat with AI Counselor
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>

          <Link href="/Resume" className="group">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-space-grotesk text-lg font-medium transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-white/10"
            >
              <FileText className="w-5 h-5" />
              Build Your Resume
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4"
        >
          {[
            { number: '10K+', label: 'Resumes Created', gradient: 'from-purple-400 to-pink-400' },
            { number: '95%', label: 'Success Rate', gradient: 'from-blue-400 to-cyan-400' },
            { number: '24/7', label: 'AI Support', gradient: 'from-teal-400 to-emerald-400' },
            { number: '50+', label: 'Templates', gradient: 'from-pink-400 to-rose-400' },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <span className={`font-orbitron text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 drop-shadow-lg`}>
                {stat.number}
              </span>
              <span className="font-space-grotesk text-sm text-gray-300">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/4 right-[10%] w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-1/4 left-[10%] w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
} 