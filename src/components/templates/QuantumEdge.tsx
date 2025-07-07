"use client"

import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Award, PenToolIcon } from 'lucide-react';

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
  certifications?: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
}

interface QuantumEdgeProps {
  data: ResumeData;
  scale?: number;
}

export default function QuantumEdge({ data, scale = 1 }: QuantumEdgeProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-[210mm] h-[297mm] bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 shadow-2xl"
      style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-4xl font-orbitron font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          {data.personalInfo.name}
        </h1>
        <h2 className="text-xl text-cyan-400 font-rajdhani mb-4">
          {data.personalInfo.title}
        </h2>
        
        <div className="grid grid-cols-2 gap-4 text-sm font-exo">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-purple-400" />
            <span>{data.personalInfo.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-purple-400" />
            <span>{data.personalInfo.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-purple-400" />
            <span>{data.personalInfo.location}</span>
          </div>
          {data.personalInfo.website && (
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-purple-400" />
              <span>{data.personalInfo.website}</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Summary */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
          <p className="text-gray-300 font-rajdhani leading-relaxed">
            {data.personalInfo.summary}
          </p>
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div variants={itemVariants} className="mb-8">
        <h3 className="text-xl font-orbitron font-bold mb-4 flex items-center space-x-2">
          <Briefcase className="w-5 h-5 text-cyan-400" />
          <span>Experience</span>
        </h3>
        <div className="space-y-6">
          {data.experience.map((exp, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-purple-400">{exp.title}</h4>
                  <div className="text-sm text-gray-400">{exp.company} • {exp.location}</div>
                </div>
                <div className="text-sm text-cyan-400">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </div>
              </div>
              {exp.description ? (
                <p className="text-sm text-gray-300">{exp.description}</p>
              ) : exp.highlights ? (
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm">{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div variants={itemVariants} className="mb-8">
        <h3 className="text-xl font-orbitron font-bold mb-4 flex items-center space-x-2">
          <GraduationCap className="w-5 h-5 text-cyan-400" />
          <span>Education</span>
        </h3>
        <div className="space-y-4">
          {data.education.map((edu, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-purple-400">{edu.degree}</h4>
                  <div className="text-sm text-gray-400">{edu.school} • {edu.location}</div>
                </div>
                <div className="text-sm text-cyan-400">
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
              {edu.description ? (
                <p className="text-sm text-gray-300">{edu.description}</p>
              ) : edu.highlights ? (
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm">{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-orbitron font-bold mb-4 flex items-center space-x-2">
          <PenToolIcon className="w-5 h-5 text-cyan-400" />
          <span>Skills</span>
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {data.skills.map((skillGroup, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <h4 className="text-purple-400 font-bold mb-2">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-purple-500/20 rounded-full text-sm text-cyan-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      {data.certifications && (
        <motion.div variants={itemVariants} className="mt-8">
          <h3 className="text-xl font-orbitron font-bold mb-4 flex items-center space-x-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <span>Certifications</span>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {data.certifications.map((cert, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <h4 className="text-purple-400 font-bold">{cert.name}</h4>
                <div className="text-sm text-gray-400">{cert.issuer}</div>
                <div className="text-sm text-cyan-400">{cert.date}</div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
} 