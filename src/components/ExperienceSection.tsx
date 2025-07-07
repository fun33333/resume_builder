import { useState } from 'react';
import { PlusCircle, Trash2, Briefcase, Building2, Calendar, MapPin } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface ExperienceSectionProps {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}

export default function ExperienceSection({ data, onChange }: ExperienceSectionProps) {
  const [showError, setShowError] = useState(false);

  const addExperience = () => {
    onChange([
      ...data,
      {
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      }
    ]);
  };

  const removeExperience = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const updateExperience = (index: number, field: keyof Experience, value: any) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      [field]: value,
      // If current is true, clear end date
      ...(field === 'current' && value === true ? { endDate: '' } : {}),
    };
    onChange(newData);

    if (showError && (field === 'title' || field === 'company' || field === 'startDate')) {
      setShowError(false);
    }
  };

  const validateExperience = (exp: Experience) => {
    return exp.title.trim() !== '' && 
           exp.company.trim() !== '' && 
           exp.startDate.trim() !== '';
  };

  const handleBlur = () => {
    const hasInvalidExperience = data.some(exp => 
      exp.title.trim() !== '' && !validateExperience(exp)
    );
    setShowError(hasInvalidExperience);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-blue-400" />
          Work Experience
        </h2>
        <button
          onClick={addExperience}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          Add Experience
        </button>
      </div>

      {showError && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-400 text-sm">
            Please fill in all required fields (Job Title, Company, and Start Date)
          </p>
        </div>
      )}

      <div className="space-y-6">
        {data.map((experience, index) => (
          <div 
            key={index}
            className="group relative p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
          >
            <button
              onClick={() => removeExperience(index)}
              className="absolute -top-2 -right-2 p-1 bg-red-500/10 text-red-400 rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-500/20 transition-all"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Job Title *
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={experience.title}
                    onChange={(e) => updateExperience(index, 'title', e.target.value)}
                    onBlur={handleBlur}
                    placeholder="e.g. Senior Software Engineer"
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Company *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={experience.company}
                    onChange={(e) => updateExperience(index, 'company', e.target.value)}
                    onBlur={handleBlur}
                    placeholder="e.g. Google"
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={experience.location}
                    onChange={(e) => updateExperience(index, 'location', e.target.value)}
                    placeholder="e.g. New York, NY"
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Start Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    value={experience.startDate}
                    onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                    onBlur={handleBlur}
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-300">
                    End Date
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={experience.current}
                      onChange={(e) => updateExperience(index, 'current', e.target.checked)}
                      className="rounded bg-white/5 border-white/10 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="text-gray-300">Current Position</span>
                  </label>
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    value={experience.endDate}
                    onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                    disabled={experience.current}
                    className={`w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${
                      experience.current ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Description
                </label>
                <textarea
                  value={experience.description}
                  onChange={(e) => updateExperience(index, 'description', e.target.value)}
                  placeholder="Describe your responsibilities and achievements..."
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                />
              </div>
            </div>
          </div>
        ))}

        {data.length === 0 && (
          <div className="text-center py-12 bg-white/5 rounded-xl border border-white/10">
            <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400">
              No work experience added yet. Click the button above to add one.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}