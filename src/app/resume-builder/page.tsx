"use client"

import { useState } from 'react';
import ResumeForm from '@/components/ResumeForm';
import ResumePreview from '@/components/ResumePreview';
import ResumeTemplatePreview from '@/components/ResumeTemplatePreview';
import { templates } from '@/data/templates';
import { sampleResumeData } from '@/data/sampleResume';

export default function ResumeBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [resumeData, setResumeData] = useState(sampleResumeData);
  const [colors, setColors] = useState({
    primary: '#2563eb',
    secondary: '#4f46e5',
    accent: '#06b6d4'
  });

  if (!selectedTemplate) {
    return (
      <div className="min-h-screen bg-gray-900 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Choose Your Template</h1>
          <p className="text-gray-400 mb-8">Select a template to start building your professional resume</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div key={template.id} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
                <ResumeTemplatePreview
                  template={template}
                  colors={colors}
                  onSelect={() => setSelectedTemplate(template.id)}
                  onColorChange={(color, templateId, type) => {
                    if (type === 'primary') setColors({ ...colors, primary: color.hex });
                    if (type === 'secondary') setColors({ ...colors, secondary: color.hex });
                    if (type === 'accent') setColors({ ...colors, accent: color.hex });
                  }}
                  sampleData={sampleResumeData}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const selectedTemplateComponent = templates.find(t => t.id === selectedTemplate)?.component;

  if (!selectedTemplateComponent) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="h-screen flex">
        {/* Sidebar Navigation */}
        <div className="w-16 bg-gray-800 border-r border-white/10 flex flex-col items-center py-4 gap-4">
          <button 
            onClick={() => setSelectedTemplate(null)}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            title="Change Template"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <button 
            className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            title="Download Resume"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
          <button 
            className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            title="Color Settings"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Form Section - Fixed width */}
          <div className="w-[500px] bg-gray-800/50 border-r border-white/10">
            <ResumeForm
              initialData={resumeData}
              onChange={setResumeData}
            />
          </div>

          {/* Preview Section - Takes remaining space */}
          <div className="flex-1 p-8 flex items-center justify-center bg-gray-900">
            <div className="w-[21cm] h-[29.7cm] bg-white shadow-2xl">
              <ResumePreview
                template={selectedTemplateComponent}
                data={resumeData}
                colors={colors}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 