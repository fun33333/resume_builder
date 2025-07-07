"use client"

import { useRouter } from 'next/navigation';
import { ResumeData } from '../types/resume';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import { FaDownload, FaShare, FaRocket } from 'react-icons/fa';

interface ButtonsProps {
  resumeData: ResumeData;
}

const Buttons: React.FC<ButtonsProps> = ({ resumeData }) => {
  const router = useRouter();

  const handleShare = async () => {
    const username = resumeData.name.toLowerCase().replace(/\s+/g, '');
    const resumeUrl = `${window.location.origin}/${username}`;
    
    try {
      await navigator.clipboard.writeText(resumeUrl);
      alert(`🚀 Shareable URL: ${resumeUrl}\n✅ URL copied to clipboard!`);
    } catch {
      alert(`🚀 Shareable URL: ${resumeUrl}\n❌ Failed to copy URL. Please copy manually.`);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <PDFDownloadLink
        document={<ResumePDF resumeData={resumeData} />}
        fileName={`${resumeData.name || 'resume'}.pdf`}
        className="btn-futuristic text-lg px-8 py-3 animate-glow"
      >
        {({ loading }) => (
          <>
            <FaDownload className="inline mr-3" />
            {loading ? 'Generating PDF...' : 'Download PDF'}
          </>
        )}
      </PDFDownloadLink>
      
      <button
        onClick={handleShare}
        className="btn-futuristic text-lg px-8 py-3 animate-glow"
        style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
      >
        <FaShare className="inline mr-3" />
        Share Resume
      </button>
      
      <button
        onClick={() => window.print()}
        className="btn-futuristic text-lg px-8 py-3 animate-glow"
        style={{background: 'linear-gradient(45deg, #10b981, #3b82f6)'}}
      >
        <FaRocket className="inline mr-3" />
        Print Resume
      </button>
    </div>
  );
};

export default Buttons;