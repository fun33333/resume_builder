"use client";

import { ResumeData } from '../types/resume';
import ProfileImage from './ProfileImage';
import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import CertificationSection from './CertificationSection';
import PersonalDetail from './PersonalDetail';
import Buttons from './Buttons';

interface ResumePreviewProps {
  template: React.ComponentType<any>;
  data: ResumeData;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export default function ResumePreview({ template: Template, data, colors }: ResumePreviewProps) {
  if (!data) {
    return (
      <div className="h-full w-full bg-white shadow-xl flex items-center justify-center">
        <p>No resume data available</p>
      </div>
    );
  }

  // Transform the data to match the template format
  const transformedData = {
    personalInfo: {
      name: data.name || '',
      title: data.jobTitle || '',
      email: data.email || '',
      phone: data.phone || '',
      location: data.address || '',
      website: data.linkedin || '',
      summary: data.personalDetail || ''
    },
    experience: data.experience ? data.experience.reduce((acc: any[], _, index, arr) => {
      if (index % 3 === 0) {
        acc.push({
          title: arr[index] || '',
          company: arr[index + 1] || '',
          location: '',
          startDate: arr[index + 2] || '',
          endDate: arr[index + 2] || '',
          description: ''
        });
      }
      return acc;
    }, []) : [],
    education: data.education ? data.education.reduce((acc: any[], _, index, arr) => {
      if (index % 3 === 0) {
        acc.push({
          degree: arr[index] || '',
          school: arr[index + 1] || '',
          location: '',
          startDate: arr[index + 2] || '',
          endDate: arr[index + 2] || '',
          description: ''
        });
      }
      return acc;
    }, []) : [],
    skills: [{
      category: 'Skills',
      items: data.skills || []
    }],
    certifications: data.certificate ? data.certificate.reduce((acc: any[], _, index, arr) => {
      if (index % 3 === 0) {
        acc.push({
          name: arr[index] || '',
          issuer: arr[index + 1] || '',
          date: arr[index + 2] || ''
        });
      }
      return acc;
    }, []) : []
  };

  return (
    <div className="h-full w-full bg-white shadow-xl">
      <div className="h-full w-full">
        <Template data={transformedData} colors={colors} />
      </div>
    </div>
  );
}