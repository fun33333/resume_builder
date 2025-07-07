import { Brain } from 'lucide-react';

interface FooterProps {
  theme?: string;
}

export default function Footer({ theme }: FooterProps) {
  return (
    <footer className="px-6 py-12 border-t border-white/10 bg-black/20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5" />
          </div>
          <span className="text-xl font-orbitron font-bold">CareerAI</span>
        </div>
        <p className="text-gray-400 font-exo">
          Empowering careers through artificial intelligence
        </p>
      </div>
    </footer>
  );
} 