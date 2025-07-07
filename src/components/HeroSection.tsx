import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Bot, FileText } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/20 z-0" />
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] z-0" />

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Career
          </span>
          <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent ml-4">
            AI
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-space-grotesk text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl"
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
            <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-space-grotesk text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              <Bot className="w-5 h-5" />
              Chat with AI Counselor
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>

          <Link href="/Resume" className="group">
            <button className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-space-grotesk text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:border-white/30">
              <FileText className="w-5 h-5" />
              Build Your Resume
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
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
            { number: '10K+', label: 'Resumes Created' },
            { number: '95%', label: 'Success Rate' },
            { number: '24/7', label: 'AI Support' },
            { number: '50+', label: 'Templates' },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
              <span className="font-orbitron text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </span>
              <span className="font-space-grotesk text-sm text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/4 right-[10%] w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-1/4 left-[10%] w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20"
        />
      </div>
    </section>
  );
} 