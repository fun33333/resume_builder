import { useState } from 'react';
import { ResumeData } from '../types/resume';
import { FaUser, FaBriefcase, FaEnvelope, FaPhone, FaGraduationCap, FaCertificate, FaTools, FaRocket, FaGlobe, FaIdCard } from 'react-icons/fa';

interface FormSectionProps {
  onSubmit: (data: ResumeData) => void;
}

const FormSection: React.FC<FormSectionProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ResumeData>({
    name: '',
    jobTitle: '',
    cnic: '',
    religion: '',
    nationality: '',
    birth: '',
    status: '',
    languages: '',
    passport: '',
    email: '',
    phone: '',
    linkedin: '',
    address: '',
    personalDetail: '',
    skills: [],
    education: [],
    experience: [],
    certificate: [],
    profileImage: null,
  });

  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
  const [focusedField, setFocusedField] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayInput = (e: React.ChangeEvent<HTMLInputElement>, field: keyof ResumeData) => {
    const values = e.target.value.split(',').map(item => item.trim());
    setFormData({ ...formData, [field]: values });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImageFile(file);
      setFormData({ ...formData, profileImage: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information Section */}
        <div className="card-futuristic-3d animate-fade-in-up-3d">
          <div className="flex items-center mb-6">
            <FaUser className="text-2xl text-cyan-400 mr-3 animate-pulse-neon-3d" />
            <h2 className="text-2xl font-orbitron font-bold gradient-text-3d">Personal Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-cyan-300 font-rajdhani font-medium" htmlFor="name">
                <FaUser className="inline mr-2" />Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                required
                className={`input-futuristic-3d w-full focus-ring ${focusedField === 'name' ? 'success-bounce' : ''}`}
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-cyan-300 font-rajdhani font-medium" htmlFor="jobTitle">
                <FaBriefcase className="inline mr-2" />Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                onFocus={() => handleFocus('jobTitle')}
                onBlur={handleBlur}
                required
                className={`input-futuristic-3d w-full focus-ring ${focusedField === 'jobTitle' ? 'success-bounce' : ''}`}
                placeholder="e.g., Frontend Developer"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-cyan-300 font-rajdhani font-medium" htmlFor="birth">
                Date of Birth
              </label>
              <input
                type="date"
                id="birth"
                name="birth"
                value={formData.birth}
                onChange={handleChange}
                onFocus={() => handleFocus('birth')}
                onBlur={handleBlur}
                required
                className={`input-futuristic-3d w-full focus-ring ${focusedField === 'birth' ? 'success-bounce' : ''}`}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-cyan-300 font-rajdhani font-medium" htmlFor="cnic">
                <FaIdCard className="inline mr-2" />CNIC
              </label>
              <input
                type="text"
                id="cnic"
                name="cnic"
                value={formData.cnic}
                onChange={handleChange}
                onFocus={() => handleFocus('cnic')}
                onBlur={handleBlur}
                required
                className={`input-futuristic-3d w-full focus-ring ${focusedField === 'cnic' ? 'success-bounce' : ''}`}
                placeholder="00000-0000000-0"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-cyan-300 font-rajdhani font-medium" htmlFor="nationality">
                <FaGlobe className="inline mr-2" />Nationality
              </label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                onFocus={() => handleFocus('nationality')}
                onBlur={handleBlur}
                required
                className={`input-futuristic-3d w-full focus-ring ${focusedField === 'nationality' ? 'success-bounce' : ''}`}
                placeholder="e.g., Pakistani"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-cyan-300 font-rajdhani font-medium" htmlFor="religion">
                Religion
              </label>
              <input
                type="text"
                id="religion"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                onFocus={() => handleFocus('religion')}
                onBlur={handleBlur}
                required
                className={`input-futuristic-3d w-full focus-ring ${focusedField === 'religion' ? 'success-bounce' : ''}`}
                placeholder="e.g., Islam"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-cyan-300 font-rajdhani font-medium" htmlFor="status">
                Marital Status
              </label>
              <input
                type="text"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                onFocus={() => handleFocus('status')}
                onBlur={handleBlur}
                required
                className={`input-futuristic-3d w-full focus-ring ${focusedField === 'status' ? 'success-bounce' : ''}`}
                placeholder="e.g., Single"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-cyan-300 font-rajdhani font-medium" htmlFor="languages">
                Languages
              </label>
              <input
                type="text"
                id="languages"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                onFocus={() => handleFocus('languages')}
                onBlur={handleBlur}
                required
                className={`input-futuristic-3d w-full focus-ring ${focusedField === 'languages' ? 'success-bounce' : ''}`}
                placeholder="e.g., English, Urdu"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-cyan-300 font-rajdhani font-medium" htmlFor="passport">
                Passport No
              </label>
              <input
                type="text"
                id="passport"
                name="passport"
                value={formData.passport}
                onChange={handleChange}
                onFocus={() => handleFocus('passport')}
                onBlur={handleBlur}
                required
                className={`input-futuristic-3d w-full focus-ring ${focusedField === 'passport' ? 'success-bounce' : ''}`}
                placeholder="Passport number"
              />
            </div>
            <div className="space-y-2 md:col-span-2 lg:col-span-1">
              <label className="block text-cyan-300 font-rajdhani font-medium" htmlFor="profileImage">
                Profile Picture
              </label>
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={handleImageChange}
                onFocus={() => handleFocus('profileImage')}
                onBlur={handleBlur}
                className={`input-futuristic-3d w-full focus-ring ${focusedField === 'profileImage' ? 'success-bounce' : ''}`}
              />
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="card-futuristic-3d animate-fade-in-up-3d" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center mb-6">
            <FaEnvelope className="text-2xl text-purple-400 mr-3 animate-pulse-neon-3d" />
            <h2 className="text-2xl font-orbitron font-bold gradient-text-3d">Contact Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-purple-300 font-rajdhani font-medium" htmlFor="email">
                <FaEnvelope className="inline mr-2" />Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                required
                className={`input-futuristic-3d w-full focus-ring ${focusedField === 'email' ? 'success-bounce' : ''}`}
                placeholder="your.email@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-purple-300 font-rajdhani font-medium" htmlFor="phone">
                <FaPhone className="inline mr-2" />Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={handleBlur}
                required
                className={`input-futuristic-3d w-full focus-ring ${focusedField === 'phone' ? 'success-bounce' : ''}`}
                placeholder="+92 300 1234567"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="block text-purple-300 font-rajdhani font-medium" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                onFocus={() => handleFocus('address')}
                onBlur={handleBlur}
                required
                className={`input-futuristic-3d w-full focus-ring ${focusedField === 'address' ? 'success-bounce' : ''}`}
                placeholder="Your complete address"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="block text-purple-300 font-rajdhani font-medium" htmlFor="linkedin">
                LinkedIn Profile
              </label>
              <input
                type="text"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                onFocus={() => handleFocus('linkedin')}
                onBlur={handleBlur}
                required
                className={`input-futuristic-3d w-full focus-ring ${focusedField === 'linkedin' ? 'success-bounce' : ''}`}
                placeholder="LinkedIn profile URL or username"
              />
            </div>
          </div>
        </div>

        {/* Personal Detail Section */}
        <div className="card-futuristic-3d animate-fade-in-up-3d" style={{animationDelay: '0.4s'}}>
          <div className="flex items-center mb-6">
            <FaRocket className="text-2xl text-pink-400 mr-3 animate-pulse-neon-3d" />
            <h2 className="text-2xl font-orbitron font-bold gradient-text-3d">Personal Statement</h2>
          </div>
          <div className="space-y-2">
            <label className="block text-pink-300 font-rajdhani font-medium" htmlFor="personalDetail">
              Professional Summary
            </label>
            <textarea
              id="personalDetail"
              name="personalDetail"
              value={formData.personalDetail}
              onChange={handleChange}
              onFocus={() => handleFocus('personalDetail')}
              onBlur={handleBlur}
              required
              rows={4}
              className={`input-futuristic-3d w-full resize-none focus-ring ${focusedField === 'personalDetail' ? 'success-bounce' : ''}`}
              placeholder="Write a compelling professional summary about yourself..."
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="card-futuristic-3d animate-fade-in-up-3d" style={{animationDelay: '0.6s'}}>
          <div className="flex items-center mb-6">
            <FaTools className="text-2xl text-cyan-400 mr-3 animate-pulse-neon-3d" />
            <h2 className="text-2xl font-orbitron font-bold gradient-text-3d">Technical Skills</h2>
          </div>
          <div className="space-y-2">
            <label className="block text-cyan-300 font-rajdhani font-medium" htmlFor="skills">
              Skills (comma-separated)
            </label>
            <input
              type="text"
              id="skills"
              placeholder="JavaScript, React, Node.js, Python, AWS..."
              onChange={(e) => handleArrayInput(e, 'skills')}
              onFocus={() => handleFocus('skills')}
              onBlur={handleBlur}
              required
              className={`input-futuristic-3d w-full focus-ring ${focusedField === 'skills' ? 'success-bounce' : ''}`}
            />
          </div>
        </div>

        {/* Education Section */}
        <div className="card-futuristic-3d animate-fade-in-up-3d" style={{animationDelay: '0.8s'}}>
          <div className="flex items-center mb-6">
            <FaGraduationCap className="text-2xl text-purple-400 mr-3 animate-pulse-neon-3d" />
            <h2 className="text-2xl font-orbitron font-bold gradient-text-3d">Education</h2>
          </div>
          <div className="space-y-2">
            <label className="block text-purple-300 font-rajdhani font-medium" htmlFor="education">
              Education Details (Degree, Institution, Year - comma-separated)
            </label>
            <input
              type="text"
              id="education"
              placeholder="Bachelor's in Computer Science, University of Karachi, 2020-2024..."
              onChange={(e) => handleArrayInput(e, 'education')}
              onFocus={() => handleFocus('education')}
              onBlur={handleBlur}
              required
              className={`input-futuristic-3d w-full focus-ring ${focusedField === 'education' ? 'success-bounce' : ''}`}
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className="card-futuristic-3d animate-fade-in-up-3d" style={{animationDelay: '1s'}}>
          <div className="flex items-center mb-6">
            <FaBriefcase className="text-2xl text-pink-400 mr-3 animate-pulse-neon-3d" />
            <h2 className="text-2xl font-orbitron font-bold gradient-text-3d">Work Experience</h2>
          </div>
          <div className="space-y-2">
            <label className="block text-pink-300 font-rajdhani font-medium" htmlFor="experience">
              Experience Details (Position, Company, Duration - comma-separated)
            </label>
            <input
              type="text"
              id="experience"
              placeholder="Frontend Developer, Tech Company, 2022-2024..."
              onChange={(e) => handleArrayInput(e, 'experience')}
              onFocus={() => handleFocus('experience')}
              onBlur={handleBlur}
              required
              className={`input-futuristic-3d w-full focus-ring ${focusedField === 'experience' ? 'success-bounce' : ''}`}
            />
          </div>
        </div>

        {/* Certification Section */}
        <div className="card-futuristic-3d animate-fade-in-up-3d" style={{animationDelay: '1.2s'}}>
          <div className="flex items-center mb-6">
            <FaCertificate className="text-2xl text-cyan-400 mr-3 animate-pulse-neon-3d" />
            <h2 className="text-2xl font-orbitron font-bold gradient-text-3d">Certifications</h2>
          </div>
          <div className="space-y-2">
            <label className="block text-cyan-300 font-rajdhani font-medium" htmlFor="certificate">
              Certification Details (Course, Institution, Year - comma-separated)
            </label>
            <input
              type="text"
              id="certificate"
              placeholder="AWS Certified Developer, Amazon, 2023..."
              onChange={(e) => handleArrayInput(e, 'certificate')}
              onFocus={() => handleFocus('certificate')}
              onBlur={handleBlur}
              required
              className={`input-futuristic-3d w-full focus-ring ${focusedField === 'certificate' ? 'success-bounce' : ''}`}
            />
          </div>
        </div>

        {/* Enhanced Submit Button */}
        <div className="text-center animate-fade-in-up-3d" style={{animationDelay: '1.4s'}}>
          <button
            type="submit"
            className="btn-futuristic-3d text-lg px-12 py-4 animate-glow-3d"
          >
            <FaRocket className="inline mr-3" />
            Generate Futuristic Resume
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSection;