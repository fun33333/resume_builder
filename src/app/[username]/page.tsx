"use client"

import ResumePreview from '@/components/ResumePreview';
import { ResumeData } from '@/types/resume';
import { templates } from '@/data/templates';

export default function ShareableResume({ params }: { params: { username: string } }) {
  // Mock data; replace with API or query params in production
  const resumeData: ResumeData = {
    name: params.username || 'NAME',
    jobTitle: 'Frontend Developer',
    cnic: '*****',
    religion: 'Islam',
    nationality: 'Pakistani',
    birth: '21-Dec-2005',
    status: 'Unmarried',
    languages: 'English, Urdu',
    passport: '*****',
    email: 'example@gmail.com',
    phone: '03122134810',
    linkedin: 'Ubaid Qureshi',
    address: 'Block# 19/18, 5/d, new karachi, Karachi',
    personalDetail: 'I am currently pursuing the Certified Cloud Applied Generative AI Engineering program at Governor House Karachi.',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Next.js'],
    education: ['Intermediate', 'Alkhair College', '2022-24', 'Matriculation', 'Nasra Secondary School', '2007-22'],
    experience: ['Business Developer', 'Artex digital', '2023-24'],
    certificate: ['Certified Cloud Applied Generative AI Engineering', 'Governor House', '2023-25'],
    profileImage: '/images/default-image.webp',
  };

  // Use the Modern template by default
  const defaultTemplate = templates.find(t => t.id === 'modern')?.component;

  if (!defaultTemplate) {
    return <div>Template not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center">
      <div className="w-[21cm] h-[29.7cm] bg-white shadow-2xl">
        <ResumePreview 
          template={defaultTemplate} 
          data={resumeData}
          colors={{
            primary: '#2563eb',
            secondary: '#4f46e5',
            accent: '#06b6d4'
          }}
        />
      </div>
    </div>
  );
}