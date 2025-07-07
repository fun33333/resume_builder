import { Bot, Lightbulb } from "lucide-react";

export default function NetworkBuilder(){
  <div className="max-w-6xl mx-auto px-6 py-12">
  <div className="text-center mb-12">
    <h1 className="text-5xl font-orbitron font-bold mb-6 gradient-text-3d">Network Builder</h1>
    <p className="text-xl text-gray-300 font-rajdhani">Connect with industry professionals and build meaningful relationships</p>
  </div>
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="card-futuristic-3d">
      <h2 className="text-2xl font-orbitron font-bold mb-6 gradient-text-3d">Mentor Matching</h2>
      <div className="space-y-4">
        {[
          { name: 'Sarah Chen', role: 'Senior AI Engineer', company: 'Google', availability: 'Available' },
          { name: 'Mike Johnson', role: 'Product Director', company: 'Microsoft', availability: 'Limited' },
          { name: 'Lisa Wang', role: 'UX Lead', company: 'Apple', availability: 'Available' },
          { name: 'David Kim', role: 'Startup Founder', company: 'TechCorp', availability: 'Available' }
        ].map((mentor, index) => (
          <div key={index} className="p-4 glass rounded-lg cursor-pointer hover:bg-indigo-500/10 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-rajdhani font-semibold">{mentor.name}</h3>
                <p className="text-sm text-gray-400">{mentor.role} at {mentor.company}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${
                mentor.availability === 'Available' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {mentor.availability}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="card-futuristic-3d">
      <h2 className="text-2xl font-orbitron font-bold mb-6 gradient-text-3d">Networking Events</h2>
      <div className="space-y-4">
        {[
          { event: 'Tech Meetup', date: 'Next Week', attendees: '150+', type: 'In-Person' },
          { event: 'AI Conference', date: 'This Month', attendees: '500+', type: 'Virtual' },
          { event: 'Startup Pitch', date: 'Next Month', attendees: '200+', type: 'Hybrid' },
          { event: 'Career Fair', date: 'This Week', attendees: '1000+', type: 'In-Person' }
        ].map((event, index) => (
          <div key={index} className="p-4 glass rounded-lg cursor-pointer hover:bg-purple-500/10 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-rajdhani font-semibold">{event.event}</h3>
                <p className="text-sm text-gray-400">{event.attendees} attendees</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-cyan-400">{event.date}</div>
                <div className="text-xs text-gray-400">{event.type}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
};
