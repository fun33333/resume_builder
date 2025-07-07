import { Rocket, Star, Building, Bot } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
  link: string;
}

export default function StatsSection() {
  const stats: Stat[] = [
    { 
      number: '10K+', 
      label: 'Careers Launched', 
      icon: Rocket,
      link: '/resume-builder'
    },
    { 
      number: '95%', 
      label: 'Success Rate', 
      icon: Star,
      link: '/roadmaps'
    },
    { 
      number: '500+', 
      label: 'Companies', 
      icon: Building,
      link: '/network-builder'
    },
    { 
      number: '24/7', 
      label: 'AI Support', 
      icon: Bot,
      link: '/AI-counseling'
    }
  ];

  return (
    <section className="px-6 py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Link 
              href={stat.link} 
              key={index} 
              className="transform hover:scale-110 transition-transform duration-300 group no-underline"
            >
              <div className="p-6 rounded-xl hover:bg-white/5 transition-colors">
                <Icon className="w-12 h-12 mx-auto mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="text-4xl font-orbitron font-bold gradient-text-3d mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-rajdhani group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
} 