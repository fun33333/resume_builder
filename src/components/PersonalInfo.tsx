import { FaUser } from 'react-icons/fa';

interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  summary: string;
}

interface PersonalInfoProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

export default function PersonalInfo({ data, onChange }: PersonalInfoProps) {
  const handleChange = (field: keyof PersonalInfo, value: string) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Professional Title
          </label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="Software Engineer"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Phone
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Location
          </label>
          <input
            type="text"
            value={data.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="City, Country"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Website
          </label>
          <input
            type="url"
            value={data.website}
            onChange={(e) => handleChange('website', e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="https://yourwebsite.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">
          Professional Summary
        </label>
        <textarea
          value={data.summary}
          onChange={(e) => handleChange('summary', e.target.value)}
          rows={4}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          placeholder="Write a brief summary of your professional background and key strengths..."
        />
      </div>
    </div>
  );
}