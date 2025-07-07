import Modern from '@/components/templates/Modern';
import Santiago from '@/components/templates/Santiago';
import Lean from '@/components/templates/Lean';
import QuantumEdge from '@/components/templates/QuantumEdge';

 const templates = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean and professional design with a modern touch',
    component: Modern,
    colors: {
      primary: '#2563eb',
      secondary: '#4f46e5',
      accent: '#06b6d4'
    },
    features: [
      'Clean layout',
      'Professional typography',
      'Skill bars',
      'Color customization'
    ]
  },
  {
    id: 'santiago',
    name: 'Santiago',
    description: 'Creative design with a bold personality',
    component: Santiago,
    colors: {
      primary: '#8b5cf6',
      secondary: '#6366f1',
      accent: '#ec4899'
    },
    features: [
      'Creative layout',
      'Bold typography',
      'Icon integration',
      'Color themes'
    ]
  },
  {
    id: 'lean',
    name: 'Lean',
    description: 'Minimalist design focusing on content',
    component: Lean,
    colors: {
      primary: '#10b981',
      secondary: '#059669',
      accent: '#0ea5e9'
    },
    features: [
      'Minimalist design',
      'Content focused',
      'Easy to read',
      'Space efficient'
    ]
  },
  {
    id: 'quantum-edge',
    name: 'Quantum Edge',
    description: 'Modern and dynamic design with a tech feel',
    component: QuantumEdge,
    colors: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      accent: '#06b6d4'
    },
    features: [
      'Dynamic layout',
      'Tech-focused design',
      'Modern typography',
      'Visual hierarchy'
    ]
  }
];

export { templates };