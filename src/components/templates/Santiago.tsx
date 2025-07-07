"use client"

import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Award } from 'lucide-react';

interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    summary: string;
  };
  experience: Array<{
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current?: boolean;
    description?: string;
    highlights?: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    location: string;
    startDate: string;
    endDate: string;
    description?: string;
    highlights?: string[];
  }>;
  skills: Array<{
    category: string;
    items: string[];
  }>;
}

interface SantiagoProps {
  data: ResumeData;
  scale?: number;
  colors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const defaultColors = {
  primary: '#2d3047',
  secondary: '#419d78',
  accent: '#e0a458'
};

export default function Santiago({ data, scale = 1, colors = defaultColors }: SantiagoProps) {
  return (
    <div 
      className="w-[210mm] h-[297mm] bg-white flex"
      style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
    >
      {/* Left Sidebar */}
      <div 
        className="w-1/3 p-8 text-white"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="space-y-8">
          {/* Personal Info */}
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">{data.personalInfo.name}</h1>
            <h2 
              className="text-lg mb-4"
              style={{ color: colors.accent }}
            >
              {data.personalInfo.title}
            </h2>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: colors.secondary }} />
                <span>{data.personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: colors.secondary }} />
                <span>{data.personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: colors.secondary }} />
                <span>{data.personalInfo.location}</span>
              </div>
              {data.personalInfo.website && (
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" style={{ color: colors.secondary }} />
                  <span>{data.personalInfo.website}</span>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 
              className="text-xl font-bold mb-4 pb-2 border-b-2"
              style={{ borderColor: colors.secondary }}
            >
              Skills
            </h3>
            <div className="space-y-4">
              {data.skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 
                    className="font-semibold mb-2"
                    style={{ color: colors.accent }}
                  >
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 rounded text-sm"
                        style={{ backgroundColor: `${colors.secondary}40` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-8">
        {/* Summary */}
        <div className="mb-8">
          <h3 
            className="text-2xl font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {data.personalInfo.summary}
          </p>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h3 
            className="text-2xl font-bold mb-6"
            style={{ color: colors.primary }}
          >
            Professional Experience
          </h3>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div 
                key={index}
                className="relative pl-6 pb-6 border-l-2"
                style={{ borderColor: `${colors.secondary}40` }}
              >
                <div 
                  className="absolute left-[-5px] top-0 w-2 h-2 rounded-full"
                  style={{ backgroundColor: colors.secondary }}
                />
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 
                      className="text-lg font-semibold"
                      style={{ color: colors.primary }}
                    >
                      {exp.title}
                    </h4>
                    <div 
                      className="text-sm"
                      style={{ color: colors.secondary }}
                    >
                      {exp.company} • {exp.location}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </div>
                </div>
                {exp.description ? (
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                ) : exp.highlights ? (
                  <ul className="mt-2 space-y-1 text-gray-700">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 
            className="text-2xl font-bold mb-6"
            style={{ color: colors.primary }}
          >
            Education
          </h3>
          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <div 
                key={index}
                className="relative pl-6 pb-6 border-l-2"
                style={{ borderColor: `${colors.secondary}40` }}
              >
                <div 
                  className="absolute left-[-5px] top-0 w-2 h-2 rounded-full"
                  style={{ backgroundColor: colors.secondary }}
                />
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 
                      className="text-lg font-semibold"
                      style={{ color: colors.primary }}
                    >
                      {edu.degree}
                    </h4>
                    <div 
                      className="text-sm"
                      style={{ color: colors.secondary }}
                    >
                      {edu.school} • {edu.location}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
                {edu.description ? (
                  <p className="mt-2 text-gray-700">{edu.description}</p>
                ) : edu.highlights ? (
                  <ul className="mt-2 space-y-1 text-gray-700">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 