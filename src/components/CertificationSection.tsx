import { useState } from 'react';
import { PlusCircle, Trash2, Award, Calendar, Link, FileText } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

interface CertificationSectionProps {
  certifications: Certification[];
  onChange: (certifications: Certification[]) => void;
}

export default function CertificationSection({ certifications, onChange }: CertificationSectionProps) {
  const [showError, setShowError] = useState(false);

  const addCertification = () => {
    onChange([
      ...certifications,
      {
        name: '',
        issuer: '',
        issueDate: '',
        expiryDate: '',
        credentialId: '',
        credentialUrl: ''
      }
    ]);
  };

  const removeCertification = (index: number) => {
    onChange(certifications.filter((_, i) => i !== index));
  };

  const updateCertification = (index: number, field: keyof Certification, value: string) => {
    const newCertifications = [...certifications];
    newCertifications[index] = {
      ...newCertifications[index],
      [field]: value
    };
    onChange(newCertifications);
    
    if (showError && (field === 'name' || field === 'issuer' || field === 'issueDate')) {
      setShowError(false);
    }
  };

  const validateCertification = (cert: Certification) => {
    return cert.name.trim() !== '' && 
           cert.issuer.trim() !== '' && 
           cert.issueDate.trim() !== '';
  };

  const handleBlur = () => {
    const hasInvalidCertification = certifications.some(cert => 
      cert.name.trim() !== '' && !validateCertification(cert)
    );
    setShowError(hasInvalidCertification);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-400" />
        Certifications
        </h2>
        <button
          onClick={addCertification}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          Add Certification
        </button>
      </div>

      {showError && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-400 text-sm">
            Please fill in all required fields (Name, Issuer, and Issue Date)
          </p>
        </div>
      )}

      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="group relative p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
          >
            <button
              onClick={() => removeCertification(index)}
              className="absolute -top-2 -right-2 p-1 bg-red-500/10 text-red-400 rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-500/20 transition-all"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Certification Name *
                </label>
                <div className="relative">
                  <Award className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={cert.name}
                    onChange={(e) => updateCertification(index, 'name', e.target.value)}
                    onBlur={handleBlur}
                    placeholder="e.g. AWS Certified Solutions Architect"
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Issuing Organization *
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={cert.issuer}
                    onChange={(e) => updateCertification(index, 'issuer', e.target.value)}
                    onBlur={handleBlur}
                    placeholder="e.g. Amazon Web Services"
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Issue Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    value={cert.issueDate}
                    onChange={(e) => updateCertification(index, 'issueDate', e.target.value)}
                    onBlur={handleBlur}
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Expiry Date (Optional)
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    value={cert.expiryDate}
                    onChange={(e) => updateCertification(index, 'expiryDate', e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Credential ID (Optional)
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={cert.credentialId}
                    onChange={(e) => updateCertification(index, 'credentialId', e.target.value)}
                    placeholder="e.g. ABC123XYZ"
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Credential URL (Optional)
                </label>
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="url"
                    value={cert.credentialUrl}
                    onChange={(e) => updateCertification(index, 'credentialUrl', e.target.value)}
                    placeholder="https://..."
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {certifications.length === 0 && (
          <div className="text-center py-12 bg-white/5 rounded-xl border border-white/10">
            <Award className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400">
              No certifications added yet. Click the button above to add one.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}