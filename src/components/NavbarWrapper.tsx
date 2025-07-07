'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function NavbarWrapper() {
  const [theme, setTheme] = useState('dark');
  const pathname = usePathname();
  const currentSection = pathname?.split('/')[1] || '';

  const features = [
    { id: 'freelance-guide', title: 'Freelance Guide' },
    { id: 'network-builder', title: 'Network Builder' },
    { id: 'tech-analysis', title: 'Tech Analysis' },
    { id: 'roadmaps', title: 'Career Roadmaps' }
  ];

  const handleFeatureClick = (featureId: string) => {
    // Handle feature click if needed
  };

  // Handle theme persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Navbar
      currentSection={currentSection}
      theme={theme}
      setTheme={handleThemeChange}
      features={features}
      onFeatureClick={handleFeatureClick}
    />
  );
} 