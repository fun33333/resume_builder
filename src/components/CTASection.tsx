import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Bot, FileText } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-purple-900/20 z-0" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Heading */}
              <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Career?
              </h2>
              
              {/* Description */}
              <p className="font-space-grotesk text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Join thousands of professionals who've already taken the first step towards their dream career with CareerAI
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                {/* Primary CTA */}
                <Link href="/AI-counseling" className="group">
                  <button className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-space-grotesk text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                    <Bot className="w-5 h-5" />
                    Start Free Consultation
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>

                {/* Secondary CTA */}
                <Link href="/Resume" className="group">
                  <button className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl font-space-grotesk text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:border-white/30">
                    <FileText className="w-5 h-5" />
                    Create Resume
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10"
            >
              {[
                { title: 'AI-Powered Guidance', description: '24/7 career counseling' },
                { title: 'Professional Templates', description: '50+ ATS-friendly designs' },
                { title: 'Expert Review', description: 'Personalized feedback' },
                { title: 'Skills Analysis', description: 'Market-driven insights' },
                { title: 'Interview Prep', description: 'AI mock interviews' },
                { title: 'Career Tracking', description: 'Progress monitoring' },
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                >
                  <h3 className="font-space-grotesk font-medium text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-1/3 right-[5%] w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-1/3 left-[5%] w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"
      />
    </section>
  );
} 