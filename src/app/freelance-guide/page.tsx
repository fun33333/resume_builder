import { Award, ExternalLink, Linkedin } from "lucide-react";

export default function FreelanceSetupGuide(){
  <div className="max-w-6xl mx-auto px-6 py-12">
  <div className="text-center mb-12">
    <h1 className="text-5xl font-orbitron font-bold mb-6 gradient-text-3d">Freelance Setup Guide</h1>
    <p className="text-xl text-gray-300 font-rajdhani">Master the art of freelancing and professional networking</p>
  </div>
  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="card-futuristic-3d">
      <h2 className="text-2xl font-orbitron font-bold mb-6 gradient-text-3d">Platform Setup</h2>
      <div className="space-y-4">
        {[
          { platform: 'Upwork', icon: ExternalLink },
          { platform: 'Fiverr', icon: ExternalLink },
          { platform: 'LinkedIn', icon: Linkedin },
          { platform: 'Freelancer', icon: ExternalLink }
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="p-4 glass rounded-lg cursor-pointer hover:bg-orange-500/10 transition-colors">
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5" />
                <span className="font-rajdhani font-semibold">{item.platform}</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Complete profile setup guide</p>
            </div>
          );
        })}
      </div>
    </div>
    
    <div className="card-futuristic-3d">
      <h2 className="text-2xl font-orbitron font-bold mb-6 gradient-text-3d">Essential Skills</h2>
      <div className="space-y-4">
        {[
          'Client Communication',
          'Project Management',
          'Time Tracking',
          'Invoicing & Payments',
          'Portfolio Building',
          'Rate Negotiation'
        ].map((skill, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="font-rajdhani">{skill}</span>
          </div>
        ))}
      </div>
    </div>
    
    <div className="card-futuristic-3d">
      <h2 className="text-2xl font-orbitron font-bold mb-6 gradient-text-3d">Success Metrics</h2>
      <div className="space-y-4">
        {[
          { metric: 'Response Rate', value: '95%' },
          { metric: 'Client Satisfaction', value: '4.8/5' },
          { metric: 'Average Rate', value: '$50/hr' },
          { metric: 'Project Success', value: '98%' }
        ].map((item, index) => (
          <div key={index} className="p-4 glass rounded-lg">
            <div className="text-2xl font-orbitron font-bold gradient-text-3d">{item.value}</div>
            <div className="text-sm text-gray-400 font-rajdhani">{item.metric}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
};
