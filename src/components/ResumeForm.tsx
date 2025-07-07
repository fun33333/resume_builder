"use client"

import { useState } from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Star,
  ChevronRight,
  Download,
  FileText,
  Image,
  File
} from 'lucide-react';
import PersonalInfo from './PersonalInfo';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import CertificationSection from './CertificationSection';

interface Template {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

interface FormData {
  personalInfo: any;
  experience: any[];
  education: any[];
  skills: any[];
  certifications: any[];
}

interface ResumeFormProps {
  initialData: FormData;
  onChange: (data: FormData) => void;
}

const sections = [
  { id: 'personal', label: 'Personal Info', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Star },
  { id: 'certifications', label: 'Certifications', icon: Award }
];

export default function ResumeForm({ initialData, onChange }: ResumeFormProps) {
  const [activeSection, setActiveSection] = useState('personal');
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialData || {
    personalInfo: {},
    experience: [],
    education: [],
    skills: [],
    certifications: []
  });

  const downloadFormats = [
    { id: 'pdf', label: 'PDF Document', icon: File },
    { id: 'docx', label: 'Word Document', icon: FileText },
    { id: 'png', label: 'PNG Image', icon: Image }
  ];

  const handleDownload = (format: string) => {
    // TODO: Implement download functionality
    console.log(`Downloading as ${format}`);
    setShowDownloadOptions(false);
  };

  const handleSectionChange = (section: keyof FormData, data: any) => {
    const newData = {
      ...formData,
      [section]: data
    };
    setFormData(newData);
    onChange(newData);
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 rounded-xl overflow-hidden">
      {/* Navigation Tabs */}
      <div className="flex items-center gap-1 p-4 bg-gray-800/50 border-b border-white/10">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeSection === section.id
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden md:inline">{section.label}</span>
            </button>
          );
        })}

        {/* Download Button */}
        <div className="relative ml-auto">
          <button
            onClick={() => setShowDownloadOptions(!showDownloadOptions)}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors shadow-lg shadow-green-500/30"
          >
            <Download className="w-4 h-4" />
            <span className="hidden md:inline">Download</span>
          </button>

          {/* Download Options Dropdown */}
          {showDownloadOptions && (
            <div className="absolute right-0 top-full mt-2 w-48 py-2 bg-gray-800 rounded-lg shadow-xl z-50 border border-white/10">
              {downloadFormats.map((format) => {
                const Icon = format.icon;
                return (
                  <button
                    key={format.id}
                    onClick={() => handleDownload(format.id)}
                    className="flex items-center gap-3 w-full px-4 py-2 text-left text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {format.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
        {activeSection === 'personal' && (
          <PersonalInfo
            data={formData.personalInfo}
            onChange={(value) => handleSectionChange('personalInfo', value)}
          />
        )}
        {activeSection === 'experience' && (
          <ExperienceSection
            data={formData.experience}
            onChange={(value) => handleSectionChange('experience', value)}
          />
        )}
        {activeSection === 'education' && (
          <EducationSection
            data={formData.education}
            onChange={(value) => handleSectionChange('education', value)}
          />
        )}
        {activeSection === 'skills' && (
          <SkillsSection
            data={formData.skills}
            onChange={(value) => handleSectionChange('skills', value)}
          />
        )}
        {activeSection === 'certifications' && (
          <CertificationSection
            certifications={formData.certifications}
            onChange={(value) => handleSectionChange('certifications', value)}
          />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="p-4 bg-gray-800/50 border-t border-white/10 flex justify-between">
        <button
          onClick={() => {
            const currentIndex = sections.findIndex(s => s.id === activeSection);
            if (currentIndex > 0) {
              setActiveSection(sections[currentIndex - 1].id);
            }
          }}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeSection === sections[0].id
            ? 'opacity-50 cursor-not-allowed bg-gray-700 text-gray-500'
            : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
          }`}
          disabled={activeSection === sections[0].id}
        >
          Previous
        </button>
        <button
          onClick={() => {
            const currentIndex = sections.findIndex(s => s.id === activeSection);
            if (currentIndex < sections.length - 1) {
              setActiveSection(sections[currentIndex + 1].id);
            }
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeSection === sections[sections.length - 1].id
            ? 'opacity-50 cursor-not-allowed bg-gray-700 text-gray-500'
            : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          disabled={activeSection === sections[sections.length - 1].id}
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
} 