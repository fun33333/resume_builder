import { Bot, Lightbulb, Target } from "lucide-react";

export default function Roadmaps(){
  <div className="max-w-6xl mx-auto px-6 py-12">
  <div className="text-center mb-12">
    <h1 className="text-5xl font-orbitron font-bold mb-6 gradient-text-3d">Custom Learning Roadmaps</h1>
    <p className="text-xl text-gray-300 font-rajdhani">Build personalized learning paths for your career goals</p>
  </div>
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="card-futuristic-3d">
      <h2 className="text-2xl font-orbitron font-bold mb-6 gradient-text-3d">Popular Paths</h2>
      <div className="space-y-4">
        {[
          'Frontend Developer',
          'Data Scientist',
          'UX/UI Designer',
          'DevOps Engineer',
          'Product Manager',
          'Digital Marketer'
        ].map((path, index) => (
          <div key={index} className="p-4 glass rounded-lg cursor-pointer hover:bg-green-500/10 transition-colors">
            <h3 className="font-rajdhani font-semibold">{path}</h3>
            <p className="text-sm text-gray-400">6-12 months • Beginner friendly</p>
          </div>
        ))}
      </div>
    </div>
    
    <div className="card-futuristic-3d">
      <h2 className="text-2xl font-orbitron font-bold mb-6 gradient-text-3d">Roadmap Features</h2>
      <div className="space-y-4">
        {[
          'Personalized Learning Paths',
          'Skill Progress Tracking',
          'Milestone Achievement',
          'Resource Recommendations',
          'Time Estimation',
          'Difficulty Adjustment'
        ].map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-blue-400" />
                <span className="font-rajdhani">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
</div>
};
