"use client"
import { useState, useRef, useEffect } from 'react';
import { Brain, Sun, Moon, ChevronDown, Rocket, Bot, Briefcase } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  currentSection: string;
  theme: string;
  setTheme: (theme: string) => void;
  features: Array<{
    id: string;
    title: string;
  }>;
  onFeatureClick: (featureId: string) => void;
}

export default function Navbar({ 
  currentSection, 
  theme, 
  setTheme,
  features,
  onFeatureClick
}: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll behavior
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mainFeatures = [
    { id: 'AI-counseling', title: 'AI Counselor', icon: Bot },
    { id: 'Resume', title: 'Resume Builder', icon: Rocket },
  ];

  const careerSupportFeatures = features.filter(
    feature => !mainFeatures.some(main => main.id === feature.id)
  );

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0'
      } ${theme === 'dark' ? 'bg-black/40 backdrop-blur-xl' : 'bg-white/70 backdrop-blur-xl'}`}
    >
      {/* Navbar Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-0.5 transition-transform group-hover:scale-110">
              <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-[10px] flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-2xl font-orbitron font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              CareerAI
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {/* Main Features */}
            {mainFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.id}
                  href={`/${feature.id}`}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    currentSection === feature.id 
                      ? 'bg-white/10 text-white font-medium'
                      : 'hover:bg-white/5 text-gray-300 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-rajdhani">{feature.title}</span>
                </Link>
              );
            })}

            {/* Career Support Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  isDropdownOpen 
                    ? 'bg-white/10 text-white'
                    : 'hover:bg-white/5 text-gray-300 hover:text-white'
                }`}
              >
                <Briefcase className="w-5 h-5" />
                <span className="font-rajdhani">Career Support</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg overflow-hidden">
                  <div className="py-2">
                    {careerSupportFeatures.map((feature) => (
                      <Link
                        key={feature.id}
                        href={`/${feature.id}`}
                        className={`flex items-center space-x-2 px-4 py-2 transition-all ${
                          currentSection === feature.id 
                            ? 'bg-white/10 text-white'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="font-rajdhani">{feature.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 p-0.5 transition-transform hover:scale-110"
            >
              <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-[10px] flex items-center justify-center">
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-400" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 