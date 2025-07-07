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
    image?: string;
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

interface ModernProps {
  data: ResumeData;
  scale?: number;
  colors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const defaultColors = {
  primary: '#1a5f7a',
  secondary: '#f9bc60',
  accent: '#c44536'
};

export default function Modern({ data, scale = 1, colors = defaultColors }: ModernProps) {
  return (
    <div 
      className="w-[210mm] h-[297mm] bg-white text-gray-800 p-12 relative"
      style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
    >
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 
            className="text-4xl font-bold mb-2"
            style={{ color: colors.primary }}
          >
            {data.personalInfo.name}
          </h1>
          <h2 className="text-xl font-medium text-gray-700 mb-4">
            {data.personalInfo.title}
          </h2>
          
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" style={{ color: colors.accent }} />
              <span>{data.personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" style={{ color: colors.accent }} />
              <span>{data.personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: colors.accent }} />
              <span>{data.personalInfo.location}</span>
            </div>
            {data.personalInfo.website && (
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" style={{ color: colors.accent }} />
                <span>{data.personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>
        
        {data.personalInfo.image && (
          <div 
            className="w-32 h-32 rounded-full overflow-hidden border-4"
            style={{ borderColor: colors.primary }}
          >
            <img 
              src={data.personalInfo.image} 
              alt={data.personalInfo.name} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="mb-8">
        <p className="text-gray-800 leading-relaxed">
          {data.personalInfo.summary}
        </p>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h3 
          className="text-2xl font-bold mb-4 pb-2 border-b-2"
          style={{ borderColor: colors.secondary, color: colors.primary }}
        >
          Professional Experience
        </h3>
        <div className="space-y-6">
          {data.experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold" style={{ color: colors.primary }}>
                    {exp.title}
                  </h4>
                  <div className="text-gray-700">{exp.company} • {exp.location}</div>
                </div>
                <div className="text-gray-700 text-sm">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </div>
              </div>
              {exp.description ? (
                <p className="text-gray-800">{exp.description}</p>
              ) : exp.highlights ? (
                <ul className="list-disc list-inside space-y-1 text-gray-800">
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
      <div className="mb-8">
        <h3 
          className="text-2xl font-bold mb-4 pb-2 border-b-2"
          style={{ borderColor: colors.secondary, color: colors.primary }}
        >
          Education
        </h3>
        <div className="space-y-4">
          {data.education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold" style={{ color: colors.primary }}>
                    {edu.degree}
                  </h4>
                  <div className="text-gray-700">{edu.school} • {edu.location}</div>
                </div>
                <div className="text-gray-700 text-sm">
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
              {edu.description ? (
                <p className="text-gray-800">{edu.description}</p>
              ) : edu.highlights ? (
                <ul className="list-disc list-inside space-y-1 text-gray-800">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 
          className="text-2xl font-bold mb-4 pb-2 border-b-2"
          style={{ borderColor: colors.secondary, color: colors.primary }}
        >
          Skills
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {data.skills.map((skillGroup, index) => (
            <div key={index}>
              <h4 
                className="font-semibold mb-2"
                style={{ color: colors.primary }}
              >
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ 
                      backgroundColor: `${colors.secondary}20`,
                      color: colors.primary
                    }}
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
  );
} 