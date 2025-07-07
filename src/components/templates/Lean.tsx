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

interface LeanProps {
  data: ResumeData;
  scale?: number;
  colors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const defaultColors = {
  primary: '#001219',
  secondary: '#005f73',
  accent: '#0a9396'
};

export default function Lean({ data, scale = 1, colors = defaultColors }: LeanProps) {
  return (
    <div 
      className="w-[210mm] h-[297mm] bg-white p-8"
      style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
    >
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-end border-b-2 pb-4" style={{ borderColor: colors.primary }}>
          <div>
            <h1 
              className="text-4xl font-bold mb-2"
              style={{ color: colors.primary }}
            >
              {data.personalInfo.name}
            </h1>
            <h2 
              className="text-xl"
              style={{ color: colors.secondary }}
            >
              {data.personalInfo.title}
            </h2>
          </div>
          <div className="text-right text-sm space-y-1">
            <div className="flex items-center gap-2 justify-end">
              <span>{data.personalInfo.email}</span>
              <Mail className="w-4 h-4" style={{ color: colors.accent }} />
            </div>
            <div className="flex items-center gap-2 justify-end">
              <span>{data.personalInfo.phone}</span>
              <Phone className="w-4 h-4" style={{ color: colors.accent }} />
            </div>
            <div className="flex items-center gap-2 justify-end">
              <span>{data.personalInfo.location}</span>
              <MapPin className="w-4 h-4" style={{ color: colors.accent }} />
            </div>
            {data.personalInfo.website && (
              <div className="flex items-center gap-2 justify-end">
                <span>{data.personalInfo.website}</span>
                <Globe className="w-4 h-4" style={{ color: colors.accent }} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-2 space-y-6">
          {/* Summary */}
          <div className="mb-6">
            <h3 
              className="text-lg font-bold mb-3"
              style={{ color: colors.primary }}
            >
              Professional Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {data.personalInfo.summary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 
              className="text-lg font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Professional Experience
            </h3>
            <div className="space-y-4">
              {data.experience.map((exp, index) => (
                <div key={index} className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 
                        className="font-semibold"
                        style={{ color: colors.secondary }}
                      >
                        {exp.title}
                      </h4>
                      <div className="text-sm text-gray-600">
                        {exp.company} • {exp.location}
                      </div>
                    </div>
                    <div 
                      className="text-sm px-2 py-1 rounded"
                      style={{ 
                        backgroundColor: `${colors.accent}10`,
                        color: colors.accent
                      }}
                    >
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </div>
                  </div>
                  {exp.description ? (
                    <p className="text-sm text-gray-700">{exp.description}</p>
                  ) : exp.highlights ? (
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
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
              className="text-lg font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Education
            </h3>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 
                        className="font-semibold"
                        style={{ color: colors.secondary }}
                      >
                        {edu.degree}
                      </h4>
                      <div className="text-sm text-gray-600">
                        {edu.school} • {edu.location}
                      </div>
                    </div>
                    <div 
                      className="text-sm px-2 py-1 rounded"
                      style={{ 
                        backgroundColor: `${colors.accent}10`,
                        color: colors.accent
                      }}
                    >
                      {edu.startDate} - {edu.endDate}
                    </div>
                  </div>
                  {edu.description ? (
                    <p className="text-sm text-gray-700">{edu.description}</p>
                  ) : edu.highlights ? (
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
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

        {/* Right Column */}
        <div className="space-y-6">
          {/* Skills */}
          <div>
            <h3 
              className="text-lg font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Skills
            </h3>
            <div className="space-y-4">
              {data.skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 
                    className="font-semibold mb-2"
                    style={{ color: colors.secondary }}
                  >
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 text-sm rounded-sm"
                        style={{ 
                          backgroundColor: `${colors.accent}10`,
                          color: colors.accent
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
      </div>
    </div>
  );
} 