"use client"

import { Metadata } from 'next';
import ResumePreview from '@/components/ResumePreview';
import { ResumeData } from '@/types/resume';
import { templates } from '@/data/templates';

type Props = {
  params: { username: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.username}'s Resume`,
    description: `View ${params.username}'s professional resume`,
  }
}

async function getResumeData(username: string): Promise<ResumeData> {
  // Mock data; replace with API or query params in production
  return {
    name: username || 'NAME',
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
}

export default async function ShareableResume({ params }: Props) {
  const resumeData = await getResumeData(params.username);

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