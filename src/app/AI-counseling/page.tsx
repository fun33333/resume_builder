import { Bot, Lightbulb } from "lucide-react";

export default function renderCounselingSection(){
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-orbitron font-bold mb-6 gradient-text-3d">AI Career Counseling</h1>
        <p className="text-xl text-gray-300 font-rajdhani">Get personalized guidance from our advanced AI counselor</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card-futuristic-3d">
          <h2 className="text-2xl font-orbitron font-bold mb-6 gradient-text-3d">Start Your Session</h2>
          <div className="space-y-4">
            <div className="input-futuristic-3d">
              <label className="block text-cyan-300 font-rajdhani mb-2">What's your current situation?</label>
              <textarea 
                className="w-full bg-transparent border-none outline-none resize-none"
                rows={4}
                placeholder="Tell me about your background, goals, and challenges..."
              />
            </div>
            <button className="btn-futuristic-3d w-full">
              <Bot className="inline mr-2" />
              Get AI Guidance
            </button>
          </div>
        </div>
        
        <div className="card-futuristic-3d">
          <h2 className="text-2xl font-orbitron font-bold mb-6 gradient-text-3d">Counseling Features</h2>
          <div className="space-y-4">
            {[
              'Career Path Analysis',
              'Skill Gap Assessment',
              'Goal Setting & Planning',
              'Industry Insights',
              'Salary Negotiation Tips',
              'Work-Life Balance Advice'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 glass rounded-lg">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                <span className="font-rajdhani">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
};
