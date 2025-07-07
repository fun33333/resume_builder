import Link from 'next/link';
import { CheckCircle, ChevronRight, LucideIcon } from 'lucide-react';

interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  benefits: string[];
}

interface FeaturesGridProps {
  features: Feature[];
}

export default function FeaturesGrid({ features }: FeaturesGridProps) {
  return (
    <section className="px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 gradient-text-3d">
        AI-Powered Features
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Link href={`/${feature.id}`} key={feature.id} className="no-underline">
              <div
                className="card-futuristic-3d animate-fade-in-up-3d cursor-pointer group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold mb-4 gradient-text-3d">{feature.title}</h3>
                <p className="text-gray-300 mb-6 font-exo">{feature.description}</p>
                
                <div className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300 font-rajdhani">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transform group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
} 