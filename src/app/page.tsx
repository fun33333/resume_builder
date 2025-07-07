"use client"

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Bot, 
  FileText, 
  Map, 
  TrendingUp, 
  Users, 
  Building,
  Briefcase,
  Star,
  Zap,
  Brain,
  Target,
  Award,
  MessageCircle,
  ChevronRight,
  Sparkles,
  Rocket,
  Globe,
  ArrowRight
} from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import InteractiveChatDemo from '@/components/InteractiveChatDemo';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import BackgroundEffects from '@/components/BackgroundEffects';

export default function CareerAIWebapp() {
  const router = useRouter();
  const pathname = usePathname();
  const [isAnimated, setIsAnimated] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      id: 'AI-Counseling',
      icon: Bot,
      title: 'AI Counseling Bot',
      description: 'Get personalized career guidance powered by advanced AI',
      color: 'from-blue-500 to-cyan-500',
      benefits: ['24/7 Availability', 'Personalized Advice', 'Industry Insights', 'Goal Setting']
    },
    {
      id: 'Resume',
      icon: FileText,
      title: 'Resume & CV Builder',
      description: 'Create professional resumes with AI-powered optimization',
      color: 'from-purple-500 to-pink-500',
      benefits: ['ATS Optimized', 'Multiple Templates', 'Real-time Feedback', 'Export Options']
    },
    {
      id: 'roadmaps',
      icon: Map,
      title: 'Custom Roadmaps',
      description: 'Build learning paths tailored to your career goals',
      color: 'from-green-500 to-emerald-500',
      benefits: ['Personalized Paths', 'Skill Tracking', 'Milestone Setting', 'Progress Monitoring']
    },
    {
      id: 'freelance-guide',
      icon: TrendingUp,
      title: 'Freelance Setup Guide',
      description: 'Master LinkedIn, Upwork, and professional networking',
      color: 'from-orange-500 to-red-500',
      benefits: ['Platform Setup', 'Profile Optimization', 'Client Acquisition', 'Rate Setting']
    },
    {
      id: 'tech-analysis',
      icon: Zap,
      title: 'Tech Trend Analysis',
      description: 'Stay ahead with emerging technology insights',
      color: 'from-yellow-500 to-orange-500',
      benefits: ['Market Analysis', 'Skill Demand', 'Salary Trends', 'Future Predictions']
    },
    {
      id: 'network-builder',
      icon: Users,
      title: 'Network Builder',
      description: 'Connect with industry professionals and mentors',
      color: 'from-indigo-500 to-purple-500',
      benefits: ['Mentor Matching', 'Event Recommendations', 'Connection Strategies', 'Follow-up Tips']
    }
  ];

  const handleFeatureClick = (featureId: string) => {
    switch (featureId.toLowerCase()) {
      case 'ai-counseling':
        router.push('/AI-counseling');
        break;
      case 'resume':
        router.push('/resume-builder');
        break;
      case 'roadmaps':
        router.push('/roadmaps');
        break;
      case 'freelance-guide':
        router.push('/freelance-guide');
        break;
      case 'tech-analysis':
        router.push('/tech-analysis');
        break;
      case 'network-builder':
        router.push('/network-builder');
        break;
      default:
        break;
    }
  };

  const renderHomeSection = () => (
    <div className="relative">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-pink-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative">
        <div className="max-w-8xl mx-auto ">
          <HeroSection />
          
          {/* Features Section */}
          <div className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text-3d mb-6">
                AI-Powered Features
              </h2>
              <p className="text-xl text-gray-300/80 max-w-3xl mx-auto font-rajdhani">
                Unlock your career potential with our comprehensive suite of AI-powered tools and guidance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {features.map((feature, index) => (
                <Link 
                  href={`/${feature.id}`} 
                  key={feature.id} 
                  className="group relative"
                >
                  {/* Card Background Effects */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-black/40 rounded-[10px] flex items-center justify-center">
                        {feature.icon && <feature.icon className="w-8 h-8 text-white" />}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-orbitron font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300/80 mb-6 font-rajdhani">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-3">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                          <span className="text-sm text-gray-300/90 font-rajdhani">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <InteractiveChatDemo />
          <CTASection />
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900'}`}>
      <BackgroundEffects theme={theme} />

      <div className="relative z-10">
        <Navbar 
          currentSection={pathname.slice(1) || 'home'}
          theme={theme}
          setTheme={setTheme}
          features={features}
          onFeatureClick={handleFeatureClick}
        />

        {/* Main Content */}
        <main className="transition-all duration-500">
          {pathname === '/' && renderHomeSection()}
        </main>

        {/* Enhanced Floating Action Button */}
        {pathname !== '/' && (
          <Link
            href="/"
            className="fixed bottom-8 right-8 btn-futuristic-3d animate-float-3d"
            style={{animationDelay: '1s'}}
          >
            ← Back to Home
          </Link>
        )}

        {/* <Footer theme={theme} /> */}
      </div>
    </div>
  );
}