import { Bot, Lightbulb, TrendingUp } from "lucide-react";

export default function TechrenAnalysis(){
  <div className="max-w-6xl mx-auto px-6 py-12">
  <div className="text-center mb-12">
    <h1 className="text-5xl font-orbitron font-bold mb-6 gradient-text-3d">Tech Trend Analysis</h1>
    <p className="text-xl text-gray-300 font-rajdhani">Stay ahead with emerging technology insights and market analysis</p>
  </div>
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="card-futuristic-3d">
      <h2 className="text-2xl font-orbitron font-bold mb-6 gradient-text-3d">Trending Technologies</h2>
      <div className="space-y-4">
        {[
          { tech: 'AI/ML', trend: 'Rising', demand: 'High' },
          { tech: 'Blockchain', trend: 'Stable', demand: 'Medium' },
          { tech: 'Cloud Computing', trend: 'Rising', demand: 'Very High' },
          { tech: 'Cybersecurity', trend: 'Rising', demand: 'High' },
          { tech: 'IoT', trend: 'Growing', demand: 'Medium' },
          { tech: 'AR/VR', trend: 'Emerging', demand: 'Medium' }
        ].map((item, index) => (
          <div key={index} className="p-4 glass rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-rajdhani font-semibold">{item.tech}</span>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-400">{item.trend}</span>
              </div>
            </div>
            <div className="text-sm text-gray-400 mt-1">Demand: {item.demand}</div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="card-futuristic-3d">
      <h2 className="text-2xl font-orbitron font-bold mb-6 gradient-text-3d">Salary Insights</h2>
      <div className="space-y-4">
        {[
          { role: 'AI Engineer', salary: '$120K-180K', growth: '+25%' },
          { role: 'Data Scientist', salary: '$100K-150K', growth: '+20%' },
          { role: 'DevOps Engineer', salary: '$90K-140K', growth: '+18%' },
          { role: 'Full Stack Dev', salary: '$80K-130K', growth: '+15%' },
          { role: 'UX Designer', salary: '$70K-120K', growth: '+12%' },
          { role: 'Product Manager', salary: '$100K-160K', growth: '+22%' }
        ].map((item, index) => (
          <div key={index} className="p-4 glass rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-rajdhani font-semibold">{item.role}</span>
              <div className="text-right">
                <div className="font-orbitron font-bold gradient-text-3d">{item.salary}</div>
                <div className="text-sm text-green-400">{item.growth} YoY</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
};
