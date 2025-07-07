export const sampleResumeData = {
  personalInfo: {
    name: 'John Doe',
    title: 'Senior Software Engineer',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    website: 'johndoe.dev',
    summary: 'Experienced software engineer with a passion for building scalable web applications and mentoring junior developers.'
  },
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'New York, NY',
      startDate: '2020-01',
      endDate: '',
      current: true,
      description: 'Lead developer for the company\'s main product, managing a team of 5 engineers and implementing new features.'
    },
    {
      title: 'Software Engineer',
      company: 'StartUp Inc',
      location: 'San Francisco, CA',
      startDate: '2017-06',
      endDate: '2019-12',
      current: false,
      description: 'Developed and maintained multiple client-facing applications using React and Node.js.'
    }
  ],
  education: [
    {
      school: 'University of Technology',
      degree: 'Master of Science in Computer Science',
      location: 'Boston, MA',
      startDate: '2015-09',
      endDate: '2017-05',
      description: 'Focus on Distributed Systems and Cloud Computing'
    },
    {
      school: 'State University',
      degree: 'Bachelor of Science in Computer Science',
      location: 'Los Angeles, CA',
      startDate: '2011-09',
      endDate: '2015-05',
      description: 'Minor in Mathematics'
    }
  ],
  skills: [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL']
    },
    {
      category: 'Frameworks & Libraries',
      items: ['React', 'Node.js', 'Express', 'Next.js', 'Django']
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'Docker', 'AWS', 'Linux', 'MongoDB']
    }
  ],
  certifications: [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      issueDate: '2022-03',
      expiryDate: '2025-03',
      credentialId: 'AWS-123456',
      credentialUrl: 'https://aws.amazon.com/verification'
    },
    {
      name: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      issueDate: '2021-06',
      credentialId: 'PSM-123456',
      credentialUrl: 'https://www.scrum.org/certificates'
    }
  ]
}; 