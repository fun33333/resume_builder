import { Plus, Trash2 } from 'lucide-react';

interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface EducationSectionProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

export default function EducationSection({ data, onChange }: EducationSectionProps) {
  const handleAdd = () => {
    onChange([
      ...data,
      {
        degree: '',
        school: '',
        location: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    ]);
  };

  const handleRemove = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: keyof Education, value: string) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      [field]: value
    };
    onChange(newData);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">
          Education
        </h3>
        <button
          onClick={handleAdd}
          className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        {data.map((education, index) => (
          <div key={index} className="p-6 bg-gray-700/50 rounded-xl space-y-6 relative group">
            {data.length > 1 && (
              <button
                onClick={() => handleRemove(index)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-red-500/20 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Degree
                </label>
                <input
                  type="text"
                  value={education.degree}
                  onChange={(e) => handleChange(index, 'degree', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Bachelor of Science in Computer Science"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  School
                </label>
                <input
                  type="text"
                  value={education.school}
                  onChange={(e) => handleChange(index, 'school', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="University Name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Location
                </label>
                <input
                  type="text"
                  value={education.location}
                  onChange={(e) => handleChange(index, 'location', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="City, Country"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Start Date
                </label>
                <input
                  type="month"
                  value={education.startDate}
                  onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  End Date
                </label>
                <input
                  type="month"
                  value={education.endDate}
                  onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Description
              </label>
              <textarea
                value={education.description}
                onChange={(e) => handleChange(index, 'description', e.target.value)}
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="Describe your academic achievements, relevant coursework, etc..."
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}